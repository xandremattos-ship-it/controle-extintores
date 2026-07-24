const CACHE_VERSION = 'gestao-extintores-v3.2.13.4-offline-restaurado';

const CRITICAL_ASSETS = [
  './index.html',
  './css/app.css',
  './css/offline.css',
  './js/offline.js',
  './js/app.js'
];

const OPTIONAL_ASSETS = [
  './',
  './manifest.json',
  './offline.html',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './favicon-32x32.png',
  './favicon-16x16.png',
  './favicon.ico',
  './share-preview-v3.2.12.4.jpg',
  './reparar-cache.html'
];

function canonicalRequest(request){
  const url = new URL(request.url);
  url.search = '';

  return new Request(url.toString(),{
    method:'GET',
    headers:request.headers,
    mode:request.mode==='navigate' ? 'same-origin' : request.mode,
    credentials:request.credentials,
    redirect:request.redirect,
    referrer:request.referrer,
    referrerPolicy:request.referrerPolicy,
    integrity:request.integrity,
    cache:'no-store'
  });
}

async function putInCurrentCache(request,response){
  if(
    response &&
    response.ok &&
    response.type!=='opaque'
  ){
    const cache = await caches.open(CACHE_VERSION);
    await cache.put(request,response.clone());

    const url = new URL(request.url);
    if(url.search){
      const cleanRequest = canonicalRequest(request);
      await cache.put(cleanRequest,response.clone());
    }
  }

  return response;
}

async function cachedAsset(request){
  return (
    await caches.match(request,{ignoreSearch:false})
  ) || (
    await caches.match(request,{ignoreSearch:true})
  );
}

function safeJavascriptFallback(request){
  const pathname = new URL(request.url).pathname;

  if(pathname.endsWith('/js/offline.js')){
    return new Response(
      [
        "console.warn('Módulo offline indisponível; modo online mantido.');",
        "window.OFFLINE_MODULE_READY=false;",
        "window.openOfflineDatabase=async()=>null;",
        "window.scopedOfflineKey=key=>String(key||'');",
        "window.cacheOfflineValue=async()=>false;",
        "window.readOfflineValue=async()=>null;",
        "window.scheduleOfflineSnapshotCache=()=>{};",
        "window.discardQueuedUpsert=async()=>false;",
        "window.reconcilePendingOperationsIntoState=async()=>false;",
        "window.enqueueOfflineOperation=async()=>false;",
        "window.getOfflineQueue=async()=>[];",
        "window.pendingOfflineCount=async()=>0;",
        "window.updateConnectionUi=()=>{};",
        "window.cacheCurrentOfflineSession=async()=>false;",
        "window.restoreOfflineSession=async()=>false;",
        "window.openSyncCenter=()=>{};",
        "window.processOfflineQueue=async()=>false;",
        "window.bindOfflineEvents=()=>{};"
      ].join('\n'),
      {
        status:200,
        headers:{
          'Content-Type':'application/javascript; charset=utf-8',
          'X-Gestao-Extintores-Fallback':'offline-module'
        }
      }
    );
  }

  return new Response(
    "location.href='./reparar-cache.html';",
    {
      status:200,
      headers:{
        'Content-Type':'application/javascript; charset=utf-8',
        'X-Gestao-Extintores-Fallback':'app-repair'
      }
    }
  );
}

function safeStyleFallback(){
  return new Response(
    '/* Estilo temporariamente indisponível. */',
    {
      status:200,
      headers:{
        'Content-Type':'text/css; charset=utf-8',
        'X-Gestao-Extintores-Fallback':'style'
      }
    }
  );
}

self.addEventListener('install',event=>{
  event.waitUntil(
    (async()=>{
      const cache = await caches.open(CACHE_VERSION);

      // A nova versão só assume o controle depois de armazenar os
      // arquivos indispensáveis, inclusive js/offline.js.
      await cache.addAll(CRITICAL_ASSETS);

      await Promise.allSettled(
        OPTIONAL_ASSETS.map(asset=>cache.add(asset))
      );

      await self.skipWaiting();
    })()
  );
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    (async()=>{
      const cache = await caches.open(CACHE_VERSION);

      const criticalChecks = await Promise.all(
        CRITICAL_ASSETS.map(asset=>
          cache.match(asset,{ignoreSearch:true})
        )
      );

      // Preserva caches anteriores se algum arquivo crítico não existir.
      if(criticalChecks.every(Boolean)){
        const keys = await caches.keys();

        await Promise.all(
          keys
            .filter(key=>key!==CACHE_VERSION)
            .map(key=>caches.delete(key))
        );
      }

      await self.clients.claim();
    })()
  );
});

self.addEventListener('message',event=>{
  if(event.data?.type==='SKIP_WAITING'){
    self.skipWaiting();
  }
});

self.addEventListener('fetch',event=>{
  const request = event.request;
  const url = new URL(request.url);

  if(request.method!=='GET') return;
  if(!['http:','https:'].includes(url.protocol)) return;
  if(url.origin!==self.location.origin) return;

  if(request.mode==='navigate'){
    event.respondWith(
      (async()=>{
        try{
          const response = await fetch(request);
          if(response && response.ok){
            return putInCurrentCache('./index.html',response);
          }
        }catch(error){}

        return (
          await caches.match('./index.html',{ignoreSearch:true})
        ) || (
          await caches.match('./offline.html',{ignoreSearch:true})
        ) || new Response(
          '<!doctype html><meta charset="utf-8"><title>Offline</title><p>Sem conexão. Tente novamente.</p>',
          {
            status:200,
            headers:{'Content-Type':'text/html; charset=utf-8'}
          }
        );
      })()
    );

    return;
  }

  const isScript =
    request.destination==='script' ||
    url.pathname.endsWith('.js');

  const isStyle =
    request.destination==='style' ||
    url.pathname.endsWith('.css');

  if(isScript || isStyle){
    event.respondWith(
      (async()=>{
        // 1. Tenta o endereço solicitado com o parâmetro de versão.
        try{
          const response = await fetch(request);

          if(response && response.ok){
            return putInCurrentCache(request,response);
          }
        }catch(error){}

        // 2. Tenta o mesmo arquivo sem parâmetros.
        const cleanRequest = canonicalRequest(request);

        try{
          const response = await fetch(cleanRequest);

          if(response && response.ok){
            return putInCurrentCache(request,response);
          }
        }catch(error){}

        // 3. Recupera qualquer versão armazenada.
        const cached = await cachedAsset(request);
        if(cached) return cached;

        // 4. Nunca devolve 503 ou valor vazio para o navegador.
        return isScript
          ? safeJavascriptFallback(request)
          : safeStyleFallback();
      })()
    );

    return;
  }

  event.respondWith(
    (async()=>{
      const cached = await cachedAsset(request);
      if(cached) return cached;

      try{
        const response = await fetch(request);
        if(response){
          return putInCurrentCache(request,response);
        }
      }catch(error){}

      return new Response(
        'Recurso indisponível.',
        {
          status:200,
          headers:{'Content-Type':'text/plain; charset=utf-8'}
        }
      );
    })()
  );
});

self.addEventListener('sync',event=>{
  if(event.tag!=='gestao-extintores-sync') return;

  event.waitUntil(
    self.clients
      .matchAll({type:'window',includeUncontrolled:true})
      .then(clients=>{
        clients.forEach(client=>{
          client.postMessage({type:'PROCESS_OFFLINE_QUEUE'});
        });
      })
  );
});
