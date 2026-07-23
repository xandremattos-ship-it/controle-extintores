const CACHE_VERSION = 'gestao-extintores-v3.2.11.4-ordem-real-notificacoes';
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
  './css/app.css?v=3.2.11.4',
  './css/offline.css?v=3.2.11.4',
  './js/offline.js?v=3.2.11.4',
  './js/app.js?v=3.2.11.4'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_VERSION).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if(event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if(request.method !== 'GET') return;

  // Ignora extensões do navegador, data:, blob: e qualquer protocolo não HTTP(S).
  if(url.protocol !== 'http:' && url.protocol !== 'https:') return;

  // Recursos de CDNs e APIs externas seguem direto para a rede.
  // O cache do PWA fica limitado aos arquivos do próprio GitHub Pages.
  if(url.origin !== self.location.origin) return;

  if(
    url.hostname.includes('firebaseio.com') ||
    url.hostname.includes('googleapis.com') ||
    url.hostname.includes('gstatic.com') ||
    url.hostname.includes('firebaseapp.com')
  ) return;

  if(request.mode === 'navigate'){
    event.respondWith(
      fetch(request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put('./index.html', clone));
          return response;
        })
        .catch(async () =>
          (await caches.match('./index.html', {ignoreSearch:true})) ||
          (await caches.match('./offline.html'))
        )
    );
    return;
  }

  const isCriticalAsset =
    request.destination === 'script' ||
    request.destination === 'style' ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css');

  if(isCriticalAsset){
    event.respondWith(
      fetch(request)
        .then(response => {
          if(!response || !response.ok) throw new Error(`HTTP ${response?.status || 0}`);
          const clone = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(request, clone));
          return response;
        })
        .catch(() => caches.match(request, {ignoreSearch:false}))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      const network = fetch(request).then(response => {
        if(response && response.status === 200 && response.type !== 'opaque'){
          const clone = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(request, clone));
        }
        return response;
      }).catch(() => cached);
      return cached || network;
    })
  );
});


self.addEventListener('sync', event => {
  if(event.tag !== 'gestao-extintores-sync') return;

  event.waitUntil(
    self.clients.matchAll({type:'window',includeUncontrolled:true})
      .then(clients => {
        clients.forEach(client => {
          client.postMessage({type:'PROCESS_OFFLINE_QUEUE'});
        });
      })
  );
});
