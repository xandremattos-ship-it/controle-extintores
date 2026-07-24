const CACHE_VERSION = 'gestao-extintores-v3.2.13.3-recuperacao-definitiva';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './offline.html',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './favicon-32x32.png',
  './favicon-16x16.png',
  './favicon.ico',
  './share-preview-v3.2.12.4.jpg',
  './css/app.css?v=3.2.13.3',
  './css/offline.css?v=3.2.13.3',
  './js/offline.js?v=3.2.13.3',
  './js/app.js?v=3.2.13.3'
];

function unavailableResponse(request){
  const url = new URL(request.url);
  const isScript =
    request.destination === 'script' ||
    url.pathname.endsWith('.js');

  const isStyle =
    request.destination === 'style' ||
    url.pathname.endsWith('.css');

  if(isScript){
    return new Response(
      'console.warn("Recurso temporariamente indisponível.");',
      {
        status:503,
        headers:{'Content-Type':'application/javascript; charset=utf-8'}
      }
    );
  }

  if(isStyle){
    return new Response(
      '/* Recurso temporariamente indisponível. */',
      {
        status:503,
        headers:{'Content-Type':'text/css; charset=utf-8'}
      }
    );
  }

  return new Response(
    'Recurso temporariamente indisponível.',
    {
      status:503,
      headers:{'Content-Type':'text/plain; charset=utf-8'}
    }
  );
}

async function cacheResponse(request,response){
  if(
    response &&
    response.ok &&
    response.type !== 'opaque'
  ){
    const cache = await caches.open(CACHE_VERSION);
    await cache.put(request,response.clone());
  }

  return response;
}

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache=>
        Promise.allSettled(
          APP_SHELL.map(url=>
            cache.add(url).catch(error=>{
              console.warn('Arquivo não armazenado no install:',url,error);
            })
          )
        )
      )
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>
        Promise.all(
          keys
            .filter(key=>key!==CACHE_VERSION)
            .map(key=>caches.delete(key))
        )
      )
      .then(()=>self.clients.claim())
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
      fetch(request)
        .then(response=>cacheResponse('./index.html',response))
        .catch(async()=>{
          return (
            await caches.match('./index.html',{ignoreSearch:true})
          ) || (
            await caches.match('./offline.html',{ignoreSearch:true})
          ) || new Response(
            '<!doctype html><meta charset="utf-8"><title>Offline</title><p>Sem conexão. Tente novamente.</p>',
            {
              status:503,
              headers:{'Content-Type':'text/html; charset=utf-8'}
            }
          );
        })
    );
    return;
  }

  const isCriticalAsset =
    request.destination==='script' ||
    request.destination==='style' ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css');

  if(isCriticalAsset){
    event.respondWith(
      fetch(request)
        .then(response=>{
          if(!response || !response.ok){
            throw new Error(`HTTP ${response?.status || 0}`);
          }
          return cacheResponse(request,response);
        })
        .catch(async()=>{
          return (
            await caches.match(request,{ignoreSearch:false})
          ) || (
            await caches.match(request,{ignoreSearch:true})
          ) || unavailableResponse(request);
        })
    );
    return;
  }

  event.respondWith(
    caches.match(request,{ignoreSearch:false})
      .then(async cached=>{
        if(cached) return cached;

        try{
          const response = await fetch(request);
          return cacheResponse(request,response);
        }catch(error){
          return (
            await caches.match(request,{ignoreSearch:true})
          ) || unavailableResponse(request);
        }
      })
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
