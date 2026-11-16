/* ============================================================
   v4.1.5.3 — Carregamento seguro das imagens do Firebase Storage
============================================================ */
(()=>{
  'use strict';

  const STORAGE_HOSTS = new Set([
    'firebasestorage.googleapis.com',
    'storage.googleapis.com'
  ]);

  const objectUrlByPath = new Map();
  const pendingByPath = new Map();
  const failedPaths = new Set();

  function isStorageUrl(value){
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
      return STORAGE_HOSTS.has(url.hostname);
    }catch(error){
      return false;
    }
  }

  function storagePathFromUrl(value){
    try{
      const url = new URL(value,location.href);
      const marker = '/o/';
      const index = url.pathname.indexOf(marker);

      if(index<0) return '';

      return decodeURIComponent(
        url.pathname.slice(index+marker.length)
      );
    }catch(error){
      return '';
    }
  }

  async function firebaseModules(){
    const [appModule,storageModule] = await Promise.all([
      import('https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js'),
      import('https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js')
    ]);

    let app = appModule.getApps()[0] || null;

    if(!app){
      const started = Date.now();

      while(!app && Date.now()-started<5000){
        await new Promise(resolve=>setTimeout(resolve,80));
        app = appModule.getApps()[0] || null;
      }
    }

    if(!app){
      throw new Error('FIREBASE_APP_NOT_READY');
    }

    return {
      storage:storageModule.getStorage(app),
      ref:storageModule.ref,
      getBlob:storageModule.getBlob
    };
  }

  async function objectUrlForPath(path){
    if(objectUrlByPath.has(path)){
      return objectUrlByPath.get(path);
    }

    if(pendingByPath.has(path)){
      return pendingByPath.get(path);
    }

    const task = (async()=>{
      const {storage,ref,getBlob} = await firebaseModules();

      const blob = await getBlob(
        ref(storage,path),
        8*1024*1024
      );

      if(
        !blob ||
        !String(blob.type || '').startsWith('image/')
      ){
        throw new Error('INVALID_STORAGE_IMAGE');
      }

      const objectUrl = URL.createObjectURL(blob);
      objectUrlByPath.set(path,objectUrl);
      return objectUrl;
    })()
      .finally(()=>pendingByPath.delete(path));

    pendingByPath.set(path,task);
    return task;
  }

  async function replaceStorageImage(image){
    if(
      !(image instanceof HTMLImageElement) ||
      image.dataset.storageLoaderState==='loading' ||
      image.dataset.storageLoaderState==='done'
    ){
      return;
    }

    const original =
      image.dataset.storageOriginalSrc ||
      image.getAttribute('src') ||
      '';

    if(!isStorageUrl(original)){
      return;
    }

    const path = storagePathFromUrl(original);

    if(!path || failedPaths.has(path)){
      return;
    }

    image.dataset.storageOriginalSrc = original;
    image.dataset.storageLoaderState = 'loading';

    image.removeAttribute('src');

    try{
      image.src = await objectUrlForPath(path);
      image.dataset.storageLoaderState = 'done';
    }catch(error){
      image.dataset.storageLoaderState = 'failed';
      failedPaths.add(path);

      console.warn(
        'Imagem do Storage não pôde ser carregada:',
        path,
        error?.code || error?.message || error
      );
    }
  }

  function inspectNode(node){
    if(!(node instanceof Element)){
      return;
    }

    if(node instanceof HTMLImageElement){
      replaceStorageImage(node);
    }

    node.querySelectorAll?.('img').forEach(replaceStorageImage);
  }

  const observer = new MutationObserver(records=>{
    records.forEach(record=>{
      record.addedNodes.forEach(inspectNode);
    });
  });

  function start(){
    observer.observe(
      document.documentElement,
      {childList:true,subtree:true}
    );

    document.querySelectorAll('img').forEach(replaceStorageImage);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',start,{once:true});
  }else{
    start();
  }

  window.addEventListener('beforeunload',()=>{
    observer.disconnect();

    for(const objectUrl of objectUrlByPath.values()){
      try{
        URL.revokeObjectURL(objectUrl);
      }catch(error){}
    }

    objectUrlByPath.clear();
    pendingByPath.clear();
    failedPaths.clear();
  });
})();