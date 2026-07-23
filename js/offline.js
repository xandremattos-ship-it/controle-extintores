/* ============================================================
   GESTÃO DE EXTINTORES v3.0 — OFFLINE ENGINE
============================================================ */
const OFFLINE_DB_NAME = 'gestao-extintores-offline';
const OFFLINE_DB_VERSION = 1;
let OFFLINE_DB = null;
let OFFLINE_MODE = !navigator.onLine;
let SYNC_IN_PROGRESS = false;
let OFFLINE_EVENTS_BOUND = false;

function openOfflineDatabase(){
  if(OFFLINE_DB) return Promise.resolve(OFFLINE_DB);

  return new Promise((resolve,reject)=>{
    const request = indexedDB.open(OFFLINE_DB_NAME,OFFLINE_DB_VERSION);

    request.onupgradeneeded = ()=>{
      const db = request.result;
      if(!db.objectStoreNames.contains('kv')){
        db.createObjectStore('kv',{keyPath:'key'});
      }
      if(!db.objectStoreNames.contains('queue')){
        db.createObjectStore('queue',{keyPath:'id'});
      }
    };

    request.onsuccess = ()=>{
      OFFLINE_DB = request.result;
      resolve(OFFLINE_DB);
    };
    request.onerror = ()=>reject(request.error);
  });
}

async function idbPut(storeName,value){
  const db = await openOfflineDatabase();
  return new Promise((resolve,reject)=>{
    const tx = db.transaction(storeName,'readwrite');
    tx.objectStore(storeName).put(value);
    tx.oncomplete = ()=>resolve(value);
    tx.onerror = ()=>reject(tx.error);
  });
}

async function idbGet(storeName,key){
  const db = await openOfflineDatabase();
  return new Promise((resolve,reject)=>{
    const tx = db.transaction(storeName,'readonly');
    const request = tx.objectStore(storeName).get(key);
    request.onsuccess = ()=>resolve(request.result || null);
    request.onerror = ()=>reject(request.error);
  });
}

async function idbGetAll(storeName){
  const db = await openOfflineDatabase();
  return new Promise((resolve,reject)=>{
    const tx = db.transaction(storeName,'readonly');
    const request = tx.objectStore(storeName).getAll();
    request.onsuccess = ()=>resolve(request.result || []);
    request.onerror = ()=>reject(request.error);
  });
}

async function idbDelete(storeName,key){
  const db = await openOfflineDatabase();
  return new Promise((resolve,reject)=>{
    const tx = db.transaction(storeName,'readwrite');
    tx.objectStore(storeName).delete(key);
    tx.oncomplete = ()=>resolve();
    tx.onerror = ()=>reject(tx.error);
  });
}

function scopedOfflineKey(baseKey){
  if(!AUTH_USER) return baseKey;
  if(typeof hasAllUsinasAccess === 'function' && hasAllUsinasAccess()) return baseKey;
  const usina = typeof currentUserUsina === 'function' ? currentUserUsina() : '';
  return `${baseKey}:${AUTH_USER.uid}:${usina}`;
}

async function cacheOfflineValue(key,value){
  try{
    await idbPut('kv',{key,value,updatedAt:Date.now()});
  }catch(error){
    console.error('Offline cache error:',key,error);
  }
}

async function readOfflineValue(key,fallback=null){
  try{
    const row = await idbGet('kv',key);
    return row ? row.value : fallback;
  }catch(error){
    console.error('Offline read error:',key,error);
    return fallback;
  }
}

async function enqueueOfflineOperation(operation){
  const userId = AUTH_USER?.uid || 'anonymous';
  const scope = typeof hasAllUsinasAccess === 'function' && hasAllUsinasAccess()
    ? 'TODAS'
    : (typeof currentUserUsina === 'function' ? currentUserUsina() : 'SEM_USINA');

  const id = operation.id || `${operation.type}:${operation.collection || 'general'}:${userId}:${scope}`;

  await idbPut('queue',{
    ...operation,
    id,
    userId,
    scope,
    createdAt:operation.createdAt || Date.now(),
    updatedAt:Date.now()
  });

  await updateConnectionUi();
}

async function getOfflineQueue(){
  return idbGetAll('queue');
}

async function updateConnectionUi(){
  const online = navigator.onLine;
  OFFLINE_MODE = !online;

  const status = document.getElementById('connection-status');
  const banner = document.getElementById('offline-banner');
  const countEl = document.getElementById('offline-queue-count');
  const queue = await getOfflineQueue().catch(()=>[]);
  const count = queue.length;

  if(status){
    status.classList.toggle('offline',!online);
    status.classList.toggle('syncing',SYNC_IN_PROGRESS);
    status.innerHTML = SYNC_IN_PROGRESS
      ? `Sincronizando <span class="offline-queue-count">${count}</span>`
      : online
        ? (count ? `Online · ${count} pendente(s)` : 'Online')
        : (count ? `Offline · ${count} pendente(s)` : 'Offline');
  }

  if(banner){
    banner.classList.toggle('show',!online);
    banner.textContent = count
      ? `Você está trabalhando offline. ${count} alteração(ões) aguardam sincronização.`
      : 'Você está offline. Os dados salvos neste aparelho continuam disponíveis.';
  }

  if(countEl){
    countEl.textContent = String(count);
    countEl.style.display = count ? 'inline-flex' : 'none';
  }
}

async function cacheCurrentOfflineSession(){
  if(!AUTH_USER || !CURRENT_USER_PROFILE) return;

  await cacheOfflineValue('lastAuthUser',{
    uid:AUTH_USER.uid,
    email:AUTH_USER.email || '',
    displayName:AUTH_USER.displayName || ''
  });
  await cacheOfflineValue(`profile:${AUTH_USER.uid}`,CURRENT_USER_PROFILE);
  await cacheOfflineValue('config',STATE.config);
  await cacheOfflineValue(scopedOfflineKey('extinguishers'),STATE.extinguishers);
  await cacheOfflineValue(scopedOfflineKey('inspections'),STATE.inspections);
}

async function restoreOfflineSession(){
  const auth = await readOfflineValue('lastAuthUser',null);
  if(!auth?.uid) return false;

  const profile = await readOfflineValue(`profile:${auth.uid}`,null);
  if(!profile) return false;

  AUTH_USER = auth;
  CURRENT_USER_PROFILE = profile;

  const config = await readOfflineValue('config',loadLocalKey('config',STATE.config));
  STATE.config = Object.assign(STATE.config,config || {});

  const extKey = scopedOfflineKey('extinguishers');
  const inspectionKey = scopedOfflineKey('inspections');

  STATE.extinguishers = await readOfflineValue(extKey,loadLocalKey(extKey,[]));
  STATE.inspections = await readOfflineValue(inspectionKey,loadLocalKey(inspectionKey,[]));

  STATE.extinguishers = Array.isArray(STATE.extinguishers) ? STATE.extinguishers : [];
  STATE.inspections = Array.isArray(STATE.inspections) ? STATE.inspections : [];
  STATE.loaded = true;
  OFFLINE_MODE = true;
  return true;
}

async function applyQueuedSnapshot(operation){
  const {collection,getDocs,query,where,doc,setDoc,deleteDoc,serverTimestamp} =
    await import('https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js');

  const items = Array.isArray(operation.items) ? operation.items : [];
  const collectionRef = collection(FIREBASE_DB,operation.collection);
  const sourceQuery = operation.scope === 'TODAS'
    ? collectionRef
    : query(collectionRef,where('usina','==',operation.scope));

  const existing = await getDocs(sourceQuery);
  const localIds = new Set(items.filter(item=>item?.id).map(item=>String(item.id)));

  for(const item of items){
    if(!item?.id) continue;
    await setDoc(
      doc(FIREBASE_DB,operation.collection,String(item.id)),
      {...item,updatedAt:serverTimestamp()},
      {merge:true}
    );
  }

  for(const existingDoc of existing.docs){
    if(!localIds.has(String(existingDoc.id))){
      await deleteDoc(existingDoc.ref);
    }
  }
}


async function applyQueuedDelete(operation){
  const {doc,deleteDoc,collection,getDocs,query,where} =
    await import('https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js');

  if(operation.collection === 'extinguishers'){
    await deleteDoc(doc(FIREBASE_DB,'extinguishers',String(operation.documentId)));

    const inspections = await getDocs(
      query(
        collection(FIREBASE_DB,'inspections'),
        where('extinguisherId','==',operation.documentId)
      )
    );

    for(const inspectionDoc of inspections.docs){
      const data = inspectionDoc.data();
      if(operation.scope === 'TODAS' || data.usina === operation.scope){
        await deleteDoc(inspectionDoc.ref);
      }
    }
    return;
  }

  await deleteDoc(
    doc(FIREBASE_DB,operation.collection,String(operation.documentId))
  );
}

function clearSyncedRecordFlags(collectionName){
  const key = collectionName === 'extinguishers' ? 'extinguishers' : 'inspections';
  const list = key === 'extinguishers' ? STATE.extinguishers : STATE.inspections;

  list.forEach(item=>{
    if(item?._syncStatus === 'pending'){
      delete item._syncStatus;
      delete item._localUpdatedAt;
      delete item._localUserId;
    }
  });

  cacheOfflineValue(scopedOfflineKey(key),list);
  saveLocalKey(scopedOfflineKey(key),list);
}

async function processOfflineQueue(manual=false){
  if(SYNC_IN_PROGRESS || !navigator.onLine || !FIREBASE_READY || !FIREBASE_DB) return;

  const queue = await getOfflineQueue();
  if(!queue.length){
    if(manual) showToast('Nenhuma alteração pendente.');
    await updateConnectionUi();
    return;
  }

  SYNC_IN_PROGRESS = true;
  await updateConnectionUi();

  let completed = 0;
  try{
    const {doc,setDoc,serverTimestamp} =
      await import('https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js');

    for(const operation of queue.sort((a,b)=>a.createdAt-b.createdAt)){
      if(operation.type === 'snapshot'){
        await applyQueuedSnapshot(operation);
        clearSyncedRecordFlags(operation.collection);
      }else if(operation.type === 'delete'){
        await applyQueuedDelete(operation);
      }else if(operation.type === 'config'){
        await setDoc(
          doc(FIREBASE_DB,'settings','main'),
          {value:operation.value,updatedAt:serverTimestamp()},
          {merge:true}
        );
      }

      await idbDelete('queue',operation.id);
      completed++;
    }

    showToast(`${completed} alteração(ões) sincronizada(s).`);
  }catch(error){
    console.error('Offline sync error:',error);
    if(manual) showToast('A sincronização não foi concluída. Tentaremos novamente.','err');
  }finally{
    SYNC_IN_PROGRESS = false;
    await updateConnectionUi();
  }
}

function bindOfflineEvents(){
  if(!OFFLINE_EVENTS_BOUND){
    OFFLINE_EVENTS_BOUND = true;

    window.addEventListener('online',async ()=>{
      OFFLINE_MODE = false;
      await updateConnectionUi();
      showToast('Conexão restabelecida.');
      setTimeout(()=>processOfflineQueue(false),500);
    });

    window.addEventListener('offline',async ()=>{
      OFFLINE_MODE = true;
      await updateConnectionUi();
      showToast('Modo offline ativado.','err');
    });
  }

  document.getElementById('btn-sync-now')?.addEventListener('click',()=>processOfflineQueue(true));
  updateConnectionUi();
}