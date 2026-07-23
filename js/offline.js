/* ============================================================
   GESTÃO DE EXTINTORES v3.0 — OFFLINE ENGINE
============================================================ */
const OFFLINE_DB_NAME = 'gestao-extintores-offline';
const OFFLINE_DB_VERSION = null;
let OFFLINE_DB = null;
let OFFLINE_MODE = !navigator.onLine;
let SYNC_IN_PROGRESS = false;
let OFFLINE_EVENTS_BOUND = false;
let AUTO_SYNC_TIMER = null;
let RETRY_SYNC_TIMER = null;
let SYNC_TOTAL = 0;
let SYNC_COMPLETED = 0;
let SYNC_FAILED = 0;
const SYNC_RETRY_DELAYS = [60000, 300000, 900000, 3600000];
const OFFLINE_CACHE_TIMERS = new Map();

function openOfflineDatabase(){
  if(OFFLINE_DB) return Promise.resolve(OFFLINE_DB);

  return new Promise((resolve,reject)=>{
    const request = OFFLINE_DB_VERSION
      ? indexedDB.open(OFFLINE_DB_NAME,OFFLINE_DB_VERSION)
      : indexedDB.open(OFFLINE_DB_NAME);

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
      OFFLINE_DB.onversionchange = ()=>{
        OFFLINE_DB.close();
        OFFLINE_DB = null;
      };
      resolve(OFFLINE_DB);
    };
    request.onblocked = ()=>{
      console.warn('Banco offline bloqueado por outra aba ou versão do aplicativo.');
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

function scheduleOfflineSnapshotCache(key,value,delay=90){
  const currentTimer = OFFLINE_CACHE_TIMERS.get(key);
  if(currentTimer) clearTimeout(currentTimer);

  const timer = setTimeout(async ()=>{
    OFFLINE_CACHE_TIMERS.delete(key);
    await cacheOfflineValue(key,value);

    const backup = ()=>{
      try{
        if(typeof saveLocalKey === 'function') saveLocalKey(key,value);
      }catch(error){
        console.info('Local backup skipped:',error?.message || error);
      }
    };

    if('requestIdleCallback' in window){
      window.requestIdleCallback(backup,{timeout:1800});
    }else{
      setTimeout(backup,0);
    }
  },delay);

  OFFLINE_CACHE_TIMERS.set(key,timer);
}

function offlineOperationEntityId(operation){
  return String(
    operation.documentId ||
    operation.item?.id ||
    operation.entityId ||
    ''
  );
}

async function discardQueuedUpsert(collectionName,documentId){
  const queue = await getOfflineQueue().catch(()=>[]);
  const targetId = String(documentId);

  for(const operation of queue){
    if(
      operation.type==='upsert' &&
      operation.collection===collectionName &&
      offlineOperationEntityId(operation)===targetId
    ){
      await idbDelete('queue',operation.id);
    }
  }
}

async function reconcilePendingOperationsIntoState(){
  const queue = await getOfflineQueue().catch(()=>[]);
  if(!queue.length) return;

  const ordered = [...queue].sort((a,b)=>
    Number(a.updatedAt || a.createdAt || 0)-Number(b.updatedAt || b.createdAt || 0)
  );

  for(const operation of ordered){
    if(operation.type==='config' && operation.value){
      STATE.config = Object.assign(STATE.config,operation.value);
      continue;
    }

    if(operation.type==='snapshot' && Array.isArray(operation.items)){
      if(operation.collection==='extinguishers'){
        STATE.extinguishers = operation.items;
      }else if(operation.collection==='inspections'){
        STATE.inspections = operation.items;
      }
      continue;
    }

    if(operation.type==='upsert' && operation.item?.id){
      const collectionKey = operation.collection==='extinguishers'
        ? 'extinguishers'
        : 'inspections';
      const list = STATE[collectionKey];
      const targetId = String(operation.item.id);
      const restored = {
        ...operation.item,
        _syncStatus:'pending',
        _localUpdatedAt:Number(operation.localVersion || operation.updatedAt || Date.now()),
        _localUserId:operation.userId || ''
      };
      const index = list.findIndex(item=>String(item.id)===targetId);
      if(index>=0) list[index] = restored;
      else list.push(restored);
      continue;
    }

    if(operation.type==='delete'){
      const targetId = String(operation.documentId || '');
      if(operation.collection==='extinguishers'){
        STATE.extinguishers = STATE.extinguishers.filter(
          item=>String(item.id)!==targetId
        );
        STATE.inspections = STATE.inspections.filter(
          item=>String(item.extinguisherId)!==targetId
        );
      }else if(operation.collection==='inspections'){
        STATE.inspections = STATE.inspections.filter(
          item=>String(item.id)!==targetId
        );
      }
    }
  }
}

async function enqueueOfflineOperation(operation){
  const userId = AUTH_USER?.uid || 'anonymous';
  const scope = typeof hasAllUsinasAccess === 'function' && hasAllUsinasAccess()
    ? 'TODAS'
    : (typeof currentUserUsina === 'function' ? currentUserUsina() : 'SEM_USINA');
  const entityId = offlineOperationEntityId(operation);

  const id = operation.id || [
    operation.type,
    operation.collection || 'general',
    entityId || 'singleton',
    userId,
    scope
  ].join(':');

  const existing = await idbGet('queue',id).catch(()=>null);
  const updatedAt = Date.now();

  const queued = {
    ...existing,
    ...operation,
    id,
    userId,
    scope,
    status:'pending',
    attempts:0,
    nextRetryAt:0,
    lastError:'',
    createdAt:existing?.createdAt || operation.createdAt || updatedAt,
    updatedAt
  };

  await idbPut('queue',queued);

  updateConnectionUi().catch(()=>{});
  requestBackgroundSync().catch(()=>{});
  scheduleAutomaticSync(450);
  return queued;
}

async function getOfflineQueue(){
  return idbGetAll('queue');
}

async function pendingOfflineCount(){
  try{
    const queue = await getOfflineQueue();
    return Array.isArray(queue) ? queue.length : 0;
  }catch(error){
    console.error('Pending offline count error:', error);
    return 0;
  }
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
  await reconcilePendingOperationsIntoState();
  STATE.loaded = true;
  OFFLINE_MODE = true;
  return true;
}


function syncOperationLabel(operation){
  if(operation.type === 'config') return 'Configurações gerais';
  const collectionLabel = operation.collection === 'extinguishers'
    ? 'Extintores'
    : operation.collection === 'inspections'
      ? 'Inspeções'
      : 'Dados';

  if(operation.type === 'delete'){
    return `Excluir registro de ${collectionLabel.toLowerCase()}`;
  }
  if(operation.type === 'upsert'){
    return `Salvar registro de ${collectionLabel.toLowerCase()}`;
  }
  return `Atualizar ${collectionLabel.toLowerCase()}`;
}

function syncOperationDescription(operation){
  const scope = operation.scope === 'TODAS' ? 'Todas as usinas' : operation.scope;
  const attempt = operation.attempts
    ? ` · ${operation.attempts} tentativa(s)`
    : '';
  return `${scope || 'Escopo local'}${attempt}`;
}

function ensureSyncInterface(){
  if(document.getElementById('sync-progress-overlay')) return;

  document.body.insertAdjacentHTML('beforeend',`
    <div id="sync-progress-overlay" class="sync-progress-overlay" aria-live="polite">
      <div class="sync-progress-head">
        <div class="sync-progress-title">Sincronizando dados</div>
        <div class="sync-progress-count" id="sync-progress-count">0 de 0</div>
      </div>
      <div class="sync-progress-track">
        <div class="sync-progress-bar" id="sync-progress-bar"></div>
      </div>
      <div class="sync-progress-detail" id="sync-progress-detail">Preparando alterações...</div>
    </div>

    <div id="sync-center-backdrop" class="sync-center-backdrop"></div>
    <section id="sync-center" class="sync-center" role="dialog" aria-modal="true" aria-label="Central de sincronização">
      <div class="sync-center-head">
        <div>
          <div class="sync-center-title">Central de sincronização</div>
          <div class="sync-center-sub" id="sync-center-sub">Verificando o estado do aplicativo...</div>
        </div>
        <button type="button" class="icon-btn" id="sync-center-close" aria-label="Fechar">×</button>
      </div>
      <div class="sync-center-body">
        <div class="sync-summary">
          <div class="sync-summary-item">
            <div class="sync-summary-label">Conexão</div>
            <div class="sync-summary-value" id="sync-summary-connection">—</div>
          </div>
          <div class="sync-summary-item">
            <div class="sync-summary-label">Pendências</div>
            <div class="sync-summary-value" id="sync-summary-pending">0</div>
          </div>
          <div class="sync-summary-item">
            <div class="sync-summary-label">Falhas</div>
            <div class="sync-summary-value" id="sync-summary-failed">0</div>
          </div>
        </div>
        <div class="sync-queue-list" id="sync-queue-list"></div>
        <div class="sync-center-actions">
          <button type="button" class="btn btn-accent" id="sync-center-now">Sincronizar agora</button>
          <button type="button" class="btn" id="sync-center-refresh">Atualizar lista</button>
        </div>
      </div>
    </section>
  `);

  const close = ()=>closeSyncCenter();
  document.getElementById('sync-center-close')?.addEventListener('click',close);
  document.getElementById('sync-center-backdrop')?.addEventListener('click',close);
  document.getElementById('sync-center-now')?.addEventListener('click',()=>processOfflineQueue(true));
  document.getElementById('sync-center-refresh')?.addEventListener('click',renderSyncCenter);
}

function openSyncCenter(){
  ensureSyncInterface();
  document.getElementById('sync-center')?.classList.add('show');
  document.getElementById('sync-center-backdrop')?.classList.add('show');
  renderSyncCenter();
}

function closeSyncCenter(){
  document.getElementById('sync-center')?.classList.remove('show');
  document.getElementById('sync-center-backdrop')?.classList.remove('show');
}

async function renderSyncCenter(){
  ensureSyncInterface();

  const queue = await getOfflineQueue().catch(()=>[]);
  const failed = queue.filter(item=>item.status === 'error').length;
  const list = document.getElementById('sync-queue-list');

  document.getElementById('sync-summary-connection').textContent =
    navigator.onLine ? 'Online' : 'Offline';
  document.getElementById('sync-summary-pending').textContent = String(queue.length);
  document.getElementById('sync-summary-failed').textContent = String(failed);
  document.getElementById('sync-center-sub').textContent =
    queue.length
      ? `${queue.length} operação(ões) armazenada(s) neste aparelho.`
      : 'Todos os dados deste aparelho estão sincronizados.';

  if(!list) return;

  if(!queue.length){
    list.innerHTML = `<div class="sync-queue-empty">Nenhuma alteração pendente.</div>`;
    return;
  }

  list.innerHTML = queue
    .sort((a,b)=>a.createdAt-b.createdAt)
    .map(operation=>`
      <div class="sync-queue-item ${operation.status === 'error' ? 'error' : ''}">
        <div>
          <div class="sync-queue-name">${syncOperationLabel(operation)}</div>
          <div class="sync-queue-meta">
            ${syncOperationDescription(operation)}
            ${operation.lastError ? `<br>${String(operation.lastError).slice(0,140)}` : ''}
          </div>
        </div>
        <span class="sync-queue-state">
          ${operation.status === 'error' ? 'Tentará novamente' : 'Pendente'}
        </span>
      </div>
    `).join('');
}

function showSyncProgress(show=true){
  ensureSyncInterface();
  document.getElementById('sync-progress-overlay')?.classList.toggle('show',show);
}

function updateSyncProgress(detail=''){
  const total = Math.max(SYNC_TOTAL,1);
  const processed = SYNC_COMPLETED + SYNC_FAILED;
  const percentage = Math.min(100,Math.round((processed/total)*100));

  const count = document.getElementById('sync-progress-count');
  const bar = document.getElementById('sync-progress-bar');
  const detailEl = document.getElementById('sync-progress-detail');

  if(count) count.textContent = `${processed} de ${SYNC_TOTAL}`;
  if(bar) bar.style.width = `${percentage}%`;
  if(detailEl && detail) detailEl.textContent = detail;
}

async function requestBackgroundSync(){
  try{
    const registration = await navigator.serviceWorker?.ready;
    if(registration?.sync){
      await registration.sync.register('gestao-extintores-sync');
    }
  }catch(error){
    console.info('Background Sync indisponível:',error?.message || error);
  }
}

function scheduleAutomaticSync(delay=1500){
  clearTimeout(AUTO_SYNC_TIMER);
  if(!navigator.onLine) return;
  AUTO_SYNC_TIMER = setTimeout(()=>processOfflineQueue(false),delay);
}

function scheduleRetryFromQueue(queue){
  clearTimeout(RETRY_SYNC_TIMER);
  if(!navigator.onLine || !queue.length) return;

  const retryTimes = queue
    .map(item=>Number(item.nextRetryAt || 0))
    .filter(time=>time > Date.now());

  const delay = retryTimes.length
    ? Math.max(1000,Math.min(...retryTimes)-Date.now())
    : 60000;

  RETRY_SYNC_TIMER = setTimeout(()=>processOfflineQueue(false),delay);
}

async function saveOperationFailure(operation,error){
  const current = await idbGet('queue',operation.id).catch(()=>null);
  if(current && Number(current.updatedAt || 0)!==Number(operation.updatedAt || 0)){
    return;
  }

  const attempts = Number(operation.attempts || 0) + 1;
  const retryDelay = SYNC_RETRY_DELAYS[Math.min(attempts-1,SYNC_RETRY_DELAYS.length-1)];

  await idbPut('queue',{
    ...operation,
    status:'error',
    attempts,
    lastError:error?.message || String(error),
    nextRetryAt:Date.now()+retryDelay,
    updatedAt:Date.now()
  });
}

async function refreshApplicationAfterSync(){
  try{
    scheduleOfflineSnapshotCache(
      scopedOfflineKey('extinguishers'),
      STATE.extinguishers,
      40
    );
    scheduleOfflineSnapshotCache(
      scopedOfflineKey('inspections'),
      STATE.inspections,
      40
    );
    scheduleOfflineSnapshotCache('config',STATE.config,40);
  }catch(error){
    console.error('Post-sync cache error:',error);
  }
}

async function applyQueuedUpsert(operation){
  const {doc,setDoc,serverTimestamp} =
    await import('https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js');

  if(!operation.collection || !operation.documentId || !operation.item){
    throw new Error('Operação de salvamento incompleta.');
  }

  const item = {...operation.item};
  delete item._syncStatus;
  delete item._localUpdatedAt;
  delete item._localUserId;

  await setDoc(
    doc(FIREBASE_DB,operation.collection,String(operation.documentId)),
    {...item,updatedAt:serverTimestamp()},
    {merge:true}
  );
}

function clearSyncedRecordFlag(collectionName,documentId,localVersion=0){
  const key = collectionName==='extinguishers' ? 'extinguishers' : 'inspections';
  const list = STATE[key];
  const record = list.find(item=>String(item.id)===String(documentId));
  if(!record) return;

  const recordVersion = Number(record._localUpdatedAt || 0);
  if(recordVersion && localVersion && recordVersion>localVersion) return;

  delete record._syncStatus;
  delete record._localUpdatedAt;
  delete record._localUserId;
  scheduleOfflineSnapshotCache(scopedOfflineKey(key),list,40);
}

async function deleteQueueOperationIfCurrent(operation){
  const current = await idbGet('queue',operation.id).catch(()=>null);
  if(!current) return true;

  if(Number(current.updatedAt || 0)!==Number(operation.updatedAt || 0)){
    return false;
  }

  await idbDelete('queue',operation.id);
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
    const clean = {...item};
    delete clean._syncStatus;
    delete clean._localUpdatedAt;
    delete clean._localUserId;
    await setDoc(
      doc(FIREBASE_DB,operation.collection,String(item.id)),
      {...clean,updatedAt:serverTimestamp()},
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

  scheduleOfflineSnapshotCache(scopedOfflineKey(key),list,40);
}

async function processOfflineQueue(manual=false){
  if(SYNC_IN_PROGRESS) return;

  if(!navigator.onLine || !FIREBASE_READY || !FIREBASE_DB){
    if(manual) showToast('Sem conexão com a internet. As alterações continuam salvas no aparelho.','err');
    await updateConnectionUi();
    await renderSyncCenter();
    return;
  }

  let queue = await getOfflineQueue();
  const now = Date.now();

  const eligible = queue
    .filter(operation=>manual || !operation.nextRetryAt || operation.nextRetryAt <= now)
    .sort((a,b)=>a.createdAt-b.createdAt);

  if(!eligible.length){
    if(manual && queue.length){
      showToast('As operações com falha ainda estão no período de espera. Uma nova tentativa será feita automaticamente.');
    }else if(manual){
      showToast('Nenhuma alteração pendente.');
    }
    scheduleRetryFromQueue(queue);
    await updateConnectionUi();
    await renderSyncCenter();
    return;
  }

  SYNC_IN_PROGRESS = true;
  SYNC_TOTAL = eligible.length;
  SYNC_COMPLETED = 0;
  SYNC_FAILED = 0;

  showSyncProgress(true);
  updateSyncProgress('Preparando alterações...');
  await updateConnectionUi();

  const {doc,setDoc,serverTimestamp} =
    await import('https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js');

  for(const operation of eligible){
    updateSyncProgress(syncOperationLabel(operation));

    try{
      if(operation.type === 'snapshot'){
        await applyQueuedSnapshot(operation);
        clearSyncedRecordFlags(operation.collection);
      }else if(operation.type === 'upsert'){
        await applyQueuedUpsert(operation);
      }else if(operation.type === 'delete'){
        await applyQueuedDelete(operation);
      }else if(operation.type === 'config'){
        await setDoc(
          doc(FIREBASE_DB,'settings','main'),
          {value:operation.value,updatedAt:serverTimestamp()},
          {merge:true}
        );
      }else{
        throw new Error(`Tipo de operação não reconhecido: ${operation.type}`);
      }

      const removed = await deleteQueueOperationIfCurrent(operation);
      if(removed && operation.type==='upsert'){
        clearSyncedRecordFlag(
          operation.collection,
          operation.documentId,
          Number(operation.localVersion || 0)
        );
      }
      SYNC_COMPLETED++;
    }catch(error){
      console.error('Sync operation error:',operation,error);
      await saveOperationFailure(operation,error);
      SYNC_FAILED++;
    }

    updateSyncProgress(
      SYNC_FAILED
        ? `${SYNC_COMPLETED} concluída(s) e ${SYNC_FAILED} com nova tentativa agendada.`
        : `${SYNC_COMPLETED} alteração(ões) enviada(s).`
    );
    if(manual){
      await updateConnectionUi();
      await renderSyncCenter();
    }
  }

  queue = await getOfflineQueue();

  if(SYNC_COMPLETED){
    await refreshApplicationAfterSync();
  }

  if(SYNC_FAILED){
    showToast(
      `${SYNC_COMPLETED} sincronizada(s). ${SYNC_FAILED} operação(ões) tentarão novamente automaticamente.`,
      'err'
    );
  }else if(manual){
    showToast(`${SYNC_COMPLETED} alteração(ões) sincronizada(s).`);
  }

  SYNC_IN_PROGRESS = false;
  await updateConnectionUi();
  await renderSyncCenter();
  if(queue.length && navigator.onLine){
    scheduleAutomaticSync(500);
  }else{
    scheduleRetryFromQueue(queue);
  }

  setTimeout(()=>showSyncProgress(false),SYNC_FAILED ? 3500 : 1800);
}

function bindOfflineEvents(){
  ensureSyncInterface();

  if(!OFFLINE_EVENTS_BOUND){
    OFFLINE_EVENTS_BOUND = true;

    window.addEventListener('online',async ()=>{
      OFFLINE_MODE = false;
      await updateConnectionUi();
      showToast('Conexão restabelecida. Iniciando sincronização...');
      scheduleAutomaticSync(600);
    });

    window.addEventListener('offline',async ()=>{
      OFFLINE_MODE = true;
      clearTimeout(AUTO_SYNC_TIMER);
      clearTimeout(RETRY_SYNC_TIMER);
      await updateConnectionUi();
      await renderSyncCenter();
      showToast('Modo offline ativado. As alterações serão mantidas no aparelho.','err');
    });

    document.addEventListener('visibilitychange',()=>{
      if(document.visibilityState === 'visible' && navigator.onLine){
        scheduleAutomaticSync(800);
      }
    });

    window.addEventListener('focus',()=>{
      if(navigator.onLine) scheduleAutomaticSync(900);
    });

    navigator.serviceWorker?.addEventListener('message',event=>{
      if(event.data?.type === 'PROCESS_OFFLINE_QUEUE'){
        scheduleAutomaticSync(200);
      }
    });

    setInterval(async ()=>{
      if(!navigator.onLine || SYNC_IN_PROGRESS) return;
      const count = await pendingOfflineCount();
      if(count) scheduleAutomaticSync(200);
    },120000);
  }

  document.getElementById('btn-sync-now')?.addEventListener('click',()=>processOfflineQueue(true));
  document.getElementById('connection-status')?.addEventListener('click',openSyncCenter);
  document.getElementById('connection-status')?.setAttribute('title','Abrir central de sincronização');
  document.getElementById('connection-status')?.setAttribute('tabindex','0');
  document.getElementById('connection-status')?.addEventListener('keydown',event=>{
    if(event.key === 'Enter' || event.key === ' '){
      event.preventDefault();
      openSyncCenter();
    }
  });

  updateConnectionUi();
  renderSyncCenter();

  pendingOfflineCount().then(count=>{
    if(count && navigator.onLine) scheduleAutomaticSync(1200);
  });
}

