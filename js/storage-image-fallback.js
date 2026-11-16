/* ============================================================
   v4.1.5.1 — Compatibilidade de imagens Firebase Storage
   ------------------------------------------------------------
   Alguns navegadores, especialmente Microsoft Edge com Tracking
   Prevention, podem bloquear a exibição direta de URLs do
   firebasestorage.googleapis.com em <img>.

   Quando uma imagem do Firebase falha:
   1. tenta obter o arquivo pelo Firebase Storage SDK usando o
      caminho do objeto;
   2. cria uma URL blob local;
   3. substitui somente o src da imagem na tela.

   Firestore e Storage NÃO são alterados.
============================================================ */

(()=>{
  'use strict';

  const FIREBASE_IMAGE_HOSTS = new Set([
    'firebasestorage.googleapis.com',
    'storage.googleapis.com'
  ]);

  const objectUrlCache = new Map();
  const pendingLoads = new Map();

  function isFirebaseStorageImageUrl(value){
    if(
      !value ||
      typeof value!=='string' ||
      value.startsWith('blob:') ||
      value.startsWith('data:')
    ){
      return false;
    }

    try{
      const url = new URL(value,location.href);

      return (
        url.protocol==='https:' &&
        FIREBASE_IMAGE_HOSTS.has(
          url.hostname
        )
      );
    }catch(error){
      return false;
    }
  }

  function firebaseObjectPathFromUrl(value){
    try{
      const url = new URL(value);
      const marker = '/o/';
      const markerIndex =
        url.pathname.indexOf(marker);

      if(markerIndex<0){
        return '';
      }

      const encoded =
        url.pathname.slice(
          markerIndex+
          marker.length
        );

      return decodeURIComponent(
        encoded
      );
    }catch(error){
      return '';
    }
  }

  async function getFirebaseStorageModule(){
    const [
      appModule,
      storageModule
    ] = await Promise.all([
      import(
        'https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js'
      ),
      import(
        'https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js'
      )
    ]);

    const apps =
      appModule.getApps();

    if(!apps.length){
      throw new Error(
        'FIREBASE_APP_NOT_READY'
      );
    }

    return {
      storage:
        storageModule.getStorage(
          apps[0]
        ),
      ref:
        storageModule.ref,
      getBlob:
        storageModule.getBlob
    };
  }

  async function firebaseBlobFromSdk(
    originalUrl
  ){
    const path =
      firebaseObjectPathFromUrl(
        originalUrl
      );

    if(!path){
      throw new Error(
        'STORAGE_PATH_NOT_FOUND'
      );
    }

    const {
      storage,
      ref,
      getBlob
    } = await getFirebaseStorageModule();

    return getBlob(
      ref(
        storage,
        path
      ),
      8 * 1024 * 1024
    );
  }

  async function firebaseBlobFromUrl(
    originalUrl
  ){
    const response =
      await fetch(
        originalUrl,
        {
          mode:'cors',
          credentials:'omit',
          cache:'force-cache'
        }
      );

    if(!response.ok){
      throw new Error(
        `STORAGE_HTTP_${response.status}`
      );
    }

    return response.blob();
  }

  async function localObjectUrl(
    originalUrl
  ){
    if(
      objectUrlCache.has(
        originalUrl
      )
    ){
      return objectUrlCache.get(
        originalUrl
      );
    }

    if(
      pendingLoads.has(
        originalUrl
      )
    ){
      return pendingLoads.get(
        originalUrl
      );
    }

    const task = (async()=>{
      let blob = null;

      try{
        blob =
          await firebaseBlobFromSdk(
            originalUrl
          );
      }catch(sdkError){
        console.debug(
          'Fallback Firebase SDK não disponível; tentando URL direta.',
          sdkError?.message ||
          sdkError
        );

        blob =
          await firebaseBlobFromUrl(
            originalUrl
          );
      }

      if(
        !blob ||
        !String(blob.type || '')
          .startsWith('image/')
      ){
        throw new Error(
          'STORAGE_IMAGE_INVALID'
        );
      }

      const objectUrl =
        URL.createObjectURL(
          blob
        );

      objectUrlCache.set(
        originalUrl,
        objectUrl
      );

      return objectUrl;
    })()
      .finally(()=>{
        pendingLoads.delete(
          originalUrl
        );
      });

    pendingLoads.set(
      originalUrl,
      task
    );

    return task;
  }

  async function recoverFirebaseImage(
    image
  ){
    if(
      !(image instanceof HTMLImageElement) ||
      image.dataset.firebaseImageRecovering==='1' ||
      image.dataset.firebaseImageRecovered==='1'
    ){
      return;
    }

    const originalUrl =
      image.dataset.firebaseOriginalSrc ||
      image.currentSrc ||
      image.src;

    if(
      !isFirebaseStorageImageUrl(
        originalUrl
      )
    ){
      return;
    }

    image.dataset.firebaseOriginalSrc =
      originalUrl;

    image.dataset.firebaseImageRecovering =
      '1';

    try{
      const objectUrl =
        await localObjectUrl(
          originalUrl
        );

      image.src =
        objectUrl;

      image.dataset.firebaseImageRecovered =
        '1';
    }catch(error){
      console.warn(
        'Não foi possível recuperar imagem do Firebase Storage.',
        firebaseObjectPathFromUrl(
          originalUrl
        ) || originalUrl,
        error?.message || error
      );
    }finally{
      delete image.dataset
        .firebaseImageRecovering;
    }
  }

  /*
    O evento error de imagens não borbulha, por isso usamos captura.
    Funciona também para imagens criadas depois pelo app.js.
  */
  document.addEventListener(
    'error',
    event=>{
      if(
        event.target instanceof
          HTMLImageElement
      ){
        recoverFirebaseImage(
          event.target
        );
      }
    },
    true
  );

  /*
    Segurança extra para imagens que possam ter falhado antes do
    listener ou que sejam restauradas pelo navegador.
  */
  document.addEventListener(
    'DOMContentLoaded',
    ()=>{
      document
        .querySelectorAll('img')
        .forEach(image=>{
          if(
            image.complete &&
            image.naturalWidth===0
          ){
            recoverFirebaseImage(
              image
            );
          }
        });
    }
  );

  window.addEventListener(
    'beforeunload',
    ()=>{
      for(
        const objectUrl of
        objectUrlCache.values()
      ){
        try{
          URL.revokeObjectURL(
            objectUrl
          );
        }catch(error){}
      }

      objectUrlCache.clear();
      pendingLoads.clear();
    }
  );
})();
