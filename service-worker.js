const CACHE_VERSION = 'gestao-extintores-v3.2.13.5-restauracao-emergencial';

self.addEventListener('install',event=>{
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    (async()=>{
      const keys = await caches.keys();

      await Promise.all(
        keys.map(key=>caches.delete(key))
      );

      await self.clients.claim();
    })()
  );
});

self.addEventListener('message',event=>{
  if(event.data?.type==='SKIP_WAITING'){
    self.skipWaiting();
  }
});

self.addEventListener('sync',event=>{
  if(event.tag!=='gestao-extintores-sync') return;

  event.waitUntil(
    self.clients
      .matchAll({
        type:'window',
        includeUncontrolled:true
      })
      .then(clients=>{
        clients.forEach(client=>{
          client.postMessage({
            type:'PROCESS_OFFLINE_QUEUE'
          });
        });
      })
  );
});
