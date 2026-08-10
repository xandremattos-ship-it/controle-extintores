const CACHE_VERSION = 'gestao-incendio-v4.1.2-fotos-novas-hidrantes-storage';

self.addEventListener('install',event=>{
  /*
    Em atualizações, mantém o novo worker em espera até o usuário
    escolher "Atualizar agora". Na primeira instalação, a ativação
    continua ocorrendo normalmente.
  */
  event.waitUntil(Promise.resolve());
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
