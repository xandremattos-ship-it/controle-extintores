/* ============================================================
   GESTÃO DE EXTINTORES v3.0 — OFFLINE ENGINE
============================================================ */
const OFFLINE_DB_NAME = 'gestao-extintores-offline';
const OFFLINE_DB_VERSION = 2;
let OFFLINE_DB = null;
let OFFLINE_MODE = !navigator.onLine;
let SYNC_IN_PROGRESS = false;
let OFFLINE_EVENTS_BOUND = false;
let AUTO_SYNC_TIMER = null;
let RETRY_SYNC_TIMER = null;
let SYNC_TOTAL = 0;
let SYNC_COMPLETED = 0;
let SYNC_FAILED = 0;
let SYNC_CONFLICTS = 0;
const SYNC_RETRY_DELAYS = [60000, 300000, 900000, 3600000];

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
      if(!db.objectStoreNames.contains('conflicts')){
        db.createObjectStore('conflicts',{keyPath:'id'});
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

  const existing = await idbGet('queue',id).catch(()=>null);

  await idbPut('queue',{
    ...existing,
    ...operation,
    id,
    userId,
    scope,
    status:'pending',
    attempts:existing?.attempts || 0,
    nextRetryAt:0,
    lastError:'',
    createdAt:existing?.createdAt || operation.createdAt || Date.now(),
    updatedAt:Date.now()
  });

  await updateConnectionUi();
  await requestBackgroundSync();
  scheduleAutomaticSync(1200);
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
  const conflicts = await conflictCount().catch(()=>0);

  if(status){
    status.classList.toggle('offline',!online);
    status.classList.toggle('syncing',SYNC_IN_PROGRESS);
    status.innerHTML = SYNC_IN_PROGRESS
      ? `Sincronizando <span class="offline-queue-count">${count}</span>`
      : online
        ? (conflicts
            ? `Online · ${conflicts} conflito(s)`
            : (count ? `Online · ${count} pendente(s)` : 'Online'))
        : (conflicts
            ? `Offline · ${conflicts} conflito(s)`
            : (count ? `Offline · ${count} pendente(s)` : 'Offline'));
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
    if(typeof refreshDashboardCollections === 'function'){
      await refreshDashboardCollections();
    }else if(typeof loadAll === 'function'){
      await loadAll();
      if(typeof applyUserDataScope === 'function') applyUserDataScope();
    }

    if(typeof cacheCurrentOfflineSession === 'function'){
      await cacheCurrentOfflineSession();
    }

    if(typeof renderView === 'function'){
      renderView();
    }
  }catch(error){
    console.error('Post-sync refresh error:',error);
  }
}


function deviceFingerprint(){
  const ua = navigator.userAgent || 'Dispositivo desconhecido';
  const platform = navigator.platform || '';
  return `${platform} · ${ua.slice(0,120)}`;
}

function cleanRecordForCloud(record){
  const clean = {...record};
  delete clean._syncStatus;
  delete clean._localUpdatedAt;
  delete clean._localUserId;
  delete clean._baseVersion;
  delete clean._conflict;
  return clean;
}

function recordBaseVersion(record){
  if(record?._baseVersion !== undefined && record?._baseVersion !== null){
    return Number(record._baseVersion) || 0;
  }
  const version = Number(record?.version || 0);
  return Math.max(0,version - (record?._syncStatus === 'pending' ? 1 : 0));
}

function buildAuditAction(collectionName,existing){
  const label = collectionName === 'extinguishers' ? 'extintor' : 'inspeção';
  return existing ? `Atualizou ${label}` : `Criou ${label}`;
}

async function writeAuditEntry({collectionName,documentId,action,before,after,forced=false}){
  try{
    const {collection,addDoc,serverTimestamp} =
      await import('https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js');

    await addDoc(collection(FIREBASE_DB,'auditLogs'),{
      collection:collectionName,
      documentId:String(documentId),
      action,
      before:before || null,
      after:after || null,
      forcedOverwrite:forced === true,
      userId:AUTH_USER?.uid || '',
      userName:CURRENT_USER_PROFILE?.name || AUTH_USER?.email || 'Usuário',
      role:typeof currentRole === 'function' ? currentRole() : '',
      usina:typeof currentUserUsina === 'function' ? currentUserUsina() : '',
      device:deviceFingerprint(),
      createdAt:serverTimestamp(),
      clientCreatedAt:new Date().toISOString()
    });
  }catch(error){
    console.error('Audit log error:',error);
  }
}

async function saveConflict({collectionName,localData,serverData,reason='VERSION_MISMATCH'}){
  const id = `${collectionName}:${localData.id}`;
  const conflict = {
    id,
    collection:collectionName,
    documentId:String(localData.id),
    localData,
    serverData,
    reason,
    localVersion:Number(localData.version || 0),
    baseVersion:recordBaseVersion(localData),
    serverVersion:Number(serverData?.version || 0),
    createdAt:Date.now(),
    userId:AUTH_USER?.uid || '',
    userName:CURRENT_USER_PROFILE?.name || AUTH_USER?.email || 'Usuário',
    device:deviceFingerprint()
  };
  await idbPut('conflicts',conflict);
  return conflict;
}

async function getConflicts(){
  return idbGetAll('conflicts');
}

async function conflictCount(){
  const conflicts = await getConflicts().catch(()=>[]);
  return conflicts.length;
}

async function secureUpsertRecord(collectionName,record,{force=false}={}){
  const {doc,runTransaction,serverTimestamp} =
    await import('https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js');

  const ref = doc(FIREBASE_DB,collectionName,String(record.id));
  const clean = cleanRecordForCloud(record);
  const hasLocalVersion =
    record?._baseVersion !== undefined ||
    record?.version !== undefined;
  let expectedVersion = recordBaseVersion(record);

  let beforeData = null;
  let savedData = null;

  await runTransaction(FIREBASE_DB,async transaction=>{
    const snap = await transaction.get(ref);
    beforeData = snap.exists() ? snap.data() : null;
    const serverVersion = Number(beforeData?.version || 0);

    // Compatibilidade com inspeções antigas, criadas antes do versionamento.
    // Na primeira alteração, usa a versão atual da nuvem como base.
    if(snap.exists() && !hasLocalVersion){
      expectedVersion = serverVersion;
    }

    if(snap.exists() && !force && serverVersion !== expectedVersion){
      const error = new Error('VERSION_CONFLICT');
      error.code = 'VERSION_CONFLICT';
      error.serverData = beforeData;
      error.serverVersion = serverVersion;
      error.expectedVersion = expectedVersion;
      throw error;
    }

    if(!snap.exists() && !force && expectedVersion > 0){
      const error = new Error('DOCUMENT_MISSING_CONFLICT');
      error.code = 'VERSION_CONFLICT';
      error.serverData = null;
      error.serverVersion = 0;
      error.expectedVersion = expectedVersion;
      throw error;
    }

    const nextVersion = Math.max(serverVersion,Number(clean.version || 0),expectedVersion) + 1;
    savedData = {
      ...clean,
      version:nextVersion,
      updatedBy:AUTH_USER?.uid || '',
      updatedByName:CURRENT_USER_PROFILE?.name || AUTH_USER?.email || 'Usuário',
      updatedRole:typeof currentRole === 'function' ? currentRole() : '',
      updatedUsina:typeof currentUserUsina === 'function' ? currentUserUsina() : '',
      updatedDevice:deviceFingerprint(),
      clientUpdatedAt:new Date().toISOString(),
      updatedAt:serverTimestamp()
    };

    transaction.set(ref,savedData,{merge:true});
  });

  await writeAuditEntry({
    collectionName,
    documentId:record.id,
    action:buildAuditAction(collectionName,!!beforeData),
    before:beforeData,
    after:{...savedData,updatedAt:null},
    forced:force
  });

  return {...clean,...savedData,updatedAt:null};
}

function conflictRelevantFields(collectionName){
  return collectionName === 'extinguishers'
    ? ['numero','usina','localizacao','agente','capacidade','dataRecarga','dataTH','statusGeral']
    : ['date','responsavel','resultado','observacoes','usina','extinguisherId'];
}

function conflictDiffRows(conflict){
  const fields = conflictRelevantFields(conflict.collection);
  return fields
    .filter(field=>JSON.stringify(conflict.localData?.[field] ?? null) !== JSON.stringify(conflict.serverData?.[field] ?? null))
    .map(field=>({
      field,
      local:conflict.localData?.[field] ?? '—',
      server:conflict.serverData?.[field] ?? '—'
    }));
}

function ensureConflictInterface(){
  if(document.getElementById('conflict-center')) return;

  document.body.insertAdjacentHTML('beforeend',`
    <div id="conflict-center-backdrop" class="conflict-center-backdrop"></div>
    <section id="conflict-center" class="conflict-center" role="dialog" aria-modal="true" aria-label="Central de conflitos">
      <div class="conflict-center-head">
        <div>
          <div class="conflict-center-title">Central de conflitos</div>
          <div class="conflict-center-sub" id="conflict-center-sub">Comparando alterações locais e da nuvem.</div>
        </div>
        <button type="button" class="icon-btn" id="conflict-center-close" aria-label="Fechar">×</button>
      </div>
      <div class="conflict-center-body">
        <div id="conflict-list" class="conflict-list"></div>
      </div>
    </section>
  `);

  const close = ()=>closeConflictCenter();
  document.getElementById('conflict-center-close')?.addEventListener('click',close);
  document.getElementById('conflict-center-backdrop')?.addEventListener('click',close);
}

function openConflictCenter(){
  ensureConflictInterface();
  document.getElementById('conflict-center')?.classList.add('show');
  document.getElementById('conflict-center-backdrop')?.classList.add('show');
  renderConflictCenter();
}

function closeConflictCenter(){
  document.getElementById('conflict-center')?.classList.remove('show');
  document.getElementById('conflict-center-backdrop')?.classList.remove('show');
}

async function replaceLocalRecordFromServer(conflict){
  const target = conflict.collection === 'extinguishers' ? STATE.extinguishers : STATE.inspections;
  const index = target.findIndex(item=>String(item.id)===String(conflict.documentId));

  if(conflict.serverData){
    const cleanServer = {...conflict.serverData,id:conflict.documentId};
    delete cleanServer._syncStatus;
    delete cleanServer._baseVersion;
    if(index >= 0) target[index] = cleanServer;
    else target.push(cleanServer);
  }else if(index >= 0){
    target.splice(index,1);
  }

  const key = scopedOfflineKey(conflict.collection);
  await cacheOfflineValue(key,target);
  saveLocalKey(key,target);
}

async function resolveConflictKeepServer(conflictId){
  const conflict = await idbGet('conflicts',conflictId);
  if(!conflict) return;

  await replaceLocalRecordFromServer(conflict);
  await idbDelete('conflicts',conflictId);
  showToast('Versão da nuvem mantida.');
  await renderConflictCenter();
  await updateConnectionUi();
  if(typeof renderView === 'function') renderView();
}

async function resolveConflictOverwrite(conflictId){
  if(!navigator.onLine){
    showToast('Conecte-se à internet para substituir a versão da nuvem.','err');
    return;
  }

  const conflict = await idbGet('conflicts',conflictId);
  if(!conflict) return;

  try{
    const saved = await secureUpsertRecord(
      conflict.collection,
      {...conflict.localData,_baseVersion:conflict.serverVersion},
      {force:true}
    );

    const target = conflict.collection === 'extinguishers' ? STATE.extinguishers : STATE.inspections;
    const index = target.findIndex(item=>String(item.id)===String(conflict.documentId));
    if(index >= 0) target[index] = saved;
    else target.push(saved);

    const key = scopedOfflineKey(conflict.collection);
    await cacheOfflineValue(key,target);
    saveLocalKey(key,target);
    await idbDelete('conflicts',conflictId);

    showToast('Versão local gravada na nuvem com registro de auditoria.');
    await renderConflictCenter();
    await updateConnectionUi();
    if(typeof renderView === 'function') renderView();
  }catch(error){
    console.error('Force conflict resolution error:',error);
    showToast('Não foi possível resolver o conflito.','err');
  }
}

async function renderConflictCenter(){
  ensureConflictInterface();
  const conflicts = await getConflicts().catch(()=>[]);
  const list = document.getElementById('conflict-list');
  const sub = document.getElementById('conflict-center-sub');

  if(sub){
    sub.textContent = conflicts.length
      ? `${conflicts.length} conflito(s) aguardando decisão.`
      : 'Nenhum conflito pendente.';
  }

  if(!list) return;

  if(!conflicts.length){
    list.innerHTML = `<div class="conflict-empty">Nenhum conflito encontrado. As versões locais e da nuvem estão consistentes.</div>`;
    return;
  }

  list.innerHTML = conflicts.map(conflict=>{
    const diffs = conflictDiffRows(conflict);
    return `
      <article class="conflict-card">
        <div class="conflict-card-head">
          <div>
            <div class="conflict-card-title">
              ${conflict.collection === 'extinguishers' ? 'Extintor' : 'Inspeção'} · ${conflict.documentId}
            </div>
            <div class="conflict-card-meta">
              Alteração local de ${escapeHtml(conflict.userName || 'Usuário')}<br>
              Detectado em ${new Date(conflict.createdAt).toLocaleString('pt-BR')}
            </div>
            <div class="security-meta">
              <span>Base local: v${conflict.baseVersion}</span>
              <span>Nuvem: v${conflict.serverVersion}</span>
              <span>${escapeHtml(conflict.device || '')}</span>
            </div>
          </div>
          <span class="conflict-version">Conflito de versão</span>
        </div>

        <div>
          ${(diffs.length ? diffs : [{field:'registro',local:'Alteração local',server:'Versão da nuvem'}]).map(diff=>`
            <div class="conflict-diff">
              <div class="conflict-diff-label">${escapeHtml(diff.field)}</div>
              <div class="conflict-diff-local">
                <span class="conflict-diff-caption">Neste aparelho</span>
                ${escapeHtml(typeof diff.local === 'object' ? JSON.stringify(diff.local) : String(diff.local))}
              </div>
              <div class="conflict-diff-server">
                <span class="conflict-diff-caption">Na nuvem</span>
                ${escapeHtml(typeof diff.server === 'object' ? JSON.stringify(diff.server) : String(diff.server))}
              </div>
            </div>
          `).join('')}
        </div>

        <div class="conflict-card-actions">
          <button type="button" class="btn" data-conflict-server="${conflict.id}">Manter versão da nuvem</button>
          <button type="button" class="btn btn-danger" data-conflict-local="${conflict.id}">Substituir pela versão local</button>
        </div>
      </article>
    `;
  }).join('');

  list.querySelectorAll('[data-conflict-server]').forEach(button=>{
    button.addEventListener('click',()=>resolveConflictKeepServer(button.dataset.conflictServer));
  });
  list.querySelectorAll('[data-conflict-local]').forEach(button=>{
    button.addEventListener('click',()=>resolveConflictOverwrite(button.dataset.conflictLocal));
  });
}

async function applyQueuedSnapshot(operation){
  const items = Array.isArray(operation.items) ? operation.items : [];
  let synced = 0;
  let conflicts = 0;

  for(const item of items){
    if(!item?.id) continue;

    try{
      const saved = await secureUpsertRecord(operation.collection,item);

      const target = operation.collection === 'extinguishers'
        ? STATE.extinguishers
        : STATE.inspections;
      const index = target.findIndex(record=>String(record.id)===String(item.id));
      if(index >= 0) target[index] = saved;

      synced++;
    }catch(error){
      if(error?.code === 'VERSION_CONFLICT'){
        await saveConflict({
          collectionName:operation.collection,
          localData:item,
          serverData:error.serverData,
          reason:error.message
        });

        const target = operation.collection === 'extinguishers'
          ? STATE.extinguishers
          : STATE.inspections;
        const local = target.find(record=>String(record.id)===String(item.id));
        if(local){
          local._syncStatus = 'conflict';
          local._conflict = true;
        }
        conflicts++;
        continue;
      }
      throw error;
    }
  }

  const key = scopedOfflineKey(operation.collection);
  const target = operation.collection === 'extinguishers'
    ? STATE.extinguishers
    : STATE.inspections;
  await cacheOfflineValue(key,target);
  saveLocalKey(key,target);

  return {synced,conflicts};
}


async function applyQueuedDelete(operation){
  const {doc,deleteDoc,getDoc,collection,getDocs,query,where} =
    await import('https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js');

  const ref = doc(FIREBASE_DB,operation.collection,String(operation.documentId));
  const snap = await getDoc(ref);
  const serverData = snap.exists() ? snap.data() : null;
  const expectedVersion = Number(operation.baseVersion || 0);
  const serverVersion = Number(serverData?.version || 0);

  if(snap.exists() && expectedVersion && serverVersion !== expectedVersion){
    await saveConflict({
      collectionName:operation.collection,
      localData:{
        id:operation.documentId,
        version:expectedVersion,
        _baseVersion:expectedVersion,
        _deletedLocally:true
      },
      serverData,
      reason:'DELETE_VERSION_CONFLICT'
    });
    return {conflict:true};
  }

  if(operation.collection === 'extinguishers'){
    if(snap.exists()) await deleteDoc(ref);

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
  }else if(snap.exists()){
    await deleteDoc(ref);
  }

  await writeAuditEntry({
    collectionName:operation.collection,
    documentId:operation.documentId,
    action:`Excluiu ${operation.collection === 'extinguishers' ? 'extintor' : 'inspeção'}`,
    before:serverData,
    after:null
  });

  return {conflict:false};
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
  SYNC_CONFLICTS = 0;

  showSyncProgress(true);
  updateSyncProgress('Preparando alterações...');
  await updateConnectionUi();

  const {doc,setDoc,serverTimestamp} =
    await import('https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js');

  for(const operation of eligible){
    updateSyncProgress(syncOperationLabel(operation));

    try{
      if(operation.type === 'snapshot'){
        const result = await applyQueuedSnapshot(operation);
        SYNC_CONFLICTS += Number(result?.conflicts || 0);
        if(!result?.conflicts) clearSyncedRecordFlags(operation.collection);
      }else if(operation.type === 'delete'){
        const result = await applyQueuedDelete(operation);
        if(result?.conflict) SYNC_CONFLICTS++;
      }else if(operation.type === 'config'){
        await setDoc(
          doc(FIREBASE_DB,'settings','main'),
          {value:operation.value,updatedAt:serverTimestamp()},
          {merge:true}
        );
      }else{
        throw new Error(`Tipo de operação não reconhecido: ${operation.type}`);
      }

      await idbDelete('queue',operation.id);
      SYNC_COMPLETED++;
    }catch(error){
      console.error('Sync operation error:',operation,error);
      await saveOperationFailure(operation,error);
      SYNC_FAILED++;
    }

    updateSyncProgress(
      SYNC_FAILED || SYNC_CONFLICTS
        ? `${SYNC_COMPLETED} concluída(s), ${SYNC_CONFLICTS} conflito(s) e ${SYNC_FAILED} falha(s).`
        : `${SYNC_COMPLETED} alteração(ões) enviada(s).`
    );
    await updateConnectionUi();
    await renderSyncCenter();
  }

  queue = await getOfflineQueue();

  if(SYNC_COMPLETED){
    await refreshApplicationAfterSync();
  }

  if(SYNC_CONFLICTS){
    showToast(
      `${SYNC_COMPLETED} sincronizada(s). ${SYNC_CONFLICTS} conflito(s) precisam de revisão.`,
      'err'
    );
    openConflictCenter();
  }else if(SYNC_FAILED){
    showToast(
      `${SYNC_COMPLETED} sincronizada(s). ${SYNC_FAILED} operação(ões) tentarão novamente automaticamente.`,
      'err'
    );
  }else{
    showToast(`${SYNC_COMPLETED} alteração(ões) sincronizada(s).`);
  }

  SYNC_IN_PROGRESS = false;
  await updateConnectionUi();
  await renderSyncCenter();
  scheduleRetryFromQueue(queue);

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
  document.getElementById('connection-status')?.addEventListener('click',async ()=>{
    const conflicts = await conflictCount().catch(()=>0);
    if(conflicts) openConflictCenter();
    else openSyncCenter();
  });
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

