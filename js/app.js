/* ============================================================
   ESTADO GLOBAL
============================================================ */
const ICONS = {
  dashboard:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>`,
  ext:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3h6v3H9z"/><path d="M10 6h4l1 2h2v2H7V8h2z"/><path d="M8 10h8l-1 11H9z"/></svg>`,
  scan:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 8V5a1 1 0 0 1 1-1h3M20 8V5a1 1 0 0 0-1-1h-3M4 16v3a1 1 0 0 0 1 1h3M20 16v3a1 1 0 0 1-1 1h-3"/><line x1="4" y1="12" x2="20" y2="12"/></svg>`,
  report:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>`,
  settings:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  plus:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  photo:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="15" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M21 17l-5-5-4 4-2-2-5 5"/></svg>`,
  edit:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
  trash:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>`,
  qr:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><line x1="14" y1="14" x2="14" y2="21"/><line x1="21" y1="14" x2="21" y2="21"/><line x1="14" y1="17.5" x2="21" y2="17.5"/></svg>`,
  close:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  search:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  fire:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1 3-2 4-2 7a3 3 0 0 0 6 0c0-1-.3-1.8-.8-2.6 1.7 1.2 2.8 3.2 2.8 5.6a6 6 0 1 1-12 0c0-4 3-5.4 3-8.5C9 3.5 10 2.7 12 2z"/></svg>`,
  history:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v5h5"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/><path d="M12 7v5l4 2"/></svg>`,
  treatments:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M9 4h6"/><path d="M9 2h6a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2V4a2 2 0 0 1 2-2Z"/><path d="m8 13 2.2 2.2L16 9.5"/><path d="M8 18h8"/></svg>`,
  camera:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  download:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  printer:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
  upload:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  gridView:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
  listView:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/></svg>`,
  bell:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>`,
  alertTriangle:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M10.3 2.9 1.8 17a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 2.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
  checkCircle:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></svg>`,
  infoCircle:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/></svg>`,
  wifiOff:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="m1 1 22 22"/><path d="M16.72 11.06A10.94 10.94 0 0 1 21 14.5"/><path d="M5 12.55A11 11 0 0 1 8.17 10.6"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><path d="M12 20h.01"/><path d="M2.53 9a16 16 0 0 1 2.15-1.68"/><path d="M10.73 5.08A16 16 0 0 1 21.47 9"/></svg>`,
};

const CHECK_ITEMS = [
  "Placa de sinalização",
  "Área demarcada/sinalizada",
  "Etiqueta de inspeção",
  "Difusor/pistola",
  "Rodas/suporte/tripé",
  "Mangueiras",
  "Área/acesso desobstruídos",
  "Lacre do extintor",
  "Trava",
  "Anel de identificação de manutenção",
  "Base de concreto",
];

const NC_SETORES = ["Manutenção","Operação","SSMA","Almoxarifado","Engenharia","Outro"];
const NC_FORMAS_COMUNICACAO = ["WhatsApp","E-mail","Telefone","Verbal","Ordem de Serviço","Sistema"];
const NC_STATUS_OPTIONS = [
  "ENCAMINHADA",
  "EM ANDAMENTO",
  "RESOLVIDA"
];

const DEFAULT_USINAS = ["UTE Monte Cristo/Sucuba","UTE Floresta","UTE Distrito"];
const DEFAULT_AGENTS = ["Pó BC","Pó ABC","CO2","LGE","Água"];

let STATE = {
  config: { companyName:"Minha Empresa", logo:null, usinas:[...DEFAULT_USINAS], agents:[...DEFAULT_AGENTS], alertDays:30 },
  extinguishers: [],
  inspections: [],
  view: "dashboard",
  loaded: false,
};

/* ============================================================
   STORAGE — FIREBASE FIRESTORE POR DOCUMENTO + CACHE LOCAL
   Estrutura nova:
     settings/main
     extinguishers/{id}
     inspections/{id}

   Compatibilidade:
   - Lê o formato antigo em appData/* na primeira migração.
   - Mantém localStorage como cache/contingência.
============================================================ */
const firebaseConfig = {
  apiKey: "AIzaSyDWQ2s-VXRb6E3S4G5PvNwt0n5rcTtxOy4",
  authDomain: "controleextintores-ffd13.firebaseapp.com",
  projectId: "controleextintores-ffd13",
  storageBucket: "controleextintores-ffd13.firebasestorage.app",
  messagingSenderId: "835410897748",
  appId: "1:835410897748:web:30f618d9c1501ee79336c1",
  measurementId: "G-5DQC2PBW4L"
};

let FIREBASE_DB = null;
let FIREBASE_AUTH = null;
let FIREBASE_READY = false;
let AUTH_USER = null;
let CURRENT_USER_PROFILE = null;
let USERS_CACHE = [];
let RESTRICTED_EXTINGUISHER_SCOPE = new Map();

async function initFirebase(){
  try{
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js");
    const { getFirestore } = await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js");
    const { getAuth } = await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js");

    const app = initializeApp(firebaseConfig);
    FIREBASE_DB = getFirestore(app);
    FIREBASE_AUTH = getAuth(app);
    FIREBASE_READY = true;
    return true;
  }catch(e){
    console.error("Firebase init error", e);
    FIREBASE_READY = false;
    return false;
  }
}

function loadLocalKey(key, fallback){
  try{
    const raw = localStorage.getItem('extintores:'+key);
    return raw ? JSON.parse(raw) : fallback;
  }catch(e){
    return fallback;
  }
}

function saveLocalKey(key, val){
  try{
    localStorage.setItem('extintores:'+key, JSON.stringify(val));
  }catch(e){
    console.error("local cache save error", e);
  }
}

async function readLegacyAppData(key, fallback){
  if(!FIREBASE_READY || !FIREBASE_DB) return fallback;
  try{
    const { doc, getDoc } =
      await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js");
    const snap = await getDoc(doc(FIREBASE_DB, "appData", key));
    return snap.exists() ? (snap.data().value ?? fallback) : fallback;
  }catch(e){
    console.error("Legacy read error", key, e);
    return fallback;
  }
}

async function loadConfig(){
  const localConfig = loadLocalKey('config', STATE.config);
  if(!FIREBASE_READY || !FIREBASE_DB) return localConfig;

  try{
    const { doc, getDoc, setDoc, serverTimestamp } =
      await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js");

    const ref = doc(FIREBASE_DB, "settings", "main");
    const snap = await getDoc(ref);

    if(snap.exists()){
      const data = snap.data();
      const config = data.value || data.config || localConfig;
      saveLocalKey('config', config);
      return config;
    }

    // Migra configuração antiga, se existir.
    const legacy = await readLegacyAppData('config', localConfig);
    await setDoc(ref, { value: legacy, updatedAt: serverTimestamp() }, { merge: true });
    saveLocalKey('config', legacy);
    return legacy;
  }catch(e){
    console.error("Config load error", e);
    return localConfig;
  }
}

async function loadCollectionData(collectionName, localKey){
  const scopedLocalKey = hasAllUsinasAccess()
    ? localKey
    : `${localKey}:${AUTH_USER?.uid || 'user'}:${currentUserUsina()}`;

  const indexedValue = await readOfflineValue(scopedLocalKey,null);
  const localValue = indexedValue ?? loadLocalKey(scopedLocalKey, []);
  if(!FIREBASE_READY || !FIREBASE_DB) return localValue;

  try{
    const { collection, getDocs, query, where, doc, setDoc, serverTimestamp } =
      await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js");

    const collectionRef = collection(FIREBASE_DB, collectionName);
    const sourceQuery = hasAllUsinasAccess()
      ? collectionRef
      : query(collectionRef, where("usina", "==", currentUserUsina()));

    const snap = await getDocs(sourceQuery);

    if(!snap.empty){
      const items = snap.docs.map(d => ({ ...d.data(), id:d.data().id || d.id }));
      saveLocalKey(scopedLocalKey, items);
      await cacheOfflineValue(scopedLocalKey,items);
      return items;
    }

    // Migração do formato antigo é executada exclusivamente pelo Administrador.
    if(hasAllUsinasAccess()){
      const legacy = await readLegacyAppData(localKey, localValue);
      if(Array.isArray(legacy) && legacy.length){
        for(const item of legacy){
          if(!item || !item.id) continue;
          await setDoc(
            doc(FIREBASE_DB, collectionName, String(item.id)),
            {...item, migratedAt:serverTimestamp()},
            {merge:true}
          );
        }
        saveLocalKey(scopedLocalKey, legacy);
        return legacy;
      }
    }

    saveLocalKey(scopedLocalKey, []);
    return [];
  }catch(e){
    console.error("Scoped collection load error", collectionName, e);
    return localValue;
  }
}

async function syncCollectionData(collectionName, localKey, items){
  saveLocalKey(localKey, items);

  if(!FIREBASE_READY || !FIREBASE_DB){
    console.warn("Firebase indisponível; dados mantidos apenas no cache local.");
    return;
  }

  try{
    const { collection, getDocs, doc, setDoc, deleteDoc, serverTimestamp } =
      await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js");

    const colRef = collection(FIREBASE_DB, collectionName);
    const existingSnap = await getDocs(colRef);
    const currentIds = new Set(
      items.filter(item => item && item.id).map(item => String(item.id))
    );

    // Salva/atualiza cada registro em seu próprio documento.
    for(const item of items){
      if(!item || !item.id) continue;
      await setDoc(
        doc(FIREBASE_DB, collectionName, String(item.id)),
        { ...item, updatedAt: serverTimestamp() },
        { merge: true }
      );
    }

    // Remove da nuvem documentos que foram excluídos no sistema.
    for(const existing of existingSnap.docs){
      if(!currentIds.has(existing.id)){
        await deleteDoc(existing.ref);
      }
    }
  }catch(e){
    console.error("Collection sync error", collectionName, e);
    showToast("Dados salvos no dispositivo, mas a sincronização com a nuvem falhou.","err");
  }
}

async function migrateInspectionUsinaFields(){
  if(!hasAllUsinasAccess() || !FIREBASE_READY || !FIREBASE_DB) return;

  const extinguisherUsina = new Map(
    STATE.extinguishers.map(e=>[String(e.id), e.usina || ''])
  );

  const pending = STATE.inspections.filter(i=>!i.usina && extinguisherUsina.get(String(i.extinguisherId)));
  if(!pending.length) return;

  const { doc, setDoc, serverTimestamp } =
    await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js");

  for(const inspection of pending){
    inspection.usina = extinguisherUsina.get(String(inspection.extinguisherId));
    await setDoc(
      doc(FIREBASE_DB, "inspections", String(inspection.id)),
      {...inspection, usina:inspection.usina, updatedAt:serverTimestamp()},
      {merge:true}
    );
  }

  saveLocalKey('inspections', STATE.inspections);
  showToast(`${pending.length} inspeção(ões) antiga(s) vinculada(s) às respectivas usinas.`);
}

async function loadAll(){
  const [config, extinguishers, inspections] = await Promise.all([
    loadConfig(),
    loadCollectionData('extinguishers', 'extinguishers'),
    loadCollectionData('inspections', 'inspections'),
  ]);

  STATE.config = Object.assign(STATE.config, config);
  STATE.extinguishers = Array.isArray(extinguishers) ? extinguishers : [];
  STATE.inspections = Array.isArray(inspections) ? inspections : [];

  if(typeof reconcilePendingOperationsIntoState === 'function'){
    await reconcilePendingOperationsIntoState();
  }

  // Migração de dados antigos: campo "setor"/"sectors" -> "usina"/"usinas"
  let migrated = false;
  if(!STATE.config.usinas && Array.isArray(STATE.config.sectors)){
    STATE.config.usinas = STATE.config.sectors;
    delete STATE.config.sectors;
    migrated = true;
  }
  if(!STATE.config.usinas || STATE.config.usinas.length===0){
    STATE.config.usinas = [...DEFAULT_USINAS];
    migrated = true;
  }
  const renameIdx = STATE.config.usinas.indexOf("UTE Monte Cristo");
  if(renameIdx>-1){
    STATE.config.usinas[renameIdx] = "UTE Monte Cristo/Sucuba";
    migrated = true;
  }
  STATE.extinguishers.forEach(e=>{
    if(e.usina===undefined && e.setor!==undefined){
      e.usina = e.setor;
      delete e.setor;
      migrated = true;
    }
    if(e.usina==="UTE Monte Cristo"){
      e.usina = "UTE Monte Cristo/Sucuba";
      migrated = true;
    }
  });

  if(migrated){
    STATE.extinguishers.forEach(markPendingSync);
    await persistConfig();
    await persistExtinguishers();
  }

  await migrateInspectionUsinaFields();
  STATE.loaded = true;
  await cacheCurrentOfflineSession();
}

async function persistConfig(){
  if(CURRENT_USER_PROFILE && !can('settings')) throw new Error('PERMISSION_DENIED');

  scheduleOfflineSnapshotCache('config',STATE.config);
  await enqueueOfflineOperation({
    type:'config',
    id:`config:${AUTH_USER?.uid || 'user'}`,
    value:STATE.config
  });
}

function sanitizeRemoteValue(value){
  if(value===undefined) return undefined;

  if(typeof value==='number' && !Number.isFinite(value)){
    return null;
  }

  if(Array.isArray(value)){
    return value
      .map(item=>sanitizeRemoteValue(item))
      .filter(item=>item!==undefined);
  }

  if(value && typeof value==='object'){
    if(value instanceof Date) return value;

    const clean = {};
    Object.entries(value).forEach(([key,item])=>{
      const sanitized = sanitizeRemoteValue(item);
      if(sanitized!==undefined){
        clean[key] = sanitized;
      }
    });
    return clean;
  }

  return value;
}

function cleanRecordForRemote(record){
  if(!record) return record;
  const clean = sanitizeRemoteValue(record);
  delete clean._syncStatus;
  delete clean._localUpdatedAt;
  delete clean._localUserId;
  return clean;
}

function pendingRecords(items){
  return items.filter(item=>item?.id && item._syncStatus==='pending');
}

async function queueRecordUpsert(collectionName,record){
  const localVersion = Number(record?._localUpdatedAt || Date.now());
  await enqueueOfflineOperation({
    type:'upsert',
    collection:collectionName,
    documentId:String(record.id),
    item:cleanRecordForRemote(record),
    localVersion
  });
}

async function persistExtinguishers(){
  if(CURRENT_USER_PROFILE && !can('createExtinguishers') && !can('editExtinguishers') && !can('deleteExtinguishers')){
    throw new Error('PERMISSION_DENIED');
  }

  const cacheKey = scopedOfflineKey('extinguishers');
  scheduleOfflineSnapshotCache(cacheKey,STATE.extinguishers);

  const changed = pendingRecords(STATE.extinguishers).filter(item=>
    hasAllUsinasAccess() || item.usina===currentUserUsina()
  );

  for(const item of changed){
    await queueRecordUpsert('extinguishers',item);
  }
}

async function persistInspections(){
  if(CURRENT_USER_PROFILE && !can('createInspections')) throw new Error('PERMISSION_DENIED');

  const changed = pendingRecords(STATE.inspections).map(inspection=>{
    const scoped = inspectionWithScope(inspection);
    Object.assign(inspection,scoped);
    return inspection;
  }).filter(item=>
    hasAllUsinasAccess() || item.usina===currentUserUsina()
  );

  const cacheKey = scopedOfflineKey('inspections');
  scheduleOfflineSnapshotCache(cacheKey,STATE.inspections);

  for(const item of changed){
    await queueRecordUpsert('inspections',item);
  }
}

async function persistInspectionDeletion(inspectionId){
  scheduleOfflineSnapshotCache(
    scopedOfflineKey('inspections'),
    STATE.inspections
  );

  await discardQueuedUpsert('inspections',inspectionId);
  await enqueueOfflineOperation({
    type:'delete',
    collection:'inspections',
    documentId:String(inspectionId)
  });
}

/* ============================================================
   HELPERS
============================================================ */

function markPendingSync(record){
  if(!record) return record;
  record._syncStatus = 'pending';
  record._localUpdatedAt = Date.now();
  record._localUserId = AUTH_USER?.uid || '';
  if(typeof scheduleNotificationIndicatorRefresh==='function'){
    scheduleNotificationIndicatorRefresh();
  }
  return record;
}

function pendingSyncBadge(record){
  return record?._syncStatus === 'pending'
    ? `<span class="sync-record-badge">Aguardando sincronização</span>`
    : '';
}

function normalizeNcWorkflowStatus(status){
  const normalized = String(status || 'ENCAMINHADA').toUpperCase();

  if(['RESOLVIDA','ENCERRADA'].includes(normalized)){
    return 'RESOLVIDA';
  }

  if(['EM ANDAMENTO','AGUARDANDO VERIFICAÇÃO'].includes(normalized)){
    return 'EM ANDAMENTO';
  }

  return 'ENCAMINHADA';
}

function ncWorkflowRank(status){
  const normalized = normalizeNcWorkflowStatus(status);
  return {
    'ENCAMINHADA':1,
    'EM ANDAMENTO':2,
    'RESOLVIDA':3
  }[normalized] || 1;
}

function ncStatusMeta(status){
  const normalized = normalizeNcWorkflowStatus(status);
  const map = {
    'ENCAMINHADA': {label:'Encaminhada', cls:'encaminhada'},
    'EM ANDAMENTO': {label:'Em andamento', cls:'andamento'},
    'RESOLVIDA': {label:'Resolvida', cls:'resolvida'}
  };
  return map[normalized] || map.ENCAMINHADA;
}

function currentActorName(){
  return CURRENT_USER_PROFILE?.name || AUTH_USER?.email || 'Usuário';
}

function ncTreatmentSummary(inspection){
  const nc = inspection?.naoConformidade;
  if(!nc) return '';
  const meta = ncStatusMeta(nc.status);
  return `
    <div class="nc-history-summary">
      <span class="nc-status-chip ${meta.cls}">${meta.label}</span>
      <span>${escapeHtml(nc.setor || 'Setor não informado')}</span>
      <span>${escapeHtml(nc.responsavel || 'Responsável não informado')}</span>
    </div>
  `;
}


function ncDashboardRecords(status=''){
  const normalizedFilter = status ? normalizeNcWorkflowStatus(status) : '';

  return STATE.inspections
    .filter(inspection=>inspection?.naoConformidade)
    .filter(inspection=>
      !normalizedFilter ||
      normalizeNcWorkflowStatus(inspection.naoConformidade.status)===normalizedFilter
    )
    .sort((a,b)=>{
      const aDate = a.naoConformidade?.atualizadoEm ||
        a.naoConformidade?.criadoEm ||
        `${a.date || ''}T00:00:00`;
      const bDate = b.naoConformidade?.atualizadoEm ||
        b.naoConformidade?.criadoEm ||
        `${b.date || ''}T00:00:00`;
      return String(bDate).localeCompare(String(aDate));
    });
}

function ncDashboardStats(){
  const records = ncDashboardRecords();

  const counts = {
    pending:0,
    progress:0,
    resolved:0,
    total:records.length
  };

  records.forEach(inspection=>{
    const status = normalizeNcWorkflowStatus(
      inspection.naoConformidade?.status
    );

    if(status==='EM ANDAMENTO') counts.progress++;
    else if(status==='RESOLVIDA') counts.resolved++;
    else counts.pending++;
  });

  return counts;
}

function ncDashboardPercent(value,total){
  if(!total) return 0;
  return Math.round((value/total)*100);
}

function openNcDashboardList(status){
  const normalizedStatus = normalizeNcWorkflowStatus(status);
  const meta = ncStatusMeta(normalizedStatus);
  const records = ncDashboardRecords(normalizedStatus);

  const titleMap = {
    'ENCAMINHADA':'NC pendentes',
    'EM ANDAMENTO':'NC em andamento',
    'RESOLVIDA':'NC resolvidas'
  };

  openModal(`
    <div class="modal nc-dashboard-modal" style="max-width:1080px;">
      <div class="modal-head">
        <div>
          <h3>${titleMap[normalizedStatus] || 'Tratativas de não conformidade'}</h3>
          <div style="font-size:11.5px;color:var(--muted);margin-top:4px;">
            ${records.length} registro(s) no status ${escapeHtml(meta.label.toLowerCase())}
          </div>
        </div>
        <button class="icon-btn" id="m-close">${ICONS.close}</button>
      </div>

      <div class="modal-body">
        ${records.length ? `
          <div class="nc-dashboard-list">
            ${records.map(inspection=>{
              const extinguisher = STATE.extinguishers.find(
                item=>String(item.id)===String(inspection.extinguisherId)
              );
              const nc = inspection.naoConformidade || {};
              const statusMeta = ncStatusMeta(nc.status);

              return `
                <article class="nc-dashboard-list-item">
                  <div class="nc-dashboard-list-main">
                    <div class="nc-dashboard-list-top">
                      <div>
                        <div class="nc-dashboard-list-title">
                          Extintor #${escapeHtml(extinguisher?.numero || inspection.extinguisherId || '—')}
                        </div>
                        <div class="nc-dashboard-list-sub">
                          ${escapeHtml(extinguisher?.usina || inspection.usina || 'Usina não informada')}
                          ${extinguisher?.localizacao ? ` · ${escapeHtml(extinguisher.localizacao)}` : ''}
                        </div>
                      </div>
                      <span class="nc-status-chip ${statusMeta.cls}">${statusMeta.label}</span>
                    </div>

                    <div class="nc-dashboard-list-grid">
                      <div>
                        <span>Setor</span>
                        <b>${escapeHtml(nc.setor || 'Não informado')}</b>
                      </div>
                      <div>
                        <span>Responsável</span>
                        <b>${escapeHtml(nc.responsavel || 'Não informado')}</b>
                      </div>
                      <div>
                        <span>Encaminhamento</span>
                        <b>${fmtDate(nc.dataEncaminhamento || inspection.date)}</b>
                      </div>
                      <div>
                        <span>Comunicação</span>
                        <b>${escapeHtml(nc.formaComunicacao || 'Não informada')}</b>
                      </div>
                    </div>

                    ${nc.descricao ? `
                      <div class="nc-dashboard-list-description">
                        ${escapeHtml(nc.descricao)}
                      </div>
                    ` : ''}
                  </div>

                  <button
                    type="button"
                    class="btn btn-sm"
                    data-open-nc-history="${escapeHtml(String(inspection.extinguisherId || ''))}">
                    Ver histórico
                  </button>
                </article>
              `;
            }).join('')}
          </div>
        ` : `
          <div class="empty" style="padding:44px 20px;">
            <h4>Nenhum registro neste status</h4>
            <p>As tratativas aparecerão aqui quando forem registradas.</p>
          </div>
        `}
      </div>

      <div class="modal-foot">
        <button class="btn" id="m-back-dashboard">Voltar ao painel</button>
      </div>
    </div>
  `);

  document.getElementById('m-close')?.addEventListener('click',closeModal);
  document.getElementById('m-back-dashboard')?.addEventListener('click',closeModal);

  document.querySelectorAll('[data-open-nc-history]').forEach(button=>{
    button.addEventListener('click',()=>{
      const extId = button.dataset.openNcHistory;
      if(!extId){
        showToast('Extintor não localizado.','err');
        return;
      }
      openExtinguisherDetail(extId);
    });
  });
}

function fmtDateTime(value){
  if(!value) return '—';
  const date = new Date(value);
  if(Number.isNaN(date.getTime())) return '—';
  return date.toLocaleString('pt-BR',{
    day:'2-digit',
    month:'2-digit',
    year:'numeric',
    hour:'2-digit',
    minute:'2-digit'
  });
}

function ncTimelineEventMeta(event){
  const type = String(event?.tipo || '').toUpperCase();
  const status = normalizeNcWorkflowStatus(event?.status);

  if(type === 'DETECCAO'){
    return {title:'Não conformidade detectada', cls:'detected'};
  }

  if(type === 'ENCAMINHAMENTO'){
    return {title:'Tratativa encaminhada', cls:'forwarded'};
  }

  if(type === 'STATUS' && status === 'EM ANDAMENTO'){
    return {title:'Em andamento', cls:'andamento'};
  }

  if(type === 'STATUS' && status === 'RESOLVIDA'){
    return {title:'Resolvida', cls:'resolvida'};
  }

  return {title:'Tratativa encaminhada', cls:'forwarded'};
}

function ncTimelineDescription(event,nc){
  const type = String(event?.tipo || '').toUpperCase();
  const status = normalizeNcWorkflowStatus(event?.status);

  if(type === 'DETECCAO'){
    return 'A inspeção identificou um ou mais itens não conformes.';
  }

  if(type === 'ENCAMINHAMENTO'){
    const parts = [];
    const setor = event?.setor || nc?.setor;
    const responsavel = event?.responsavel || nc?.responsavel;
    const forma = event?.formaComunicacao || nc?.formaComunicacao;
    const numeroOS = event?.numeroOS || nc?.numeroOS;

    if(setor) parts.push(`Encaminhada ao setor ${setor}`);
    if(responsavel) parts.push(`recebida por ${responsavel}`);
    if(forma) parts.push(`comunicada por ${forma}`);
    if(numeroOS) parts.push(`OS ${numeroOS}`);

    return parts.length
      ? parts.join(' · ')
      : 'O encaminhamento da não conformidade foi registrado.';
  }

  if(type === 'STATUS' && status === 'EM ANDAMENTO'){
    return event?.observacao ||
      'O setor responsável iniciou o atendimento da não conformidade.';
  }

  if(type === 'STATUS' && status === 'RESOLVIDA'){
    return event?.observacao ||
      'A correção foi concluída, os itens foram regularizados e o histórico foi preservado.';
  }

  return event?.observacao || 'Registro da tratativa da não conformidade.';
}

function firstTimelineEvent(history,predicate){
  return history
    .filter(item=>item && item.data && predicate(item))
    .sort((a,b)=>new Date(a.data)-new Date(b.data))[0] || null;
}

function normalizedNcTimeline(inspection){
  const nc = inspection?.naoConformidade;
  if(!nc) return [];

  const history = Array.isArray(nc.historico)
    ? nc.historico.map(item=>({...item}))
    : [];

  const actor = nc.criadoPor || inspection.responsavel || 'Usuário';
  const createdAt = nc.criadoEm || `${inspection.date || todayISO()}T12:00:00`;
  const updatedAt = nc.atualizadoEm || createdAt;
  const resolutionAt = nc.dataResolucao
    ? `${nc.dataResolucao}T12:00:00`
    : updatedAt;

  const detected = firstTimelineEvent(
    history,
    item=>String(item.tipo).toUpperCase()==='DETECCAO'
  ) || {
    tipo:'DETECCAO',
    status:'NC DETECTADA',
    data:createdAt,
    usuario:actor,
    perfil:''
  };

  const forwarded = firstTimelineEvent(
    history,
    item=>{
      const type = String(item.tipo).toUpperCase();
      const status = normalizeNcWorkflowStatus(item.status);
      return type==='ENCAMINHAMENTO' ||
        (type==='STATUS' && status==='ENCAMINHADA');
    }
  ) || {
    tipo:'ENCAMINHAMENTO',
    status:'ENCAMINHADA',
    data:nc.dataEncaminhamento
      ? `${nc.dataEncaminhamento}T12:00:00`
      : createdAt,
    usuario:actor,
    perfil:'',
    setor:nc.setor || '',
    responsavel:nc.responsavel || '',
    formaComunicacao:nc.formaComunicacao || '',
    numeroOS:nc.numeroOS || '',
    observacao:nc.descricao || ''
  };

  const currentStatus = normalizeNcWorkflowStatus(nc.status);
  const rank = ncWorkflowRank(currentStatus);
  const timeline = [
    {...detected,tipo:'DETECCAO'},
    {
      ...forwarded,
      tipo:'ENCAMINHAMENTO',
      status:'ENCAMINHADA',
      setor:forwarded.setor || nc.setor || '',
      responsavel:forwarded.responsavel || nc.responsavel || '',
      formaComunicacao:forwarded.formaComunicacao || nc.formaComunicacao || '',
      numeroOS:forwarded.numeroOS || nc.numeroOS || ''
    }
  ];

  if(rank >= 2){
    const inProgress = firstTimelineEvent(
      history,
      item=>
        String(item.tipo).toUpperCase()==='STATUS' &&
        normalizeNcWorkflowStatus(item.status)==='EM ANDAMENTO'
    ) || {
      tipo:'STATUS',
      status:'EM ANDAMENTO',
      data:updatedAt,
      usuario:nc.atualizadoPor || actor,
      perfil:''
    };

    timeline.push({
      ...inProgress,
      tipo:'STATUS',
      status:'EM ANDAMENTO'
    });
  }

  if(rank >= 3){
    const resolved = firstTimelineEvent(
      history,
      item=>
        String(item.tipo).toUpperCase()==='STATUS' &&
        normalizeNcWorkflowStatus(item.status)==='RESOLVIDA'
    ) || {
      tipo:'STATUS',
      status:'RESOLVIDA',
      data:resolutionAt,
      usuario:nc.atualizadoPor || actor,
      perfil:''
    };

    timeline.push({
      ...resolved,
      tipo:'STATUS',
      status:'RESOLVIDA'
    });
  }

  return timeline;
}

function buildNcWorkflowHistory(existingNc,statusNc,details,nowIso,actor,role){
  const history = Array.isArray(existingNc?.historico)
    ? existingNc.historico.map(item=>({...item}))
    : [];

  const normalizedStatus = normalizeNcWorkflowStatus(statusNc);

  if(!history.some(item=>String(item.tipo).toUpperCase()==='DETECCAO')){
    history.push({
      tipo:'DETECCAO',
      status:'NC DETECTADA',
      data:existingNc?.criadoEm || nowIso,
      usuario:existingNc?.criadoPor || actor,
      perfil:role,
      observacao:'A inspeção identificou um ou mais itens não conformes.'
    });
  }

  const hasForwarding = history.some(item=>{
    const type = String(item.tipo).toUpperCase();
    const status = normalizeNcWorkflowStatus(item.status);
    return type==='ENCAMINHAMENTO' ||
      (type==='STATUS' && status==='ENCAMINHADA');
  });

  if(!hasForwarding){
    history.push({
      tipo:'ENCAMINHAMENTO',
      status:'ENCAMINHADA',
      data:nowIso,
      usuario:actor,
      perfil:role,
      setor:details.setor || '',
      responsavel:details.responsavel || '',
      formaComunicacao:details.formaComunicacao || '',
      numeroOS:details.numeroOS || '',
      observacao:details.descricao || ''
    });
  }

  if(ncWorkflowRank(normalizedStatus) >= 2){
    const hasProgress = history.some(item=>
      String(item.tipo).toUpperCase()==='STATUS' &&
      normalizeNcWorkflowStatus(item.status)==='EM ANDAMENTO'
    );

    if(!hasProgress){
      history.push({
        tipo:'STATUS',
        status:'EM ANDAMENTO',
        statusAnterior:'ENCAMINHADA',
        data:nowIso,
        usuario:actor,
        perfil:role
      });
    }
  }

  if(ncWorkflowRank(normalizedStatus) >= 3){
    const hasResolved = history.some(item=>
      String(item.tipo).toUpperCase()==='STATUS' &&
      normalizeNcWorkflowStatus(item.status)==='RESOLVIDA'
    );

    if(!hasResolved){
      history.push({
        tipo:'STATUS',
        status:'RESOLVIDA',
        statusAnterior:'EM ANDAMENTO',
        data:nowIso,
        usuario:actor,
        perfil:role,
        observacao:'A correção foi concluída e os itens foram regularizados.'
      });
    }
  }

  return history;
}

function renderNcTimeline(inspection){
  const nc = inspection?.naoConformidade;
  if(!nc) return '';

  const timeline = normalizedNcTimeline(inspection);

  return `
    <section class="nc-timeline-card">
      <div class="nc-timeline-head">
        <div>
          <div class="nc-timeline-title">Linha do tempo da tratativa</div>
          <div class="nc-timeline-sub">Rastreabilidade das ações, encaminhamentos e alterações de status.</div>
        </div>
        <span class="chip neutral">${timeline.length} registro(s)</span>
      </div>

      <div class="nc-timeline-list">
        ${timeline.map((event,index)=>{
          const meta = ncTimelineEventMeta(event);
          const isLast = index===timeline.length-1;
          return `
            <article class="nc-timeline-item ${isLast?'latest':''}">
              <div class="nc-timeline-axis">
                <span class="nc-timeline-dot ${meta.cls}"></span>
                ${!isLast?'<span class="nc-timeline-line"></span>':''}
              </div>

              <div class="nc-timeline-content">
                <div class="nc-timeline-top">
                  <div class="nc-timeline-event-title">${escapeHtml(meta.title)}</div>
                  <time>${fmtDateTime(event.data)}</time>
                </div>

                <p>${escapeHtml(ncTimelineDescription(event,nc))}</p>

                <div class="nc-timeline-meta">
                  <span>${escapeHtml(event.usuario || 'Usuário não identificado')}</span>
                  ${event.perfil?`<span>${escapeHtml(ROLE_LABELS[event.perfil] || event.perfil)}</span>`:''}
                  ${event.setor?`<span>Setor: ${escapeHtml(event.setor)}</span>`:''}
                </div>
              </div>
            </article>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

function changedNcFields(previous,next){
  if(!previous) return [];

  const fields = [
    ['setor','setor responsável'],
    ['responsavel','responsável'],
    ['cargo','cargo'],
    ['dataEncaminhamento','data do encaminhamento'],
    ['formaComunicacao','forma de comunicação'],
    ['numeroOS','número da OS'],
    ['descricao','descrição']
  ];

  return fields
    .filter(([key])=>String(previous?.[key] || '')!==String(next?.[key] || ''))
    .map(([,label])=>label);
}

function uid(prefix){ return prefix+"-"+Math.random().toString(36).slice(2,9).toUpperCase(); }
function fmtDate(d){ if(!d) return "—"; const dt=new Date(d+"T00:00:00"); if(isNaN(dt)) return "—"; return dt.toLocaleDateString('pt-BR'); }
function todayISO(){ return new Date().toISOString().slice(0,10); }
function daysUntil(dateStr){
  if(!dateStr) return null;
  const target = new Date(dateStr+"T00:00:00");
  const now = new Date(); now.setHours(0,0,0,0);
  return Math.round((target-now)/86400000);
}
function dateStatus(dateStr, allowAlert=true){
  const d = daysUntil(dateStr);
  if(d===null) return {label:"—", cls:"neutral", days:null};
  if(d<0) return {label:"VENCIDO", cls:"bad", days:d};
  if(allowAlert && d<=STATE.config.alertDays) return {label:"ALERTA", cls:"warn", days:d};
  return {label:"VÁLIDO", cls:"ok", days:d};
}
function lastInspection(extId){
  const list = STATE.inspections.filter(i=>i.extinguisherId===extId).sort((a,b)=> b.date.localeCompare(a.date));
  return list[0] || null;
}

function extinguisherDirectUrl(extId){
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  url.searchParams.set("ext", extId);
  return url.toString();
}

function extinguisherIdFromQrData(data){
  if(!data) return null;
  const raw = String(data).trim();

  // Compatibilidade com etiquetas antigas que guardavam somente o ID.
  if(STATE.extinguishers.some(e=>e.id===raw)) return raw;

  try{
    const url = new URL(raw);
    return url.searchParams.get("ext");
  }catch(e){
    return null;
  }
}

function openRequestedExtinguisherFromUrl(){
  if(!can('inspect')) return;
  const params = new URLSearchParams(window.location.search);
  const extId = params.get("ext");
  if(!extId) return;

  const ext = STATE.extinguishers.find(e=>String(e.id)===String(extId));
  if(ext){
    setTimeout(()=>openQuickInspectionPanel(ext.id), 80);
  }else{
    setTimeout(()=>{
      const restrictedUsina = RESTRICTED_EXTINGUISHER_SCOPE.get(String(extId));
      showToast(
        "O extintor não foi encontrado ou pertence a uma usina sem acesso para este usuário.",
        "err"
      );
    }, 100);
  }

  // Limpa o parâmetro para a ficha não reabrir a cada atualização.
  const cleanUrl = new URL(window.location.href);
  cleanUrl.searchParams.delete("ext");
  history.replaceState({}, "", cleanUrl.pathname + cleanUrl.search + cleanUrl.hash);
}
function escapeHtml(s){ s = (s===null||s===undefined) ? "" : String(s); return s.replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function showToast(msg, type="ok"){
  const root = document.getElementById('toast-root');
  const el = document.createElement('div');
  el.className = "toast "+type;
  el.textContent = msg;
  root.appendChild(el);
  setTimeout(()=>{ el.style.opacity="0"; el.style.transition="opacity .3s"; setTimeout(()=>el.remove(),300); }, 2600);
}
function fileToDataUrl(file, maxDim=(window.innerWidth<=860 ? 720 : 900)){
  return new Promise((resolve,reject)=>{
    const reader = new FileReader();
    reader.onload = ()=>{
      const img = new Image();
      img.onload = ()=>{
        let {width,height} = img;
        if(width>maxDim || height>maxDim){
          if(width>height){ height = Math.round(height*maxDim/width); width = maxDim; }
          else{ width = Math.round(width*maxDim/height); height = maxDim; }
        }
        const canvas = document.createElement('canvas');
        canvas.width=width; canvas.height=height;
        canvas.getContext('2d').drawImage(img,0,0,width,height);
        resolve(canvas.toDataURL('image/jpeg', window.innerWidth<=860 ? 0.68 : 0.76));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}


/* ============================================================
   CONTROLE DE ACESSO
============================================================ */
const ROLE_LABELS = {
  ADMINISTRADOR:'Administrador',
  INSPETOR:'Inspetor',
  VISUALIZADOR:'Visualizador'
};

const ROLE_PERMISSIONS = {
  ADMINISTRADOR:{
    dashboard:true, extinguishers:true, treatments:true, inspect:true, reports:true,
    settings:true, users:true,
    createExtinguishers:true, editExtinguishers:true, deleteExtinguishers:true,
    createInspections:true, editInspections:true, deleteInspections:true
  },
  INSPETOR:{
    dashboard:true, extinguishers:true, treatments:true, inspect:true, reports:true,
    settings:false, users:false,
    createExtinguishers:true, editExtinguishers:true, deleteExtinguishers:true,
    createInspections:true, editInspections:true, deleteInspections:false
  },
  VISUALIZADOR:{
    dashboard:true, extinguishers:true, treatments:true, inspect:false, reports:true,
    settings:false, users:false,
    createExtinguishers:false, editExtinguishers:false, deleteExtinguishers:false,
    createInspections:false, editInspections:false, deleteInspections:false
  }
};

function currentRole(){
  return CURRENT_USER_PROFILE?.role || 'VISUALIZADOR';
}
function can(permission){
  return !!ROLE_PERMISSIONS[currentRole()]?.[permission];
}
function requirePermission(permission, message="Você não possui permissão para realizar esta ação."){
  if(can(permission)) return true;
  showToast(message,"err");
  return false;
}

function extinguisherBelongsToCurrentScope(extinguisher){
  return !!extinguisher && (hasAllUsinasAccess() || extinguisher.usina===currentUserUsina());
}
function canCreateExtinguisher(){ return can('createExtinguishers'); }
function canEditExtinguisher(extinguisher){
  return can('editExtinguishers') && extinguisherBelongsToCurrentScope(extinguisher);
}
function canDeleteExtinguisher(extinguisher){
  return can('deleteExtinguishers') && extinguisherBelongsToCurrentScope(extinguisher);
}
function defaultViewForRole(){
  if(can('dashboard')) return 'dashboard';
  if(can('reports')) return 'reports';
  return 'reports';
}

function hasAllUsinasAccess(){
  return currentRole()==='ADMINISTRADOR';
}

function currentUserUsina(){
  return hasAllUsinasAccess() ? 'TODAS' : (CURRENT_USER_PROFILE?.usina || '');
}

function accessScopeLabel(){
  return hasAllUsinasAccess() ? 'Todas as usinas' : (currentUserUsina() || 'Usina não definida');
}

function validateCurrentUserScope(){
  if(!CURRENT_USER_PROFILE) throw new Error('PROFILE_NOT_FOUND');

  if(hasAllUsinasAccess()){
    CURRENT_USER_PROFILE.usina = 'TODAS';
    return true;
  }

  const assignedUsina = String(CURRENT_USER_PROFILE.usina || '').trim();
  if(!assignedUsina) throw new Error('USINA_NOT_ASSIGNED');

  const configuredUsinas = Array.isArray(STATE.config?.usinas) ? STATE.config.usinas : [];
  if(configuredUsinas.length && !configuredUsinas.includes(assignedUsina)){
    throw new Error('USINA_INVALID');
  }

  return true;
}

function applyUserDataScope(){
  RESTRICTED_EXTINGUISHER_SCOPE = new Map();

  if(hasAllUsinasAccess()) return;

  const allowedUsina = currentUserUsina();

  // Defesa adicional na interface, embora o Firestore já entregue somente a usina autorizada.
  STATE.extinguishers = STATE.extinguishers.filter(e=>e.usina===allowedUsina);
  const allowedIds = new Set(STATE.extinguishers.map(e=>String(e.id)));

  STATE.inspections = STATE.inspections.filter(i=>
    i.usina===allowedUsina && allowedIds.has(String(i.extinguisherId))
  );

  extFilters.usina = allowedUsina;
  reportFilters.usina = allowedUsina;
}

function inspectionWithScope(inspection){
  if(!inspection) return inspection;
  const ext = STATE.extinguishers.find(e=>String(e.id)===String(inspection.extinguisherId));
  return {
    ...inspection,
    usina: inspection.usina || ext?.usina || currentUserUsina()
  };
}

async function upsertScopedInspections(items){
  if(!FIREBASE_READY || !FIREBASE_DB) return;

  const { doc, setDoc, serverTimestamp } =
    await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js");

  for(const item of items){
    if(!item?.id) continue;
    const scoped = inspectionWithScope(item);
    await setDoc(
      doc(FIREBASE_DB, "inspections", String(scoped.id)),
      {...scoped, updatedAt:serverTimestamp()},
      {merge:true}
    );
  }
}
function roleClass(role){
  if(role==='ADMINISTRADOR') return 'admin';
  if(role==='INSPETOR') return 'inspector';
  return 'viewer';
}
function normalizeRole(role){
  return ['ADMINISTRADOR','INSPETOR','VISUALIZADOR'].includes(role) ? role : 'VISUALIZADOR';
}

const USER_STATUS_LABELS = {
  PENDENTE:'Aguardando aprovação',
  ATIVO:'Ativo',
  REJEITADO:'Rejeitado',
  BLOQUEADO:'Bloqueado'
};

function normalizeUserStatus(profile){
  const explicitStatus = String(profile?.status || '').toUpperCase();

  if(['PENDENTE','ATIVO','REJEITADO','BLOQUEADO'].includes(explicitStatus)){
    return explicitStatus;
  }

  return profile?.active === false ? 'BLOQUEADO' : 'ATIVO';
}

function userStatusClass(status){
  const normalized = normalizeUserStatus({status});
  if(normalized==='ATIVO') return 'active';
  if(normalized==='PENDENTE') return 'pending';
  if(normalized==='REJEITADO') return 'rejected';
  return 'blocked';
}

function userCanEnterSystem(profile){
  return (
    normalizeUserStatus(profile)==='ATIVO' &&
    profile?.active !== false &&
    ['ADMINISTRADOR','INSPETOR','VISUALIZADOR'].includes(profile?.role)
  );
}

function formatUserTimestamp(value){
  const timestamp = notificationTimestamp(value);
  if(!timestamp) return 'Data não disponível';

  return new Date(timestamp).toLocaleString('pt-BR',{
    day:'2-digit',
    month:'2-digit',
    year:'numeric',
    hour:'2-digit',
    minute:'2-digit'
  });
}

async function loadCurrentUserProfile(){
  if(!AUTH_USER || !FIREBASE_DB) return null;
  const { doc, getDoc, setDoc, collection, getDocs, query, limit, serverTimestamp } =
    await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js");

  const ref = doc(FIREBASE_DB, "users", AUTH_USER.uid);
  const snap = await getDoc(ref);

  if(snap.exists()){
    const profile = {uid:AUTH_USER.uid, ...snap.data()};
    const status = normalizeUserStatus(profile);
    const activeRole = ['ADMINISTRADOR','INSPETOR','VISUALIZADOR'].includes(profile.role)
      ? profile.role
      : '';

    CURRENT_USER_PROFILE = {
      ...profile,
      status,
      role:activeRole,
      usina: activeRole==='ADMINISTRADOR' ? 'TODAS' : (profile.usina || ''),
      active:status==='ATIVO' && profile.active !== false
    };

    await cacheOfflineValue('lastAuthUser',{
      uid:AUTH_USER.uid,
      email:AUTH_USER.email || '',
      displayName:AUTH_USER.displayName || ''
    });

    await cacheOfflineValue(
      `profile:${AUTH_USER.uid}`,
      CURRENT_USER_PROFILE
    );

    return CURRENT_USER_PROFILE;
  }

  // Compatibilidade inicial: o primeiro usuário autenticado torna-se administrador.
  const firstUsers = await getDocs(query(collection(FIREBASE_DB, "users"), limit(1)));
  if(firstUsers.empty){
    const profile = {
      uid:AUTH_USER.uid,
      name:AUTH_USER.displayName || AUTH_USER.email?.split('@')[0] || 'Administrador',
      email:AUTH_USER.email || '',
      role:'ADMINISTRADOR',
      usina:'TODAS',
      status:'ATIVO',
      active:true,
      approvedAt:serverTimestamp(),
      approvedBy:AUTH_USER.uid,
      createdAt:serverTimestamp(),
      updatedAt:serverTimestamp()
    };
    await setDoc(ref, profile, {merge:true});
    CURRENT_USER_PROFILE = {...profile, createdAt:null, updatedAt:null};
    return CURRENT_USER_PROFILE;
  }

  throw new Error("PROFILE_NOT_FOUND");
}

async function loadUsers(){
  if(!can('users')) return [];
  const { collection, getDocs } =
    await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js");
  const snap = await getDocs(collection(FIREBASE_DB, "users"));
  USERS_CACHE = snap.docs
    .map(d=>({
      uid:d.id,
      ...d.data(),
      status:normalizeUserStatus(d.data())
    }))
    .sort((a,b)=>{
      const statusOrder = {
        PENDENTE:0,
        REJEITADO:1,
        BLOQUEADO:2,
        ATIVO:3
      };

      const statusDifference =
        (statusOrder[normalizeUserStatus(a)] ?? 9) -
        (statusOrder[normalizeUserStatus(b)] ?? 9);

      if(statusDifference!==0) return statusDifference;

      return (a.name||a.email||'').localeCompare(
        b.name||b.email||'',
        'pt-BR'
      );
    });
  return USERS_CACHE;
}

/* ============================================================
   RENDER SHELL
============================================================ */
const NAV_ITEMS = [
  {id:'dashboard', label:'Painel', icon:'dashboard', permission:'dashboard'},
  {id:'extinguishers', label:'Extintores', icon:'ext', permission:'extinguishers'},
  {id:'treatments', label:'Tratativas', icon:'treatments', permission:'treatments'},
  {id:'inspect', label:'Inspecionar', icon:'scan', permission:'inspect'},
  {id:'reports', label:'Relatórios', icon:'report', permission:'reports'},
  {id:'users', label:'Usuários', icon:'history', permission:'users'},
  {id:'settings', label:'Configurações', icon:'settings', permission:'settings'},
];

function allowedNavItems(){
  return NAV_ITEMS.filter(n=>can(n.permission));
}

const QUICK_ACTIONS = [
  {
    id:'new-extinguisher',
    title:'Novo extintor',
    description:'Cadastrar um equipamento',
    icon:'plus',
    permission:'createExtinguishers',
    tone:'accent'
  },
  {
    id:'new-inspection',
    title:'Nova inspeção',
    description:'Selecionar um extintor',
    icon:'history',
    permission:'createInspections',
    tone:'primary'
  },
  {
    id:'scan-qr',
    title:'Escanear QR Code',
    description:'Abrir a câmera do aparelho',
    icon:'scan',
    permission:'inspect',
    tone:'primary'
  },
  {
    id:'pending-treatments',
    title:'NC pendentes',
    description:'Acompanhar tratativas abertas',
    icon:'treatments',
    permission:'treatments',
    tone:'warning'
  },
  {
    id:'reports',
    title:'Gerar relatório',
    description:'Abrir relatórios e etiquetas',
    icon:'report',
    permission:'reports',
    tone:'neutral'
  }
];

function allowedQuickActions(){
  return QUICK_ACTIONS.filter(action=>can(action.permission));
}

function quickActionBadge(actionId){
  if(actionId!=='pending-treatments') return '';
  const count = ncDashboardStats().pending;
  return count
    ? `<span class="quick-action-badge">${count}</span>`
    : '';
}

function quickActionButtonsHtml(context='dashboard'){
  return allowedQuickActions().map(action=>`
    <button
      type="button"
      class="${context==='mobile'?'mobile-quick-action':'dashboard-quick-action'} ${action.tone}"
      data-quick-action="${action.id}">
      <span class="quick-action-icon">${ICONS[action.icon]}</span>
      <span class="quick-action-copy">
        <b>${escapeHtml(action.title)}</b>
        <small>${escapeHtml(action.description)}</small>
      </span>
      ${quickActionBadge(action.id)}
    </button>
  `).join('');
}

function dashboardQuickActionsHtml(){
  const actions = allowedQuickActions();
  if(!actions.length) return '';

  return `
    <section class="dashboard-quick-panel">
      <div class="dashboard-quick-head">
        <div>
          <span>Acesso direto</span>
          <h2>Ações rápidas</h2>
        </div>
        <small>${escapeHtml(accessScopeLabel())}</small>
      </div>
      <div class="dashboard-quick-grid">
        ${quickActionButtonsHtml('dashboard')}
      </div>
    </section>
  `;
}

function mobileQuickActionsHtml(){
  const actions = allowedQuickActions();
  if(!actions.length) return '';

  return `
    <button
      type="button"
      class="mobile-quick-fab"
      id="mobile-quick-fab"
      aria-label="Abrir ações rápidas"
      aria-expanded="false"
      aria-controls="mobile-quick-sheet">
      ${ICONS.plus}
    </button>

    <div
      class="mobile-quick-backdrop"
      id="mobile-quick-backdrop"
      aria-hidden="true">
    </div>

    <section
      class="mobile-quick-sheet"
      id="mobile-quick-sheet"
      role="dialog"
      aria-modal="true"
      aria-label="Ações rápidas"
      aria-hidden="true">
      <div class="mobile-quick-handle"></div>

      <div class="mobile-quick-sheet-head">
        <div>
          <span>Acesso direto</span>
          <h2>Ações rápidas</h2>
          <p>${escapeHtml(accessScopeLabel())}</p>
        </div>
        <button
          type="button"
          class="icon-btn mobile-quick-close"
          id="mobile-quick-close"
          aria-label="Fechar ações rápidas">
          ${ICONS.close}
        </button>
      </div>

      <div class="mobile-quick-list">
        ${quickActionButtonsHtml('mobile')}
      </div>
    </section>
  `;
}

function openMobileQuickActions(){
  const sheet = document.getElementById('mobile-quick-sheet');
  const backdrop = document.getElementById('mobile-quick-backdrop');
  const fab = document.getElementById('mobile-quick-fab');
  if(!sheet || !backdrop || !fab) return;

  sheet.classList.add('show');
  backdrop.classList.add('show');
  fab.classList.add('open');
  fab.setAttribute('aria-expanded','true');
  sheet.setAttribute('aria-hidden','false');
  backdrop.setAttribute('aria-hidden','false');
  document.body.classList.add('quick-actions-open');
}

function closeMobileQuickActions(){
  const sheet = document.getElementById('mobile-quick-sheet');
  const backdrop = document.getElementById('mobile-quick-backdrop');
  const fab = document.getElementById('mobile-quick-fab');

  sheet?.classList.remove('show');
  backdrop?.classList.remove('show');
  fab?.classList.remove('open');
  fab?.setAttribute('aria-expanded','false');
  sheet?.setAttribute('aria-hidden','true');
  backdrop?.setAttribute('aria-hidden','true');
  document.body.classList.remove('quick-actions-open');
}

function navigateFromQuickAction(view, afterRender=null){
  stopScanner?.();
  closeMobileQuickActions();
  STATE.view = view;
  renderShell();
  window.scrollTo({top:0,behavior:'auto'});
  if(typeof afterRender==='function') afterRender();
}

function runQuickAction(actionId){
  closeMobileQuickActions();

  if(actionId==='new-extinguisher'){
    if(!canCreateExtinguisher()){
      showToast('Você não possui permissão para cadastrar extintores.','err');
      return;
    }
    openExtinguisherModal();
    return;
  }

  if(actionId==='new-inspection'){
    if(!requirePermission('createInspections')) return;

    navigateFromQuickAction('inspect',()=>{
      const search = document.getElementById('manual-search');
      search?.focus();
      search?.scrollIntoView({behavior:'smooth',block:'center'});
    });
    return;
  }

  if(actionId==='scan-qr'){
    if(!requirePermission('inspect')) return;

    navigateFromQuickAction('inspect',()=>{
      startScanner();
    });
    return;
  }

  if(actionId==='pending-treatments'){
    if(!requirePermission('treatments')) return;

    NC_TREATMENT_FILTERS = {
      status:'ENCAMINHADA',
      usina:hasAllUsinasAccess()?'':currentUserUsina(),
      setor:'',
      search:'',
      sort:'priority'
    };
    navigateFromQuickAction('treatments');
    return;
  }

  if(actionId==='reports'){
    if(!requirePermission('reports')) return;
    navigateFromQuickAction('reports');
  }
}

function bindQuickActionButtons(root=document){
  root.querySelectorAll('[data-quick-action]').forEach(button=>{
    button.addEventListener('click',()=>{
      runQuickAction(button.dataset.quickAction);
    });
  });
}

function bindMobileQuickActions(){
  const fab = document.getElementById('mobile-quick-fab');
  const sheet = document.getElementById('mobile-quick-sheet');

  fab?.addEventListener('click',()=>{
    sheet?.classList.contains('show')
      ? closeMobileQuickActions()
      : openMobileQuickActions();
  });

  document.getElementById('mobile-quick-backdrop')
    ?.addEventListener('click',closeMobileQuickActions);

  document.getElementById('mobile-quick-close')
    ?.addEventListener('click',closeMobileQuickActions);

  bindQuickActionButtons(document.getElementById('mobile-quick-sheet') || document);
}

/* ============================================================
   CENTRAL DE NOTIFICAÇÕES
============================================================ */
let NOTIFICATION_FILTER = 'all';
let NOTIFICATION_UNREAD_ONLY = false;
let NOTIFICATION_CACHE = [];
let NOTIFICATION_REFRESH_TIMER = null;
let NOTIFICATION_POLL_TIMER = null;
let NOTIFICATION_REMOTE_READ_IDS = new Set();
let NOTIFICATION_READ_SYNC_PROMISE = null;
let NOTIFICATION_READ_SYNCED_AT = 0;
let NOTIFICATION_READ_STATE_UNSUBSCRIBE = null;

const NOTIFICATION_READ_SYNC_CACHE_MS = 15000;
const NOTIFICATION_READ_PRUNE_INTERVAL_MS = 24 * 60 * 60 * 1000;
const NOTIFICATION_READ_MAX_IDS = 500;

function notificationReadStorageKey(){
  return `extintores:notifications:read:${AUTH_USER?.uid || 'local'}`;
}

function notificationPendingReadStorageKey(){
  return `extintores:notifications:read-pending:${AUTH_USER?.uid || 'local'}`;
}

function notificationPruneStorageKey(){
  return `extintores:notifications:pruned-at:${AUTH_USER?.uid || 'local'}`;
}

function parseNotificationReadIds(value){
  if(!Array.isArray(value)) return new Set();

  return new Set(
    value
      .map(item=>String(item || '').trim())
      .filter(Boolean)
      .slice(-NOTIFICATION_READ_MAX_IDS)
  );
}

function loadLocalNotificationReadIds(){
  try{
    return parseNotificationReadIds(
      JSON.parse(
        localStorage.getItem(notificationReadStorageKey()) || '[]'
      )
    );
  }catch(error){
    return new Set();
  }
}

function loadPendingNotificationReadIds(){
  try{
    return parseNotificationReadIds(
      JSON.parse(
        localStorage.getItem(notificationPendingReadStorageKey()) || '[]'
      )
    );
  }catch(error){
    return new Set();
  }
}

function saveNotificationReadIds(readIds){
  try{
    const normalized = [
      ...new Set(
        [...readIds]
          .map(item=>String(item || '').trim())
          .filter(Boolean)
      )
    ].slice(-NOTIFICATION_READ_MAX_IDS);

    localStorage.setItem(
      notificationReadStorageKey(),
      JSON.stringify(normalized)
    );
  }catch(error){
    console.warn(
      'Não foi possível salvar o estado local das notificações.',
      error
    );
  }
}

function savePendingNotificationReadIds(readIds){
  try{
    const normalized = [
      ...new Set(
        [...readIds]
          .map(item=>String(item || '').trim())
          .filter(Boolean)
      )
    ].slice(-NOTIFICATION_READ_MAX_IDS);

    localStorage.setItem(
      notificationPendingReadStorageKey(),
      JSON.stringify(normalized)
    );
  }catch(error){
    console.warn(
      'Não foi possível salvar as leituras pendentes.',
      error
    );
  }
}

function loadNotificationReadIds(){
  return new Set([
    ...loadLocalNotificationReadIds(),
    ...NOTIFICATION_REMOTE_READ_IDS,
    ...loadPendingNotificationReadIds()
  ]);
}

function applyNotificationReadStateToCache(){
  const readIds = loadNotificationReadIds();

  NOTIFICATION_CACHE = NOTIFICATION_CACHE.map(item=>({
    ...item,
    read:readIds.has(String(item.id))
  }));

  updateNotificationBell(NOTIFICATION_CACHE);
}

async function flushPendingNotificationReadIds(){
  if(
    !AUTH_USER ||
    !FIREBASE_DB ||
    !navigator.onLine
  ){
    return false;
  }

  const pendingIds = loadPendingNotificationReadIds();
  if(!pendingIds.size) return true;

  const {
    doc,
    runTransaction,
    serverTimestamp
  } = await import(
    'https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js'
  );

  const stateReference = doc(
    FIREBASE_DB,
    'notificationStates',
    AUTH_USER.uid
  );

  const idsToSend = [...pendingIds];

  const mergedIds = await runTransaction(
    FIREBASE_DB,
    async transaction=>{
      const snapshot = await transaction.get(stateReference);
      const existingIds = snapshot.exists()
        ? parseNotificationReadIds(snapshot.data()?.readIds)
        : new Set();

      const merged = [
        ...new Set([
          ...existingIds,
          ...idsToSend
        ])
      ].slice(-NOTIFICATION_READ_MAX_IDS);

      transaction.set(
        stateReference,
        {
          uid:AUTH_USER.uid,
          readIds:merged,
          updatedAt:serverTimestamp()
        },
        {merge:true}
      );

      return merged;
    }
  );

  NOTIFICATION_REMOTE_READ_IDS = new Set(mergedIds);

  const latestPending = loadPendingNotificationReadIds();
  idsToSend.forEach(id=>latestPending.delete(id));
  savePendingNotificationReadIds(latestPending);

  saveNotificationReadIds(
    new Set([
      ...loadLocalNotificationReadIds(),
      ...mergedIds,
      ...latestPending
    ])
  );

  NOTIFICATION_READ_SYNCED_AT = Date.now();
  applyNotificationReadStateToCache();
  return true;
}

async function syncNotificationReadStateFromCloud({
  force=false
}={}){
  if(
    !AUTH_USER ||
    !FIREBASE_DB ||
    !navigator.onLine
  ){
    return loadNotificationReadIds();
  }

  if(
    !force &&
    Date.now()-NOTIFICATION_READ_SYNCED_AT <
      NOTIFICATION_READ_SYNC_CACHE_MS
  ){
    return loadNotificationReadIds();
  }

  if(NOTIFICATION_READ_SYNC_PROMISE){
    return NOTIFICATION_READ_SYNC_PROMISE;
  }

  NOTIFICATION_READ_SYNC_PROMISE = (async()=>{
    try{
      await flushPendingNotificationReadIds();

      const {
        doc,
        getDocFromServer
      } = await import(
        'https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js'
      );

      const snapshot = await getDocFromServer(
        doc(
          FIREBASE_DB,
          'notificationStates',
          AUTH_USER.uid
        )
      );

      NOTIFICATION_REMOTE_READ_IDS = snapshot.exists()
        ? parseNotificationReadIds(snapshot.data()?.readIds)
        : new Set();

      const combined = new Set([
        ...loadLocalNotificationReadIds(),
        ...NOTIFICATION_REMOTE_READ_IDS,
        ...loadPendingNotificationReadIds()
      ]);

      saveNotificationReadIds(combined);
      NOTIFICATION_READ_SYNCED_AT = Date.now();
      return combined;
    }catch(error){
      console.warn(
        'Não foi possível sincronizar as leituras das notificações.',
        error
      );
      return loadNotificationReadIds();
    }finally{
      NOTIFICATION_READ_SYNC_PROMISE = null;
    }
  })();

  return NOTIFICATION_READ_SYNC_PROMISE;
}

async function pruneNotificationReadState(activeNotificationIds){
  if(
    !AUTH_USER ||
    !FIREBASE_DB ||
    !navigator.onLine
  ){
    return;
  }

  const now = Date.now();
  const lastPrune = Number(
    localStorage.getItem(notificationPruneStorageKey()) || 0
  );

  const currentReadCount = loadNotificationReadIds().size;

  if(
    now-lastPrune < NOTIFICATION_READ_PRUNE_INTERVAL_MS &&
    currentReadCount < 450
  ){
    return;
  }

  const {
    doc,
    runTransaction,
    serverTimestamp
  } = await import(
    'https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js'
  );

  const stateReference = doc(
    FIREBASE_DB,
    'notificationStates',
    AUTH_USER.uid
  );

  const activeIds = new Set(
    [...activeNotificationIds].map(id=>String(id))
  );

  const retainedIds = await runTransaction(
    FIREBASE_DB,
    async transaction=>{
      const snapshot = await transaction.get(stateReference);
      const serverIds = snapshot.exists()
        ? parseNotificationReadIds(snapshot.data()?.readIds)
        : new Set();

      const pendingIds = loadPendingNotificationReadIds();

      const retained = [
        ...new Set([
          ...serverIds,
          ...pendingIds
        ])
      ]
        .filter(id=>activeIds.has(String(id)))
        .slice(-NOTIFICATION_READ_MAX_IDS);

      transaction.set(
        stateReference,
        {
          uid:AUTH_USER.uid,
          readIds:retained,
          updatedAt:serverTimestamp(),
          prunedAt:serverTimestamp()
        },
        {merge:true}
      );

      return retained;
    }
  );

  NOTIFICATION_REMOTE_READ_IDS = new Set(retainedIds);

  const pendingIds = loadPendingNotificationReadIds();
  const retainedPending = new Set(
    [...pendingIds].filter(id=>activeIds.has(String(id)))
  );

  savePendingNotificationReadIds(retainedPending);
  saveNotificationReadIds(
    new Set([
      ...retainedIds,
      ...retainedPending
    ])
  );

  localStorage.setItem(
    notificationPruneStorageKey(),
    String(now)
  );

  applyNotificationReadStateToCache();
}

function queueNotificationReadIds(notificationIds){
  const ids = [...notificationIds]
    .map(id=>String(id || '').trim())
    .filter(Boolean);

  if(!ids.length) return Promise.resolve(false);

  const localIds = loadNotificationReadIds();
  const pendingIds = loadPendingNotificationReadIds();

  ids.forEach(id=>{
    localIds.add(id);
    pendingIds.add(id);
    NOTIFICATION_REMOTE_READ_IDS.add(id);
  });

  saveNotificationReadIds(localIds);
  savePendingNotificationReadIds(pendingIds);
  applyNotificationReadStateToCache();

  return flushPendingNotificationReadIds().catch(error=>{
    console.warn(
      'A leitura será sincronizada quando a conexão estiver disponível.',
      error
    );
    return false;
  });
}

function markNotificationRead(notificationId){
  return queueNotificationReadIds([notificationId]);
}

function markAllNotificationsRead(items=NOTIFICATION_CACHE){
  return queueNotificationReadIds(
    items.map(item=>String(item.id))
  );
}

async function startNotificationReadStateListener(){
  if(
    NOTIFICATION_READ_STATE_UNSUBSCRIBE
  ){
    NOTIFICATION_READ_STATE_UNSUBSCRIBE();
    NOTIFICATION_READ_STATE_UNSUBSCRIBE = null;
  }

  if(
    !AUTH_USER ||
    !FIREBASE_DB ||
    !navigator.onLine
  ){
    return;
  }

  try{
    const {
      doc,
      onSnapshot
    } = await import(
      'https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js'
    );

    const reference = doc(
      FIREBASE_DB,
      'notificationStates',
      AUTH_USER.uid
    );

    NOTIFICATION_READ_STATE_UNSUBSCRIBE = onSnapshot(
      reference,
      snapshot=>{
        NOTIFICATION_REMOTE_READ_IDS = snapshot.exists()
          ? parseNotificationReadIds(snapshot.data()?.readIds)
          : new Set();

        const combined = new Set([
          ...loadLocalNotificationReadIds(),
          ...NOTIFICATION_REMOTE_READ_IDS,
          ...loadPendingNotificationReadIds()
        ]);

        saveNotificationReadIds(combined);
        NOTIFICATION_READ_SYNCED_AT = Date.now();
        applyNotificationReadStateToCache();
      },
      error=>{
        console.warn(
          'Listener de notificações indisponível.',
          error
        );
      }
    );
  }catch(error){
    console.warn(
      'Não foi possível iniciar a sincronização em tempo real.',
      error
    );
  }
}

function notificationSeverityMeta(severity){
  const map = {
    critical:{
      label:'Crítica',
      icon:'alertTriangle',
      className:'critical'
    },
    attention:{
      label:'Atenção',
      icon:'bell',
      className:'attention'
    },
    nc:{
      label:'Tratativa',
      icon:'treatments',
      className:'nc'
    },
    access:{
      label:'Novo acesso',
      icon:'history',
      className:'access'
    },
    system:{
      label:'Sistema',
      icon:'infoCircle',
      className:'system'
    }
  };

  return map[severity] || map.system;
}

function notificationTimestamp(value){
  if(!value) return 0;

  if(value instanceof Date){
    return Number.isNaN(value.getTime()) ? 0 : value.getTime();
  }

  if(typeof value?.toMillis==='function'){
    const milliseconds = value.toMillis();
    return Number.isFinite(milliseconds) ? milliseconds : 0;
  }

  if(typeof value?.seconds==='number'){
    return (
      value.seconds * 1000 +
      Math.floor(Number(value.nanoseconds || 0) / 1000000)
    );
  }

  const parsed = new Date(value).getTime();
  return Number.isNaN(parsed) ? 0 : parsed;
}

function notificationDateLabel(value){
  const timestamp = notificationTimestamp(value);
  if(!timestamp) return '';

  return new Date(timestamp).toLocaleString('pt-BR',{
    day:'2-digit',
    month:'2-digit',
    year:'numeric',
    hour:'2-digit',
    minute:'2-digit'
  });
}

function notificationReferenceTimestamp(item){
  return notificationTimestamp(
    item?.sortAt ||
    item?.eventAt ||
    item?.createdAt
  );
}

function notificationDateFromIsoDay(dateValue,dayOffset=0){
  if(!dateValue) return '';

  const date = new Date(`${dateValue}T12:00:00`);
  if(Number.isNaN(date.getTime())) return '';

  date.setDate(date.getDate()+Number(dayOffset || 0));
  return date.toISOString();
}

function sortNotificationsNewestFirst(items){
  return [...items].sort((a,b)=>{
    const dateDifference =
      notificationReferenceTimestamp(b) -
      notificationReferenceTimestamp(a);

    if(dateDifference!==0) return dateDifference;

    // Desempate neutro: não utiliza categoria, criticidade ou urgência.
    // Assim, o filtro "Todas" nunca forma blocos por tipo.
    const idDifference = String(b.id || '').localeCompare(
      String(a.id || ''),
      'pt-BR',
      {numeric:true,sensitivity:'base'}
    );

    if(idDifference!==0) return idDifference;

    return String(a.title || '').localeCompare(
      String(b.title || ''),
      'pt-BR',
      {sensitivity:'base'}
    );
  });
}

function notificationNcElapsedDays(inspection){
  const nc = inspection?.naoConformidade || {};
  const startValue = nc.dataEncaminhamento || inspection?.date;
  if(!startValue) return 0;

  const start = new Date(`${startValue}T12:00:00`);
  if(Number.isNaN(start.getTime())) return 0;

  return Math.max(
    0,
    Math.floor((Date.now()-start.getTime())/86400000)
  );
}

function notificationScopeText(extinguisher,inspection=null){
  return [
    extinguisher?.usina || inspection?.usina || '',
    extinguisher?.localizacao || ''
  ].filter(Boolean).join(' · ');
}

function addNotificationItem(items,item){
  const fallbackDate = new Date().toISOString();

  items.push({
    createdAt:fallbackDate,
    sortAt:item?.sortAt || item?.eventAt || item?.createdAt || fallbackDate,
    actionLabel:'Abrir',
    ...item
  });
}

async function loadPendingUsersForNotifications(){
  if(
    currentRole()!=='ADMINISTRADOR' ||
    !FIREBASE_DB ||
    !navigator.onLine
  ){
    return [];
  }

  try{
    const {collection,getDocs} = await import(
      'https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js'
    );

    const snapshot = await getDocs(
      collection(FIREBASE_DB,'users')
    );

    return snapshot.docs
      .map(documentSnapshot=>({
        uid:documentSnapshot.id,
        ...documentSnapshot.data()
      }))
      .filter(user=>
        normalizeUserStatus(user)==='PENDENTE'
      );
  }catch(error){
    console.error('Pending users notification load error',error);
    return [];
  }
}

async function buildNotificationItems({
  forceReadSync=false
}={}){
  const items = [];
  const alertDays = Math.max(
    1,
    Number(STATE.config?.alertDays || 30)
  );

  STATE.extinguishers.forEach(extinguisher=>{
    const rechargeDays = daysUntil(extinguisher.dataRecarga);
    const rechargeDate = fmtDate(extinguisher.dataRecarga);
    const identity = `Extintor #${extinguisher.numero || '—'}`;
    const scope = notificationScopeText(extinguisher);

    if(rechargeDays!==null && rechargeDays<0){
      addNotificationItem(items,{
        id:`recarga-vencida:${extinguisher.id}:${extinguisher.dataRecarga}`,
        severity:'critical',
        category:'expiry',
        title:'Recarga vencida',
        message:`${identity} está com a recarga vencida há ${Math.abs(rechargeDays)} dia(s).`,
        detail:`Vencimento: ${rechargeDate}`,
        scope,
        urgency:1000+Math.abs(rechargeDays),
        createdAt:notificationDateFromIsoDay(
          extinguisher.dataRecarga || todayISO()
        ),
        sortAt:notificationDateFromIsoDay(
          extinguisher.dataRecarga || todayISO()
        ),
        action:{
          type:'extinguisher',
          extinguisherId:String(extinguisher.id)
        },
        actionLabel:'Abrir prontuário'
      });
    }else if(
      rechargeDays!==null &&
      rechargeDays>=0 &&
      rechargeDays<=alertDays
    ){
      addNotificationItem(items,{
        id:`recarga-proxima:${extinguisher.id}:${extinguisher.dataRecarga}`,
        severity:'attention',
        category:'expiry',
        title:'Recarga próxima do vencimento',
        message:`${identity} vence em ${rechargeDays} dia(s).`,
        detail:`Vencimento: ${rechargeDate}`,
        scope,
        urgency:alertDays-rechargeDays,
        createdAt:notificationDateFromIsoDay(
          extinguisher.dataRecarga,
          -alertDays
        ),
        sortAt:notificationDateFromIsoDay(
          extinguisher.dataRecarga,
          -alertDays
        ),
        action:{
          type:'extinguisher',
          extinguisherId:String(extinguisher.id)
        },
        actionLabel:'Abrir prontuário'
      });
    }

    const hydroDays = daysUntil(extinguisher.dataTH);
    const hydroDate = fmtDate(extinguisher.dataTH);

    if(hydroDays!==null && hydroDays<0){
      addNotificationItem(items,{
        id:`th-vencido:${extinguisher.id}:${extinguisher.dataTH}`,
        severity:'critical',
        category:'expiry',
        title:'Teste hidrostático vencido',
        message:`${identity} está com o teste hidrostático vencido há ${Math.abs(hydroDays)} dia(s).`,
        detail:`Vencimento: ${hydroDate}`,
        scope,
        urgency:900+Math.abs(hydroDays),
        createdAt:notificationDateFromIsoDay(
          extinguisher.dataTH || todayISO()
        ),
        sortAt:notificationDateFromIsoDay(
          extinguisher.dataTH || todayISO()
        ),
        action:{
          type:'extinguisher',
          extinguisherId:String(extinguisher.id)
        },
        actionLabel:'Abrir prontuário'
      });
    }else if(
      hydroDays!==null &&
      hydroDays>=0 &&
      hydroDays<=alertDays
    ){
      addNotificationItem(items,{
        id:`th-proximo:${extinguisher.id}:${extinguisher.dataTH}`,
        severity:'attention',
        category:'expiry',
        title:'Teste hidrostático próximo',
        message:`${identity} terá o teste hidrostático vencido em ${hydroDays} dia(s).`,
        detail:`Vencimento: ${hydroDate}`,
        scope,
        urgency:alertDays-hydroDays,
        createdAt:notificationDateFromIsoDay(
          extinguisher.dataTH,
          -alertDays
        ),
        sortAt:notificationDateFromIsoDay(
          extinguisher.dataTH,
          -alertDays
        ),
        action:{
          type:'extinguisher',
          extinguisherId:String(extinguisher.id)
        },
        actionLabel:'Abrir prontuário'
      });
    }
  });

  STATE.inspections
    .filter(inspection=>inspection?.naoConformidade)
    .forEach(inspection=>{
      const extinguisher = STATE.extinguishers.find(item=>
        String(item.id)===String(inspection.extinguisherId)
      );
      const nc = inspection.naoConformidade || {};
      const status = normalizeNcWorkflowStatus(nc.status);
      const elapsedDays = notificationNcElapsedDays(inspection);
      const number = extinguisher?.numero || inspection.extinguisherId || '—';
      const scope = notificationScopeText(extinguisher,inspection);

      if(status==='ENCAMINHADA'){
        addNotificationItem(items,{
          id:`nc-encaminhada:${inspection.id}:${nc.dataEncaminhamento || inspection.date}`,
          severity:elapsedDays>=7 ? 'critical' : 'nc',
          category:'nc',
          title:elapsedDays>=7
            ? 'NC pendente há mais de 7 dias'
            : 'NC aguardando atendimento',
          message:`A tratativa do extintor #${number} está encaminhada há ${elapsedDays} dia(s).`,
          detail:[
            nc.setor ? `Setor: ${nc.setor}` : '',
            nc.responsavel ? `Responsável: ${nc.responsavel}` : ''
          ].filter(Boolean).join(' · '),
          scope,
          urgency:700+elapsedDays,
          createdAt:nc.atualizadoEm ||
            nc.criadoEm ||
            notificationDateFromIsoDay(
              nc.dataEncaminhamento ||
              inspection.date ||
              todayISO()
            ),
          sortAt:nc.atualizadoEm ||
            nc.criadoEm ||
            notificationDateFromIsoDay(
              nc.dataEncaminhamento ||
              inspection.date ||
              todayISO()
            ),
          action:{
            type:'inspection',
            inspectionId:String(inspection.id)
          },
          actionLabel:'Abrir tratativa'
        });
      }

      if(status==='EM ANDAMENTO'){
        addNotificationItem(items,{
          id:`nc-andamento:${inspection.id}:${nc.dataEncaminhamento || inspection.date}`,
          severity:elapsedDays>=15 ? 'critical' : 'nc',
          category:'nc',
          title:elapsedDays>=15
            ? 'Tratativa em andamento há mais de 15 dias'
            : 'Tratativa em andamento',
          message:`A NC do extintor #${number} está em andamento há ${elapsedDays} dia(s).`,
          detail:[
            nc.setor ? `Setor: ${nc.setor}` : '',
            nc.responsavel ? `Responsável: ${nc.responsavel}` : ''
          ].filter(Boolean).join(' · '),
          scope,
          urgency:600+elapsedDays,
          createdAt:nc.atualizadoEm ||
            nc.criadoEm ||
            notificationDateFromIsoDay(
              nc.dataEncaminhamento ||
              inspection.date ||
              todayISO()
            ),
          sortAt:nc.atualizadoEm ||
            nc.criadoEm ||
            notificationDateFromIsoDay(
              nc.dataEncaminhamento ||
              inspection.date ||
              todayISO()
            ),
          action:{
            type:'inspection',
            inspectionId:String(inspection.id)
          },
          actionLabel:'Abrir tratativa'
        });
      }
    });

  const pendingUsers = await loadPendingUsersForNotifications();

  pendingUsers.forEach(user=>{
    const requestedAt =
      user.requestedAt ||
      user.createdAt ||
      new Date().toISOString();

    addNotificationItem(items,{
      id:`usuario-pendente:${user.uid}:${notificationTimestamp(requestedAt)}`,
      severity:'access',
      category:'users',
      title:'Novo usuário aguardando aprovação',
      message:`${user.name || 'Novo usuário'} solicitou acesso ao sistema.`,
      detail:user.email || 'E-mail não informado',
      scope:'Gestão de usuários',
      createdAt:requestedAt,
      sortAt:requestedAt,
      action:{
        type:'user-approval',
        userId:String(user.uid)
      },
      actionLabel:'Analisar cadastro'
    });
  });

  let queue = [];
  if(typeof getOfflineQueue==='function'){
    queue = await getOfflineQueue().catch(()=>[]);
  }

  if(queue.length){
    const newestOperation = Math.max(
      ...queue.map(operation=>Number(
        operation.updatedAt ||
        operation.createdAt ||
        0
      ))
    );

    addNotificationItem(items,{
      id:`sincronizacao-pendente:${queue.length}:${newestOperation}`,
      severity:'system',
      category:'system',
      title:'Alterações aguardando sincronização',
      message:`Existem ${queue.length} alteração(ões) salvas neste aparelho aguardando envio.`,
      detail:navigator.onLine
        ? 'A sincronização pode ser iniciada agora.'
        : 'O envio começará quando a conexão for restabelecida.',
      scope:'Armazenamento offline',
      urgency:500+queue.length,
      createdAt:new Date(newestOperation || Date.now()).toISOString(),
      sortAt:new Date(newestOperation || Date.now()).toISOString(),
      action:{
        type:'sync'
      },
      actionLabel:navigator.onLine ? 'Sincronizar agora' : 'Ver sincronização'
    });
  }

  if(!navigator.onLine){
    addNotificationItem(items,{
      id:`aplicativo-offline:${todayISO()}`,
      severity:'system',
      category:'system',
      title:'Aplicativo em modo offline',
      message:'Os dados continuam disponíveis e as alterações serão mantidas no aparelho.',
      detail:'A sincronização ocorrerá quando a internet voltar.',
      scope:'Conexão',
      urgency:400,
      createdAt:new Date().toISOString(),
      sortAt:new Date().toISOString(),
      action:{
        type:'sync-center'
      },
      actionLabel:'Ver sincronização'
    });
  }

  const chronologicalItems =
    sortNotificationsNewestFirst(items);

  await syncNotificationReadStateFromCloud({
    force:forceReadSync
  });

  const readIds = loadNotificationReadIds();
  const currentIds = new Set(
    chronologicalItems.map(item=>String(item.id))
  );

  const cleanedReadIds = new Set(
    [...readIds].filter(id=>currentIds.has(String(id)))
  );

  if(cleanedReadIds.size!==readIds.size){
    saveNotificationReadIds(cleanedReadIds);
  }

  pruneNotificationReadState(currentIds).catch(error=>{
    console.warn(
      'Não foi possível executar a limpeza das leituras antigas.',
      error
    );
  });

  return chronologicalItems.map(item=>({
    ...item,
    read:cleanedReadIds.has(String(item.id))
  }));
}

function notificationUnreadCount(items=NOTIFICATION_CACHE){
  return items.filter(item=>!item.read).length;
}

function notificationCenterHtml(){
  return `
    <div
      class="notification-center-backdrop"
      id="notification-center-backdrop"
      aria-hidden="true">
    </div>

    <aside
      class="notification-center"
      id="notification-center"
      aria-label="Central de notificações"
      aria-hidden="true">
      <div class="notification-center-handle"></div>

      <div class="notification-center-head">
        <div>
          <span>Alertas operacionais</span>
          <h2>Central de notificações</h2>
          <p id="notification-center-subtitle">Carregando notificações...</p>
        </div>

        <button
          type="button"
          class="icon-btn notification-center-close"
          id="notification-center-close"
          aria-label="Fechar notificações">
          ${ICONS.close}
        </button>
      </div>

      <div id="notification-center-content" class="notification-center-content">
        <div class="notification-loading">
          <span></span>
          <p>Atualizando alertas...</p>
        </div>
      </div>
    </aside>
  `;
}

function notificationBellHtml(){
  return `
    <button
      type="button"
      class="notification-bell"
      id="notification-bell"
      aria-label="Abrir central de notificações"
      aria-expanded="false"
      aria-controls="notification-center">
      ${ICONS.bell}
      <span
        class="notification-bell-badge"
        id="notification-bell-badge"
        style="display:none">
        0
      </span>
    </button>
  `;
}

function notificationFilterItems(items){
  const filteredItems = items.filter(item=>{
    if(NOTIFICATION_UNREAD_ONLY && item.read) return false;

    if(NOTIFICATION_FILTER==='all') return true;
    if(NOTIFICATION_FILTER==='critical'){
      return item.severity==='critical';
    }
    if(NOTIFICATION_FILTER==='attention'){
      return item.severity==='attention';
    }
    if(NOTIFICATION_FILTER==='nc'){
      return item.category==='nc';
    }
    if(NOTIFICATION_FILTER==='users'){
      return item.category==='users';
    }
    if(NOTIFICATION_FILTER==='system'){
      return item.category==='system';
    }

    return true;
  });

  // Em qualquer filtro, inclusive "Todas", a data é a prioridade.
  // Categoria e gravidade não agrupam mais as notificações.
  return sortNotificationsNewestFirst(filteredItems);
}

function notificationCardHtml(item){
  const meta = notificationSeverityMeta(item.severity);

  return `
    <article
      class="notification-item ${meta.className} ${item.read?'read':'unread'}"
      data-notification-item="${escapeHtml(String(item.id))}">
      <div class="notification-item-icon">
        ${ICONS[meta.icon]}
      </div>

      <div class="notification-item-content">
        <div class="notification-item-top">
          <div>
            <span class="notification-category">${meta.label}</span>
            <h3>${escapeHtml(item.title)}</h3>
          </div>
          ${item.read
            ? '<span class="notification-read-label">Lida</span>'
            : '<span class="notification-unread-dot" title="Não lida"></span>'
          }
        </div>

        <p>${escapeHtml(item.message)}</p>

        ${item.detail
          ? `<div class="notification-detail">${escapeHtml(item.detail)}</div>`
          : ''
        }

        <div class="notification-item-meta">
          ${item.scope
            ? `<span>${escapeHtml(item.scope)}</span>`
            : ''
          }
          ${notificationReferenceTimestamp(item)
            ? `<time>${escapeHtml(
                notificationDateLabel(
                  item.sortAt || item.eventAt || item.createdAt
                )
              )}</time>`
            : ''
          }
        </div>

        <div class="notification-item-actions">
          <button
            type="button"
            class="btn btn-sm"
            data-notification-action="${escapeHtml(String(item.id))}">
            ${escapeHtml(item.actionLabel || 'Abrir')}
          </button>

          ${item.read
            ? ''
            : `
              <button
                type="button"
                class="btn btn-sm btn-ghost"
                data-notification-read="${escapeHtml(String(item.id))}">
                Marcar como lida
              </button>
            `
          }
        </div>
      </div>
    </article>
  `;
}

async function renderNotificationCenterContent({
  forceReadSync=false
}={}){
  const content = document.getElementById('notification-center-content');
  if(!content) return;

  content.innerHTML = `
    <div class="notification-loading">
      <span></span>
      <p>Atualizando alertas...</p>
    </div>
  `;

  NOTIFICATION_CACHE = await buildNotificationItems({
    forceReadSync
  });

  const filtered = notificationFilterItems(NOTIFICATION_CACHE);
  const unread = notificationUnreadCount(NOTIFICATION_CACHE);
  const critical = NOTIFICATION_CACHE.filter(
    item=>item.severity==='critical'
  ).length;
  const attention = NOTIFICATION_CACHE.filter(
    item=>item.severity==='attention'
  ).length;
  const ncCount = NOTIFICATION_CACHE.filter(
    item=>item.category==='nc'
  ).length;
  const accessCount = NOTIFICATION_CACHE.filter(
    item=>item.category==='users'
  ).length;
  const systemCount = NOTIFICATION_CACHE.filter(
    item=>item.category==='system'
  ).length;

  const subtitle = document.getElementById('notification-center-subtitle');
  if(subtitle){
    subtitle.textContent = NOTIFICATION_CACHE.length
      ? `${unread} não lida(s) · ${NOTIFICATION_CACHE.length} alerta(s) ativo(s)`
      : 'Nenhum alerta ativo neste momento';
  }

  content.innerHTML = `
    <section class="notification-summary">
      <button
        type="button"
        class="notification-summary-card critical"
        data-notification-filter-shortcut="critical">
        <span>Críticas</span>
        <strong>${critical}</strong>
      </button>

      <button
        type="button"
        class="notification-summary-card attention"
        data-notification-filter-shortcut="attention">
        <span>Atenção</span>
        <strong>${attention}</strong>
      </button>

      <button
        type="button"
        class="notification-summary-card nc"
        data-notification-filter-shortcut="nc">
        <span>Tratativas</span>
        <strong>${ncCount}</strong>
      </button>

      <button
        type="button"
        class="notification-summary-card access"
        data-notification-filter-shortcut="users">
        <span>Acessos</span>
        <strong>${accessCount}</strong>
      </button>

      <button
        type="button"
        class="notification-summary-card system"
        data-notification-filter-shortcut="system">
        <span>Sistema</span>
        <strong>${systemCount}</strong>
      </button>
    </section>

    <section class="notification-controls">
      <div class="notification-filter-tabs">
        ${[
          ['all','Todas'],
          ['critical','Críticas'],
          ['attention','Atenção'],
          ['nc','Tratativas'],
          ['users','Acessos'],
          ['system','Sistema']
        ].map(([value,label])=>`
          <button
            type="button"
            class="${NOTIFICATION_FILTER===value?'active':''}"
            data-notification-filter="${value}">
            ${label}
          </button>
        `).join('')}
      </div>

      <label class="notification-unread-toggle">
        <input
          type="checkbox"
          id="notification-unread-only"
          ${NOTIFICATION_UNREAD_ONLY?'checked':''}>
        <span>Somente não lidas</span>
      </label>
    </section>

    <div class="notification-toolbar">
      <span>
        ${filtered.length} resultado(s) · ordem cronológica real
      </span>
      <div>
        <button
          type="button"
          class="btn btn-sm btn-ghost"
          id="notification-refresh">
          Atualizar
        </button>
        <button
          type="button"
          class="btn btn-sm"
          id="notification-mark-all"
          ${unread ? '' : 'disabled'}>
          ${ICONS.checkCircle}Marcar tudo como lido
        </button>
      </div>
    </div>

    <div class="notification-retention-note">
      ${ICONS.infoCircle}
      <span>
        Alertas ativos permanecem até a regularização. Leituras antigas e
        notificações que deixaram de existir são limpas automaticamente
        todos os dias.
      </span>
    </div>

    <section class="notification-list">
      ${filtered.length
        ? filtered.map(notificationCardHtml).join('')
        : `
          <div class="notification-empty">
            ${ICONS.checkCircle}
            <h3>Nenhuma notificação encontrada</h3>
            <p>
              Não existem alertas correspondentes aos filtros selecionados.
            </p>
          </div>
        `
      }
    </section>
  `;

  bindNotificationCenterContent();
  updateNotificationBell(NOTIFICATION_CACHE);
}

function updateNotificationBell(items=NOTIFICATION_CACHE){
  const badge = document.getElementById('notification-bell-badge');
  const bell = document.getElementById('notification-bell');
  if(!badge || !bell) return;

  const unread = notificationUnreadCount(items);
  const criticalUnread = items.filter(item=>
    !item.read && item.severity==='critical'
  ).length;

  badge.textContent = unread>99 ? '99+' : String(unread);
  badge.style.display = unread ? 'inline-flex' : 'none';
  bell.classList.toggle('has-unread',unread>0);
  bell.classList.toggle('has-critical',criticalUnread>0);
  bell.setAttribute(
    'aria-label',
    unread
      ? `Abrir central de notificações. ${unread} não lida(s).`
      : 'Abrir central de notificações'
  );
}

async function refreshNotificationIndicator(){
  if(!document.getElementById('notification-bell')) return;
  const items = await buildNotificationItems();
  NOTIFICATION_CACHE = items;
  updateNotificationBell(items);
}

function scheduleNotificationIndicatorRefresh(delay=180){
  clearTimeout(NOTIFICATION_REFRESH_TIMER);
  NOTIFICATION_REFRESH_TIMER = setTimeout(()=>{
    refreshNotificationIndicator().catch(error=>{
      console.error('Notification indicator error',error);
    });
  },delay);
}

async function openNotificationCenter(){
  closeMobileQuickActions();

  const center = document.getElementById('notification-center');
  const backdrop = document.getElementById('notification-center-backdrop');
  const bell = document.getElementById('notification-bell');

  if(!center || !backdrop || !bell) return;

  center.classList.add('show');
  backdrop.classList.add('show');
  bell.setAttribute('aria-expanded','true');
  center.setAttribute('aria-hidden','false');
  backdrop.setAttribute('aria-hidden','false');
  document.body.classList.add('notification-center-open');

  await renderNotificationCenterContent({
    forceReadSync:true
  });
}

function closeNotificationCenter(){
  const center = document.getElementById('notification-center');
  const backdrop = document.getElementById('notification-center-backdrop');
  const bell = document.getElementById('notification-bell');

  center?.classList.remove('show');
  backdrop?.classList.remove('show');
  bell?.setAttribute('aria-expanded','false');
  center?.setAttribute('aria-hidden','true');
  backdrop?.setAttribute('aria-hidden','true');
  document.body.classList.remove('notification-center-open');
}

async function handleNotificationAction(notificationId){
  const item = NOTIFICATION_CACHE.find(notification=>
    String(notification.id)===String(notificationId)
  );

  if(!item) return;

  await markNotificationRead(item.id);
  closeNotificationCenter();
  scheduleNotificationIndicatorRefresh(0);

  if(item.action?.type==='extinguisher'){
    openExtinguisherDetail(item.action.extinguisherId);
    return;
  }

  if(item.action?.type==='inspection'){
    openInspectionView(item.action.inspectionId);
    return;
  }

  if(item.action?.type==='user-approval'){
    STATE.view = 'users';
    renderShell();

    setTimeout(async ()=>{
      try{
        await loadUsers();
        openPendingUserApprovalModal(item.action.userId);
      }catch(error){
        console.error('Open pending user from notification error',error);
      }
    },450);

    return;
  }

  if(item.action?.type==='sync'){
    if(typeof processOfflineQueue==='function'){
      await processOfflineQueue(true);
    }
    scheduleNotificationIndicatorRefresh(0);
    return;
  }

  if(item.action?.type==='sync-center'){
    if(typeof openSyncCenter==='function'){
      openSyncCenter();
    }
  }
}

function bindNotificationCenterContent(){
  document.querySelectorAll('[data-notification-filter]').forEach(button=>{
    button.addEventListener('click',()=>{
      NOTIFICATION_FILTER = button.dataset.notificationFilter || 'all';
      renderNotificationCenterContent();
    });
  });

  document.querySelectorAll('[data-notification-filter-shortcut]').forEach(button=>{
    button.addEventListener('click',()=>{
      NOTIFICATION_FILTER =
        button.dataset.notificationFilterShortcut || 'all';
      renderNotificationCenterContent();
    });
  });

  document.getElementById('notification-unread-only')
    ?.addEventListener('change',event=>{
      NOTIFICATION_UNREAD_ONLY = event.target.checked;
      renderNotificationCenterContent();
    });

  document.getElementById('notification-refresh')
    ?.addEventListener('click',()=>{
      renderNotificationCenterContent({
        forceReadSync:true
      });
    });

  document.getElementById('notification-mark-all')
    ?.addEventListener('click',async event=>{
      const button = event.currentTarget;
      button.disabled = true;

      await markAllNotificationsRead(NOTIFICATION_CACHE);
      await renderNotificationCenterContent({
        forceReadSync:true
      });
    });

  document.querySelectorAll('[data-notification-read]').forEach(button=>{
    button.addEventListener('click',async event=>{
      event.stopPropagation();
      button.disabled = true;

      await markNotificationRead(
        button.dataset.notificationRead
      );

      await renderNotificationCenterContent({
        forceReadSync:true
      });
    });
  });

  document.querySelectorAll('[data-notification-action]').forEach(button=>{
    button.addEventListener('click',event=>{
      event.stopPropagation();
      handleNotificationAction(button.dataset.notificationAction);
    });
  });

  document.querySelectorAll('[data-notification-item]').forEach(item=>{
    item.addEventListener('click',async event=>{
      if(event.target.closest('button')) return;

      if(item.classList.contains('unread')){
        await markNotificationRead(
          item.dataset.notificationItem
        );

        await renderNotificationCenterContent({
          forceReadSync:true
        });
      }
    });
  });
}

function bindNotificationCenter(){
  document.getElementById('notification-bell')
    ?.addEventListener('click',()=>{
      const center = document.getElementById('notification-center');
      center?.classList.contains('show')
        ? closeNotificationCenter()
        : openNotificationCenter();
    });

  document.getElementById('notification-center-close')
    ?.addEventListener('click',closeNotificationCenter);

  document.getElementById('notification-center-backdrop')
    ?.addEventListener('click',closeNotificationCenter);

  startNotificationReadStateListener();
  scheduleNotificationIndicatorRefresh(0);

  clearInterval(NOTIFICATION_POLL_TIMER);
  NOTIFICATION_POLL_TIMER = setInterval(()=>{
    if(
      document.visibilityState==='visible' &&
      navigator.onLine
    ){
      syncNotificationReadStateFromCloud({
        force:true
      }).finally(()=>{
        scheduleNotificationIndicatorRefresh(0);
      });
    }
  },60000);

  window.removeEventListener(
    'online',
    handleNotificationReadOnline
  );

  window.addEventListener(
    'online',
    handleNotificationReadOnline
  );
}

function handleNotificationReadOnline(){
  startNotificationReadStateListener();

  syncNotificationReadStateFromCloud({
    force:true
  }).finally(()=>{
    scheduleNotificationIndicatorRefresh(0);
  });
}

function renderShell(){
  document.body.classList.remove('quick-actions-open');
  document.body.classList.remove('notification-center-open');
  const app = document.getElementById('app');
  const cfg = STATE.config;
  app.innerHTML = `
    <div class="sidebar">
      <div class="brand">
        <div class="brand-logo">${cfg.logo ? `<img src="${cfg.logo}">` : ICONS.fire}</div>
        <div class="brand-text"><b>${escapeHtml(cfg.companyName)}</b><span>Gestão de Extintores</span></div>
      </div>
      <div class="nav">
        ${allowedNavItems().map(n=>`<button class="nav-item ${STATE.view===n.id?'active':''}" data-nav="${n.id}">${ICONS[n.icon]}<span>${n.label}</span></button>`).join('')}
      </div>
      <div class="sidebar-foot">
        <div class="access-banner" style="padding:9px;margin:0 0 10px 0;">
          <div>
            <div class="access-banner-name">${escapeHtml(CURRENT_USER_PROFILE?.name || AUTH_USER?.email || 'Usuário')}</div>
            <div class="access-banner-email">${escapeHtml(ROLE_LABELS[currentRole()] || currentRole())}</div>
            <div class="sidebar-user-scope">${escapeHtml(accessScopeLabel())}</div>
          </div>
        </div>
        <div>Dados protegidos por perfil e usina.<br>Firestore com acesso segmentado · 2026</div>
        <button class="btn btn-sm" id="btn-logout" style="width:100%;justify-content:center;margin-top:10px;">Sair</button>
      </div>
    </div>
    <div class="main">
      <div class="topbar">
        <div>
          <h1 id="page-title"></h1>
          <div class="sub" id="page-sub"></div>
        </div>
        <div class="topbar-right">
          ${notificationBellHtml()}
          <span id="pwa-mode-chip" class="pwa-mode-chip">Navegador</span>
          <span id="connection-status" class="connection-status" role="button">Online</span>
          <button type="button" class="btn btn-sm" id="btn-sync-now">
            Sincronizar <span id="offline-queue-count" class="offline-queue-count" style="display:none">0</span>
          </button>
          <button type="button" class="mobile-profile-btn" id="mobile-profile-btn" aria-label="Abrir menu do usuário">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9">
              <circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/>
            </svg>
          </button>
          <button type="button" class="btn btn-sm pwa-install-btn" id="pwa-install-button">Instalar app</button>
          <div class="access-scope-badge ${hasAllUsinasAccess()?'admin':''}" title="Escopo de acesso do usuário">
            <span>${escapeHtml(accessScopeLabel())}</span>
          </div>
          <div class="topbar-actions-wrap"><div id="topbar-actions"></div></div>
        </div>
      </div>
      <div class="content"><div id="offline-banner" class="offline-banner"></div><div id="content"></div></div>
    </div>
    <div class="bottom-nav">
      ${allowedNavItems().map(n=>`<button class="${(STATE.view===n.id || (STATE.view==='extinguisher-detail' && n.id==='extinguishers'))?'active':''}" data-nav="${n.id}">${ICONS[n.icon]}<span>${n.label}</span></button>`).join('')}
    </div>
    ${mobileQuickActionsHtml()}
    ${notificationCenterHtml()}
  `;
  app.querySelectorAll('[data-nav]').forEach(b=>b.addEventListener('click', ()=>{
    closeMobileQuickActions();
    closeNotificationCenter();
    const target = NAV_ITEMS.find(n=>n.id===b.dataset.nav);
    if(!target || !can(target.permission)) return;
    stopScanner?.();
    STATE.view=b.dataset.nav;
    renderShell();
  }));
  document.getElementById('btn-logout')?.addEventListener('click', logout);
  bindMobileProfileMenu();
  bindOfflineEvents();
  bindMobileQuickActions();
  bindNotificationCenter();
  renderView();
}

function setHeader(title, sub, actionsHtml=""){
  document.getElementById('page-title').textContent = title;
  document.getElementById('page-sub').textContent = sub;
  document.getElementById('topbar-actions').innerHTML = actionsHtml;
}

function renderView(){
  if(STATE.view==='extinguisher-detail') return renderExtinguisherDetailPage();

  const nav = NAV_ITEMS.find(n=>n.id===STATE.view);
  if(!nav || !can(nav.permission)){
    STATE.view = defaultViewForRole();
  }
  if(STATE.view==='dashboard') return renderDashboard();
  if(STATE.view==='extinguishers') return renderExtinguishers();
  if(STATE.view==='treatments') return renderNcTreatments();
  if(STATE.view==='inspect') return renderInspect();
  if(STATE.view==='reports') return renderReports();
  if(STATE.view==='users') return renderUsers();
  if(STATE.view==='settings') return renderSettings();
}

/* ============================================================
   ABA PRÓPRIA — TRATATIVAS DE NÃO CONFORMIDADES
============================================================ */
let NC_TREATMENT_FILTERS = {
  status:'',
  usina:'',
  setor:'',
  search:'',
  sort:'priority'
};

function ncTreatmentExtinguisher(inspection){
  return STATE.extinguishers.find(
    extinguisher=>
      String(extinguisher.id)===String(inspection.extinguisherId)
  ) || null;
}

function ncTreatmentStatusOrder(status){
  const normalized = normalizeNcWorkflowStatus(status);
  return {
    'ENCAMINHADA':1,
    'EM ANDAMENTO':2,
    'RESOLVIDA':3
  }[normalized] || 4;
}

function ncTreatmentDateValue(inspection){
  const nc = inspection?.naoConformidade || {};
  return nc.atualizadoEm ||
    nc.criadoEm ||
    `${inspection.date || ''}T00:00:00`;
}

function ncTreatmentElapsed(inspection){
  const nc = inspection?.naoConformidade || {};
  const startValue = nc.dataEncaminhamento || inspection.date;
  if(!startValue) return {days:0,label:'Data não informada'};

  const start = new Date(`${startValue}T12:00:00`);
  if(Number.isNaN(start.getTime())){
    return {days:0,label:'Data não informada'};
  }

  const status = normalizeNcWorkflowStatus(nc.status);
  const endValue = status==='RESOLVIDA'
    ? (nc.dataResolucao || String(nc.atualizadoEm || '').slice(0,10))
    : todayISO();

  const end = new Date(`${endValue || todayISO()}T12:00:00`);
  const days = Math.max(
    0,
    Math.floor((end.getTime()-start.getTime())/86400000)
  );

  if(status==='RESOLVIDA'){
    return {
      days,
      label:days===0
        ? 'Resolvida no mesmo dia'
        : `Resolvida em ${days} dia${days===1?'':'s'}`
    };
  }

  return {
    days,
    label:days===0
      ? 'Encaminhada hoje'
      : `${days} dia${days===1?'':'s'} em aberto`
  };
}

function ncTreatmentFilteredRecords(){
  if(!hasAllUsinasAccess()){
    NC_TREATMENT_FILTERS.usina = currentUserUsina();
  }

  const search = String(NC_TREATMENT_FILTERS.search || '')
    .trim()
    .toLowerCase();

  const records = STATE.inspections
    .filter(inspection=>inspection?.naoConformidade)
    .map(inspection=>({
      inspection,
      extinguisher:ncTreatmentExtinguisher(inspection)
    }))
    .filter(({inspection,extinguisher})=>{
      const nc = inspection.naoConformidade || {};
      const status = normalizeNcWorkflowStatus(nc.status);
      const usina = extinguisher?.usina || inspection.usina || '';

      if(
        NC_TREATMENT_FILTERS.status &&
        status!==NC_TREATMENT_FILTERS.status
      ) return false;

      if(
        NC_TREATMENT_FILTERS.usina &&
        usina!==NC_TREATMENT_FILTERS.usina
      ) return false;

      if(
        NC_TREATMENT_FILTERS.setor &&
        nc.setor!==NC_TREATMENT_FILTERS.setor
      ) return false;

      if(search){
        const searchable = [
          extinguisher?.numero,
          extinguisher?.localizacao,
          extinguisher?.usina,
          extinguisher?.agente,
          inspection.responsavel,
          nc.setor,
          nc.responsavel,
          nc.cargo,
          nc.numeroOS,
          nc.descricao,
          nc.formaComunicacao
        ].join(' ').toLowerCase();

        if(!searchable.includes(search)) return false;
      }

      return true;
    });

  return records.sort((a,b)=>{
    const sort = NC_TREATMENT_FILTERS.sort;

    if(sort==='recent'){
      return String(ncTreatmentDateValue(b.inspection))
        .localeCompare(String(ncTreatmentDateValue(a.inspection)));
    }

    if(sort==='oldest'){
      return String(ncTreatmentDateValue(a.inspection))
        .localeCompare(String(ncTreatmentDateValue(b.inspection)));
    }

    if(sort==='number'){
      return compareExtinguisherNumbers(
        a.extinguisher || {numero:a.inspection.extinguisherId},
        b.extinguisher || {numero:b.inspection.extinguisherId}
      );
    }

    const statusDifference =
      ncTreatmentStatusOrder(a.inspection.naoConformidade?.status) -
      ncTreatmentStatusOrder(b.inspection.naoConformidade?.status);

    if(statusDifference!==0) return statusDifference;

    return String(ncTreatmentDateValue(b.inspection))
      .localeCompare(String(ncTreatmentDateValue(a.inspection)));
  });
}

function ncTreatmentCompactTimeline(inspection){
  const currentRank = ncWorkflowRank(
    inspection?.naoConformidade?.status
  );

  const steps = [
    {label:'Detectada',rank:0},
    {label:'Encaminhada',rank:1},
    {label:'Em andamento',rank:2},
    {label:'Resolvida',rank:3}
  ];

  return `
    <div class="nc-board-progress" aria-label="Etapas da tratativa">
      ${steps.map((step,index)=>`
        <div class="nc-board-progress-step ${currentRank>=step.rank?'done':''} ${currentRank===step.rank?'current':''}">
          <span></span>
          <small>${step.label}</small>
        </div>
        ${index<steps.length-1?`
          <i class="${currentRank>step.rank?'done':''}"></i>
        `:''}
      `).join('')}
    </div>
  `;
}

function ncTreatmentRecordCard(record){
  const inspection = record.inspection;
  const extinguisher = record.extinguisher;
  const nc = inspection.naoConformidade || {};
  const status = normalizeNcWorkflowStatus(nc.status);
  const meta = ncStatusMeta(status);
  const elapsed = ncTreatmentElapsed(inspection);
  const originalItems = Array.isArray(nc.itensOriginaisNc)
    ? nc.itensOriginaisNc
    : [];

  return `
    <article class="nc-board-card status-${meta.cls}">
      <div class="nc-board-card-top">
        <div class="nc-board-card-identity">
          <span class="nc-board-number">
            #${escapeHtml(extinguisher?.numero || inspection.extinguisherId || '—')}
          </span>
          <div>
            <h3>${escapeHtml(extinguisher?.localizacao || 'Localização não informada')}</h3>
            <p>
              ${escapeHtml(extinguisher?.usina || inspection.usina || 'Usina não informada')}
              ${extinguisher?.agente?` · ${escapeHtml(extinguisher.agente)}`:''}
              ${extinguisher?.capacidade?` · ${escapeHtml(extinguisher.capacidade)}`:''}
            </p>
          </div>
        </div>

        <div class="nc-board-card-status">
          <span class="nc-status-chip ${meta.cls}">${meta.label}</span>
          ${pendingSyncBadge(inspection)}
        </div>
      </div>

      ${ncTreatmentCompactTimeline(inspection)}

      <div class="nc-board-info-grid">
        <div>
          <span>Setor responsável</span>
          <b>${escapeHtml(nc.setor || 'Não informado')}</b>
        </div>
        <div>
          <span>Responsável</span>
          <b>${escapeHtml(nc.responsavel || 'Não informado')}</b>
          ${nc.cargo?`<small>${escapeHtml(nc.cargo)}</small>`:''}
        </div>
        <div>
          <span>Encaminhamento</span>
          <b>${fmtDate(nc.dataEncaminhamento || inspection.date)}</b>
          <small>${escapeHtml(nc.formaComunicacao || 'Comunicação não informada')}</small>
        </div>
        <div>
          <span>Tempo da tratativa</span>
          <b>${escapeHtml(elapsed.label)}</b>
          ${nc.numeroOS?`<small>OS: ${escapeHtml(nc.numeroOS)}</small>`:''}
        </div>
      </div>

      ${originalItems.length?`
        <div class="nc-board-items">
          <span>Itens originalmente não conformes</span>
          <div>
            ${originalItems.map(item=>`
              <small>${escapeHtml(item)}</small>
            `).join('')}
          </div>
        </div>
      `:''}

      ${nc.descricao?`
        <div class="nc-board-description">
          <span>Descrição da tratativa</span>
          <p>${escapeHtml(nc.descricao)}</p>
        </div>
      `:''}

      <div class="nc-board-card-foot">
        <div class="nc-board-updated">
          Atualizada em ${fmtDateTime(nc.atualizadoEm || nc.criadoEm)}
          ${nc.atualizadoPor?` por ${escapeHtml(nc.atualizadoPor)}`:''}
        </div>

        <div class="nc-board-actions">
          <button
            type="button"
            class="btn btn-sm"
            data-nc-view="${escapeHtml(String(inspection.id))}">
            ${ICONS.search}Visualizar
          </button>

          <button
            type="button"
            class="btn btn-sm"
            data-nc-extinguisher="${escapeHtml(String(inspection.extinguisherId))}">
            ${ICONS.ext}Extintor
          </button>

          ${can('editInspections')?`
            <button
              type="button"
              class="btn btn-sm btn-accent"
              data-nc-edit="${escapeHtml(String(inspection.id))}"
              data-nc-ext-id="${escapeHtml(String(inspection.extinguisherId))}">
              ${ICONS.edit}Atualizar tratativa
            </button>
          `:''}
        </div>
      </div>
    </article>
  `;
}

function bindNcTreatmentInterface(){
  document.querySelectorAll('[data-nc-status-filter]').forEach(button=>{
    button.addEventListener('click',()=>{
      NC_TREATMENT_FILTERS.status =
        button.dataset.ncStatusFilter || '';
      renderNcTreatments();
    });
  });

  document.getElementById('nc-filter-search')?.addEventListener('input',event=>{
    NC_TREATMENT_FILTERS.search = event.target.value;
    renderNcTreatments();
  });

  document.getElementById('nc-filter-status')?.addEventListener('change',event=>{
    NC_TREATMENT_FILTERS.status = event.target.value;
    renderNcTreatments();
  });

  document.getElementById('nc-filter-usina')?.addEventListener('change',event=>{
    if(!hasAllUsinasAccess()) return;
    NC_TREATMENT_FILTERS.usina = event.target.value;
    renderNcTreatments();
  });

  document.getElementById('nc-filter-setor')?.addEventListener('change',event=>{
    NC_TREATMENT_FILTERS.setor = event.target.value;
    renderNcTreatments();
  });

  document.getElementById('nc-filter-sort')?.addEventListener('change',event=>{
    NC_TREATMENT_FILTERS.sort = event.target.value;
    renderNcTreatments();
  });

  document.getElementById('nc-clear-filters')?.addEventListener('click',()=>{
    NC_TREATMENT_FILTERS = {
      status:'',
      usina:hasAllUsinasAccess()?'':currentUserUsina(),
      setor:'',
      search:'',
      sort:'priority'
    };
    renderNcTreatments();
  });

  document.querySelectorAll('[data-nc-view]').forEach(button=>{
    button.addEventListener('click',()=>{
      openInspectionView(button.dataset.ncView);
    });
  });

  document.querySelectorAll('[data-nc-extinguisher]').forEach(button=>{
    button.addEventListener('click',()=>{
      openExtinguisherDetail(button.dataset.ncExtinguisher);
    });
  });

  document.querySelectorAll('[data-nc-edit]').forEach(button=>{
    button.addEventListener('click',()=>{
      if(!requirePermission('editInspections')) return;
      openInspectionModal(
        button.dataset.ncExtId,
        button.dataset.ncEdit
      );
    });
  });

  document.getElementById('nc-refresh-data')?.addEventListener('click',async event=>{
    const button = event.currentTarget;
    button.disabled = true;
    const previousText = button.innerHTML;
    button.textContent = 'Atualizando...';

    try{
      await refreshDashboardCollections();
      renderNcTreatments();
      showToast('Tratativas atualizadas.','ok');
    }catch(error){
      console.error(error);
      showToast('Não foi possível atualizar os dados agora.','err');
    }finally{
      button.disabled = false;
      button.innerHTML = previousText;
    }
  });
}

function renderNcTreatments(){
  setHeader(
    'Tratativas de NC',
    'Acompanhe encaminhamentos, responsáveis, andamento e resolução das não conformidades.',
    `<button type="button" class="btn btn-sm" id="nc-refresh-data">
      ${ICONS.history}Atualizar
    </button>`
  );

  const content = document.getElementById('content');
  const stats = ncDashboardStats();
  const records = ncTreatmentFilteredRecords();

  const sectors = [...new Set(
    STATE.inspections
      .filter(inspection=>inspection?.naoConformidade?.setor)
      .map(inspection=>inspection.naoConformidade.setor)
  )].sort((a,b)=>a.localeCompare(b,'pt-BR'));

  const statusLabel = NC_TREATMENT_FILTERS.status
    ? ncStatusMeta(NC_TREATMENT_FILTERS.status).label
    : 'Todos os status';

  content.innerHTML = `
    <section class="nc-board-hero">
      <div>
        <span class="nc-board-eyebrow">Gestão de não conformidades</span>
        <h2>Visão central das tratativas</h2>
        <p>
          Consulte todas as ocorrências, acompanhe o tempo em aberto e acesse
          rapidamente a inspeção ou o prontuário do extintor.
        </p>
      </div>

      <div class="nc-board-hero-summary">
        <strong>${stats.total}</strong>
        <span>tratativa${stats.total===1?'':'s'} registrada${stats.total===1?'':'s'}</span>
        <small>${escapeHtml(accessScopeLabel())}</small>
      </div>
    </section>

    <section class="nc-board-metrics">
      <button
        type="button"
        class="nc-board-metric all ${!NC_TREATMENT_FILTERS.status?'active':''}"
        data-nc-status-filter="">
        <span>Total</span>
        <strong>${stats.total}</strong>
        <small>Todas as tratativas</small>
      </button>

      <button
        type="button"
        class="nc-board-metric pending ${NC_TREATMENT_FILTERS.status==='ENCAMINHADA'?'active':''}"
        data-nc-status-filter="ENCAMINHADA">
        <span>Pendentes</span>
        <strong>${stats.pending}</strong>
        <small>Aguardando atendimento</small>
      </button>

      <button
        type="button"
        class="nc-board-metric progress ${NC_TREATMENT_FILTERS.status==='EM ANDAMENTO'?'active':''}"
        data-nc-status-filter="EM ANDAMENTO">
        <span>Em andamento</span>
        <strong>${stats.progress}</strong>
        <small>Correção em execução</small>
      </button>

      <button
        type="button"
        class="nc-board-metric resolved ${NC_TREATMENT_FILTERS.status==='RESOLVIDA'?'active':''}"
        data-nc-status-filter="RESOLVIDA">
        <span>Resolvidas</span>
        <strong>${stats.resolved}</strong>
        <small>Tratativas concluídas</small>
      </button>
    </section>

    <section class="nc-board-filter-card">
      <div class="nc-board-filter-head">
        <div>
          <h3>Localizar tratativas</h3>
          <p>${records.length} resultado(s) · ${escapeHtml(statusLabel)}</p>
        </div>
        <button type="button" class="btn btn-sm btn-ghost" id="nc-clear-filters">
          Limpar filtros
        </button>
      </div>

      <div class="nc-board-filters">
        <div class="search-box nc-board-search">
          ${ICONS.search}
          <input
            id="nc-filter-search"
            type="search"
            placeholder="Buscar extintor, local, responsável, setor ou OS"
            value="${escapeHtml(NC_TREATMENT_FILTERS.search)}">
        </div>

        <select id="nc-filter-status" aria-label="Filtrar por status">
          <option value="">Todos os status</option>
          <option value="ENCAMINHADA" ${NC_TREATMENT_FILTERS.status==='ENCAMINHADA'?'selected':''}>Encaminhadas</option>
          <option value="EM ANDAMENTO" ${NC_TREATMENT_FILTERS.status==='EM ANDAMENTO'?'selected':''}>Em andamento</option>
          <option value="RESOLVIDA" ${NC_TREATMENT_FILTERS.status==='RESOLVIDA'?'selected':''}>Resolvidas</option>
        </select>

        ${hasAllUsinasAccess()?`
          <select id="nc-filter-usina" aria-label="Filtrar por usina">
            <option value="">Todas as usinas</option>
            ${STATE.config.usinas.map(usina=>`
              <option value="${escapeHtml(usina)}" ${NC_TREATMENT_FILTERS.usina===usina?'selected':''}>
                ${escapeHtml(usina)}
              </option>
            `).join('')}
          </select>
        `:''}

        <select id="nc-filter-setor" aria-label="Filtrar por setor">
          <option value="">Todos os setores</option>
          ${sectors.map(setor=>`
            <option value="${escapeHtml(setor)}" ${NC_TREATMENT_FILTERS.setor===setor?'selected':''}>
              ${escapeHtml(setor)}
            </option>
          `).join('')}
        </select>

        <select id="nc-filter-sort" aria-label="Ordenar tratativas">
          <option value="priority" ${NC_TREATMENT_FILTERS.sort==='priority'?'selected':''}>Prioridade de status</option>
          <option value="recent" ${NC_TREATMENT_FILTERS.sort==='recent'?'selected':''}>Mais recentes</option>
          <option value="oldest" ${NC_TREATMENT_FILTERS.sort==='oldest'?'selected':''}>Mais antigas</option>
          <option value="number" ${NC_TREATMENT_FILTERS.sort==='number'?'selected':''}>Número do extintor</option>
        </select>
      </div>
    </section>

    <section class="nc-board-list">
      ${records.length
        ? records.map(ncTreatmentRecordCard).join('')
        : `
          <div class="empty nc-board-empty">
            ${ICONS.treatments}
            <h4>Nenhuma tratativa encontrada</h4>
            <p>Altere ou limpe os filtros para visualizar outros registros.</p>
          </div>
        `
      }
    </section>

    ${currentRole()==='VISUALIZADOR'?`
      <div class="nc-board-readonly">
        Perfil Visualizador: consulta liberada e alterações bloqueadas.
      </div>
    `:''}
  `;

  bindNcTreatmentInterface();
}

/* ============================================================
   DASHBOARD
============================================================ */
let DASHBOARD_CHARTS = [];

function destroyDashboardCharts(){
  DASHBOARD_CHARTS.forEach(chart=>{
    try{ chart.destroy(); }catch(e){}
  });
  DASHBOARD_CHARTS = [];
}

async function refreshDashboardCollections(){
  if(!navigator.onLine || !FIREBASE_READY || !FIREBASE_DB){
    if(typeof updateConnectionUi === 'function'){
      await updateConnectionUi().catch(()=>{});
    }
    return false;
  }

  try{
    const { collection, getDocs, query, where } =
      await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js");

    const extRef = collection(FIREBASE_DB, "extinguishers");
    const inspRef = collection(FIREBASE_DB, "inspections");

    const extQuery = hasAllUsinasAccess()
      ? extRef
      : query(extRef, where("usina","==",currentUserUsina()));

    const inspQuery = hasAllUsinasAccess()
      ? inspRef
      : query(inspRef, where("usina","==",currentUserUsina()));

    const [extSnap, inspSnap] = await Promise.all([
      getDocs(extQuery),
      getDocs(inspQuery)
    ]);

    STATE.extinguishers = extSnap.docs.map(d=>({
      ...d.data(),
      id:d.data().id || d.id
    }));

    STATE.inspections = inspSnap.docs.map(d=>({
      ...d.data(),
      id:d.data().id || d.id
    }));

    // Reaplica operações locais pendentes antes de renderizar.
    // Isso evita que uma atualização do Painel apague temporariamente
    // a inspeção inicial e a tratativa recém-cadastradas.
    if(typeof reconcilePendingOperationsIntoState==='function'){
      await reconcilePendingOperationsIntoState();
    }

    applyUserDataScope();
    await cacheCurrentOfflineSession();
    return true;
  }catch(error){
    console.error("Dashboard refresh error", error);
    showToast("Não foi possível atualizar os dados do painel.","err");
    return false;
  }
}

async function renderDashboard(){
  destroyDashboardCharts();

  setHeader(
    "Painel geral",
    hasAllUsinasAccess() ? "Indicadores de todas as usinas" : `Indicadores exclusivos de ${currentUserUsina()}`,
    `<button type="button" class="btn btn-sm" id="btn-refresh-dashboard">Atualizar dados</button>`
  );

  await refreshDashboardCollections();

  const ext = STATE.extinguishers;
  const content = document.getElementById('content');
  const ncStats = ncDashboardStats();
  const pendingCount = typeof pendingOfflineCount === 'function'
    ? await pendingOfflineCount()
    : 0;
  const operationCard = `
    <div class="offline-operation-card ${navigator.onLine?'':'offline'}">
      <div>
        <div class="offline-operation-title">${navigator.onLine?'Sincronização do aplicativo':'Modo offline ativo'}</div>
        <div class="offline-operation-text">
          ${navigator.onLine
            ? (pendingCount ? `${pendingCount} alteração(ões) aguardam envio para a nuvem.` : 'Todos os dados deste aparelho estão sincronizados.')
            : 'Cadastros e inspeções serão salvos neste aparelho e enviados quando a conexão voltar.'}
        </div>
      </div>
      <div class="offline-operation-number">${pendingCount}</div>
    </div>`;

  document.getElementById('btn-refresh-dashboard')?.addEventListener('click', async ()=>{
    const btn = document.getElementById('btn-refresh-dashboard');
    btn.disabled = true;
    btn.textContent = "Atualizando...";
    if(!navigator.onLine){
      showToast("Sem conexão. Exibindo os dados salvos neste aparelho.","err");
      btn.disabled = false;
      btn.textContent = "Atualizar dados";
      return;
    }
    await refreshDashboardCollections();
    showToast("Dados do painel atualizados");
    renderDashboard();
  });

  if(ext.length===0){
    content.innerHTML = emptyState(
      "dashboard",
      "Nenhum extintor disponível",
      hasAllUsinasAccess()
        ? "Cadastre o primeiro extintor para começar a acompanhar vencimentos e inspeções."
        : `Não há extintores cadastrados para ${currentUserUsina()}.`,
      canCreateExtinguisher() ? "Cadastrar extintor" : null
    );
    document.getElementById('empty-cta')?.addEventListener('click', ()=>openExtinguisherModal());
    return;
  }

  const recStatus = ext.map(e=>dateStatus(e.dataRecarga).label);
  const thStatus = ext.map(e=>dateStatus(e.dataTH,false).label);
  const nc = ext.filter(e=>{ const li=lastInspection(e.id); return li && li.resultado==='NÃO CONFORME'; }).length;
  const emCampo = ext.filter(e=>(e.statusGeral||'EM CAMPO')==='EM CAMPO').length;
  const estoque = ext.filter(e=>e.statusGeral==='ESTOQUE').length;
  const recargaOp = ext.filter(e=>e.statusGeral==='ENVIADO PARA RECARGA').length;
  const desativado = ext.filter(e=>e.statusGeral==='DESATIVADO').length;

  const valido = recStatus.filter(s=>s==='VÁLIDO').length;
  const alerta = recStatus.filter(s=>s==='ALERTA').length;
  const vencido = recStatus.filter(s=>s==='VENCIDO').length;

  const byUsina = {};
  ext.forEach(e=>{ byUsina[e.usina||'Sem usina']=(byUsina[e.usina||'Sem usina']||0)+1; });

  const expiryBuckets = {
    "Vencidos":0,
    "Até 30 dias":0,
    "31 a 60 dias":0,
    "61 a 90 dias":0,
    "Acima de 90 dias":0
  };
  ext.forEach(e=>{
    const d = daysUntil(e.dataRecarga);
    if(d===null) return;
    if(d<0) expiryBuckets["Vencidos"]++;
    else if(d<=30) expiryBuckets["Até 30 dias"]++;
    else if(d<=60) expiryBuckets["31 a 60 dias"]++;
    else if(d<=90) expiryBuckets["61 a 90 dias"]++;
    else expiryBuckets["Acima de 90 dias"]++;
  });

  const monthKeys = [];
  const monthLabels = [];
  const now = new Date();
  for(let i=5;i>=0;i--){
    const d = new Date(now.getFullYear(), now.getMonth()-i, 1);
    monthKeys.push(`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`);
    monthLabels.push(d.toLocaleDateString('pt-BR',{month:'short',year:'2-digit'}).replace('.',''));
  }

  const monthlyConformity = monthKeys.map(key=>{
    const list = STATE.inspections.filter(i=>(i.date||'').slice(0,7)===key);
    if(!list.length) return 0;
    return Math.round(list.filter(i=>i.resultado==='CONFORME').length/list.length*100);
  });

  const ncFrequency = {};
  STATE.inspections.forEach(insp=>{
    (insp.checklist||[]).forEach(item=>{
      if(item.valor==='NC'){
        ncFrequency[item.item]=(ncFrequency[item.item]||0)+1;
      }
    });
  });
  const topNC = Object.entries(ncFrequency).sort((a,b)=>b[1]-a[1]).slice(0,6);

  content.innerHTML = operationCard + dashboardQuickActionsHtml() + `
    <div class="grid grid-4">
      <div class="card stat-card">
        <div class="label">Total de extintores</div>
        <div class="value">${ext.length}</div>
        <div class="bar"><i style="width:100%;background:var(--muted-2)"></i></div>
      </div>
      <div class="card stat-card">
        <div class="label">Recarga válida</div>
        <div class="value" style="color:var(--success)">${valido}</div>
        <div class="bar"><i style="width:${ext.length?valido/ext.length*100:0}%;background:var(--success)"></i></div>
      </div>
      <div class="card stat-card">
        <div class="label">Recarga em alerta</div>
        <div class="value" style="color:var(--warning)">${alerta}</div>
        <div class="bar"><i style="width:${ext.length?alerta/ext.length*100:0}%;background:var(--warning)"></i></div>
      </div>
      <div class="card stat-card">
        <div class="label">Recarga vencida</div>
        <div class="value" style="color:var(--danger)">${vencido}</div>
        <div class="bar"><i style="width:${ext.length?vencido/ext.length*100:0}%;background:var(--danger)"></i></div>
      </div>
    </div>

    <div class="section-title nc-dashboard-section-title">
      Tratativas de não conformidades
      <span class="nc-dashboard-total">${ncStats.total} registro(s)</span>
    </div>

    <div class="nc-dashboard-grid">
      <button
        type="button"
        class="nc-dashboard-card pending"
        data-nc-dashboard-status="ENCAMINHADA">
        <div class="nc-dashboard-card-head">
          <span class="nc-dashboard-card-dot"></span>
          <span>NC pendentes</span>
        </div>
        <strong>${ncStats.pending}</strong>
        <div class="nc-dashboard-card-foot">
          <span>Aguardando atendimento</span>
          <span>${ncDashboardPercent(ncStats.pending,ncStats.total)}%</span>
        </div>
        <div class="nc-dashboard-card-bar">
          <i style="width:${ncDashboardPercent(ncStats.pending,ncStats.total)}%"></i>
        </div>
      </button>

      <button
        type="button"
        class="nc-dashboard-card progress"
        data-nc-dashboard-status="EM ANDAMENTO">
        <div class="nc-dashboard-card-head">
          <span class="nc-dashboard-card-dot"></span>
          <span>NC em andamento</span>
        </div>
        <strong>${ncStats.progress}</strong>
        <div class="nc-dashboard-card-foot">
          <span>Tratativas em execução</span>
          <span>${ncDashboardPercent(ncStats.progress,ncStats.total)}%</span>
        </div>
        <div class="nc-dashboard-card-bar">
          <i style="width:${ncDashboardPercent(ncStats.progress,ncStats.total)}%"></i>
        </div>
      </button>

      <button
        type="button"
        class="nc-dashboard-card resolved"
        data-nc-dashboard-status="RESOLVIDA">
        <div class="nc-dashboard-card-head">
          <span class="nc-dashboard-card-dot"></span>
          <span>NC resolvidas</span>
        </div>
        <strong>${ncStats.resolved}</strong>
        <div class="nc-dashboard-card-foot">
          <span>Correções concluídas</span>
          <span>${ncDashboardPercent(ncStats.resolved,ncStats.total)}%</span>
        </div>
        <div class="nc-dashboard-card-bar">
          <i style="width:${ncDashboardPercent(ncStats.resolved,ncStats.total)}%"></i>
        </div>
      </button>
    </div>

    <div class="dashboard-charts">
      <div class="card chart-card">
        <div class="chart-head">
          <div>
            <div class="chart-title">Status operacional</div>
            <div class="chart-sub">Clique em uma categoria para abrir os extintores correspondentes.</div>
          </div>
        </div>
        <div class="chart-wrap small"><canvas id="chart-status"></canvas></div>
      </div>

      <div class="card chart-card">
        <div class="chart-head">
          <div>
            <div class="chart-title">Extintores por usina</div>
            <div class="chart-sub">Distribuição dos equipamentos cadastrados.</div>
          </div>
        </div>
        <div class="chart-wrap small"><canvas id="chart-usinas"></canvas></div>
      </div>

      <div class="card chart-card chart-card-wide">
        <div class="chart-head">
          <div>
            <div class="chart-title">Conformidade das inspeções</div>
            <div class="chart-sub">Percentual mensal de inspeções conformes nos últimos seis meses.</div>
          </div>
        </div>
        <div class="chart-wrap"><canvas id="chart-conformidade"></canvas></div>
      </div>

      <div class="card chart-card">
        <div class="chart-head">
          <div>
            <div class="chart-title">Próximos vencimentos</div>
            <div class="chart-sub">Quantidade de recargas por faixa de prazo.</div>
          </div>
        </div>
        <div class="chart-wrap small"><canvas id="chart-vencimentos"></canvas></div>
      </div>

      <div class="card chart-card">
        <div class="chart-head">
          <div>
            <div class="chart-title">Não conformidades frequentes</div>
            <div class="chart-sub">Itens do checklist que mais apresentaram problemas.</div>
          </div>
        </div>
        <div class="chart-wrap small">
          ${topNC.length ? '<canvas id="chart-nc"></canvas>' : '<div class="empty" style="padding:55px 10px;"><h4>Nenhuma não conformidade</h4><p>Os itens aparecerão aqui quando houver registros.</p></div>'}
        </div>
      </div>
    </div>

    <div class="section-title">Próximos vencimentos de recarga <span style="font-family:var(--font-body);font-size:11px;color:var(--muted);font-weight:500;">(${ext.length} extintor(es))</span></div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Nº</th><th>Usina</th><th>Local</th><th>Vencimento</th><th>Dias</th><th>Status</th></tr></thead>
        <tbody>
        ${ext.slice().sort((a,b)=>{
          const da = daysUntil(a.dataRecarga);
          const db = daysUntil(b.dataRecarga);
          if(da===null && db===null) return String(a.numero||'').localeCompare(String(b.numero||''),'pt-BR',{numeric:true});
          if(da===null) return 1;
          if(db===null) return -1;
          return da-db;
        }).map(e=>{
          const s = dateStatus(e.dataRecarga);
          return `<tr><td>${escapeHtml(e.numero)}</td><td>${escapeHtml(e.usina)}</td><td>${escapeHtml(e.localizacao)}</td><td>${fmtDate(e.dataRecarga)}</td><td>${s.days??'—'}</td><td><span class="chip ${s.cls}">${s.label}</span></td></tr>`;
        }).join('')}
        </tbody>
      </table>
    </div>
  `;

  bindQuickActionButtons(content);

  document.querySelectorAll('[data-nc-dashboard-status]').forEach(card=>{
    card.addEventListener('click',()=>{
      openNcDashboardList(card.dataset.ncDashboardStatus);
    });
  });

  if(typeof Chart==='undefined'){
    showToast("Os gráficos não puderam ser carregados.","err");
    return;
  }

  Chart.defaults.color = '#8b96a3';
  Chart.defaults.borderColor = 'rgba(139,150,163,.16)';
  Chart.defaults.font.family = "'Inter', sans-serif";

  const commonPlugins = {
    legend:{labels:{usePointStyle:true,boxWidth:9,padding:14}},
    tooltip:{
      backgroundColor:'#232b33',
      titleColor:'#e9edf1',
      bodyColor:'#e9edf1',
      borderColor:'#333d47',
      borderWidth:1,
      padding:10
    }
  };

  const statusLabels = ['Em campo','Estoque','Enviado para recarga','Desativado'];
  const statusValues = [emCampo,estoque,recargaOp,desativado];
  const statusChart = new Chart(document.getElementById('chart-status'),{
    type:'doughnut',
    data:{
      labels:statusLabels,
      datasets:[{
        data:statusValues,
        backgroundColor:['#3aa66b','#4f7cff','#d9a441','#e0432a'],
        borderColor:'#1b2128',
        borderWidth:3,
        hoverOffset:8
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      cutout:'62%',
      plugins:commonPlugins,
      onClick:(evt,elements)=>{
        if(!elements.length) return;
        const map=['EM CAMPO','ESTOQUE','ENVIADO PARA RECARGA','DESATIVADO'];
        extFilters.operational = map[elements[0].index];
        STATE.view='extinguishers';
        renderShell();
      }
    }
  });
  DASHBOARD_CHARTS.push(statusChart);

  const usinaChart = new Chart(document.getElementById('chart-usinas'),{
    type:'bar',
    data:{
      labels:Object.keys(byUsina),
      datasets:[{
        label:'Extintores',
        data:Object.values(byUsina),
        backgroundColor:'rgba(79,124,255,.65)',
        borderColor:'#4f7cff',
        borderWidth:1,
        borderRadius:6
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      indexAxis:Object.keys(byUsina).length>4?'y':'x',
      plugins:{...commonPlugins,legend:{display:false}},
      scales:{
        y:{beginAtZero:true,ticks:{precision:0}},
        x:{beginAtZero:true,ticks:{precision:0}}
      }
    }
  });
  DASHBOARD_CHARTS.push(usinaChart);

  const conformityChart = new Chart(document.getElementById('chart-conformidade'),{
    type:'line',
    data:{
      labels:monthLabels,
      datasets:[{
        label:'Conformidade',
        data:monthlyConformity,
        borderColor:'#3aa66b',
        backgroundColor:'rgba(58,166,107,.15)',
        fill:true,
        tension:.35,
        pointRadius:4,
        pointHoverRadius:6
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      plugins:commonPlugins,
      scales:{
        y:{beginAtZero:true,max:100,ticks:{callback:v=>v+'%'}},
        x:{grid:{display:false}}
      }
    }
  });
  DASHBOARD_CHARTS.push(conformityChart);

  const expiryChart = new Chart(document.getElementById('chart-vencimentos'),{
    type:'bar',
    data:{
      labels:Object.keys(expiryBuckets),
      datasets:[{
        label:'Extintores',
        data:Object.values(expiryBuckets),
        backgroundColor:['rgba(224,67,42,.75)','rgba(217,164,65,.75)','rgba(79,124,255,.7)','rgba(58,166,107,.65)','rgba(139,150,163,.55)'],
        borderRadius:6
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      plugins:{...commonPlugins,legend:{display:false}},
      scales:{
        y:{beginAtZero:true,ticks:{precision:0}},
        x:{grid:{display:false}}
      }
    }
  });
  DASHBOARD_CHARTS.push(expiryChart);

  if(topNC.length){
    const ncChart = new Chart(document.getElementById('chart-nc'),{
      type:'bar',
      data:{
        labels:topNC.map(x=>x[0]),
        datasets:[{
          label:'Ocorrências',
          data:topNC.map(x=>x[1]),
          backgroundColor:'rgba(224,67,42,.7)',
          borderColor:'#e0432a',
          borderWidth:1,
          borderRadius:6
        }]
      },
      options:{
        responsive:true,
        maintainAspectRatio:false,
        indexAxis:'y',
        plugins:{...commonPlugins,legend:{display:false}},
        scales:{
          x:{beginAtZero:true,ticks:{precision:0}},
          y:{grid:{display:false}}
        }
      }
    });
    DASHBOARD_CHARTS.push(ncChart);
  }
}

function emptyState(icon,title,text,ctaLabel){
  return `<div class="empty">${ICONS[icon]||ICONS.ext}<h4>${title}</h4><p>${text}</p>
    ${ctaLabel?`<div style="margin-top:16px;"><button class="btn btn-accent" id="empty-cta">${ICONS.plus}${ctaLabel}</button></div>`:''}
  </div>`;
}

/* ============================================================
   EXTINGUISHERS LIST
============================================================ */
let extFilters = {
  usina:'',
  status:'',
  operational:'',
  search:'',
  agent:'',
  thStatus:'',
  inspection:'',
  nc:'',
  expiryRange:'',
  sort:'number'
};
let EXTINGUISHER_VIEW_MODE = null;
let EXTINGUISHER_ADVANCED_FILTERS_OPEN = false;

function extinguisherNcSummary(extinguisherId){
  const records = STATE.inspections.filter(inspection=>
    String(inspection.extinguisherId)===String(extinguisherId) &&
    inspection?.naoConformidade
  );

  return {
    hasAny:records.length>0,
    hasActive:records.some(inspection=>
      normalizeNcWorkflowStatus(
        inspection.naoConformidade?.status
      )!=='RESOLVIDA'
    ),
    hasResolved:records.some(inspection=>
      normalizeNcWorkflowStatus(
        inspection.naoConformidade?.status
      )==='RESOLVIDA'
    )
  };
}

function matchesExpiryRange(dateValue,range){
  if(!range) return true;

  const days = daysUntil(dateValue);

  if(range==='SEM DATA') return days===null;
  if(days===null) return false;
  if(range==='VENCIDO') return days<0;
  if(range==='0-30') return days>=0 && days<=30;
  if(range==='31-60') return days>=31 && days<=60;
  if(range==='61-90') return days>=61 && days<=90;
  if(range==='90+') return days>90;

  return true;
}

function extinguisherAdvancedFilterCount(){
  return [
    extFilters.agent,
    extFilters.thStatus,
    extFilters.inspection,
    extFilters.nc,
    extFilters.expiryRange,
    extFilters.sort && extFilters.sort!=='number' ? extFilters.sort : ''
  ].filter(Boolean).length;
}

function extinguisherActiveFilterDescriptors(){
  const filters = [];

  if(extFilters.search){
    filters.push({
      key:'search',
      label:`Busca: ${extFilters.search}`
    });
  }
  if(extFilters.usina){
    filters.push({
      key:'usina',
      label:`Usina: ${extFilters.usina}`
    });
  }
  if(extFilters.status){
    filters.push({
      key:'status',
      label:`Recarga: ${extFilters.status}`
    });
  }
  if(extFilters.operational){
    filters.push({
      key:'operational',
      label:`Situação: ${extFilters.operational}`
    });
  }
  if(extFilters.agent){
    filters.push({
      key:'agent',
      label:`Agente: ${extFilters.agent}`
    });
  }
  if(extFilters.thStatus){
    filters.push({
      key:'thStatus',
      label:`Teste hidrostático: ${extFilters.thStatus}`
    });
  }
  if(extFilters.inspection){
    filters.push({
      key:'inspection',
      label:`Última inspeção: ${extFilters.inspection}`
    });
  }
  if(extFilters.nc){
    const labels = {
      'ATIVA':'NC ativa',
      'RESOLVIDA':'NC resolvida',
      'SEM NC':'Sem histórico de NC'
    };
    filters.push({
      key:'nc',
      label:labels[extFilters.nc] || extFilters.nc
    });
  }
  if(extFilters.expiryRange){
    const labels = {
      'VENCIDO':'Recarga vencida',
      '0-30':'Recarga em até 30 dias',
      '31-60':'Recarga entre 31 e 60 dias',
      '61-90':'Recarga entre 61 e 90 dias',
      '90+':'Recarga acima de 90 dias',
      'SEM DATA':'Recarga sem data'
    };
    filters.push({
      key:'expiryRange',
      label:labels[extFilters.expiryRange] || extFilters.expiryRange
    });
  }
  if(extFilters.sort && extFilters.sort!=='number'){
    const labels = {
      'location':'Ordenação: localização',
      'recharge':'Ordenação: recarga mais próxima',
      'hydro':'Ordenação: teste hidrostático',
      'inspection':'Ordenação: inspeção mais recente'
    };
    filters.push({
      key:'sort',
      label:labels[extFilters.sort] || 'Ordenação personalizada'
    });
  }

  return filters;
}

function clearExtinguisherFilter(key){
  if(!(key in extFilters)) return;
  extFilters[key] = key==='sort' ? 'number' : '';
}

function resetExtinguisherFilters(){
  extFilters = {
    usina:'',
    status:'',
    operational:'',
    search:'',
    agent:'',
    thStatus:'',
    inspection:'',
    nc:'',
    expiryRange:'',
    sort:'number'
  };
  EXTINGUISHER_ADVANCED_FILTERS_OPEN = false;
}

function sortFilteredExtinguishers(items){
  const list = [...items];

  if(extFilters.sort==='location'){
    return list.sort((a,b)=>
      String(a.localizacao || '').localeCompare(
        String(b.localizacao || ''),
        'pt-BR',
        {numeric:true,sensitivity:'base'}
      )
    );
  }

  if(extFilters.sort==='recharge'){
    return list.sort((a,b)=>{
      const aDays = daysUntil(a.dataRecarga);
      const bDays = daysUntil(b.dataRecarga);
      if(aDays===null && bDays===null) return compareExtinguisherNumbers(a,b);
      if(aDays===null) return 1;
      if(bDays===null) return -1;
      return aDays-bDays || compareExtinguisherNumbers(a,b);
    });
  }

  if(extFilters.sort==='hydro'){
    return list.sort((a,b)=>{
      const aDays = daysUntil(a.dataTH);
      const bDays = daysUntil(b.dataTH);
      if(aDays===null && bDays===null) return compareExtinguisherNumbers(a,b);
      if(aDays===null) return 1;
      if(bDays===null) return -1;
      return aDays-bDays || compareExtinguisherNumbers(a,b);
    });
  }

  if(extFilters.sort==='inspection'){
    return list.sort((a,b)=>{
      const aDate = lastInspection(a.id)?.date || '';
      const bDate = lastInspection(b.id)?.date || '';
      return String(bDate).localeCompare(String(aDate)) ||
        compareExtinguisherNumbers(a,b);
    });
  }

  return sortExtinguishersNumeric(list);
}

function extinguisherViewModeKey(){
  return `extintores:view-mode:${AUTH_USER?.uid || 'local'}`;
}

function currentExtinguisherViewMode(){
  if(EXTINGUISHER_VIEW_MODE==='cards' || EXTINGUISHER_VIEW_MODE==='list'){
    return EXTINGUISHER_VIEW_MODE;
  }

  try{
    const saved = localStorage.getItem(extinguisherViewModeKey());
    EXTINGUISHER_VIEW_MODE = saved==='list' ? 'list' : 'cards';
  }catch(error){
    EXTINGUISHER_VIEW_MODE = 'cards';
  }

  return EXTINGUISHER_VIEW_MODE;
}

function setExtinguisherViewMode(mode){
  EXTINGUISHER_VIEW_MODE = mode==='list' ? 'list' : 'cards';

  try{
    localStorage.setItem(
      extinguisherViewModeKey(),
      EXTINGUISHER_VIEW_MODE
    );
  }catch(error){
    console.warn('Não foi possível salvar a preferência de visualização.',error);
  }
}

const EXTINGUISHER_NUMBER_COLLATOR = new Intl.Collator('pt-BR',{
  numeric:true,
  sensitivity:'base'
});

function compareExtinguisherNumbers(a,b){
  const aNumber = String(a?.numero ?? '').trim();
  const bNumber = String(b?.numero ?? '').trim();

  const numberComparison = EXTINGUISHER_NUMBER_COLLATOR.compare(
    aNumber,
    bNumber
  );

  if(numberComparison!==0) return numberComparison;

  const usinaComparison = String(a?.usina || '').localeCompare(
    String(b?.usina || ''),
    'pt-BR',
    {sensitivity:'base'}
  );

  if(usinaComparison!==0) return usinaComparison;

  return String(a?.localizacao || '').localeCompare(
    String(b?.localizacao || ''),
    'pt-BR',
    {sensitivity:'base'}
  );
}

function sortExtinguishersNumeric(items){
  return [...items].sort(compareExtinguisherNumbers);
}

function renderExtinguishers(){
  setHeader("Extintores", `${STATE.extinguishers.length} cadastrado(s)`,
    canCreateExtinguisher() ? `<button type="button" class="btn btn-accent" id="btn-new-ext">${ICONS.plus}Novo extintor</button>` : '');
  document.getElementById('btn-new-ext')?.addEventListener('click', ()=>{
    try{
      if(!canCreateExtinguisher()){
        showToast("Você não possui permissão para cadastrar extintores.","err");
        return;
      }
      openExtinguisherModal();
    }catch(error){
      console.error("Erro ao abrir cadastro de extintor:", error);
      showToast("Não foi possível abrir o cadastro do extintor.","err");
    }
  });

  const content = document.getElementById('content');
  const usinas = hasAllUsinasAccess() ? STATE.config.usinas : [currentUserUsina()];
  const agents = [...new Set([
    ...(STATE.config.agents || []),
    ...STATE.extinguishers.map(extinguisher=>extinguisher.agente)
  ].filter(Boolean))].sort((a,b)=>a.localeCompare(b,'pt-BR'));

  let list = STATE.extinguishers.slice();

  if(extFilters.usina){
    list = list.filter(extinguisher=>
      extinguisher.usina===extFilters.usina
    );
  }

  if(extFilters.status){
    list = list.filter(extinguisher=>{
      const status = dateStatus(extinguisher.dataRecarga).label;
      return extFilters.status==='SEM DATA'
        ? status==='—'
        : status===extFilters.status;
    });
  }

  if(extFilters.operational){
    list = list.filter(extinguisher=>
      (extinguisher.statusGeral || 'EM CAMPO')===extFilters.operational
    );
  }

  if(extFilters.agent){
    list = list.filter(extinguisher=>
      extinguisher.agente===extFilters.agent
    );
  }

  if(extFilters.thStatus){
    list = list.filter(extinguisher=>{
      const days = daysUntil(extinguisher.dataTH);
      if(extFilters.thStatus==='SEM DATA') return days===null;
      if(days===null) return false;
      if(extFilters.thStatus==='VENCIDO') return days<0;
      if(extFilters.thStatus==='VÁLIDO') return days>=0;
      return true;
    });
  }

  if(extFilters.inspection){
    list = list.filter(extinguisher=>{
      const inspection = lastInspection(extinguisher.id);
      if(extFilters.inspection==='SEM INSPEÇÃO') return !inspection;
      return inspection?.resultado===extFilters.inspection;
    });
  }

  if(extFilters.nc){
    list = list.filter(extinguisher=>{
      const nc = extinguisherNcSummary(extinguisher.id);
      if(extFilters.nc==='ATIVA') return nc.hasActive;
      if(extFilters.nc==='RESOLVIDA') return nc.hasResolved && !nc.hasActive;
      if(extFilters.nc==='SEM NC') return !nc.hasAny;
      return true;
    });
  }

  if(extFilters.expiryRange){
    list = list.filter(extinguisher=>
      matchesExpiryRange(
        extinguisher.dataRecarga,
        extFilters.expiryRange
      )
    );
  }

  if(extFilters.search){
    const query = extFilters.search.toLowerCase();
    list = list.filter(extinguisher=>{
      const inspection = lastInspection(extinguisher.id);
      const searchable = [
        extinguisher.numero,
        extinguisher.localizacao,
        extinguisher.usina,
        extinguisher.agente,
        extinguisher.capacidade,
        extinguisher.statusGeral,
        inspection?.responsavel,
        inspection?.resultado
      ].join(' ').toLowerCase();

      return searchable.includes(query);
    });
  }

  list = sortFilteredExtinguishers(list);

  const viewMode = currentExtinguisherViewMode();
  const activeFilters = extinguisherActiveFilterDescriptors();
  const advancedFilterCount = extinguisherAdvancedFilterCount();

  if(advancedFilterCount){
    EXTINGUISHER_ADVANCED_FILTERS_OPEN = true;
  }

  content.innerHTML = `
    <section class="ext-filter-shell">
      <div class="filters ext-basic-filters">
        <div class="search-box ext-filter-search">
          ${ICONS.search}
          <input
            type="search"
            id="f-search"
            placeholder="Buscar por número, local, usina, agente ou responsável"
            value="${escapeHtml(extFilters.search)}">
        </div>

        <select
          id="f-usina"
          aria-label="Filtrar por usina"
          ${hasAllUsinasAccess()?'':'disabled title="Usina definida pelo perfil do usuário"'}>
          ${hasAllUsinasAccess()
            ? '<option value="">Todas as usinas</option>'
            : ''
          }
          ${usinas.map(usina=>`
            <option
              value="${escapeHtml(usina)}"
              ${(!hasAllUsinasAccess() || extFilters.usina===usina)?'selected':''}>
              ${escapeHtml(usina)}
            </option>
          `).join('')}
        </select>

        <select id="f-status" aria-label="Filtrar vencimento da recarga">
          <option value="">Todas as recargas</option>
          <option value="VÁLIDO" ${extFilters.status==='VÁLIDO'?'selected':''}>Recarga válida</option>
          <option value="ALERTA" ${extFilters.status==='ALERTA'?'selected':''}>Recarga em alerta</option>
          <option value="VENCIDO" ${extFilters.status==='VENCIDO'?'selected':''}>Recarga vencida</option>
          <option value="SEM DATA" ${extFilters.status==='SEM DATA'?'selected':''}>Recarga sem data</option>
        </select>

        <select id="f-operational" aria-label="Filtrar situação operacional">
          <option value="">Todas as situações</option>
          ${['EM CAMPO','ESTOQUE','ENVIADO PARA RECARGA','DESATIVADO'].map(status=>`
            <option
              value="${status}"
              ${extFilters.operational===status?'selected':''}>
              ${status}
            </option>
          `).join('')}
        </select>

        <button
          type="button"
          class="btn ext-advanced-toggle ${EXTINGUISHER_ADVANCED_FILTERS_OPEN?'active':''}"
          id="ext-advanced-toggle"
          aria-expanded="${EXTINGUISHER_ADVANCED_FILTERS_OPEN}">
          ${ICONS.settings}
          <span>Filtros avançados</span>
          ${advancedFilterCount
            ? `<b>${advancedFilterCount}</b>`
            : ''
          }
        </button>
      </div>

      <div class="ext-advanced-panel ${EXTINGUISHER_ADVANCED_FILTERS_OPEN?'show':''}">
        <div class="ext-advanced-head">
          <div>
            <h3>Filtros avançados</h3>
            <p>Refine a consulta por características, inspeção, NC e vencimentos.</p>
          </div>
          <button
            type="button"
            class="btn btn-sm btn-ghost"
            id="ext-clear-filters">
            Limpar todos
          </button>
        </div>

        <div class="ext-advanced-grid">
          <label>
            <span>Agente extintor</span>
            <select id="f-agent">
              <option value="">Todos os agentes</option>
              ${agents.map(agent=>`
                <option
                  value="${escapeHtml(agent)}"
                  ${extFilters.agent===agent?'selected':''}>
                  ${escapeHtml(agent)}
                </option>
              `).join('')}
            </select>
          </label>

          <label>
            <span>Teste hidrostático</span>
            <select id="f-th-status">
              <option value="">Todos os vencimentos</option>
              <option value="VÁLIDO" ${extFilters.thStatus==='VÁLIDO'?'selected':''}>Válido</option>
              <option value="VENCIDO" ${extFilters.thStatus==='VENCIDO'?'selected':''}>Vencido</option>
              <option value="SEM DATA" ${extFilters.thStatus==='SEM DATA'?'selected':''}>Sem data</option>
            </select>
          </label>

          <label>
            <span>Última inspeção</span>
            <select id="f-inspection">
              <option value="">Todos os resultados</option>
              <option value="CONFORME" ${extFilters.inspection==='CONFORME'?'selected':''}>Conforme</option>
              <option value="NÃO CONFORME" ${extFilters.inspection==='NÃO CONFORME'?'selected':''}>Não conforme</option>
              <option value="SEM INSPEÇÃO" ${extFilters.inspection==='SEM INSPEÇÃO'?'selected':''}>Sem inspeção</option>
            </select>
          </label>

          <label>
            <span>Tratativa de NC</span>
            <select id="f-nc">
              <option value="">Todas as situações</option>
              <option value="ATIVA" ${extFilters.nc==='ATIVA'?'selected':''}>Com NC ativa</option>
              <option value="RESOLVIDA" ${extFilters.nc==='RESOLVIDA'?'selected':''}>Somente NC resolvida</option>
              <option value="SEM NC" ${extFilters.nc==='SEM NC'?'selected':''}>Sem histórico de NC</option>
            </select>
          </label>

          <label>
            <span>Prazo da recarga</span>
            <select id="f-expiry-range">
              <option value="">Qualquer prazo</option>
              <option value="VENCIDO" ${extFilters.expiryRange==='VENCIDO'?'selected':''}>Vencida</option>
              <option value="0-30" ${extFilters.expiryRange==='0-30'?'selected':''}>Até 30 dias</option>
              <option value="31-60" ${extFilters.expiryRange==='31-60'?'selected':''}>De 31 a 60 dias</option>
              <option value="61-90" ${extFilters.expiryRange==='61-90'?'selected':''}>De 61 a 90 dias</option>
              <option value="90+" ${extFilters.expiryRange==='90+'?'selected':''}>Acima de 90 dias</option>
              <option value="SEM DATA" ${extFilters.expiryRange==='SEM DATA'?'selected':''}>Sem data</option>
            </select>
          </label>

          <label>
            <span>Ordenar resultados</span>
            <select id="f-sort">
              <option value="number" ${extFilters.sort==='number'?'selected':''}>Número do extintor</option>
              <option value="location" ${extFilters.sort==='location'?'selected':''}>Localização A–Z</option>
              <option value="recharge" ${extFilters.sort==='recharge'?'selected':''}>Recarga mais próxima</option>
              <option value="hydro" ${extFilters.sort==='hydro'?'selected':''}>Teste hidrostático mais próximo</option>
              <option value="inspection" ${extFilters.sort==='inspection'?'selected':''}>Inspeção mais recente</option>
            </select>
          </label>
        </div>
      </div>

      ${activeFilters.length
        ? `
          <div class="ext-active-filters">
            <span>Filtros ativos</span>
            <div>
              ${activeFilters.map(filter=>`
                <button
                  type="button"
                  data-clear-ext-filter="${filter.key}"
                  title="Remover filtro">
                  ${escapeHtml(filter.label)}
                  <b>×</b>
                </button>
              `).join('')}
            </div>
          </div>
        `
        : ''
      }
    </section>

    <div class="ext-view-toolbar">
      <div class="ext-view-summary">
        <b>${list.length}</b>
        <span>extintor${list.length===1?'':'es'} exibido${list.length===1?'':'s'}</span>
        ${list.length!==STATE.extinguishers.length
          ? `<small>de ${STATE.extinguishers.length} cadastrado(s)</small>`
          : ''
        }
      </div>

      <div
        class="ext-view-toggle"
        role="group"
        aria-label="Modo de visualização dos extintores">
        <button
          type="button"
          class="${viewMode==='cards'?'active':''}"
          data-ext-view-mode="cards"
          aria-pressed="${viewMode==='cards'}"
          title="Visualizar em cards">
          ${ICONS.gridView}
          <span>Cards</span>
        </button>
        <button
          type="button"
          class="${viewMode==='list'?'active':''}"
          data-ext-view-mode="list"
          aria-pressed="${viewMode==='list'}"
          title="Visualizar em lista">
          ${ICONS.listView}
          <span>Lista</span>
        </button>
      </div>
    </div>

    ${list.length===0
      ? emptyState(
          'ext',
          'Nenhum extintor encontrado',
          'Ajuste os filtros para localizar um equipamento.',
          canCreateExtinguisher()?'Cadastrar extintor':null
        )
      : viewMode==='list'
        ? `<div class="ext-list-view">${list.map(listExtRow).join('')}</div>`
        : `<div class="grid ext-grid">${list.map(cardExt).join('')}</div>`
    }
  `;
  document.getElementById('empty-cta')?.addEventListener('click', ()=>openExtinguisherModal());

  let searchTimer = null;
  document.getElementById('f-search')?.addEventListener('input',event=>{
    const value = event.target.value;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(()=>{
      extFilters.search = value;
      renderExtinguishers();
      requestAnimationFrame(()=>{
        const search = document.getElementById('f-search');
        if(search){
          search.focus();
          search.setSelectionRange(value.length,value.length);
        }
      });
    },160);
  });

  document.getElementById('f-usina')?.addEventListener('change',event=>{
    if(!hasAllUsinasAccess()) return;
    extFilters.usina = event.target.value;
    renderExtinguishers();
  });

  document.getElementById('f-status')?.addEventListener('change',event=>{
    extFilters.status = event.target.value;
    renderExtinguishers();
  });

  document.getElementById('f-operational')?.addEventListener('change',event=>{
    extFilters.operational = event.target.value;
    renderExtinguishers();
  });

  document.getElementById('ext-advanced-toggle')?.addEventListener('click',()=>{
    EXTINGUISHER_ADVANCED_FILTERS_OPEN =
      !EXTINGUISHER_ADVANCED_FILTERS_OPEN;
    renderExtinguishers();
  });

  document.getElementById('ext-clear-filters')?.addEventListener('click',()=>{
    resetExtinguisherFilters();
    renderExtinguishers();
  });

  const advancedBindings = [
    ['f-agent','agent'],
    ['f-th-status','thStatus'],
    ['f-inspection','inspection'],
    ['f-nc','nc'],
    ['f-expiry-range','expiryRange'],
    ['f-sort','sort']
  ];

  advancedBindings.forEach(([elementId,key])=>{
    document.getElementById(elementId)?.addEventListener('change',event=>{
      extFilters[key] = event.target.value;
      EXTINGUISHER_ADVANCED_FILTERS_OPEN = true;
      renderExtinguishers();
    });
  });

  content.querySelectorAll('[data-clear-ext-filter]').forEach(button=>{
    button.addEventListener('click',()=>{
      clearExtinguisherFilter(button.dataset.clearExtFilter);
      renderExtinguishers();
    });
  });

  content.querySelectorAll('[data-ext-view-mode]').forEach(button=>{
    button.addEventListener('click',()=>{
      const nextMode = button.dataset.extViewMode;
      if(nextMode===currentExtinguisherViewMode()) return;
      setExtinguisherViewMode(nextMode);
      renderExtinguishers();
    });
  });

  content.querySelectorAll('[data-view-ext]').forEach(element=>{
    const openRecord = ()=>openExtinguisherDetail(element.dataset.viewExt);

    element.addEventListener('click',openRecord);
    element.addEventListener('keydown',event=>{
      if(event.key!=='Enter' && event.key!==' ') return;
      if(event.target.closest('button')) return;
      event.preventDefault();
      openRecord();
    });
  });
  content.querySelectorAll('[data-edit-ext]').forEach(b=>b.addEventListener('click', (event)=>{
    event.stopPropagation();
    const ext = STATE.extinguishers.find(x=>String(x.id)===String(b.dataset.editExt));
    if(!canEditExtinguisher(ext)){ showToast("Você não possui permissão para editar este extintor.","err"); return; }
    openExtinguisherModal(b.dataset.editExt);
  }));
  content.querySelectorAll('[data-del-ext]').forEach(b=>b.addEventListener('click', (event)=>{
    event.stopPropagation();
    const ext = STATE.extinguishers.find(x=>String(x.id)===String(b.dataset.delExt));
    if(!canDeleteExtinguisher(ext)){ showToast("Você não possui permissão para excluir este extintor.","err"); return; }
    deleteExtinguisher(b.dataset.delExt);
  }));
}

function operationalStatusMeta(status){
  const s = (status || 'EM CAMPO').toUpperCase();
  if(s === 'ESTOQUE') return {label:'ESTOQUE', cls:'estoque'};
  if(s === 'ENVIADO PARA RECARGA') return {label:'ENVIADO PARA RECARGA', cls:'recarga'};
  if(s === 'DESATIVADO') return {label:'DESATIVADO', cls:'desativado'};
  return {label:'EM CAMPO', cls:'em-campo'};
}

function cardExt(e){
  const rec = dateStatus(e.dataRecarga);
  const th = dateStatus(e.dataTH,false);
  const li = lastInspection(e.id);
  const st = operationalStatusMeta(e.statusGeral);
  return `
  <div class="ext-card status-${st.cls}" data-view-ext="${e.id}" style="cursor:pointer;">
    <div class="ext-photo">
      ${e.foto?`<img src="${e.foto}">`:`<div class="no-photo">${ICONS.photo}</div>`}
      <div class="ext-num">#${escapeHtml(e.numero)}</div>
    </div>
    <div class="ext-body">
      <div class="loc">${escapeHtml(e.localizacao)}</div>
      <div class="meta">${escapeHtml(e.usina)} · ${escapeHtml(e.agente)} · ${escapeHtml(e.capacidade||'')}</div>
      <div class="status-op ${st.cls}">${st.label}</div>
      <div class="ext-chips">
        <span class="chip ${rec.cls}">Recarga: ${rec.label}</span>
        <span class="chip ${th.cls}">TH: ${th.label}</span>
        ${li && li.resultado==='NÃO CONFORME' ? `<span class="chip bad">NC na inspeção</span>` : ''}
      </div>
      ${(canEditExtinguisher(e) || canDeleteExtinguisher(e)) ? `<div class="ext-actions">
        ${canEditExtinguisher(e) ? `<button class="btn btn-sm" data-edit-ext="${e.id}">${ICONS.edit}Editar</button>` : ''}
        ${canDeleteExtinguisher(e) ? `<button class="btn btn-sm btn-danger" data-del-ext="${e.id}">${ICONS.trash}</button>` : ''}
      </div>` : ''}
    </div>
  </div>`;
}


function listExtRow(e){
  const rec = dateStatus(e.dataRecarga);
  const th = dateStatus(e.dataTH,false);
  const li = lastInspection(e.id);
  const st = operationalStatusMeta(e.statusGeral);
  const activeTreatment = STATE.inspections.find(inspection=>
    String(inspection.extinguisherId)===String(e.id) &&
    inspection.naoConformidade &&
    normalizeNcWorkflowStatus(
      inspection.naoConformidade.status
    )!=='RESOLVIDA'
  );

  return `
    <article
      class="ext-list-row status-${st.cls}"
      data-view-ext="${escapeHtml(String(e.id))}"
      role="button"
      tabindex="0"
      aria-label="Abrir prontuário do extintor ${escapeHtml(String(e.numero))}">

      <div class="ext-list-photo">
        ${e.foto
          ? `<img src="${e.foto}" alt="Foto do extintor ${escapeHtml(String(e.numero))}">`
          : `<div class="no-photo">${ICONS.photo}</div>`
        }
      </div>

      <div class="ext-list-identity">
        <div class="ext-list-number-line">
          <b>#${escapeHtml(e.numero)}</b>
          ${pendingSyncBadge(e)}
        </div>
        <strong>${escapeHtml(e.localizacao || 'Localização não informada')}</strong>
        <small>${escapeHtml(e.usina || 'Usina não informada')}</small>
      </div>

      <div class="ext-list-mobile-summary">
        <div class="ext-mobile-box ext-mobile-operational ${st.cls}">
          <small>Situação</small>
          <b>${escapeHtml(st.label)}</b>
        </div>

        <div class="ext-mobile-box">
          <small>Recarga</small>
          <b class="${rec.cls}">${escapeHtml(rec.label)}</b>
          <em>${fmtDate(e.dataRecarga)}</em>
        </div>

        <div class="ext-mobile-box">
          <small>TH</small>
          <b class="${th.cls}">${escapeHtml(th.label)}</b>
          <em>${fmtDate(e.dataTH)}</em>
        </div>

        <div class="ext-mobile-box">
          <small>Inspeção</small>
          <b class="${!li?'neutral':li.resultado==='NÃO CONFORME'?'bad':'ok'}">
            ${li ? escapeHtml(li.resultado) : 'Sem inspeção'}
          </b>
          <em>${li ? fmtDate(li.date) : '—'}</em>
          ${activeTreatment
            ? `<i>NC ${escapeHtml(
                ncStatusMeta(
                  activeTreatment.naoConformidade.status
                ).label.toLowerCase()
              )}</i>`
            : ''
          }
        </div>
      </div>

      <div class="ext-list-technical">
        <span>Agente e capacidade</span>
        <b>${escapeHtml(e.agente || '—')}</b>
        <small>${escapeHtml(e.capacidade || 'Capacidade não informada')}</small>
      </div>

      <div class="ext-list-operational">
        <span>Situação</span>
        <div class="status-op ${st.cls}">${st.label}</div>
      </div>

      <div class="ext-list-expiry">
        <span>Vencimentos</span>
        <div>
          <small>Recarga</small>
          <b class="ext-list-status ${rec.cls}">${rec.label}</b>
          <em>${fmtDate(e.dataRecarga)}</em>
        </div>
        <div>
          <small>TH</small>
          <b class="ext-list-status ${th.cls}">${th.label}</b>
          <em>${fmtDate(e.dataTH)}</em>
        </div>
      </div>

      <div class="ext-list-inspection">
        <span>Última inspeção</span>
        ${li
          ? `
            <b class="${li.resultado==='NÃO CONFORME'?'bad':'ok'}">
              ${escapeHtml(li.resultado)}
            </b>
            <small>${fmtDate(li.date)}</small>
          `
          : `
            <b class="neutral">Sem inspeção</b>
            <small>Nenhum registro</small>
          `
        }
        ${activeTreatment
          ? `<em>Tratativa em ${escapeHtml(
              ncStatusMeta(activeTreatment.naoConformidade.status).label.toLowerCase()
            )}</em>`
          : ''
        }
      </div>

      <div class="ext-list-actions">
        <span class="ext-list-open-label">Abrir prontuário →</span>
        ${(canEditExtinguisher(e) || canDeleteExtinguisher(e))
          ? `
            <div>
              ${canEditExtinguisher(e)
                ? `<button
                    type="button"
                    class="btn btn-sm"
                    data-edit-ext="${escapeHtml(String(e.id))}"
                    title="Editar extintor">
                    ${ICONS.edit}<span>Editar</span>
                  </button>`
                : ''
              }
              ${canDeleteExtinguisher(e)
                ? `<button
                    type="button"
                    class="btn btn-sm btn-danger"
                    data-del-ext="${escapeHtml(String(e.id))}"
                    title="Excluir extintor">
                    ${ICONS.trash}
                  </button>`
                : ''
              }
            </div>
          `
          : ''
        }
      </div>
    </article>
  `;
}

async function deleteExtinguisher(id){
  if(!requirePermission('deleteExtinguishers')) return;

  const ext = STATE.extinguishers.find(e=>String(e.id)===String(id));
  if(!ext) return;
  if(!canDeleteExtinguisher(ext)){
    showToast("Você não pode excluir extintores de outra usina.","err");
    return;
  }

  if(!confirm("Excluir este extintor e todo seu histórico de inspeções?")) return;

  const removedInspectionIds = STATE.inspections
    .filter(inspection=>String(inspection.extinguisherId)===String(id))
    .map(inspection=>String(inspection.id));

  STATE.extinguishers = STATE.extinguishers.filter(e=>String(e.id)!==String(id));
  STATE.inspections = STATE.inspections.filter(i=>String(i.extinguisherId)!==String(id));

  scheduleOfflineSnapshotCache(
    scopedOfflineKey('extinguishers'),
    STATE.extinguishers
  );
  scheduleOfflineSnapshotCache(
    scopedOfflineKey('inspections'),
    STATE.inspections
  );

  await discardQueuedUpsert('extinguishers',id);
  for(const inspectionId of removedInspectionIds){
    await discardQueuedUpsert('inspections',inspectionId);
  }

  await enqueueOfflineOperation({
    type:'delete',
    collection:'extinguishers',
    documentId:String(id)
  });

  showToast(
    navigator.onLine
      ? "Extintor excluído. Sincronizando em segundo plano."
      : "Extintor excluído no aparelho e aguardando sincronização.",
    "ok"
  );
  renderExtinguishers();
}

/* ============================================================
   MODAL: NOVO / EDITAR EXTINTOR
============================================================ */
function openModal(html){
  document.getElementById('modal-root').innerHTML = `<div class="overlay" id="overlay">${html}</div>`;
  document.getElementById('overlay').addEventListener('click', e=>{ if(e.target.id==='overlay') closeModal(); });
}
function closeModal(){ document.getElementById('modal-root').innerHTML=''; }

function openExtinguisherModal(id){
  const editing = !!id;
  const e = editing ? STATE.extinguishers.find(x=>String(x.id)===String(id)) : {
    id: uid('EXT'), numero: (Math.max(0,...STATE.extinguishers.map(x=>parseInt(x.numero)||0))+1),
    foto:null, usina: hasAllUsinasAccess() ? (STATE.config.usinas[0]||'') : currentUserUsina(),
    localizacao:'', agente: STATE.config.agents[0]||'',
    capacidade:'', dataRecarga:'', dataTH:'', statusGeral:'EM CAMPO',
  };

  if(editing){
    if(!requirePermission('editExtinguishers')) return;
    if(!canEditExtinguisher(e)){
      showToast("Você não pode editar extintores de outra usina.","err");
      return;
    }
  }else{
    if(!canCreateExtinguisher()){
      showToast("Você não possui permissão para cadastrar extintores.","err");
      return;
    }
    if(!hasAllUsinasAccess() && !currentUserUsina()){
      showToast("Seu usuário não possui uma usina vinculada.","err");
      return;
    }
  }

  const usinas = hasAllUsinasAccess()
    ? STATE.config.usinas
    : [currentUserUsina()];
  const agents = STATE.config.agents;
  const checklistAnswers = {};
  const detectedNcItems = [];
  let initialTreatmentStarted = false;

  CHECK_ITEMS.forEach((_,i)=>checklistAnswers[i]='C');

  openModal(`
    <div class="modal ${editing?'':'inspection-form-modal'}" ${editing?'':'style="max-width:780px;"'}>
      <div class="modal-head">
        <div>
          <h3>${editing?'Editar extintor':'Novo extintor'}</h3>
          ${editing?'':`
            <div style="font-size:11.5px;color:var(--muted);margin-top:4px;">
              Cadastre o equipamento e registre a tratativa caso a inspeção inicial identifique uma não conformidade.
            </div>
          `}
        </div>
        <button class="icon-btn" id="m-close">${ICONS.close}</button>
      </div>
      <div class="modal-body">
        <div class="field"><label>Foto do extintor</label>
          <label class="photo-upload">
            ${e.foto?`<img src="${e.foto}" id="photo-preview">`:`${ICONS.upload}<span>Toque para enviar uma foto</span>`}
            <input type="file" accept="image/*" id="f-foto">
          </label>
        </div>
        <div class="field-row">
          <div class="field"><label>Número</label><input type="text" id="f-numero" value="${escapeHtml(e.numero)}"></div>
          <div class="field"><label>Status geral</label>
            <select id="f-statusgeral">
              ${['EM CAMPO','ESTOQUE','ENVIADO PARA RECARGA','DESATIVADO'].map(s=>`<option ${e.statusGeral===s?'selected':''}>${s}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="field-row">
          <div class="field">
            <label>Usina</label>
            ${hasAllUsinasAccess() ? `
              <select id="fm-usina">
                ${usinas.map(s=>`<option ${e.usina===s?'selected':''}>${escapeHtml(s)}</option>`).join('')}
              </select>
            ` : `
              <input type="text" value="${escapeHtml(currentUserUsina())}" readonly
                style="background:var(--panel-2);border:1px solid var(--border);color:var(--muted);border-radius:8px;padding:9px 11px;font-size:13.5px;width:100%;">
              <input type="hidden" id="fm-usina" value="${escapeHtml(currentUserUsina())}">
            `}
          </div>
          <div class="field"><label>Localização / Grupo</label><input type="text" id="f-local" placeholder="Ex: Grupo 01" value="${escapeHtml(e.localizacao)}"></div>
        </div>
        <div class="field-row">
          <div class="field"><label>Agente extintor</label><select id="f-agente">${agents.map(a=>`<option ${e.agente===a?'selected':''}>${escapeHtml(a)}</option>`).join('')}</select></div>
          <div class="field"><label>Capacidade (Kg/Lt)</label><input type="text" id="f-cap" placeholder="Ex: 50 KG" value="${escapeHtml(e.capacidade)}"></div>
        </div>
        <div class="field-row">
          <div class="field"><label>Vencimento da recarga</label><input type="date" id="f-recarga" value="${e.dataRecarga||''}"></div>
          <div class="field"><label>Vencimento do teste hidrostático</label><input type="date" id="f-th" value="${e.dataTH||''}"></div>
        </div>
        ${editing ? '' : `
        <div class="section-title">Checklist de inspeção inicial</div>
        <div class="checklist" id="cad-checklist">
          ${CHECK_ITEMS.map((label,i)=>`
            <div class="check-row">
              <span class="num">${i+1}</span>
              <span class="label">${label}</span>
              <div class="seg" data-item="${i}">
                ${['C','NC','NA','S.A'].map(v=>`<button type="button" data-v="${v}" class="${v==='C'?'sel':''}">${v}</button>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <section id="cad-nc-treatment-panel" class="nc-treatment-panel">
          <div class="nc-treatment-alert">
            <div class="nc-treatment-alert-icon">!</div>
            <div>
              <div class="nc-treatment-heading">Tratativa da Não Conformidade</div>
              <div class="nc-treatment-sub">
                Informe para qual setor e responsável a ocorrência identificada no cadastro foi encaminhada.
              </div>
            </div>
          </div>

          <div class="field-row">
            <div class="field">
              <label>Setor responsável *</label>
              <select id="cad-nc-setor">
                <option value="">Selecione o setor</option>
                ${NC_SETORES.map(setor=>`
                  <option value="${escapeHtml(setor)}">${escapeHtml(setor)}</option>
                `).join('')}
              </select>
            </div>

            <div class="field nc-hidden" id="cad-nc-setor-outro-wrap">
              <label>Informe o outro setor *</label>
              <input
                type="text"
                id="cad-nc-setor-outro"
                placeholder="Nome do setor">
            </div>
          </div>

          <div class="field-row">
            <div class="field">
              <label>Responsável que recebeu a NC *</label>
              <input
                type="text"
                id="cad-nc-responsavel"
                placeholder="Nome completo">
            </div>

            <div class="field">
              <label>Cargo</label>
              <input
                type="text"
                id="cad-nc-cargo"
                placeholder="Ex.: Supervisor de Manutenção">
            </div>
          </div>

          <div class="field-row">
            <div class="field">
              <label>Data do encaminhamento *</label>
              <input
                type="date"
                id="cad-nc-data"
                value="${todayISO()}">
            </div>

            <div class="field">
              <label>Status da tratativa *</label>
              <select id="cad-nc-status">
                ${NC_STATUS_OPTIONS.map(status=>`
                  <option
                    value="${status}"
                    ${status==='ENCAMINHADA'?'selected':''}>
                    ${ncStatusMeta(status).label}
                  </option>
                `).join('')}
              </select>
              <div class="nc-permission-note">
                O histórico será criado junto com a inspeção inicial.
              </div>
            </div>
          </div>

          <div class="field">
            <label>Forma de comunicação *</label>
            <div class="nc-radio-grid">
              ${NC_FORMAS_COMUNICACAO.map(forma=>`
                <label class="nc-radio-option">
                  <input
                    type="radio"
                    name="cad-nc-forma"
                    value="${escapeHtml(forma)}">
                  <span>${escapeHtml(forma)}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <div class="field">
            <label>
              Número da OS
              <span style="font-weight:400;color:var(--muted-2);">(opcional)</span>
            </label>
            <input
              type="text"
              id="cad-nc-os"
              placeholder="Ex.: OS-2026-0145">
          </div>

          <div class="field" style="margin-bottom:0;">
            <label>Descrição do encaminhamento *</label>
            <textarea
              id="cad-nc-descricao"
              rows="4"
              placeholder="Descreva o problema identificado, a orientação repassada e a ação solicitada."></textarea>
          </div>
        </section>

        <div class="field-row" style="margin-top:14px;">
          <div class="field"><label>Responsável pela inspeção inicial</label><input type="text" id="f-resp-cad" placeholder="Nome do inspetor"></div>
          <div class="field"><label>Data da inspeção</label><input type="date" id="f-data-cad" value="${todayISO()}"></div>
        </div>
        <div class="field"><label>Observações</label><textarea id="f-obs-cad" placeholder="Ex: mangueira rachada, despressurizado..."></textarea></div>
        `}
      </div>
      <div class="modal-foot">
        <button class="btn" id="m-cancel">Cancelar</button>
        <button class="btn btn-accent" id="m-save">${editing?'Salvar alterações':'Cadastrar extintor'}</button>
      </div>
    </div>
  `);
  document.getElementById('m-close').addEventListener('click', closeModal);
  document.getElementById('m-cancel').addEventListener('click', closeModal);
  function bindFotoInput(){
    document.getElementById('f-foto').addEventListener('change', async ev=>{
      const file = ev.target.files[0]; if(!file) return;
      const dataUrl = await fileToDataUrl(file);
      e.foto = dataUrl;
      document.querySelector('.photo-upload').innerHTML = `<img src="${dataUrl}"><input type="file" accept="image/*" id="f-foto">`;
      bindFotoInput();
    });
  }
  bindFotoInput();

  if(!editing){
    const refreshInitialNcPanel = ()=>{
      const hasNc = Object.values(checklistAnswers).includes('NC');
      document.getElementById('cad-nc-treatment-panel')
        ?.classList.toggle(
          'show',
          hasNc || initialTreatmentStarted
        );
    };

    const convertInitialNcItemsToConforme = ()=>{
      let changed = 0;

      document.querySelectorAll('#cad-checklist .seg').forEach(seg=>{
        const index = Number(seg.dataset.item);

        if(checklistAnswers[index]==='NC'){
          const label = CHECK_ITEMS[index];

          if(label && !detectedNcItems.includes(label)){
            detectedNcItems.push(label);
          }

          checklistAnswers[index] = 'C';
          changed++;

          seg.querySelectorAll('button').forEach(button=>{
            button.classList.toggle(
              'sel',
              button.dataset.v==='C'
            );
          });
        }
      });

      return changed;
    };

    document.getElementById('cad-nc-setor')
      ?.addEventListener('change',event=>{
        document.getElementById('cad-nc-setor-outro-wrap')
          ?.classList.toggle(
            'nc-hidden',
            event.target.value!=='Outro'
          );
      });

    document.querySelectorAll('#cad-checklist .seg').forEach(seg=>{
      seg.querySelectorAll('button').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          seg.querySelectorAll('button').forEach(button=>
            button.classList.remove('sel')
          );

          btn.classList.add('sel');
          checklistAnswers[seg.dataset.item] = btn.dataset.v;

          if(btn.dataset.v==='NC'){
            initialTreatmentStarted = true;

            const label = CHECK_ITEMS[Number(seg.dataset.item)];
            if(label && !detectedNcItems.includes(label)){
              detectedNcItems.push(label);
            }
          }

          refreshInitialNcPanel();
        });
      });
    });

    document.getElementById('cad-nc-status')
      ?.addEventListener('change',event=>{
        const status = normalizeNcWorkflowStatus(event.target.value);
        event.target.value = status;

        if(status==='RESOLVIDA'){
          initialTreatmentStarted = true;
          const changed = convertInitialNcItemsToConforme();
          refreshInitialNcPanel();

          if(changed){
            showToast(
              `${changed} item(ns) regularizado(s) para C. O histórico da NC será mantido.`,
              'ok'
            );
          }
        }
      });
  }

  document.getElementById('m-save').addEventListener('click', async ()=>{
    const saveBtn = document.getElementById('m-save');
    saveBtn.disabled = true;
    const originalText = saveBtn.textContent;
    saveBtn.textContent = editing ? "Salvando..." : "Cadastrando...";

    e.numero = document.getElementById('f-numero').value.trim() || e.numero;
    e.statusGeral = document.getElementById('f-statusgeral').value;
    e.usina = hasAllUsinasAccess()
      ? document.getElementById('fm-usina').value
      : currentUserUsina();

    if(!e.usina){
      showToast("Não foi possível identificar a usina do usuário.","err");
      saveBtn.disabled = false;
      saveBtn.textContent = originalText;
      return;
    }
    e.localizacao = document.getElementById('f-local').value.trim();
    e.agente = document.getElementById('f-agente').value;
    e.capacidade = document.getElementById('f-cap').value.trim();
    e.dataRecarga = document.getElementById('f-recarga').value;
    e.dataTH = document.getElementById('f-th').value;
    if(!e.localizacao){
      showToast("Informe a localização do extintor","err");
      saveBtn.disabled = false;
      saveBtn.textContent = originalText;
      return;
    }

    let newInspection = null;
    let addedExtinguisher = false;

    try{
      if(!editing){
        const responsavel = document.getElementById('f-resp-cad').value.trim();
        if(!responsavel){
          showToast("Informe o responsável pela inspeção inicial","err");
          saveBtn.disabled = false;
          saveBtn.textContent = originalText;
          return;
        }

        const statusNc = normalizeNcWorkflowStatus(
          document.getElementById('cad-nc-status')?.value || 'ENCAMINHADA'
        );

        if(statusNc==='RESOLVIDA'){
          initialTreatmentStarted = true;

          document.querySelectorAll('#cad-checklist .seg').forEach(seg=>{
            const index = Number(seg.dataset.item);

            if(checklistAnswers[index]==='NC'){
              const label = CHECK_ITEMS[index];

              if(label && !detectedNcItems.includes(label)){
                detectedNcItems.push(label);
              }

              checklistAnswers[index] = 'C';
            }
          });
        }

        const hasCurrentNc = Object.values(checklistAnswers).includes('NC');
        const hasInitialTreatment =
          hasCurrentNc ||
          initialTreatmentStarted ||
          detectedNcItems.length>0;

        let naoConformidade = null;

        if(hasInitialTreatment){
          const selectedSector =
            document.getElementById('cad-nc-setor')?.value || '';

          const setor = selectedSector==='Outro'
            ? document.getElementById('cad-nc-setor-outro')
                ?.value.trim() || ''
            : selectedSector;

          const ncResponsavel =
            document.getElementById('cad-nc-responsavel')
              ?.value.trim() || '';

          const cargo =
            document.getElementById('cad-nc-cargo')
              ?.value.trim() || '';

          const dataEncaminhamento =
            document.getElementById('cad-nc-data')
              ?.value || '';

          const formaComunicacao =
            document.querySelector(
              'input[name="cad-nc-forma"]:checked'
            )?.value || '';

          const numeroOS =
            document.getElementById('cad-nc-os')
              ?.value.trim() || '';

          const descricao =
            document.getElementById('cad-nc-descricao')
              ?.value.trim() || '';

          if(!setor){
            showToast("Informe o setor responsável pela NC","err");
            saveBtn.disabled = false;
            saveBtn.textContent = originalText;
            return;
          }

          if(!ncResponsavel){
            showToast("Informe quem recebeu a não conformidade","err");
            saveBtn.disabled = false;
            saveBtn.textContent = originalText;
            return;
          }

          if(!dataEncaminhamento){
            showToast("Informe a data do encaminhamento","err");
            saveBtn.disabled = false;
            saveBtn.textContent = originalText;
            return;
          }

          if(!formaComunicacao){
            showToast("Selecione a forma de comunicação","err");
            saveBtn.disabled = false;
            saveBtn.textContent = originalText;
            return;
          }

          if(!descricao){
            showToast(
              "Descreva o encaminhamento da não conformidade",
              "err"
            );
            saveBtn.disabled = false;
            saveBtn.textContent = originalText;
            return;
          }

          const nowIso = new Date().toISOString();
          const actor = currentActorName();
          const details = {
            setor,
            responsavel:ncResponsavel,
            cargo,
            dataEncaminhamento,
            formaComunicacao,
            numeroOS,
            descricao
          };

          naoConformidade = {
            status:statusNc,
            setor,
            responsavel:ncResponsavel,
            cargo,
            dataEncaminhamento,
            formaComunicacao,
            numeroOS,
            descricao,
            itensOriginaisNc:[...detectedNcItems],
            criadoPor:actor,
            criadoEm:nowIso,
            atualizadoPor:actor,
            atualizadoEm:nowIso,
            dataResolucao:statusNc==='RESOLVIDA'
              ? todayISO()
              : '',
            historico:buildNcWorkflowHistory(
              null,
              statusNc,
              details,
              nowIso,
              actor,
              currentRole()
            )
          };
        }

        STATE.extinguishers.push(e);
        addedExtinguisher = true;

        const resultado =
          hasInitialTreatment && statusNc!=='RESOLVIDA'
            ? 'NÃO CONFORME'
            : 'CONFORME';

        newInspection = {
          id:uid('INSP'),
          extinguisherId:e.id,
          usina:e.usina,
          date:document.getElementById('f-data-cad').value || todayISO(),
          responsavel,
          observacoes:document.getElementById('f-obs-cad').value.trim(),
          checklist:CHECK_ITEMS.map((label,i)=>({
            item:label,
            valor:checklistAnswers[i]
          })),
          resultado,
          naoConformidade
        };
      }

      // Primeiro salva o extintor. Depois salva a inspeção inicial.
      markPendingSync(e);
      await persistExtinguishers();

      if(newInspection){
        markPendingSync(newInspection);
        STATE.inspections.push(newInspection);
        await persistInspections();
      }

      closeModal();

      if(editing){
        showToast("Extintor atualizado");
        renderView();
      }else{
        if(newInspection?.naoConformidade){
          showToast(
            "Extintor, inspeção inicial e tratativa cadastrados",
            newInspection.resultado==='CONFORME' ? 'ok' : 'err'
          );
        }else{
          showToast("Extintor cadastrado");
        }

        // Mantém o registro local visível imediatamente, sem aguardar
        // a sincronização da nuvem. Quando houver NC, abre diretamente
        // a aba Tratativas do prontuário.
        openExtinguisherDetail(
          e.id,
          newInspection?.naoConformidade ? 'treatments' : 'overview'
        );
      }
    }catch(error){
      console.error("Erro ao cadastrar/editar extintor:", error);

      // Reverte o estado local caso o Firestore recuse a gravação.
      if(addedExtinguisher){
        STATE.extinguishers = STATE.extinguishers.filter(x=>String(x.id)!==String(e.id));
      }
      if(newInspection){
        STATE.inspections = STATE.inspections.filter(x=>String(x.id)!==String(newInspection.id));
      }

      const permissionError =
        error?.code === "permission-denied" ||
        String(error?.message || "").toLowerCase().includes("insufficient permissions");

      showToast(
        permissionError
          ? "O Firestore ainda não permite que o Inspetor cadastre extintores. Publique as regras atualizadas."
          : "Não foi possível cadastrar o extintor.",
        "err"
      );

      saveBtn.disabled = false;
      saveBtn.textContent = originalText;
    }
  });
}

/* ============================================================
   ACESSO RÁPIDO APÓS LEITURA DO QR CODE
============================================================ */
function openQuickInspectionPanel(id){
  const e = STATE.extinguishers.find(x=>String(x.id)===String(id));
  if(!e){
    showToast("Extintor não encontrado ou sem acesso para este usuário.","err");
    return;
  }

  const last = lastInspection(e.id);
  const status = operationalStatusMeta(e.statusGeral);
  const rec = dateStatus(e.dataRecarga);
  const th = dateStatus(e.dataTH,false);

  openModal(`
    <div class="modal" style="max-width:460px;">
      <div class="modal-head">
        <div>
          <h3 style="margin-bottom:2px;">Extintor #${escapeHtml(e.numero)}</h3>
          <div style="font-size:12px;color:var(--muted);">${escapeHtml(e.usina)}</div>
        </div>
        <button class="icon-btn" id="m-close">${ICONS.close}</button>
      </div>

      <div class="modal-body">
        <div style="display:flex;gap:14px;align-items:center;margin-bottom:16px;">
          <div style="width:82px;height:82px;border-radius:10px;overflow:hidden;background:var(--panel-2);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            ${e.foto ? `<img src="${e.foto}" style="width:100%;height:100%;object-fit:cover;">` : ICONS.photo}
          </div>
          <div style="min-width:0;flex:1;">
            <div style="font-size:15px;font-weight:700;margin-bottom:3px;">${escapeHtml(e.localizacao)}</div>
            <div style="font-size:12.5px;color:var(--muted);">${escapeHtml(e.agente)} · ${escapeHtml(e.capacidade || '')}</div>
            <div class="status-op ${status.cls}" style="margin-top:9px;">${status.label}</div>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;">
          <div class="card" style="padding:11px;">
            <div style="font-size:11px;color:var(--muted);margin-bottom:4px;">ÚLTIMA INSPEÇÃO</div>
            <div style="font-weight:700;">${last ? fmtDate(last.date) : 'Não realizada'}</div>
          </div>
          <div class="card" style="padding:11px;">
            <div style="font-size:11px;color:var(--muted);margin-bottom:4px;">RESULTADO</div>
            <div>${last ? `<span class="chip ${last.resultado==='CONFORME'?'ok':'bad'}">${last.resultado}</span>` : '<span class="chip neutral">SEM REGISTRO</span>'}</div>
          </div>
        </div>

        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:18px;">
          <span class="chip ${rec.cls}">Recarga: ${rec.label}</span>
          <span class="chip ${th.cls}">TH: ${th.label}</span>
        </div>

        <button class="btn btn-accent" id="quick-inspect" style="width:100%;justify-content:center;padding:13px;margin-bottom:9px;">
          ${ICONS.scan}Iniciar inspeção
        </button>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:9px;">
          <button class="btn" id="quick-history" style="justify-content:center;">${ICONS.history}Ficha e histórico</button>
          ${canEditExtinguisher(e) ? `<button class="btn" id="quick-move" style="justify-content:center;">${ICONS.edit}Movimentar</button>` : ''}
        </div>

        <button class="btn btn-ghost" id="quick-cancel" style="width:100%;justify-content:center;margin-top:9px;">Cancelar</button>
      </div>
    </div>
  `);

  document.getElementById('m-close').addEventListener('click', closeModal);
  document.getElementById('quick-cancel').addEventListener('click', closeModal);

  document.getElementById('quick-inspect').addEventListener('click', ()=>{
    closeModal();
    openInspectionModal(e.id);
  });

  document.getElementById('quick-history').addEventListener('click', ()=>{
    closeModal();
    openExtinguisherDetail(e.id);
  });

  document.getElementById('quick-move')?.addEventListener('click', ()=>{
    closeModal();
    openExtinguisherModal(e.id);
  });
}

/* ============================================================
   DETALHE DO EXTINTOR (QR + histórico)
============================================================ */
let EXTINGUISHER_DETAIL_STATE = {
  id:null,
  tab:'overview'
};

function extinguisherDetailHistory(extinguisherId){
  return STATE.inspections
    .filter(inspection=>
      String(inspection.extinguisherId)===String(extinguisherId)
    )
    .sort((a,b)=>{
      const dateComparison = String(b.date || '').localeCompare(
        String(a.date || '')
      );
      if(dateComparison!==0) return dateComparison;
      return String(b.id || '').localeCompare(String(a.id || ''));
    });
}

function openExtinguisherDetail(id,tab='overview'){
  const extinguisher = STATE.extinguishers.find(
    item=>String(item.id)===String(id)
  );

  if(!extinguisher){
    showToast('Você não possui acesso a este extintor.','err');
    return;
  }

  closeModal();
  EXTINGUISHER_DETAIL_STATE.id = extinguisher.id;
  EXTINGUISHER_DETAIL_STATE.tab = [
    'overview','inspections','treatments','documents'
  ].includes(tab) ? tab : 'overview';
  STATE.view = 'extinguisher-detail';
  renderShell();
  window.scrollTo({top:0,behavior:'auto'});
}

function closeExtinguisherDetail(){
  EXTINGUISHER_DETAIL_STATE.id = null;
  EXTINGUISHER_DETAIL_STATE.tab = 'overview';
  STATE.view = 'extinguishers';
  renderShell();
  window.scrollTo({top:0,behavior:'auto'});
}

function extinguisherDetailChecklistStats(inspection){
  const checklist = Array.isArray(inspection?.checklist)
    ? inspection.checklist
    : [];

  return {
    conformes:checklist.filter(item=>item.valor==='C').length,
    naoConformes:checklist.filter(item=>item.valor==='NC').length,
    naoAplicaveis:checklist.filter(item=>
      item.valor==='NA' || item.valor==='S.A'
    ).length,
    total:checklist.length
  };
}

function extinguisherDetailOverviewHtml(extinguisher,history){
  const last = history[0] || null;
  const lastStats = extinguisherDetailChecklistStats(last);
  const recarga = dateStatus(extinguisher.dataRecarga);
  const th = dateStatus(extinguisher.dataTH,false);
  const activeTreatments = history.filter(inspection=>
    inspection.naoConformidade &&
    normalizeNcWorkflowStatus(
      inspection.naoConformidade.status
    )!=='RESOLVIDA'
  );
  const currentTreatment = activeTreatments[0] || null;

  return `
    <div class="ext-record-overview-grid">
      <section class="card ext-record-data-card">
        <div class="ext-record-section-head">
          <div>
            <h3>Dados técnicos</h3>
            <p>Identificação e características cadastradas do equipamento.</p>
          </div>
          ${canEditExtinguisher(extinguisher)?`
            <button type="button" class="btn btn-sm" data-ext-detail-edit>
              ${ICONS.edit}Editar dados
            </button>
          `:''}
        </div>

        <div class="ext-record-data-grid">
          <div><span>Número</span><b>#${escapeHtml(extinguisher.numero)}</b></div>
          <div><span>Usina</span><b>${escapeHtml(extinguisher.usina || '—')}</b></div>
          <div><span>Localização</span><b>${escapeHtml(extinguisher.localizacao || '—')}</b></div>
          <div><span>Agente extintor</span><b>${escapeHtml(extinguisher.agente || '—')}</b></div>
          <div><span>Capacidade</span><b>${escapeHtml(extinguisher.capacidade || '—')}</b></div>
          <div><span>Status operacional</span><b>${escapeHtml(operationalStatusMeta(extinguisher.statusGeral).label)}</b></div>
          <div>
            <span>Vencimento da recarga</span>
            <b>${fmtDate(extinguisher.dataRecarga)}</b>
            <small class="ext-record-inline-status ${recarga.cls}">${recarga.label}</small>
          </div>
          <div>
            <span>Teste hidrostático</span>
            <b>${fmtDate(extinguisher.dataTH)}</b>
            <small class="ext-record-inline-status ${th.cls}">${th.label}</small>
          </div>
        </div>
      </section>

      <section class="card ext-record-latest-card">
        <div class="ext-record-section-head">
          <div>
            <h3>Última inspeção</h3>
            <p>Situação mais recente registrada para este extintor.</p>
          </div>
          ${last?`
            <button type="button" class="btn btn-sm" data-ext-detail-view-inspection="${escapeHtml(String(last.id))}">
              ${ICONS.search}Visualizar
            </button>
          `:''}
        </div>

        ${last?`
          <div class="ext-record-latest-result ${last.resultado==='CONFORME'?'ok':'bad'}">
            <div>
              <span>Resultado</span>
              <strong>${escapeHtml(last.resultado)}</strong>
            </div>
            <div>
              <span>Data</span>
              <strong>${fmtDate(last.date)}</strong>
            </div>
            <div>
              <span>Responsável</span>
              <strong>${escapeHtml(last.responsavel || '—')}</strong>
            </div>
          </div>

          <div class="ext-record-check-summary">
            <div><span>C</span><b>${lastStats.conformes}</b><small>Conformes</small></div>
            <div><span>NC</span><b>${lastStats.naoConformes}</b><small>Não conformes</small></div>
            <div><span>NA</span><b>${lastStats.naoAplicaveis}</b><small>Não aplicáveis</small></div>
          </div>

          <div class="ext-record-note">
            <span>Observações</span>
            <p>${escapeHtml(last.observacoes || 'Nenhuma observação registrada.')}</p>
          </div>
        `:`
          <div class="ext-record-empty-box">
            ${ICONS.history}
            <b>Nenhuma inspeção realizada</b>
            <span>Registre a primeira inspeção para iniciar o histórico.</span>
          </div>
        `}
      </section>

      <section class="card ext-record-treatment-card">
        <div class="ext-record-section-head">
          <div>
            <h3>Tratativa atual</h3>
            <p>Acompanhamento da não conformidade ainda não resolvida.</p>
          </div>
          <button type="button" class="btn btn-sm" data-ext-detail-tab="treatments">
            Ver todas
          </button>
        </div>

        ${currentTreatment?(()=>{
          const nc = currentTreatment.naoConformidade || {};
          const meta = ncStatusMeta(nc.status);
          const elapsed = ncTreatmentElapsed(currentTreatment);
          return `
            <div class="ext-record-active-treatment">
              <div class="ext-record-active-treatment-head">
                <span class="nc-status-chip ${meta.cls}">${meta.label}</span>
                <small>${escapeHtml(elapsed.label)}</small>
              </div>
              <div class="ext-record-active-treatment-grid">
                <div><span>Setor</span><b>${escapeHtml(nc.setor || '—')}</b></div>
                <div><span>Responsável</span><b>${escapeHtml(nc.responsavel || '—')}</b></div>
                <div><span>Encaminhamento</span><b>${fmtDate(nc.dataEncaminhamento || currentTreatment.date)}</b></div>
                <div><span>OS</span><b>${escapeHtml(nc.numeroOS || '—')}</b></div>
              </div>
              <p>${escapeHtml(nc.descricao || 'Nenhuma descrição registrada.')}</p>
              ${can('editInspections')?`
                <button
                  type="button"
                  class="btn btn-accent btn-sm"
                  data-ext-detail-edit-inspection="${escapeHtml(String(currentTreatment.id))}">
                  ${ICONS.edit}Atualizar tratativa
                </button>
              `:''}
            </div>
          `;
        })():`
          <div class="ext-record-empty-box success">
            <span class="ext-record-empty-check">✓</span>
            <b>Nenhuma tratativa pendente</b>
            <span>Não existem não conformidades abertas para este equipamento.</span>
          </div>
        `}
      </section>

      <section class="card ext-record-quick-card">
        <div class="ext-record-section-head">
          <div>
            <h3>Ações rápidas</h3>
            <p>Atalhos para as operações mais utilizadas.</p>
          </div>
        </div>
        <div class="ext-record-quick-grid">
          ${can('createInspections')?`
            <button type="button" class="ext-record-quick-action primary" data-ext-detail-new-inspection>
              ${ICONS.scan}<span><b>Nova inspeção</b><small>Registrar checklist</small></span>
            </button>
          `:''}
          <button type="button" class="ext-record-quick-action" data-ext-detail-tab="inspections">
            ${ICONS.history}<span><b>Histórico</b><small>${history.length} registro(s)</small></span>
          </button>
          <button type="button" class="ext-record-quick-action" data-ext-detail-tab="documents">
            ${ICONS.qr}<span><b>QR e documentos</b><small>Etiqueta e PDF</small></span>
          </button>
          <button type="button" class="ext-record-quick-action" data-ext-detail-pdf>
            ${ICONS.report}<span><b>Gerar prontuário</b><small>Relatório individual</small></span>
          </button>
        </div>
      </section>
    </div>
  `;
}

function extinguisherDetailInspectionsHtml(extinguisher,history){
  return `
    <section class="card ext-record-list-card">
      <div class="ext-record-section-head ext-record-list-head">
        <div>
          <h3>Histórico de inspeções</h3>
          <p>${history.length} inspeção(ões) registrada(s) neste equipamento.</p>
        </div>
        ${can('createInspections')?`
          <button type="button" class="btn btn-accent" data-ext-detail-new-inspection>
            ${ICONS.scan}Nova inspeção
          </button>
        `:''}
      </div>

      ${history.length?`
        <div class="ext-record-inspection-list">
          ${history.map((inspection,index)=>{
            const stats = extinguisherDetailChecklistStats(inspection);
            const nc = inspection.naoConformidade;
            return `
              <article class="ext-record-inspection-row">
                <div class="ext-record-inspection-index">${history.length-index}</div>
                <div class="ext-record-inspection-main">
                  <div class="ext-record-inspection-title">
                    <strong>${fmtDate(inspection.date)}</strong>
                    <span class="chip ${inspection.resultado==='CONFORME'?'ok':'bad'}">${escapeHtml(inspection.resultado)}</span>
                    ${nc?`<span class="nc-status-chip ${ncStatusMeta(nc.status).cls}">${ncStatusMeta(nc.status).label}</span>`:''}
                    ${pendingSyncBadge(inspection)}
                  </div>
                  <div class="ext-record-inspection-meta">
                    Responsável: ${escapeHtml(inspection.responsavel || '—')}
                    · C: ${stats.conformes}
                    · NC: ${stats.naoConformes}
                    · NA: ${stats.naoAplicaveis}
                  </div>
                  <p>${escapeHtml(inspection.observacoes || 'Nenhuma observação registrada.')}</p>
                </div>
                <div class="ext-record-row-actions">
                  <button type="button" class="btn btn-sm" data-ext-detail-view-inspection="${escapeHtml(String(inspection.id))}">
                    ${ICONS.search}Visualizar
                  </button>
                  ${can('editInspections')?`
                    <button type="button" class="btn btn-sm" data-ext-detail-edit-inspection="${escapeHtml(String(inspection.id))}">
                      ${ICONS.edit}Editar
                    </button>
                  `:''}
                  ${can('deleteInspections')?`
                    <button type="button" class="btn btn-sm btn-danger" data-ext-detail-delete-inspection="${escapeHtml(String(inspection.id))}">
                      ${ICONS.trash}Excluir
                    </button>
                  `:''}
                </div>
              </article>
            `;
          }).join('')}
        </div>
      `:`
        <div class="ext-record-empty-box large">
          ${ICONS.history}
          <b>Nenhuma inspeção registrada</b>
          <span>Este extintor ainda não possui histórico de inspeções.</span>
        </div>
      `}
    </section>
  `;
}

function extinguisherDetailTreatmentsHtml(extinguisher,history){
  const treatments = history.filter(inspection=>inspection.naoConformidade);

  return `
    <section class="card ext-record-list-card">
      <div class="ext-record-section-head ext-record-list-head">
        <div>
          <h3>Tratativas de não conformidades</h3>
          <p>${treatments.length} tratativa(s) vinculada(s) a este extintor.</p>
        </div>
        <button type="button" class="btn" data-ext-detail-open-treatments>
          ${ICONS.treatments}Abrir central de tratativas
        </button>
      </div>

      ${treatments.length?`
        <div class="ext-record-treatment-list">
          ${treatments.map(inspection=>{
            const nc = inspection.naoConformidade || {};
            const meta = ncStatusMeta(nc.status);
            const elapsed = ncTreatmentElapsed(inspection);
            const items = Array.isArray(nc.itensOriginaisNc)
              ? nc.itensOriginaisNc
              : [];
            return `
              <article class="ext-record-treatment-row status-${meta.cls}">
                <div class="ext-record-treatment-row-head">
                  <div>
                    <div class="ext-record-treatment-row-title">
                      <strong>Inspeção de ${fmtDate(inspection.date)}</strong>
                      <span class="nc-status-chip ${meta.cls}">${meta.label}</span>
                      ${pendingSyncBadge(inspection)}
                    </div>
                    <p>${escapeHtml(elapsed.label)}</p>
                  </div>
                  <div class="ext-record-row-actions">
                    <button type="button" class="btn btn-sm" data-ext-detail-view-inspection="${escapeHtml(String(inspection.id))}">
                      ${ICONS.search}Visualizar
                    </button>
                    ${can('editInspections')?`
                      <button type="button" class="btn btn-sm btn-accent" data-ext-detail-edit-inspection="${escapeHtml(String(inspection.id))}">
                        ${ICONS.edit}Atualizar
                      </button>
                    `:''}
                  </div>
                </div>

                ${ncTreatmentCompactTimeline(inspection)}

                <div class="ext-record-treatment-details">
                  <div><span>Setor</span><b>${escapeHtml(nc.setor || '—')}</b></div>
                  <div><span>Responsável</span><b>${escapeHtml(nc.responsavel || '—')}</b></div>
                  <div><span>Comunicação</span><b>${escapeHtml(nc.formaComunicacao || '—')}</b></div>
                  <div><span>OS</span><b>${escapeHtml(nc.numeroOS || '—')}</b></div>
                </div>

                ${items.length?`
                  <div class="ext-record-treatment-items">
                    ${items.map(item=>`<span>${escapeHtml(item)}</span>`).join('')}
                  </div>
                `:''}

                <div class="ext-record-note compact">
                  <span>Descrição</span>
                  <p>${escapeHtml(nc.descricao || 'Nenhuma descrição registrada.')}</p>
                </div>
              </article>
            `;
          }).join('')}
        </div>
      `:`
        <div class="ext-record-empty-box large success">
          <span class="ext-record-empty-check">✓</span>
          <b>Nenhuma não conformidade registrada</b>
          <span>O histórico deste extintor não possui tratativas de NC.</span>
        </div>
      `}
    </section>
  `;
}

function extinguisherDetailDocumentsHtml(extinguisher,history){
  const treatmentCount = history.filter(inspection=>inspection.naoConformidade).length;

  return `
    <div class="ext-record-documents-grid">
      <section class="card ext-record-qr-card">
        <div class="ext-record-section-head">
          <div>
            <h3>Etiqueta e QR Code</h3>
            <p>O código abre o acesso rápido deste equipamento.</p>
          </div>
        </div>

        <div class="ext-record-qr-preview">
          <div class="top-stripe"></div>
          <div id="ext-record-qr-code"></div>
          <b>#${escapeHtml(extinguisher.numero)} — ${escapeHtml(extinguisher.localizacao)}</b>
          <span>${escapeHtml(extinguisher.usina || 'Usina não informada')}</span>
        </div>

        <button type="button" class="btn btn-accent" data-ext-detail-print-qr>
          ${ICONS.printer}Imprimir etiqueta
        </button>
      </section>

      <section class="card ext-record-document-card">
        <div class="ext-record-section-head">
          <div>
            <h3>Prontuário em PDF</h3>
            <p>Documento completo para arquivo, impressão e auditoria.</p>
          </div>
        </div>

        <div class="ext-record-document-summary">
          <div>${ICONS.ext}<span><b>Dados técnicos</b><small>Identificação, localização e vencimentos</small></span></div>
          <div>${ICONS.history}<span><b>${history.length} inspeção(ões)</b><small>Histórico, resultados e observações</small></span></div>
          <div>${ICONS.treatments}<span><b>${treatmentCount} tratativa(s)</b><small>Encaminhamentos e linha do tempo</small></span></div>
          <div>${ICONS.report}<span><b>Formato A4</b><small>Pronto para auditorias e assinaturas</small></span></div>
        </div>

        <button type="button" class="btn btn-accent" data-ext-detail-pdf>
          ${ICONS.download}Gerar prontuário PDF
        </button>
      </section>

      <section class="card ext-record-link-card">
        <div class="ext-record-section-head">
          <div>
            <h3>Identificação digital</h3>
            <p>Dados utilizados para localizar o equipamento pelo QR Code.</p>
          </div>
        </div>
        <div class="ext-record-link-value">
          <span>ID do registro</span>
          <code>${escapeHtml(String(extinguisher.id))}</code>
        </div>
        <div class="ext-record-link-value">
          <span>Endereço do QR Code</span>
          <code>${escapeHtml(extinguisherDirectUrl(extinguisher.id))}</code>
        </div>
      </section>
    </div>
  `;
}

function bindExtinguisherDetailPage(extinguisher){
  document.getElementById('ext-detail-back')?.addEventListener(
    'click',closeExtinguisherDetail
  );
  document.querySelectorAll('[data-ext-detail-back]').forEach(button=>{
    button.addEventListener('click',closeExtinguisherDetail);
  });

  document.querySelectorAll('[data-ext-detail-tab]').forEach(button=>{
    button.addEventListener('click',()=>{
      EXTINGUISHER_DETAIL_STATE.tab = button.dataset.extDetailTab;
      renderExtinguisherDetailPage();
      window.scrollTo({top:0,behavior:'smooth'});
    });
  });

  document.querySelectorAll('[data-ext-detail-edit]').forEach(button=>{
    button.addEventListener('click',()=>{
      if(!canEditExtinguisher(extinguisher)){
        showToast('Você não possui permissão para editar este extintor.','err');
        return;
      }
      openExtinguisherModal(extinguisher.id);
    });
  });

  document.querySelectorAll('[data-ext-detail-new-inspection]').forEach(button=>{
    button.addEventListener('click',()=>{
      if(!requirePermission('createInspections')) return;
      openInspectionModal(extinguisher.id);
    });
  });

  document.querySelectorAll('[data-ext-detail-view-inspection]').forEach(button=>{
    button.addEventListener('click',()=>{
      openInspectionView(button.dataset.extDetailViewInspection);
    });
  });

  document.querySelectorAll('[data-ext-detail-edit-inspection]').forEach(button=>{
    button.addEventListener('click',()=>{
      if(!requirePermission('editInspections')) return;
      openInspectionModal(
        extinguisher.id,
        button.dataset.extDetailEditInspection
      );
    });
  });

  document.querySelectorAll('[data-ext-detail-delete-inspection]').forEach(button=>{
    button.addEventListener('click',async()=>{
      if(!requirePermission('deleteInspections')) return;
      const inspectionId = button.dataset.extDetailDeleteInspection;
      const inspection = STATE.inspections.find(
        item=>String(item.id)===String(inspectionId)
      );
      if(!inspection) return;

      const confirmed = confirm(
        `Excluir definitivamente a inspeção de ${fmtDate(inspection.date)}?`
      );
      if(!confirmed) return;

      STATE.inspections = STATE.inspections.filter(
        item=>String(item.id)!==String(inspectionId)
      );
      await persistInspectionDeletion(inspectionId);
      showToast(
        navigator.onLine
          ? 'Inspeção excluída'
          : 'Inspeção excluída no aparelho e aguardando sincronização',
        'ok'
      );
      renderExtinguisherDetailPage();
    });
  });

  document.querySelectorAll('[data-ext-detail-pdf]').forEach(button=>{
    button.addEventListener('click',()=>generateIndividualPdf(extinguisher));
  });

  document.querySelectorAll('[data-ext-detail-print-qr]').forEach(button=>{
    button.addEventListener('click',()=>printSingleLabel(extinguisher));
  });

  document.querySelectorAll('[data-ext-detail-open-treatments]').forEach(button=>{
    button.addEventListener('click',()=>{
      STATE.view = 'treatments';
      renderShell();
      window.scrollTo({top:0,behavior:'auto'});
    });
  });

  if(EXTINGUISHER_DETAIL_STATE.tab==='documents'){
    const qrContainer = document.getElementById('ext-record-qr-code');
    if(qrContainer && typeof QRCode!=='undefined'){
      new QRCode(qrContainer,{
        text:extinguisherDirectUrl(extinguisher.id),
        width:172,
        height:172
      });
    }
  }
}

function renderExtinguisherDetailPage(){
  const extinguisher = STATE.extinguishers.find(
    item=>String(item.id)===String(EXTINGUISHER_DETAIL_STATE.id)
  );

  if(!extinguisher){
    showToast('Extintor não encontrado ou sem acesso.','err');
    closeExtinguisherDetail();
    return;
  }

  const history = extinguisherDetailHistory(extinguisher.id);
  const last = history[0] || null;
  const recarga = dateStatus(extinguisher.dataRecarga);
  const th = dateStatus(extinguisher.dataTH,false);
  const operational = operationalStatusMeta(extinguisher.statusGeral);
  const treatments = history.filter(inspection=>inspection.naoConformidade);
  const activeTreatments = treatments.filter(inspection=>
    normalizeNcWorkflowStatus(
      inspection.naoConformidade?.status
    )!=='RESOLVIDA'
  );
  const nextDate = last?.date ? new Date(`${last.date}T12:00:00`) : null;
  if(nextDate) nextDate.setMonth(nextDate.getMonth()+1);

  setHeader(
    `Extintor #${extinguisher.numero}`,
    `Prontuário digital · ${extinguisher.usina || 'Usina não informada'}`,
    `<button type="button" class="btn btn-sm" id="ext-detail-back">← Voltar</button>
     ${canEditExtinguisher(extinguisher)?`
       <button type="button" class="btn btn-sm" data-ext-detail-edit>
         ${ICONS.edit}Editar
       </button>
     `:''}
     ${can('createInspections')?`
       <button type="button" class="btn btn-sm btn-accent" data-ext-detail-new-inspection>
         ${ICONS.scan}Nova inspeção
       </button>
     `:''}`
  );

  const content = document.getElementById('content');
  const activeTab = EXTINGUISHER_DETAIL_STATE.tab;

  content.innerHTML = `
    <div class="ext-record-page">
      <button type="button" class="ext-record-breadcrumb" data-ext-detail-back>
        ← Extintores
      </button>

      <section class="ext-record-hero">
        <div class="ext-record-photo">
          ${extinguisher.foto
            ? `<img src="${extinguisher.foto}" alt="Foto do extintor #${escapeHtml(extinguisher.numero)}">`
            : `<div class="ext-record-photo-empty">${ICONS.photo}<span>Sem foto</span></div>`}
        </div>

        <div class="ext-record-hero-main">
          <div class="ext-record-hero-top">
            <div>
              <div class="ext-record-kicker">Prontuário digital do equipamento</div>
              <h2>Extintor #${escapeHtml(extinguisher.numero)}</h2>
              <p>${escapeHtml(extinguisher.localizacao || 'Localização não informada')}</p>
            </div>
            <div class="ext-record-hero-status">
              <span class="status-op ${operational.cls}">${operational.label}</span>
              ${pendingSyncBadge(extinguisher)}
            </div>
          </div>

          <div class="ext-record-hero-tags">
            <span>${escapeHtml(extinguisher.usina || 'Usina não informada')}</span>
            <span>${escapeHtml(extinguisher.agente || 'Agente não informado')}</span>
            <span>${escapeHtml(extinguisher.capacidade || 'Capacidade não informada')}</span>
          </div>

          <div class="ext-record-hero-actions">
            ${can('createInspections')?`
              <button type="button" class="btn btn-accent" data-ext-detail-new-inspection>
                ${ICONS.scan}Nova inspeção
              </button>
            `:''}
            ${canEditExtinguisher(extinguisher)?`
              <button type="button" class="btn" data-ext-detail-edit>
                ${ICONS.edit}Editar equipamento
              </button>
            `:''}
            <button type="button" class="btn" data-ext-detail-pdf>
              ${ICONS.download}Gerar PDF
            </button>
          </div>
        </div>
      </section>

      <section class="ext-record-metrics">
        <div class="ext-record-metric">
          <span>Última inspeção</span>
          <strong>${last?fmtDate(last.date):'—'}</strong>
          <small>${last?escapeHtml(last.responsavel || 'Responsável não informado'):'Ainda não realizada'}</small>
        </div>
        <div class="ext-record-metric ${last?.resultado==='CONFORME'?'ok':last?'bad':''}">
          <span>Resultado atual</span>
          <strong>${last?escapeHtml(last.resultado):'Sem registro'}</strong>
          <small>Próxima: ${nextDate?nextDate.toLocaleDateString('pt-BR'):'—'}</small>
        </div>
        <div class="ext-record-metric ${recarga.cls}">
          <span>Recarga</span>
          <strong>${recarga.label}</strong>
          <small>${fmtDate(extinguisher.dataRecarga)}</small>
        </div>
        <div class="ext-record-metric ${th.cls}">
          <span>Teste hidrostático</span>
          <strong>${th.label}</strong>
          <small>${fmtDate(extinguisher.dataTH)}</small>
        </div>
        <div class="ext-record-metric ${activeTreatments.length?'bad':'ok'}">
          <span>NC ativas</span>
          <strong>${activeTreatments.length}</strong>
          <small>${treatments.length} tratativa(s) no histórico</small>
        </div>
      </section>

      <nav class="ext-record-tabs" aria-label="Seções do prontuário">
        <button type="button" class="${activeTab==='overview'?'active':''}" data-ext-detail-tab="overview">
          ${ICONS.dashboard}<span>Visão geral</span>
        </button>
        <button type="button" class="${activeTab==='inspections'?'active':''}" data-ext-detail-tab="inspections">
          ${ICONS.history}<span>Inspeções</span><small>${history.length}</small>
        </button>
        <button type="button" class="${activeTab==='treatments'?'active':''}" data-ext-detail-tab="treatments">
          ${ICONS.treatments}<span>Tratativas</span><small>${treatments.length}</small>
        </button>
        <button type="button" class="${activeTab==='documents'?'active':''}" data-ext-detail-tab="documents">
          ${ICONS.qr}<span>QR e documentos</span>
        </button>
      </nav>

      <div class="ext-record-tab-content">
        ${activeTab==='overview'
          ? extinguisherDetailOverviewHtml(extinguisher,history)
          : activeTab==='inspections'
            ? extinguisherDetailInspectionsHtml(extinguisher,history)
            : activeTab==='treatments'
              ? extinguisherDetailTreatmentsHtml(extinguisher,history)
              : extinguisherDetailDocumentsHtml(extinguisher,history)
        }
      </div>
    </div>
  `;

  bindExtinguisherDetailPage(extinguisher);
}

function openInspectionView(inspectionId){
  const inspection = STATE.inspections.find(i=>i.id===inspectionId);
  if(!inspection) return;

  const e = STATE.extinguishers.find(x=>x.id===inspection.extinguisherId);
  const checklist = inspection.checklist || [];
  const isConforme = inspection.resultado === 'CONFORME';
  const status = operationalStatusMeta(e?.statusGeral);

  const conformeCount = checklist.filter(item=>item.valor==='C').length;
  const ncCount = checklist.filter(item=>item.valor==='NC').length;
  const naCount = checklist.filter(item=>item.valor==='NA' || item.valor==='S.A').length;

  openModal(`
    <div class="modal inspection-view-modal" style="max-width:900px;">
      <div class="modal-head">
        <div>
          <h3 style="margin:0;">Análise da inspeção</h3>
          <div style="font-size:12px;color:var(--muted);margin-top:4px;">
            Extintor #${escapeHtml(e?.numero||'—')} · ${fmtDate(inspection.date)}
          </div>
        </div>
        <button class="icon-btn" id="m-close">${ICONS.close}</button>
      </div>

      <div class="modal-body">
        <div class="inspection-result-banner ${isConforme?'ok':'bad'}">
          <div class="inspection-result-dot"></div>
          <div>
            <div class="inspection-result-title">${isConforme?'INSPEÇÃO CONFORME':'INSPEÇÃO NÃO CONFORME'}</div>
            <div class="inspection-result-sub">
              ${isConforme
                ? 'Todos os itens verificados estão em conformidade.'
                : `${ncCount} item(ns) com não conformidade.`}
            </div>
          </div>
        </div>

        <div class="inspection-summary-grid">
          <div class="card inspection-summary-card">
            <div class="inspection-summary-label">Responsável</div>
            <div class="inspection-summary-value">${escapeHtml(inspection.responsavel||'—')}</div>
          </div>

          <div class="card inspection-summary-card">
            <div class="inspection-summary-label">Localização</div>
            <div class="inspection-summary-value">${escapeHtml(e?.localizacao||'—')}</div>
            <div class="inspection-summary-sub">${escapeHtml(e?.usina||'')}</div>
          </div>

          <div class="card inspection-summary-card">
            <div class="inspection-summary-label">Status operacional</div>
            <div class="status-op ${status.cls}" style="margin-top:7px;">${status.label}</div>
          </div>

          <div class="card inspection-summary-card">
            <div class="inspection-summary-label">Data da inspeção</div>
            <div class="inspection-summary-value">${fmtDate(inspection.date)}</div>
          </div>
        </div>

        <div class="inspection-count-grid">
          <div class="inspection-count-box ok">
            <div class="inspection-count-number">${conformeCount}</div>
            <div class="inspection-count-label">Conformes</div>
          </div>
          <div class="inspection-count-box bad">
            <div class="inspection-count-number">${ncCount}</div>
            <div class="inspection-count-label">Não conformes</div>
          </div>
          <div class="inspection-count-box neutral">
            <div class="inspection-count-number">${naCount}</div>
            <div class="inspection-count-label">Não aplicáveis</div>
          </div>
        </div>

        <div class="section-title" style="margin-top:18px;">Itens verificados</div>

        <div class="inspection-items-list">
          ${checklist.map((item,index)=>{
            const cls = item.valor==='C' ? 'ok' : item.valor==='NC' ? 'bad' : 'neutral';
            const label = item.valor==='C' ? 'Conforme' : item.valor==='NC' ? 'Não conforme' : item.valor==='NA' ? 'Não aplicável' : 'Sem avaliação';
            return `
              <div class="inspection-item-row">
                <div class="inspection-item-number">${index+1}</div>
                <div class="inspection-item-text">${escapeHtml(item.item)}</div>
                <div class="inspection-item-status ${cls}">${label}</div>
              </div>
            `;
          }).join('')}
        </div>

        ${(inspection.naoConformidade || !isConforme) ? (()=>{
          const nc = inspection.naoConformidade;
          if(!nc){
            return `
              <section class="nc-view-card pending">
                <div class="nc-view-head">
                  <div>
                    <div class="nc-view-title">Tratativa da Não Conformidade</div>
                    <div class="nc-view-sub">A inspeção possui NC, mas o encaminhamento ainda não foi registrado.</div>
                  </div>
                  <span class="nc-status-chip encaminhada">Pendente de registro</span>
                </div>
              </section>
            `;
          }
          const ncMeta = ncStatusMeta(nc.status);
          return `
            <section class="nc-view-card">
              <div class="nc-view-head">
                <div>
                  <div class="nc-view-title">Tratativa da Não Conformidade</div>
                  <div class="nc-view-sub">
                    ${normalizeNcWorkflowStatus(nc.status)==='RESOLVIDA'
                      ? 'Ocorrência resolvida. Os itens foram regularizados e o histórico original foi mantido.'
                      : 'Registro do encaminhamento e acompanhamento da ocorrência.'}
                  </div>
                </div>
                <span class="nc-status-chip ${ncMeta.cls}">${ncMeta.label}</span>
              </div>
              <div class="nc-view-grid">
                <div><span>Setor responsável</span><b>${escapeHtml(nc.setor||'—')}</b></div>
                <div><span>Responsável</span><b>${escapeHtml(nc.responsavel||'—')}</b></div>
                <div><span>Cargo</span><b>${escapeHtml(nc.cargo||'—')}</b></div>
                <div><span>Data do encaminhamento</span><b>${fmtDate(nc.dataEncaminhamento)}</b></div>
                <div><span>Forma de comunicação</span><b>${escapeHtml(nc.formaComunicacao||'—')}</b></div>
                <div><span>Número da OS</span><b>${escapeHtml(nc.numeroOS||'—')}</b></div>
              </div>
              <div class="nc-view-description">
                <span>Descrição do encaminhamento</span>
                <p>${escapeHtml(nc.descricao||'Nenhuma descrição registrada.')}</p>
              </div>
            </section>
          `;
        })() : ''}

        ${inspection.naoConformidade ? renderNcTimeline(inspection) : ''}

        <div class="field" style="margin-top:18px;">
          <label>Observações</label>
          <div class="card inspection-observation">
            ${escapeHtml(inspection.observacoes||'Nenhuma observação registrada.')}
          </div>
        </div>
      </div>

      <div class="modal-foot">
        <button class="btn" id="m-back">Voltar ao histórico</button>
        <button class="btn btn-accent" id="m-edit-analysis">${ICONS.edit}Editar inspeção</button>
        ${can('deleteInspections') ? `<button class="btn btn-danger" id="m-delete-analysis">${ICONS.trash}Excluir</button>` : ''}
      </div>
    </div>
  `);

  document.getElementById('m-close').addEventListener('click', closeModal);
  document.getElementById('m-back').addEventListener('click', ()=>openExtinguisherDetail(inspection.extinguisherId,'inspections'));
  document.getElementById('m-edit-analysis').addEventListener('click', ()=>openInspectionModal(inspection.extinguisherId, inspection.id));
  document.getElementById('m-delete-analysis')?.addEventListener('click', async ()=>{
    if(!requirePermission('deleteInspections')) return;
    const ok = confirm(`Excluir definitivamente a inspeção de ${fmtDate(inspection.date)}?`);
    if(!ok) return;

    STATE.inspections = STATE.inspections.filter(i=>i.id!==inspection.id);
    await persistInspectionDeletion(inspection.id);
    showToast(navigator.onLine ? "Inspeção excluída" : "Inspeção excluída no aparelho e aguardando sincronização","ok");
    openExtinguisherDetail(inspection.extinguisherId,'inspections');
  });
}

function openInspectionModal(extId, inspectionId=null){
  if(inspectionId){
    if(!requirePermission('editInspections')) return;
  }else if(!requirePermission('createInspections')) return;

  const e = STATE.extinguishers.find(x=>String(x.id)===String(extId));
  if(!e){ showToast("Extintor não encontrado","err"); return; }

  const existing = inspectionId
    ? STATE.inspections.find(i=>String(i.id)===String(inspectionId))
    : null;
  const existingNc = existing?.naoConformidade || null;
  const answers = {};

  CHECK_ITEMS.forEach((_,i)=>{
    answers[i] = existing?.checklist?.[i]?.valor || 'C';
  });

  const initiallyHasNc = Object.values(answers).includes('NC');
  const knownSector = NC_SETORES.includes(existingNc?.setor || '')
    ? existingNc?.setor
    : (existingNc?.setor ? 'Outro' : '');
  const customSector = knownSector === 'Outro' ? existingNc?.setor || '' : '';

  openModal(`
    <div class="modal inspection-form-modal" style="max-width:780px;">
      <div class="modal-head">
        <div>
          <h3>${existing?'Editar inspeção':'Nova inspeção'} · #${escapeHtml(e.numero)} ${escapeHtml(e.localizacao)}</h3>
          <div style="font-size:11.5px;color:var(--muted);margin-top:4px;">
            Marque os itens e registre a tratativa sempre que existir uma não conformidade.
          </div>
        </div>
        <button class="icon-btn" id="m-close">${ICONS.close}</button>
      </div>

      <div class="modal-body">
        <div class="checklist" id="checklist">
          ${CHECK_ITEMS.map((label,i)=>`
            <div class="check-row">
              <span class="num">${i+1}</span>
              <span class="label">${label}</span>
              <div class="seg" data-item="${i}">
                ${['C','NC','NA','S.A'].map(v=>`
                  <button type="button" data-v="${v}" class="${answers[i]===v?'sel':''}">${v}</button>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <section id="nc-treatment-panel" class="nc-treatment-panel ${initiallyHasNc?'show':''}">
          <div class="nc-treatment-alert">
            <div class="nc-treatment-alert-icon">!</div>
            <div>
              <div class="nc-treatment-heading">Tratativa da Não Conformidade</div>
              <div class="nc-treatment-sub">Informe para qual setor e responsável a ocorrência foi encaminhada.</div>
            </div>
          </div>

          <div class="field-row">
            <div class="field">
              <label>Setor responsável *</label>
              <select id="nc-setor">
                <option value="">Selecione o setor</option>
                ${NC_SETORES.map(setor=>`<option value="${escapeHtml(setor)}" ${knownSector===setor?'selected':''}>${escapeHtml(setor)}</option>`).join('')}
              </select>
            </div>
            <div class="field ${knownSector==='Outro'?'':'nc-hidden'}" id="nc-setor-outro-wrap">
              <label>Informe o outro setor *</label>
              <input type="text" id="nc-setor-outro" value="${escapeHtml(customSector)}" placeholder="Nome do setor">
            </div>
          </div>

          <div class="field-row">
            <div class="field">
              <label>Responsável que recebeu a NC *</label>
              <input type="text" id="nc-responsavel" value="${escapeHtml(existingNc?.responsavel||'')}" placeholder="Nome completo">
            </div>
            <div class="field">
              <label>Cargo</label>
              <input type="text" id="nc-cargo" value="${escapeHtml(existingNc?.cargo||'')}" placeholder="Ex.: Supervisor de Manutenção">
            </div>
          </div>

          <div class="field-row">
            <div class="field">
              <label>Data do encaminhamento *</label>
              <input type="date" id="nc-data" value="${existingNc?.dataEncaminhamento || todayISO()}">
            </div>
            <div class="field">
              <label>Status da tratativa *</label>
              <select id="nc-status">
                ${NC_STATUS_OPTIONS.map(status=>`<option value="${status}" ${(existingNc?.status||'ENCAMINHADA')===status?'selected':''}>${ncStatusMeta(status).label}</option>`).join('')}
              </select>
              <div class="nc-permission-note">Administrador e Inspetor podem atualizar o status conforme suas permissões de usina.</div>
            </div>
          </div>

          <div class="field">
            <label>Forma de comunicação *</label>
            <div class="nc-radio-grid">
              ${NC_FORMAS_COMUNICACAO.map(forma=>`
                <label class="nc-radio-option">
                  <input type="radio" name="nc-forma" value="${escapeHtml(forma)}" ${(existingNc?.formaComunicacao||'')===forma?'checked':''}>
                  <span>${escapeHtml(forma)}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <div class="field">
            <label>Número da OS <span style="font-weight:400;color:var(--muted-2);">(opcional)</span></label>
            <input type="text" id="nc-os" value="${escapeHtml(existingNc?.numeroOS||'')}" placeholder="Ex.: OS-2026-0145">
          </div>

          <div class="field">
            <label>Descrição do encaminhamento *</label>
            <textarea id="nc-descricao" rows="4" placeholder="Descreva o problema identificado, a orientação repassada e a ação solicitada.">${escapeHtml(existingNc?.descricao||'')}</textarea>
          </div>

          <div class="field" style="margin-bottom:0;">
            <label>Registro para a linha do tempo <span style="font-weight:400;color:var(--muted-2);">(opcional)</span></label>
            <textarea id="nc-acompanhamento" rows="3" placeholder="Ex.: setor confirmou o recebimento; OS executada; aguardando validação em campo."></textarea>
            <div class="nc-permission-note">O texto será acrescentado ao histórico da tratativa com usuário, perfil, data e hora.</div>
          </div>
        </section>

        <div class="field" style="margin-top:16px;">
          <label>Responsável pela inspeção</label>
          <input type="text" id="f-resp" placeholder="Nome do inspetor" value="${escapeHtml(existing?.responsavel||'')}">
        </div>

        <div class="field">
          <label>Data da inspeção</label>
          <input type="date" id="f-data" value="${existing?.date || todayISO()}">
        </div>

        <div class="field">
          <label>Observações gerais da inspeção</label>
          <textarea id="f-obs" placeholder="Ex.: mangueira rachada, despressurizado...">${escapeHtml(existing?.observacoes||'')}</textarea>
        </div>
      </div>

      <div class="modal-foot">
        <button class="btn" id="m-cancel">Cancelar</button>
        <button class="btn btn-accent" id="m-save-insp">${existing?'Salvar alterações':'Salvar inspeção'}</button>
      </div>
    </div>
  `);

  const refreshNcPanel = ()=>{
    const hasNc = Object.values(answers).includes('NC');
    document.getElementById('nc-treatment-panel')?.classList.toggle('show',hasNc);
  };

  document.getElementById('m-close').addEventListener('click', closeModal);
  document.getElementById('m-cancel').addEventListener('click', ()=>{
    if(existing) openExtinguisherDetail(extId);
    else closeModal();
  });

  document.getElementById('nc-setor')?.addEventListener('change',event=>{
    document.getElementById('nc-setor-outro-wrap')?.classList.toggle('nc-hidden',event.target.value!=='Outro');
  });

  document.querySelectorAll('#checklist .seg').forEach(seg=>{
    seg.querySelectorAll('button').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        seg.querySelectorAll('button').forEach(b=>b.classList.remove('sel'));
        btn.classList.add('sel');
        answers[seg.dataset.item] = btn.dataset.v;
        refreshNcPanel();
      });
    });
  });

  document.getElementById('m-save-insp').addEventListener('click', async ()=>{
    const responsavelInspecao = document.getElementById('f-resp').value.trim();
    if(!responsavelInspecao){
      showToast("Informe o responsável pela inspeção","err");
      return;
    }

    const hasNc = Object.values(answers).includes('NC');
    const resultado = hasNc ? 'NÃO CONFORME' : 'CONFORME';
    let naoConformidade = null;

    if(hasNc){
      const selectedSector = document.getElementById('nc-setor').value;
      const setor = selectedSector === 'Outro'
        ? document.getElementById('nc-setor-outro').value.trim()
        : selectedSector;
      const ncResponsavel = document.getElementById('nc-responsavel').value.trim();
      const cargo = document.getElementById('nc-cargo').value.trim();
      const dataEncaminhamento = document.getElementById('nc-data').value;
      const statusNc = document.getElementById('nc-status').value;
      const formaComunicacao = document.querySelector('input[name="nc-forma"]:checked')?.value || '';
      const numeroOS = document.getElementById('nc-os').value.trim();
      const descricao = document.getElementById('nc-descricao').value.trim();

      if(!setor){ showToast("Informe o setor responsável pela NC","err"); return; }
      if(!ncResponsavel){ showToast("Informe quem recebeu a não conformidade","err"); return; }
      if(!dataEncaminhamento){ showToast("Informe a data do encaminhamento","err"); return; }
      if(!formaComunicacao){ showToast("Selecione a forma de comunicação","err"); return; }
      if(!descricao){ showToast("Descreva o encaminhamento da não conformidade","err"); return; }

      const nowIso = new Date().toISOString();
      const actor = currentActorName();
      const previousStatus = existingNc?.status || null;
      const acompanhamento = document.getElementById('nc-acompanhamento')?.value.trim() || '';
      const historico = Array.isArray(existingNc?.historico)
        ? existingNc.historico.map(item=>({...item}))
        : [];

      const nextNcData = {
        setor,
        responsavel:ncResponsavel,
        cargo,
        dataEncaminhamento,
        formaComunicacao,
        numeroOS,
        descricao
      };

      if(!existingNc){
        historico.push({
          tipo:'DETECCAO',
          status:'NC DETECTADA',
          data:nowIso,
          usuario:actor,
          perfil:currentRole(),
          observacao:'A inspeção identificou um ou mais itens não conformes.'
        });

        historico.push({
          tipo:'ENCAMINHAMENTO',
          status:'ENCAMINHADA',
          data:nowIso,
          usuario:actor,
          perfil:currentRole(),
          setor,
          responsavel:ncResponsavel,
          formaComunicacao,
          numeroOS,
          observacao:descricao
        });

        if(statusNc !== 'ENCAMINHADA'){
          historico.push({
            tipo:'STATUS',
            status:statusNc,
            statusAnterior:'ENCAMINHADA',
            data:nowIso,
            usuario:actor,
            perfil:currentRole(),
            observacao:acompanhamento
          });
        }
      }else{
        const changedFields = changedNcFields(existingNc,nextNcData);

        if(changedFields.length){
          historico.push({
            tipo:'ATUALIZACAO',
            status:statusNc,
            data:nowIso,
            usuario:actor,
            perfil:currentRole(),
            campos:changedFields,
            observacao:acompanhamento
          });
        }

        if(previousStatus !== statusNc){
          historico.push({
            tipo:'STATUS',
            status:statusNc,
            statusAnterior:previousStatus,
            data:nowIso,
            usuario:actor,
            perfil:currentRole(),
            observacao:acompanhamento
          });
        }else if(acompanhamento && !changedFields.length){
          historico.push({
            tipo:'ACOMPANHAMENTO',
            status:statusNc,
            data:nowIso,
            usuario:actor,
            perfil:currentRole(),
            observacao:acompanhamento
          });
        }
      }

      naoConformidade = {
        status:statusNc,
        setor,
        responsavel:ncResponsavel,
        cargo,
        dataEncaminhamento,
        formaComunicacao,
        numeroOS,
        descricao,
        criadoPor:existingNc?.criadoPor || actor,
        criadoEm:existingNc?.criadoEm || nowIso,
        atualizadoPor:actor,
        atualizadoEm:nowIso,
        dataResolucao:['RESOLVIDA','ENCERRADA'].includes(statusNc)
          ? (existingNc?.dataResolucao || todayISO())
          : (existingNc?.dataResolucao || ''),
        historico
      };
    }

    const updatedData = {
      extinguisherId: extId,
      usina: existing?.usina || e.usina,
      date: document.getElementById('f-data').value || todayISO(),
      responsavel:responsavelInspecao,
      observacoes: document.getElementById('f-obs').value.trim(),
      checklist: CHECK_ITEMS.map((label,i)=>({item:label, valor:answers[i]})),
      resultado,
      naoConformidade
    };

    if(existing){
      Object.assign(existing,updatedData);
      markPendingSync(existing);
    }else{
      STATE.inspections.push(markPendingSync({
        id:uid('INSP'),
        ...updatedData
      }));
    }

    await persistInspections();
    showToast(
      existing
        ? "Inspeção e tratativa atualizadas"
        : `Inspeção registrada — ${resultado}`,
      resultado==='CONFORME'?'ok':'err'
    );
    openExtinguisherDetail(extId);
    renderView();
  });
}

/* ============================================================
   PRINT QR LABEL (individual)
============================================================ */
function printSingleLabel(e){
  const holder = document.getElementById('print-area');
  const qrId = 'print-qr-'+Date.now();
  holder.innerHTML = `<div class="print-only" style="display:flex;justify-content:center;padding:40px;">
    <div class="qr-label-preview" style="width:260px;">
      <div class="top-stripe"></div>
      <div id="${qrId}" style="display:flex;justify-content:center;"></div>
      <b>#${escapeHtml(e.numero)} — ${escapeHtml(e.localizacao)}</b>
      <div class="company qr-label-usina">${escapeHtml(e.usina || "Usina não informada")}</div>
    </div>
  </div>`;
  new QRCode(document.getElementById(qrId), {text:extinguisherDirectUrl(e.id), width:160, height:160});
  setTimeout(()=>window.print(), 200);
}

/* ============================================================
   INSPECIONAR (scan + checklist)
============================================================ */
let scanStream = null, scanRAF = null;

function renderInspect(){
  setHeader("Inspecionar", hasAllUsinasAccess() ? "Escaneie o QR Code ou selecione o extintor" : `Inspeções autorizadas somente para ${currentUserUsina()}`);
  const content = document.getElementById('content');

  content.innerHTML = `
    <div class="inspect-layout">
      <section class="inspect-card">
        <div class="inspect-card-head">
          <h2 class="inspect-card-title">Escanear QR Code</h2>
          <div class="inspect-card-desc">
            Ative a câmera e centralize o QR Code da etiqueta para identificar o extintor automaticamente.
          </div>
        </div>

        <div class="inspect-scanner-shell">
          <div class="scanner-wrap" id="scanner-wrap">
            <video id="scan-video" playsinline muted></video>
            <div class="scan-frame"></div>
          </div>
        </div>

        <div class="inspect-note" id="scan-hint">
          Toque em “Ativar câmera” e aponte para o QR Code do extintor.
        </div>

        <div class="inspect-actions">
          <button class="btn btn-accent" id="btn-start-scan">Ativar câmera</button>
          <div class="inspect-divider">ou</div>
          <button class="btn" id="btn-focus-manual">Selecionar extintor manualmente</button>
        </div>
      </section>

      <section class="inspect-card">
        <div class="inspect-card-head">
          <h2 class="inspect-card-title">Selecionar manualmente</h2>
          <div class="inspect-card-desc">
            Pesquise pelo número, local ou usina e escolha o equipamento para iniciar a inspeção.
          </div>
        </div>

        <div class="search-box manual-search-wrap">
          ${ICONS.search}
          <input type="text" id="manual-search" placeholder="Buscar por número, local ou usina...">
        </div>

        <div id="manual-list" class="manual-list"></div>
      </section>
    </div>

    <div class="inspect-help">
      <div class="inspect-help-item">
        <div class="inspect-help-step">ETAPA 01</div>
        <div class="inspect-help-title">Identificar o extintor</div>
        <div class="inspect-help-text">
          Leia o QR Code ou localize o equipamento pela busca manual.
        </div>
      </div>

      <div class="inspect-help-item">
        <div class="inspect-help-step">ETAPA 02</div>
        <div class="inspect-help-title">Conferir os dados</div>
        <div class="inspect-help-text">
          Verifique número, usina, localização e situação operacional.
        </div>
      </div>

      <div class="inspect-help-item">
        <div class="inspect-help-step">ETAPA 03</div>
        <div class="inspect-help-title">Realizar a inspeção</div>
        <div class="inspect-help-text">
          Preencha o checklist e salve para atualizar o histórico do equipamento.
        </div>
      </div>
    </div>
  `;

  document.getElementById('btn-start-scan').addEventListener('click', startScanner);
  document.getElementById('btn-focus-manual').addEventListener('click', ()=>{
    document.getElementById('manual-search').focus();
    document.getElementById('manual-search').scrollIntoView({behavior:'smooth',block:'center'});
  });

  renderManualList('');
  document.getElementById('manual-search').addEventListener('input', e=>renderManualList(e.target.value));
}

function renderManualList(q){
  const el = document.getElementById('manual-list');
  if(!el) return;

  q = String(q||'').trim().toLowerCase();
  const list = STATE.extinguishers.filter(e=>{
    const haystack = `${e.numero||''} ${e.localizacao||''} ${e.usina||''} ${e.agente||''}`.toLowerCase();
    return !q || haystack.includes(q);
  });

  if(list.length===0){
    el.innerHTML = `
      <div class="empty" style="padding:38px 14px;">
        <h4>Nenhum extintor encontrado</h4>
        <p>Revise o número, local ou usina informados.</p>
      </div>
    `;
    return;
  }

  function statusClass(status){
    if(status==='ESTOQUE') return 'estoque';
    if(status==='ENVIADO PARA RECARGA') return 'recarga';
    if(status==='DESATIVADO') return 'desativado';
    return 'em-campo';
  }

  el.innerHTML = list.map(e=>{
    const status = e.statusGeral || 'EM CAMPO';
    return `
      <button class="manual-ext-row" data-pick="${e.id}">
        <div class="manual-ext-main">
          <div class="manual-ext-number">#${escapeHtml(e.numero)}</div>
          <div class="manual-ext-usina">${escapeHtml(e.usina||'Usina não informada')}</div>
          <div class="manual-ext-local">${escapeHtml(e.localizacao||'Local não informado')}</div>
        </div>
        <div class="manual-ext-side">
          <div class="manual-ext-meta">${escapeHtml(e.agente||'—')} · ${escapeHtml(e.capacidade||'—')}</div>
          <span class="manual-ext-status ${statusClass(status)}">${escapeHtml(status)}</span>
        </div>
      </button>
    `;
  }).join('');

  el.querySelectorAll('[data-pick]').forEach(b=>{
    b.addEventListener('click', ()=>{
      stopScanner();
      openQuickInspectionPanel(b.dataset.pick);
    });
  });
}

async function startScanner(){
  const video = document.getElementById('scan-video');
  const hint = document.getElementById('scan-hint');
  const button = document.getElementById('btn-start-scan');

  try{
    stopScanner();

    scanStream = await navigator.mediaDevices.getUserMedia({
      video:{
        facingMode:{ideal:'environment'},
        width:{ideal:1920},
        height:{ideal:1080},
        focusMode:{ideal:'continuous'}
      },
      audio:false
    });

    video.srcObject = scanStream;
    await video.play();

    if(button){
      button.disabled = true;
      button.textContent = "Câmera ativa";
    }

    hint.textContent = "Centralize o QR Code dentro do quadro e aproxime lentamente.";

    let detector = null;
    if('BarcodeDetector' in window){
      try{
        const supported = await BarcodeDetector.getSupportedFormats();
        if(supported.includes('qr_code')){
          detector = new BarcodeDetector({formats:['qr_code']});
        }
      }catch(e){
        console.warn("BarcodeDetector indisponível", e);
      }
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', {willReadFrequently:true});
    let lastRead = 0;

    async function tick(timestamp=0){
      if(!scanStream) return;
      if(!video.videoWidth || !video.videoHeight){
        scanRAF = requestAnimationFrame(tick);
        return;
      }

      // Limita a leitura para evitar travamentos em celulares.
      if(timestamp - lastRead < 120){
        scanRAF = requestAnimationFrame(tick);
        return;
      }
      lastRead = timestamp;

      let decodedData = null;

      // Primeiro tenta o leitor nativo do navegador, que costuma ser mais preciso.
      if(detector){
        try{
          const codes = await detector.detect(video);
          if(codes && codes.length){
            decodedData = codes[0].rawValue;
          }
        }catch(e){
          console.warn("Falha no leitor nativo", e);
          detector = null;
        }
      }

      // Fallback para jsQR.
      if(!decodedData){
        const maxWidth = 1280;
        const scale = Math.min(1, maxWidth / video.videoWidth);
        canvas.width = Math.round(video.videoWidth * scale);
        canvas.height = Math.round(video.videoHeight * scale);
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(
          imgData.data,
          canvas.width,
          canvas.height,
          {inversionAttempts:'attemptBoth'}
        );

        if(code && code.data) decodedData = code.data;
      }

      if(decodedData){
        const extId = extinguisherIdFromQrData(decodedData);
        const ext = STATE.extinguishers.find(e=>e.id===extId);

        if(ext){
          if(navigator.vibrate) navigator.vibrate(120);
          stopScanner();
          openQuickInspectionPanel(ext.id);
          return;
        }

        hint.textContent = "QR Code reconhecido, mas o extintor não foi encontrado ou pertence a outra usina.";
      }

      scanRAF = requestAnimationFrame(tick);
    }

    scanRAF = requestAnimationFrame(tick);
  }catch(err){
    console.error("Scanner error", err);
    hint.textContent = "Não foi possível acessar a câmera. Verifique a permissão do navegador.";
    showToast("Câmera indisponível","err");

    if(button){
      button.disabled = false;
      button.innerHTML = `${ICONS.camera}Ativar câmera`;
    }
  }
}
function stopScanner(){
  if(scanRAF){
    cancelAnimationFrame(scanRAF);
    scanRAF = null;
  }
  if(scanStream){
    scanStream.getTracks().forEach(t=>t.stop());
    scanStream = null;
  }

  const video = document.getElementById('scan-video');
  if(video) video.srcObject = null;

  const button = document.getElementById('btn-start-scan');
  if(button){
    button.disabled = false;
    button.innerHTML = `${ICONS.camera}Ativar câmera`;
  }
}

/* ============================================================
   MODAL DE INSPEÇÃO (checklist)
============================================================ */
function openInspectionModal(extId, inspectionId=null){
  if(inspectionId){
    if(!requirePermission('editInspections')) return;
  }else if(!requirePermission('createInspections')) return;

  const e = STATE.extinguishers.find(x=>String(x.id)===String(extId));
  if(!e){ showToast("Extintor não encontrado","err"); return; }

  const existing = inspectionId
    ? STATE.inspections.find(i=>String(i.id)===String(inspectionId))
    : null;
  const existingNc = existing?.naoConformidade || null;
  const answers = {};

  CHECK_ITEMS.forEach((_,i)=>{
    answers[i] = existing?.checklist?.[i]?.valor || 'C';
  });

  const detectedNcItems = Array.isArray(existingNc?.itensOriginaisNc)
    ? [...existingNc.itensOriginaisNc]
    : CHECK_ITEMS.filter((_,i)=>answers[i]==='NC');

  if(existingNc && normalizeNcWorkflowStatus(existingNc.status)==='RESOLVIDA'){
    Object.keys(answers).forEach(index=>{
      if(answers[index]==='NC') answers[index]='C';
    });
  }

  const initiallyHasNc = Object.values(answers).includes('NC');
  let treatmentStarted = initiallyHasNc || !!existingNc;
  const knownSector = NC_SETORES.includes(existingNc?.setor || '')
    ? existingNc?.setor
    : (existingNc?.setor ? 'Outro' : '');
  const customSector = knownSector === 'Outro' ? existingNc?.setor || '' : '';

  openModal(`
    <div class="modal inspection-form-modal" style="max-width:780px;">
      <div class="modal-head">
        <div>
          <h3>${existing?'Editar inspeção':'Nova inspeção'} · #${escapeHtml(e.numero)} ${escapeHtml(e.localizacao)}</h3>
          <div style="font-size:11.5px;color:var(--muted);margin-top:4px;">
            Marque os itens e registre a tratativa sempre que existir uma não conformidade.
          </div>
        </div>
        <button class="icon-btn" id="m-close">${ICONS.close}</button>
      </div>

      <div class="modal-body">
        <div class="checklist" id="checklist">
          ${CHECK_ITEMS.map((label,i)=>`
            <div class="check-row">
              <span class="num">${i+1}</span>
              <span class="label">${label}</span>
              <div class="seg" data-item="${i}">
                ${['C','NC','NA','S.A'].map(v=>`
                  <button type="button" data-v="${v}" class="${answers[i]===v?'sel':''}">${v}</button>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <section id="nc-treatment-panel" class="nc-treatment-panel ${(initiallyHasNc || existingNc)?'show':''}">
          <div class="nc-treatment-alert">
            <div class="nc-treatment-alert-icon">!</div>
            <div>
              <div class="nc-treatment-heading">Tratativa da Não Conformidade</div>
              <div class="nc-treatment-sub">Informe para qual setor e responsável a ocorrência foi encaminhada.</div>
            </div>
          </div>

          <div class="field-row">
            <div class="field">
              <label>Setor responsável *</label>
              <select id="nc-setor">
                <option value="">Selecione o setor</option>
                ${NC_SETORES.map(setor=>`<option value="${escapeHtml(setor)}" ${knownSector===setor?'selected':''}>${escapeHtml(setor)}</option>`).join('')}
              </select>
            </div>
            <div class="field ${knownSector==='Outro'?'':'nc-hidden'}" id="nc-setor-outro-wrap">
              <label>Informe o outro setor *</label>
              <input type="text" id="nc-setor-outro" value="${escapeHtml(customSector)}" placeholder="Nome do setor">
            </div>
          </div>

          <div class="field-row">
            <div class="field">
              <label>Responsável que recebeu a NC *</label>
              <input type="text" id="nc-responsavel" value="${escapeHtml(existingNc?.responsavel||'')}" placeholder="Nome completo">
            </div>
            <div class="field">
              <label>Cargo</label>
              <input type="text" id="nc-cargo" value="${escapeHtml(existingNc?.cargo||'')}" placeholder="Ex.: Supervisor de Manutenção">
            </div>
          </div>

          <div class="field-row">
            <div class="field">
              <label>Data do encaminhamento *</label>
              <input type="date" id="nc-data" value="${existingNc?.dataEncaminhamento || todayISO()}">
            </div>
            <div class="field">
              <label>Status da tratativa *</label>
              <select id="nc-status">
                ${NC_STATUS_OPTIONS.map(status=>`<option value="${status}" ${normalizeNcWorkflowStatus(existingNc?.status||'ENCAMINHADA')===status?'selected':''}>${ncStatusMeta(status).label}</option>`).join('')}
              </select>
              <div class="nc-permission-note">Administrador e Inspetor podem atualizar o status conforme suas permissões de usina.</div>
            </div>
          </div>

          <div class="field">
            <label>Forma de comunicação *</label>
            <div class="nc-radio-grid">
              ${NC_FORMAS_COMUNICACAO.map(forma=>`
                <label class="nc-radio-option">
                  <input type="radio" name="nc-forma" value="${escapeHtml(forma)}" ${(existingNc?.formaComunicacao||'')===forma?'checked':''}>
                  <span>${escapeHtml(forma)}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <div class="field">
            <label>Número da OS <span style="font-weight:400;color:var(--muted-2);">(opcional)</span></label>
            <input type="text" id="nc-os" value="${escapeHtml(existingNc?.numeroOS||'')}" placeholder="Ex.: OS-2026-0145">
          </div>

          <div class="field" style="margin-bottom:0;">
            <label>Descrição do encaminhamento *</label>
            <textarea id="nc-descricao" rows="4" placeholder="Descreva o problema identificado, a orientação repassada e a ação solicitada.">${escapeHtml(existingNc?.descricao||'')}</textarea>
          </div>
        </section>

        <div class="field" style="margin-top:16px;">
          <label>Responsável pela inspeção</label>
          <input type="text" id="f-resp" placeholder="Nome do inspetor" value="${escapeHtml(existing?.responsavel||'')}">
        </div>

        <div class="field">
          <label>Data da inspeção</label>
          <input type="date" id="f-data" value="${existing?.date || todayISO()}">
        </div>

        <div class="field">
          <label>Observações gerais da inspeção</label>
          <textarea id="f-obs" placeholder="Ex.: mangueira rachada, despressurizado...">${escapeHtml(existing?.observacoes||'')}</textarea>
        </div>
      </div>

      <div class="modal-foot">
        <button class="btn" id="m-cancel">Cancelar</button>
        <button class="btn btn-accent" id="m-save-insp">${existing?'Salvar alterações':'Salvar inspeção'}</button>
      </div>
    </div>
  `);

  const refreshNcPanel = ()=>{
    const hasNc = Object.values(answers).includes('NC');
    document.getElementById('nc-treatment-panel')?.classList.toggle(
      'show',
      hasNc || treatmentStarted
    );
  };

  const convertNcItemsToConforme = ()=>{
    let changed = 0;

    document.querySelectorAll('#checklist .seg').forEach(seg=>{
      const index = Number(seg.dataset.item);

      if(answers[index] === 'NC'){
        const label = CHECK_ITEMS[index];
        if(label && !detectedNcItems.includes(label)){
          detectedNcItems.push(label);
        }

        answers[index] = 'C';
        changed++;

        seg.querySelectorAll('button').forEach(button=>{
          button.classList.toggle('sel',button.dataset.v==='C');
        });
      }
    });

    return changed;
  };

  document.getElementById('m-close').addEventListener('click', closeModal);
  document.getElementById('m-cancel').addEventListener('click', ()=>{
    if(existing) openExtinguisherDetail(extId);
    else closeModal();
  });

  document.getElementById('nc-setor')?.addEventListener('change',event=>{
    document.getElementById('nc-setor-outro-wrap')?.classList.toggle('nc-hidden',event.target.value!=='Outro');
  });

  document.querySelectorAll('#checklist .seg').forEach(seg=>{
    seg.querySelectorAll('button').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        seg.querySelectorAll('button').forEach(b=>b.classList.remove('sel'));
        btn.classList.add('sel');
        answers[seg.dataset.item] = btn.dataset.v;

        if(btn.dataset.v==='NC'){
          treatmentStarted = true;
          const label = CHECK_ITEMS[Number(seg.dataset.item)];
          if(label && !detectedNcItems.includes(label)){
            detectedNcItems.push(label);
          }
        }

        refreshNcPanel();
      });
    });
  });

  document.getElementById('nc-status')?.addEventListener('change',event=>{
    const status = normalizeNcWorkflowStatus(event.target.value);
    event.target.value = status;

    if(status === 'RESOLVIDA'){
      treatmentStarted = true;
      const changed = convertNcItemsToConforme();
      refreshNcPanel();

      if(changed){
        showToast(
          `${changed} item(ns) regularizado(s) para C. O histórico da NC será mantido.`,
          'ok'
        );
      }
    }
  });

  document.getElementById('m-save-insp').addEventListener('click', async ()=>{
    const responsavelInspecao = document.getElementById('f-resp').value.trim();

    if(!responsavelInspecao){
      showToast("Informe o responsável pela inspeção","err");
      return;
    }

    const statusNc = normalizeNcWorkflowStatus(
      document.getElementById('nc-status')?.value || existingNc?.status || 'ENCAMINHADA'
    );

    if(statusNc === 'RESOLVIDA'){
      treatmentStarted = true;
      convertNcItemsToConforme();
    }

    const hasCurrentNc = Object.values(answers).includes('NC');
    const hasTreatment = hasCurrentNc || treatmentStarted || !!existingNc;
    const resultado = hasTreatment && statusNc !== 'RESOLVIDA'
      ? 'NÃO CONFORME'
      : 'CONFORME';

    let naoConformidade = null;

    if(hasTreatment){
      const selectedSector = document.getElementById('nc-setor').value;
      const setor = selectedSector === 'Outro'
        ? document.getElementById('nc-setor-outro').value.trim()
        : selectedSector;
      const ncResponsavel = document.getElementById('nc-responsavel').value.trim();
      const cargo = document.getElementById('nc-cargo').value.trim();
      const dataEncaminhamento = document.getElementById('nc-data').value;
      const formaComunicacao = document.querySelector('input[name="nc-forma"]:checked')?.value || '';
      const numeroOS = document.getElementById('nc-os').value.trim();
      const descricao = document.getElementById('nc-descricao').value.trim();

      if(!setor){ showToast("Informe o setor responsável pela NC","err"); return; }
      if(!ncResponsavel){ showToast("Informe quem recebeu a não conformidade","err"); return; }
      if(!dataEncaminhamento){ showToast("Informe a data do encaminhamento","err"); return; }
      if(!formaComunicacao){ showToast("Selecione a forma de comunicação","err"); return; }
      if(!descricao){ showToast("Descreva o encaminhamento da não conformidade","err"); return; }

      const nowIso = new Date().toISOString();
      const actor = currentActorName();
      const details = {
        setor,
        responsavel:ncResponsavel,
        cargo,
        dataEncaminhamento,
        formaComunicacao,
        numeroOS,
        descricao
      };

      const historico = buildNcWorkflowHistory(
        existingNc,
        statusNc,
        details,
        nowIso,
        actor,
        currentRole()
      );

      naoConformidade = {
        status:statusNc,
        setor,
        responsavel:ncResponsavel,
        cargo,
        dataEncaminhamento,
        formaComunicacao,
        numeroOS,
        descricao,
        itensOriginaisNc:detectedNcItems,
        criadoPor:existingNc?.criadoPor || actor,
        criadoEm:existingNc?.criadoEm || nowIso,
        atualizadoPor:actor,
        atualizadoEm:nowIso,
        dataResolucao:statusNc==='RESOLVIDA'
          ? (existingNc?.dataResolucao || todayISO())
          : '',
        historico
      };
    }

    const updatedData = {
      extinguisherId:extId,
      usina:existing?.usina || e.usina,
      date:document.getElementById('f-data').value || todayISO(),
      responsavel:responsavelInspecao,
      observacoes:document.getElementById('f-obs').value.trim(),
      checklist:CHECK_ITEMS.map((label,i)=>({
        item:label,
        valor:answers[i]
      })),
      resultado,
      naoConformidade
    };

    if(existing){
      Object.assign(existing,updatedData);
      markPendingSync(existing);
    }else{
      STATE.inspections.push(markPendingSync({
        id:uid('INSP'),
        ...updatedData
      }));
    }

    await persistInspections();

    if(statusNc === 'RESOLVIDA'){
      showToast(
        "Tratativa resolvida. Itens marcados como C e histórico preservado.",
        "ok"
      );
    }else{
      showToast(
        existing
          ? "Inspeção e tratativa atualizadas"
          : `Inspeção registrada — ${resultado}`,
        resultado==='CONFORME'?'ok':'err'
      );
    }

    openExtinguisherDetail(extId);
    renderView();
  });
}

/* ============================================================
   PRINT QR LABEL (individual)
============================================================ */
function printSingleLabel(e){
  const holder = document.getElementById('print-area');
  const qrId = 'print-qr-'+Date.now();
  holder.innerHTML = `<div class="print-only" style="display:flex;justify-content:center;padding:40px;">
    <div class="qr-label-preview" style="width:260px;">
      <div class="top-stripe"></div>
      <div id="${qrId}" style="display:flex;justify-content:center;"></div>
      <b>#${escapeHtml(e.numero)} — ${escapeHtml(e.localizacao)}</b>
      <div class="company qr-label-usina">${escapeHtml(e.usina || "Usina não informada")}</div>
    </div>
  </div>`;
  new QRCode(document.getElementById(qrId), {text:extinguisherDirectUrl(e.id), width:160, height:160});
  setTimeout(()=>window.print(), 200);
}

/* ============================================================
   HELPERS DE PDF — TRATATIVAS DE NÃO CONFORMIDADE
============================================================ */
function pdfText(value,fallback='—'){
  const text = String(value ?? '').trim();
  return text || fallback;
}

function ncPdfRecordsForExtinguishers(extinguishers){
  const ids = new Set(
    extinguishers
      .filter(item=>item?.id)
      .map(item=>String(item.id))
  );

  return STATE.inspections
    .filter(inspection=>
      inspection?.naoConformidade &&
      ids.has(String(inspection.extinguisherId))
    )
    .filter(inspection=>
      !reportFilters.dateFrom ||
      String(inspection.date || '') >= reportFilters.dateFrom
    )
    .filter(inspection=>
      !reportFilters.dateTo ||
      String(inspection.date || '') <= reportFilters.dateTo
    )
    .sort((a,b)=>{
      const aDate = a.naoConformidade?.atualizadoEm ||
        a.naoConformidade?.criadoEm ||
        `${a.date || ''}T00:00:00`;
      const bDate = b.naoConformidade?.atualizadoEm ||
        b.naoConformidade?.criadoEm ||
        `${b.date || ''}T00:00:00`;
      return String(bDate).localeCompare(String(aDate));
    });
}

function ncPdfTimelineText(inspection){
  return normalizedNcTimeline(inspection)
    .map(event=>{
      const meta = ncTimelineEventMeta(event);
      return `${fmtDateTime(event.data)} - ${meta.title}`;
    })
    .join('\n');
}

function ncPdfResolutionDate(inspection){
  const nc = inspection?.naoConformidade;
  if(!nc || normalizeNcWorkflowStatus(nc.status)!=='RESOLVIDA'){
    return '—';
  }

  if(nc.dataResolucao){
    return fmtDate(nc.dataResolucao);
  }

  const resolved = normalizedNcTimeline(inspection)
    .find(event=>
      String(event.tipo).toUpperCase()==='STATUS' &&
      normalizeNcWorkflowStatus(event.status)==='RESOLVIDA'
    );

  return resolved?.data ? fmtDateTime(resolved.data) : '—';
}

/* ============================================================
   RELATÓRIOS / PDF
============================================================ */
let reportFilters = {
  usina:'',
  status:'',
  operational:'',
  resultado:'',
  dateFrom:'',
  dateTo:''
};

function renderReports(){
  setHeader("Relatórios", hasAllUsinasAccess() ? "Relatórios de todas as usinas" : `Relatórios exclusivos de ${currentUserUsina()}`);
  const content = document.getElementById('content');
  const usinas = hasAllUsinasAccess() ? STATE.config.usinas : [currentUserUsina()];

  content.innerHTML = `
    <div class="reports-layout">
      <section class="report-card">
        <div class="report-card-head">
          <div>
            <h2 class="report-card-title">Relatório geral (PDF)</h2>
            <div class="report-card-desc">
              Relatório executivo em A4 paisagem, com indicadores, tabela operacional, tratativas de não conformidades, linha do tempo, assinaturas e páginas numeradas.
            </div>
          </div>
        </div>

        <div class="report-info">
          O relatório incluirá os extintores, inspeções e todas as tratativas de não conformidades correspondentes aos filtros selecionados.
        </div>

        <div class="field-row">
          <div class="field">
            <label>Usina</label>
            <select id="r-usina" ${hasAllUsinasAccess()?'':'disabled title="Usina definida pelo perfil do usuário"'}>
              ${hasAllUsinasAccess() ? '<option value="">Todas as usinas</option>' : ''}
              ${usinas.map(s=>`<option ${!hasAllUsinasAccess()?'selected':''}>${escapeHtml(s)}</option>`).join('')}
            </select>
          </div>
          <div class="field">
            <label>Status de recarga</label>
            <select id="r-status">
              <option value="">Todos</option>
              <option>VÁLIDO</option>
              <option>ALERTA</option>
              <option>VENCIDO</option>
            </select>
          </div>
        </div>

        <div class="field-row">
          <div class="field">
            <label>Situação operacional</label>
            <select id="r-operational">
              <option value="">Todas</option>
              <option>EM CAMPO</option>
              <option>ESTOQUE</option>
              <option>ENVIADO PARA RECARGA</option>
              <option>DESATIVADO</option>
            </select>
          </div>
          <div class="field">
            <label>Resultado da última inspeção</label>
            <select id="r-result">
              <option value="">Todos</option>
              <option>CONFORME</option>
              <option>NÃO CONFORME</option>
              <option>SEM INSPEÇÃO</option>
            </select>
          </div>
        </div>

        <div class="field-row">
          <div class="field">
            <label>Inspeções a partir de</label>
            <input type="date" id="r-date-from">
          </div>
          <div class="field">
            <label>Inspeções até</label>
            <input type="date" id="r-date-to">
          </div>
        </div>

        <div class="report-actions">
          <button class="btn btn-accent report-primary" id="btn-gen-pdf">
            Gerar relatório PDF
          </button>
        </div>

        <div class="report-foot-note">
          Os dados são gerados em tempo real com base nas informações sincronizadas pelo sistema.
        </div>
      </section>

      <aside class="report-side">
        <section class="report-card report-qr-card">
          <div class="report-card-head">
            <div>
              <h2 class="report-card-title">Etiquetas QR Code</h2>
              <div class="report-card-desc">
                Gere uma folha com o QR Code dos extintores cadastrados para impressão e identificação em campo.
              </div>
            </div>
          </div>

          <div class="report-info success">
            Cada etiqueta exibirá o nome da usina abaixo do QR Code.
          </div>

          ${hasAllUsinasAccess() ? `
            <div class="report-qr-filter">
              <label for="qr-usina-print">Usina das etiquetas</label>
              <select id="qr-usina-print">
                <option value="">Selecione a usina</option>
                ${STATE.config.usinas.map(usina=>`
                  <option value="${escapeHtml(usina)}">${escapeHtml(usina)}</option>
                `).join('')}
              </select>
              <div class="report-qr-filter-help" id="qr-usina-print-help">
                Selecione uma usina para gerar somente os seus extintores.
              </div>
            </div>
          ` : `
            <div class="report-qr-scope">
              <span>Usina das etiquetas</span>
              <b>${escapeHtml(currentUserUsina() || 'Usina não definida')}</b>
            </div>
          `}

          <div class="report-actions">
            <button
              class="btn"
              id="btn-print-all-qr"
              style="width:100%;justify-content:center;"
              ${hasAllUsinasAccess() ? 'disabled' : ''}>
              Imprimir etiquetas da usina
            </button>
          </div>
        </section>

        <section class="report-card">
          <div class="report-card-head" style="margin-bottom:0;border-bottom:0;padding-bottom:0;">
            <div>
              <h2 class="report-card-title">Boas práticas</h2>
              <div class="report-card-desc">
                Utilize os filtros para gerar relatórios mais objetivos e confira os dados antes da impressão.
              </div>
            </div>
          </div>
        </section>
      </aside>
    </div>

    <div class="report-tips">
      <div class="report-tip">
        <div class="report-tip-title">Filtros específicos</div>
        <div class="report-tip-text">
          Filtre por usina, status, situação operacional, resultado e período para obter relatórios mais precisos.
        </div>
      </div>

      <div class="report-tip">
        <div class="report-tip-title">Formato profissional</div>
        <div class="report-tip-text">
          O PDF é gerado em A4 paisagem e inclui um anexo específico de tratativas, pronto para auditorias e compartilhamento.
        </div>
      </div>

      <div class="report-tip">
        <div class="report-tip-title">Dados atualizados</div>
        <div class="report-tip-text">
          As informações utilizadas no relatório refletem os registros salvos e sincronizados no Firebase.
        </div>
      </div>

      <div class="report-tip">
        <div class="report-tip-title">Impressão ideal</div>
        <div class="report-tip-text">
          Para melhor resultado, utilize impressão em A4 paisagem e qualidade alta quando necessário.
        </div>
      </div>
    </div>
  `;

  document.getElementById('btn-gen-pdf').addEventListener('click', ()=>{
    reportFilters.usina = hasAllUsinasAccess()
      ? document.getElementById('r-usina').value
      : currentUserUsina();
    reportFilters.status = document.getElementById('r-status').value;
    reportFilters.operational = document.getElementById('r-operational').value;
    reportFilters.resultado = document.getElementById('r-result').value;
    reportFilters.dateFrom = document.getElementById('r-date-from').value;
    reportFilters.dateTo = document.getElementById('r-date-to').value;
    generateGeneralPdf();
  });

  const qrUsinaSelect = document.getElementById('qr-usina-print');
  const qrPrintButton = document.getElementById('btn-print-all-qr');
  const qrUsinaHelp = document.getElementById('qr-usina-print-help');

  const updateQrPrintScope = ()=>{
    if(!hasAllUsinasAccess() || !qrUsinaSelect || !qrPrintButton) return;

    const selectedUsina = qrUsinaSelect.value;
    const total = selectedUsina
      ? STATE.extinguishers.filter(
          extinguisher=>extinguisher.usina===selectedUsina
        ).length
      : 0;

    qrPrintButton.disabled = !selectedUsina || total===0;

    if(qrUsinaHelp){
      qrUsinaHelp.textContent = !selectedUsina
        ? 'Selecione uma usina para gerar somente os seus extintores.'
        : total
          ? `${total} extintor(es) serão incluídos, em ordem numérica.`
          : 'Nenhum extintor cadastrado nesta usina.';
    }
  };

  qrUsinaSelect?.addEventListener('change',updateQrPrintScope);
  updateQrPrintScope();

  qrPrintButton?.addEventListener('click',()=>{
    const selectedUsina = hasAllUsinasAccess()
      ? qrUsinaSelect?.value
      : currentUserUsina();

    printAllLabels(selectedUsina);
  });
}

function generateGeneralPdf(){
  if(STATE.extinguishers.length===0){
    showToast("Cadastre extintores antes de gerar o relatório","err");
    return;
  }
  if(!window.jspdf || !window.jspdf.jsPDF){
    showToast("Biblioteca de PDF não carregou. Verifique sua conexão e recarregue a página.","err");
    return;
  }

  try{
    const {jsPDF} = window.jspdf;
    const doc = new jsPDF({orientation:'landscape', unit:'pt', format:'a4'});
    if(typeof doc.autoTable !== 'function'){
      showToast("Biblioteca de tabelas do PDF não carregou. Recarregue a página e tente novamente.","err");
      return;
    }

    const cfg = STATE.config;
    let list = STATE.extinguishers.slice();

    if(reportFilters.usina){
      list = list.filter(e=>e.usina===reportFilters.usina);
    }
    if(reportFilters.status){
      list = list.filter(e=>dateStatus(e.dataRecarga).label===reportFilters.status);
    }
    if(reportFilters.operational){
      list = list.filter(e=>(e.statusGeral||'EM CAMPO')===reportFilters.operational);
    }
    if(reportFilters.resultado){
      list = list.filter(e=>{
        const li = lastInspection(e.id);
        if(reportFilters.resultado==='SEM INSPEÇÃO') return !li;
        return li && li.resultado===reportFilters.resultado;
      });
    }
    if(reportFilters.dateFrom){
      list = list.filter(e=>{
        const li = lastInspection(e.id);
        return li && li.date >= reportFilters.dateFrom;
      });
    }
    if(reportFilters.dateTo){
      list = list.filter(e=>{
        const li = lastInspection(e.id);
        return li && li.date <= reportFilters.dateTo;
      });
    }

    if(list.length===0){
      showToast("Nenhum extintor corresponde aos filtros selecionados.","err");
      return;
    }

    list.sort((a,b)=>{
      const usinaCmp = (a.usina||'').localeCompare(b.usina||'','pt-BR');
      if(usinaCmp!==0) return usinaCmp;
      return String(a.numero||'').localeCompare(String(b.numero||''),'pt-BR',{numeric:true});
    });

    const total = list.length;
    const conformes = list.filter(e=>{
      const li=lastInspection(e.id);
      return li && li.resultado==='CONFORME';
    }).length;
    const naoConformes = list.filter(e=>{
      const li=lastInspection(e.id);
      return li && li.resultado==='NÃO CONFORME';
    }).length;
    const vencidos = list.filter(e=>dateStatus(e.dataRecarga).label==='VENCIDO').length;
    const emRecarga = list.filter(e=>e.statusGeral==='ENVIADO PARA RECARGA').length;
    const estoque = list.filter(e=>e.statusGeral==='ESTOQUE').length;

    const ncRecords = ncPdfRecordsForExtinguishers(list);
    const ncPending = ncRecords.filter(
      inspection=>normalizeNcWorkflowStatus(
        inspection.naoConformidade?.status
      )==='ENCAMINHADA'
    ).length;
    const ncProgress = ncRecords.filter(
      inspection=>normalizeNcWorkflowStatus(
        inspection.naoConformidade?.status
      )==='EM ANDAMENTO'
    ).length;
    const ncResolved = ncRecords.filter(
      inspection=>normalizeNcWorkflowStatus(
        inspection.naoConformidade?.status
      )==='RESOLVIDA'
    ).length;

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const marginX = 34;
    const issuedAt = new Date().toLocaleDateString('pt-BR');

    function drawHeader(){
      if(cfg.logo){
        try{ doc.addImage(cfg.logo, 'JPEG', marginX, 20, 42, 42); }catch(e){}
      }
      doc.setFont('helvetica','bold');
      doc.setFontSize(16);
      doc.setTextColor(25,30,35);
      doc.text(cfg.companyName || 'Empresa', 88, 38);

      doc.setFont('helvetica','normal');
      doc.setFontSize(10);
      doc.setTextColor(85,92,100);
      doc.text('Relatório de Inspeção e Gestão de Extintores', 88, 55);

      doc.setFontSize(9);
      doc.text(`Emitido em ${issuedAt}`, pageWidth-marginX, 34, {align:'right'});
      doc.text('Sistema de Gestão de Extintores', pageWidth-marginX, 49, {align:'right'});

      doc.setDrawColor(224,67,42);
      doc.setLineWidth(2);
      doc.line(marginX, 68, pageWidth-marginX, 68);
      doc.setTextColor(0);
    }

    function drawFooter(pageNumber, totalPages){
      doc.setDrawColor(210,214,219);
      doc.setLineWidth(.5);
      doc.line(marginX, pageHeight-32, pageWidth-marginX, pageHeight-32);

      doc.setFont('helvetica','normal');
      doc.setFontSize(7.5);
      doc.setTextColor(110,116,124);
      doc.text(
        'Relatório gerado automaticamente pelo Sistema de Gestão de Extintores.',
        marginX,
        pageHeight-18
      );
      doc.text(
        `Página ${pageNumber} de ${totalPages}`,
        pageWidth-marginX,
        pageHeight-18,
        {align:'right'}
      );
      doc.setTextColor(0);
    }

    drawHeader();

    // Filtros utilizados
    const filters = [
      `Usina: ${reportFilters.usina || 'Todas'}`,
      `Recarga: ${reportFilters.status || 'Todos'}`,
      `Situação: ${reportFilters.operational || 'Todas'}`,
      `Resultado: ${reportFilters.resultado || 'Todos'}`,
      `Período: ${
        reportFilters.dateFrom ? fmtDate(reportFilters.dateFrom) : 'Início'
      } a ${
        reportFilters.dateTo ? fmtDate(reportFilters.dateTo) : 'Atual'
      }`
    ];

    doc.setFillColor(246,247,249);
    doc.roundedRect(marginX, 78, pageWidth-(marginX*2), 34, 5, 5, 'F');
    doc.setFont('helvetica','bold');
    doc.setFontSize(8);
    doc.setTextColor(65,71,78);
    doc.text('FILTROS UTILIZADOS', marginX+10, 91);
    doc.setFont('helvetica','normal');
    doc.setFontSize(7.5);
    doc.text(filters.join('   |   '), marginX+10, 104);

    // Cartões de resumo executivo
    const cards = [
      {label:'TOTAL', value:total, fill:[239,242,245], text:[40,47,54]},
      {label:'CONFORMES', value:conformes, fill:[230,246,237], text:[30,130,80]},
      {label:'NÃO CONFORMES', value:naoConformes, fill:[253,235,232], text:[200,55,35]},
      {label:'VENCIDOS', value:vencidos, fill:[253,235,232], text:[200,55,35]},
      {label:'EM RECARGA', value:emRecarga, fill:[255,246,224], text:[155,105,10]},
      {label:'ESTOQUE', value:estoque, fill:[234,240,255], text:[55,90,170]}
    ];
    const gap = 8;
    const cardWidth = (pageWidth-(marginX*2)-(gap*5))/6;
    cards.forEach((card,index)=>{
      const x = marginX + index*(cardWidth+gap);
      doc.setFillColor(...card.fill);
      doc.roundedRect(x, 121, cardWidth, 48, 5, 5, 'F');
      doc.setFont('helvetica','bold');
      doc.setFontSize(16);
      doc.setTextColor(...card.text);
      doc.text(String(card.value), x+cardWidth/2, 143, {align:'center'});
      doc.setFontSize(7);
      doc.text(card.label, x+cardWidth/2, 159, {align:'center'});
    });
    doc.setTextColor(0);

    const rows = list.map(e=>{
      const rec = dateStatus(e.dataRecarga);
      const th = dateStatus(e.dataTH,false);
      const li = lastInspection(e.id);
      const days = daysUntil(e.dataRecarga);
      const daysLabel = days===null ? '—' : days===0 ? 'HOJE' : String(days);

      return [
        e.numero,
        e.usina,
        e.localizacao,
        e.agente,
        e.capacidade||'',
        fmtDate(e.dataRecarga),
        daysLabel,
        rec.label,
        fmtDate(e.dataTH),
        th.label,
        e.statusGeral||'EM CAMPO',
        li ? fmtDate(li.date) : '—',
        li ? li.resultado : 'SEM INSPEÇÃO',
        li ? (li.observacoes||'—') : '—'
      ];
    });

    doc.autoTable({
      startY: 181,
      head:[[
        'Nº','Usina','Local','Agente','Kg/Lt',
        'Venc. Recarga','Dias','Status',
        'Venc. TH','Status TH','Situação',
        'Últ. Insp.','Resultado','Observações'
      ]],
      body:rows,
      styles:{
        fontSize:6.8,
        cellPadding:3.3,
        valign:'middle',
        overflow:'linebreak',
        lineColor:[226,229,233],
        lineWidth:.15
      },
      headStyles:{
        fillColor:[224,67,42],
        textColor:255,
        fontStyle:'bold',
        halign:'center',
        fontSize:6.7
      },
      alternateRowStyles:{fillColor:[247,248,250]},
      columnStyles:{
        0:{cellWidth:22,halign:'center'},
        1:{cellWidth:83},
        2:{cellWidth:72},
        3:{cellWidth:42},
        4:{cellWidth:29,halign:'center'},
        5:{cellWidth:57,halign:'center'},
        6:{cellWidth:31,halign:'center'},
        7:{cellWidth:44,halign:'center'},
        8:{cellWidth:52,halign:'center'},
        9:{cellWidth:43,halign:'center'},
        10:{cellWidth:76},
        11:{cellWidth:53,halign:'center'},
        12:{cellWidth:64,halign:'center'},
        13:{cellWidth:'auto'}
      },
      didParseCell:function(data){
        if(data.section!=='body') return;

        const row = data.row.raw;
        const result = row[12];
        const recStatus = row[7];

        // Destaque suave da linha quando houver não conformidade.
        if(result==='NÃO CONFORME'){
          data.cell.styles.fillColor=[255,239,237];
        }

        const value = data.cell.raw;
        if(value==='VENCIDO' || value==='NÃO CONFORME'){
          data.cell.styles.textColor=[196,48,31];
          data.cell.styles.fontStyle='bold';
        }
        if(value==='ALERTA'){
          data.cell.styles.textColor=[161,109,9];
          data.cell.styles.fontStyle='bold';
        }
        if(value==='VÁLIDO' || value==='CONFORME'){
          data.cell.styles.textColor=[28,125,75];
          data.cell.styles.fontStyle='bold';
        }
        if(value==='SEM INSPEÇÃO'){
          data.cell.styles.textColor=[105,112,120];
          data.cell.styles.fontStyle='bold';
        }

        if(data.column.index===6){
          const numeric = Number(value);
          if(value==='HOJE'){
            data.cell.styles.textColor=[161,109,9];
            data.cell.styles.fontStyle='bold';
          }else if(!Number.isNaN(numeric)){
            if(numeric<0){
              data.cell.styles.textColor=[196,48,31];
              data.cell.styles.fontStyle='bold';
            }else if(numeric<=30){
              data.cell.styles.textColor=[161,109,9];
              data.cell.styles.fontStyle='bold';
            }
          }
        }
      },
      didDrawPage:function(){
        if(doc.internal.getNumberOfPages()>1){
          drawHeader();
        }
      },
      margin:{left:marginX,right:marginX,top:78,bottom:82}
    });

    // Anexo de tratativas de não conformidades.
    if(ncRecords.length){
      doc.addPage();
      drawHeader();

      doc.setFont('helvetica','bold');
      doc.setFontSize(13);
      doc.setTextColor(35,41,47);
      doc.text('TRATATIVAS DE NÃO CONFORMIDADES', marginX, 91);

      doc.setFont('helvetica','normal');
      doc.setFontSize(8.5);
      doc.setTextColor(95,102,110);
      doc.text(
        'Rastreabilidade dos encaminhamentos, responsáveis, ações e situação atual das não conformidades.',
        marginX,
        106
      );

      const ncCards = [
        {
          label:'PENDENTES',
          value:ncPending,
          fill:[255,246,224],
          text:[155,105,10]
        },
        {
          label:'EM ANDAMENTO',
          value:ncProgress,
          fill:[234,240,255],
          text:[55,90,170]
        },
        {
          label:'RESOLVIDAS',
          value:ncResolved,
          fill:[230,246,237],
          text:[30,130,80]
        }
      ];

      const ncCardGap = 10;
      const ncCardWidth = (pageWidth-(marginX*2)-(ncCardGap*2))/3;

      ncCards.forEach((card,index)=>{
        const x = marginX + index*(ncCardWidth+ncCardGap);
        doc.setFillColor(...card.fill);
        doc.roundedRect(x, 117, ncCardWidth, 44, 5, 5, 'F');

        doc.setFont('helvetica','bold');
        doc.setFontSize(15);
        doc.setTextColor(...card.text);
        doc.text(String(card.value), x+ncCardWidth/2, 137, {align:'center'});

        doc.setFontSize(7.2);
        doc.text(card.label, x+ncCardWidth/2, 151, {align:'center'});
      });

      const ncRows = ncRecords.map(inspection=>{
        const extinguisher = list.find(
          item=>String(item.id)===String(inspection.extinguisherId)
        ) || STATE.extinguishers.find(
          item=>String(item.id)===String(inspection.extinguisherId)
        );

        const nc = inspection.naoConformidade || {};
        const status = ncStatusMeta(nc.status).label;

        return [
          extinguisher?.numero || inspection.extinguisherId || '—',
          extinguisher?.usina || inspection.usina || '—',
          fmtDate(inspection.date),
          status,
          pdfText(nc.setor),
          pdfText(nc.responsavel),
          pdfText(nc.cargo),
          fmtDate(nc.dataEncaminhamento || inspection.date),
          pdfText(nc.formaComunicacao),
          pdfText(nc.numeroOS),
          pdfText(nc.descricao),
          ncPdfResolutionDate(inspection),
          ncPdfTimelineText(inspection)
        ];
      });

      doc.autoTable({
        startY:173,
        head:[[
          'Ext.','Usina','Inspeção','Status','Setor',
          'Responsável','Cargo','Encaminhada em',
          'Comunicação','OS','Descrição',
          'Resolução','Linha do tempo'
        ]],
        body:ncRows,
        styles:{
          fontSize:6.2,
          cellPadding:3,
          valign:'top',
          overflow:'linebreak',
          lineColor:[226,229,233],
          lineWidth:.15
        },
        headStyles:{
          fillColor:[224,67,42],
          textColor:255,
          fontStyle:'bold',
          halign:'center',
          fontSize:6.1
        },
        alternateRowStyles:{fillColor:[247,248,250]},
        columnStyles:{
          0:{cellWidth:28,halign:'center'},
          1:{cellWidth:72},
          2:{cellWidth:46,halign:'center'},
          3:{cellWidth:52,halign:'center'},
          4:{cellWidth:48},
          5:{cellWidth:62},
          6:{cellWidth:58},
          7:{cellWidth:54,halign:'center'},
          8:{cellWidth:49},
          9:{cellWidth:40},
          10:{cellWidth:90},
          11:{cellWidth:55,halign:'center'},
          12:{cellWidth:'auto'}
        },
        didParseCell:function(data){
          if(data.section!=='body') return;

          const value = String(data.cell.raw || '');
          if(value==='Resolvida'){
            data.cell.styles.textColor=[28,125,75];
            data.cell.styles.fontStyle='bold';
          }else if(value==='Em andamento'){
            data.cell.styles.textColor=[55,90,170];
            data.cell.styles.fontStyle='bold';
          }else if(value==='Encaminhada'){
            data.cell.styles.textColor=[161,109,9];
            data.cell.styles.fontStyle='bold';
          }
        },
        didDrawPage:function(){
          if(doc.internal.getNumberOfPages()>1){
            drawHeader();
          }
        },
        margin:{left:marginX,right:marginX,top:78,bottom:82}
      });
    }

    // Bloco final com legenda e assinaturas.
    let finalY = doc.lastAutoTable.finalY + 14;
    if(finalY > pageHeight-120){
      doc.addPage();
      drawHeader();
      finalY = 92;
    }

    doc.setFillColor(247,248,250);
    doc.roundedRect(marginX, finalY, pageWidth-(marginX*2), 28, 4, 4, 'F');
    doc.setFont('helvetica','bold');
    doc.setFontSize(7.5);
    doc.setTextColor(70,76,83);
    doc.text('LEGENDA:', marginX+9, finalY+17);

    const legendItems = [
      {label:'CONFORME / VÁLIDO', color:[28,125,75]},
      {label:'ALERTA / ATÉ 30 DIAS', color:[161,109,9]},
      {label:'NÃO CONFORME / VENCIDO', color:[196,48,31]},
      {label:'SEM INSPEÇÃO', color:[105,112,120]}
    ];
    let legendX = marginX+65;
    legendItems.forEach(item=>{
      doc.setFillColor(...item.color);
      doc.circle(legendX, finalY+14, 3, 'F');
      doc.setTextColor(...item.color);
      doc.text(item.label, legendX+7, finalY+17);
      legendX += 145;
    });

    const signY = finalY + 62;
    doc.setDrawColor(125,131,138);
    doc.setTextColor(80,86,93);
    doc.setFont('helvetica','normal');
    doc.setFontSize(8);

    const blockWidth = 210;
    const positions = [
      marginX,
      (pageWidth-blockWidth)/2,
      pageWidth-marginX-blockWidth
    ];
    const labels = [
      'Responsável pela inspeção',
      'Supervisor / responsável pela área',
      'Data'
    ];

    positions.forEach((x,index)=>{
      doc.line(x, signY, x+blockWidth, signY);
      doc.text(labels[index], x+blockWidth/2, signY+13, {align:'center'});
    });

    // Rodapé e paginação em todas as páginas.
    const totalPages = doc.internal.getNumberOfPages();
    for(let page=1; page<=totalPages; page++){
      doc.setPage(page);
      drawFooter(page,totalPages);
    }

    doc.save(`relatorio-extintores-${todayISO()}.pdf`);
    showToast("PDF profissional gerado com sucesso");
  }catch(err){
    console.error(err);
    showToast("Erro ao gerar o PDF: "+err.message, "err");
  }
}

function generateIndividualPdf(e){
  if(!window.jspdf || !window.jspdf.jsPDF){
    showToast("Biblioteca de PDF não carregou. Verifique sua conexão e recarregue a página.","err");
    return;
  }

  try{
    const {jsPDF} = window.jspdf;
    const doc = new jsPDF({unit:'pt', format:'a4'});

    if(typeof doc.autoTable !== 'function'){
      showToast("Biblioteca de tabelas do PDF não carregou. Recarregue a página e tente novamente.","err");
      return;
    }

    const cfg = STATE.config;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const marginX = 40;
    const headerPages = new Set();

    function drawIndividualHeader(){
      const pageNumber = doc.internal.getCurrentPageInfo().pageNumber;
      if(headerPages.has(pageNumber)) return;
      headerPages.add(pageNumber);

      if(cfg.logo){
        try{ doc.addImage(cfg.logo,'JPEG',marginX,22,38,38); }catch(err){}
      }

      doc.setFont('helvetica','bold');
      doc.setFontSize(14);
      doc.setTextColor(25,30,35);
      doc.text(cfg.companyName || 'Empresa', 90, 38);

      doc.setFont('helvetica','normal');
      doc.setFontSize(9.5);
      doc.setTextColor(85,92,100);
      doc.text(`Ficha do extintor #${e.numero}`, 90, 54);

      doc.setFontSize(8);
      doc.text(
        `Emitido em ${new Date().toLocaleDateString('pt-BR')}`,
        pageWidth-marginX,
        37,
        {align:'right'}
      );

      doc.setDrawColor(224,67,42);
      doc.setLineWidth(2);
      doc.line(marginX,68,pageWidth-marginX,68);
      doc.setTextColor(0);
    }

    function drawIndividualFooter(page,totalPages){
      doc.setDrawColor(210,214,219);
      doc.setLineWidth(.5);
      doc.line(marginX,pageHeight-30,pageWidth-marginX,pageHeight-30);

      doc.setFont('helvetica','normal');
      doc.setFontSize(7.2);
      doc.setTextColor(110,116,124);
      doc.text(
        'Ficha gerada automaticamente pelo Sistema de Gestão de Extintores.',
        marginX,
        pageHeight-17
      );
      doc.text(
        `Página ${page} de ${totalPages}`,
        pageWidth-marginX,
        pageHeight-17,
        {align:'right'}
      );
      doc.setTextColor(0);
    }

    drawIndividualHeader();

    let y = 88;

    if(e.foto){
      try{
        doc.addImage(e.foto,'JPEG',marginX,y,118,118);
      }catch(err){}
    }else{
      doc.setFillColor(244,246,248);
      doc.roundedRect(marginX,y,118,118,5,5,'F');
      doc.setFont('helvetica','normal');
      doc.setFontSize(8);
      doc.setTextColor(120,126,133);
      doc.text('Sem fotografia',marginX+59,y+62,{align:'center'});
    }

    const info = [
      ['Número', e.numero],
      ['Localização', e.localizacao],
      ['Usina', e.usina],
      ['Agente', e.agente],
      ['Capacidade', e.capacidade || '—'],
      ['Situação', e.statusGeral || 'EM CAMPO'],
      [
        'Vencimento recarga',
        `${fmtDate(e.dataRecarga)} — ${dateStatus(e.dataRecarga).label}`
      ],
      [
        'Vencimento TH',
        `${fmtDate(e.dataTH)} — ${dateStatus(e.dataTH,false).label}`
      ]
    ];

    doc.autoTable({
      startY:y,
      margin:{left:178,right:marginX,top:82,bottom:52},
      body:info,
      theme:'grid',
      styles:{
        fontSize:8.5,
        cellPadding:5,
        valign:'middle',
        lineColor:[226,229,233],
        lineWidth:.25
      },
      columnStyles:{
        0:{
          cellWidth:115,
          fontStyle:'bold',
          fillColor:[247,248,250],
          textColor:[75,82,89]
        },
        1:{
          cellWidth:'auto',
          textColor:[30,36,42]
        }
      },
      didDrawPage:drawIndividualHeader
    });

    const history = STATE.inspections
      .filter(inspection=>String(inspection.extinguisherId)===String(e.id))
      .sort((a,b)=>String(b.date).localeCompare(String(a.date)));

    let historyY = Math.max(y+132,doc.lastAutoTable.finalY+16);

    doc.setFont('helvetica','bold');
    doc.setFontSize(11);
    doc.setTextColor(35,41,47);
    doc.text('HISTÓRICO DE INSPEÇÕES',marginX,historyY);

    const historyRows = history.length
      ? history.map(inspection=>{
          const nc = inspection.naoConformidade;
          return [
            fmtDate(inspection.date),
            inspection.resultado,
            pdfText(inspection.responsavel),
            nc ? ncStatusMeta(nc.status).label : '—',
            nc ? pdfText(nc.setor) : '—',
            pdfText(inspection.observacoes)
          ];
        })
      : [['—','—','—','—','—','Nenhuma inspeção registrada']];

    doc.autoTable({
      startY:historyY+9,
      head:[[
        'Data','Resultado','Responsável',
        'Status da tratativa','Setor','Observações'
      ]],
      body:historyRows,
      styles:{
        fontSize:7.7,
        cellPadding:4,
        valign:'top',
        overflow:'linebreak',
        lineColor:[226,229,233],
        lineWidth:.2
      },
      headStyles:{
        fillColor:[224,67,42],
        textColor:255,
        fontStyle:'bold',
        halign:'center'
      },
      alternateRowStyles:{fillColor:[247,248,250]},
      columnStyles:{
        0:{cellWidth:54,halign:'center'},
        1:{cellWidth:72,halign:'center'},
        2:{cellWidth:82},
        3:{cellWidth:78,halign:'center'},
        4:{cellWidth:70},
        5:{cellWidth:'auto'}
      },
      didParseCell:function(data){
        if(data.section!=='body') return;
        const value = String(data.cell.raw || '');

        if(value==='CONFORME' || value==='Resolvida'){
          data.cell.styles.textColor=[28,125,75];
          data.cell.styles.fontStyle='bold';
        }else if(value==='NÃO CONFORME'){
          data.cell.styles.textColor=[196,48,31];
          data.cell.styles.fontStyle='bold';
        }else if(value==='Em andamento'){
          data.cell.styles.textColor=[55,90,170];
          data.cell.styles.fontStyle='bold';
        }else if(value==='Encaminhada'){
          data.cell.styles.textColor=[161,109,9];
          data.cell.styles.fontStyle='bold';
        }
      },
      didDrawPage:drawIndividualHeader,
      margin:{left:marginX,right:marginX,top:82,bottom:52}
    });

    const ncHistory = history.filter(
      inspection=>inspection?.naoConformidade
    );

    ncHistory.forEach((inspection,index)=>{
      const nc = inspection.naoConformidade || {};

      doc.addPage();
      drawIndividualHeader();

      doc.setFont('helvetica','bold');
      doc.setFontSize(12);
      doc.setTextColor(35,41,47);
      doc.text(
        `TRATATIVA DA NÃO CONFORMIDADE — ${fmtDate(inspection.date)}`,
        marginX,
        91
      );

      doc.setFont('helvetica','normal');
      doc.setFontSize(8.5);
      doc.setTextColor(95,102,110);
      doc.text(
        `Registro ${index+1} de ${ncHistory.length} · Resultado original: NÃO CONFORME`,
        marginX,
        106
      );

      const detailRows = [
        ['Status atual', ncStatusMeta(nc.status).label],
        ['Setor responsável', pdfText(nc.setor)],
        ['Responsável', pdfText(nc.responsavel)],
        ['Cargo', pdfText(nc.cargo)],
        ['Data do encaminhamento', fmtDate(nc.dataEncaminhamento || inspection.date)],
        ['Forma de comunicação', pdfText(nc.formaComunicacao)],
        ['Número da OS', pdfText(nc.numeroOS)],
        ['Descrição do encaminhamento', pdfText(nc.descricao)],
        ['Criado por', pdfText(nc.criadoPor || inspection.responsavel)],
        ['Última atualização por', pdfText(nc.atualizadoPor || nc.criadoPor)],
        ['Data da resolução', ncPdfResolutionDate(inspection)]
      ];

      doc.autoTable({
        startY:118,
        body:detailRows,
        theme:'grid',
        styles:{
          fontSize:8.2,
          cellPadding:5,
          valign:'top',
          overflow:'linebreak',
          lineColor:[226,229,233],
          lineWidth:.25
        },
        columnStyles:{
          0:{
            cellWidth:145,
            fontStyle:'bold',
            fillColor:[247,248,250],
            textColor:[75,82,89]
          },
          1:{
            cellWidth:'auto',
            textColor:[30,36,42]
          }
        },
        didDrawPage:drawIndividualHeader,
        margin:{left:marginX,right:marginX,top:82,bottom:52}
      });

      let timelineY = doc.lastAutoTable.finalY + 18;
      if(timelineY > pageHeight-150){
        doc.addPage();
        drawIndividualHeader();
        timelineY = 91;
      }

      doc.setFont('helvetica','bold');
      doc.setFontSize(10.5);
      doc.setTextColor(35,41,47);
      doc.text('LINHA DO TEMPO DA TRATATIVA',marginX,timelineY);

      const timelineRows = normalizedNcTimeline(inspection).map(event=>{
        const meta = ncTimelineEventMeta(event);
        return [
          fmtDateTime(event.data),
          meta.title,
          ncTimelineDescription(event,nc),
          pdfText(event.usuario)
        ];
      });

      doc.autoTable({
        startY:timelineY+9,
        head:[['Data e hora','Evento','Descrição','Registrado por']],
        body:timelineRows,
        styles:{
          fontSize:7.6,
          cellPadding:4,
          valign:'top',
          overflow:'linebreak',
          lineColor:[226,229,233],
          lineWidth:.2
        },
        headStyles:{
          fillColor:[224,67,42],
          textColor:255,
          fontStyle:'bold',
          halign:'center'
        },
        alternateRowStyles:{fillColor:[247,248,250]},
        columnStyles:{
          0:{cellWidth:84,halign:'center'},
          1:{cellWidth:105},
          2:{cellWidth:'auto'},
          3:{cellWidth:100}
        },
        didDrawPage:drawIndividualHeader,
        margin:{left:marginX,right:marginX,top:82,bottom:52}
      });
    });

    const totalPages = doc.internal.getNumberOfPages();
    for(let page=1;page<=totalPages;page++){
      doc.setPage(page);
      drawIndividualFooter(page,totalPages);
    }

    doc.save(`extintor-${e.numero}-tratativas.pdf`);
    showToast("PDF do extintor e das tratativas gerado");
  }catch(err){
    console.error(err);
    showToast("Erro ao gerar o PDF do extintor: "+err.message,"err");
  }
}

function printAllLabels(requestedUsina=''){
  const targetUsina = hasAllUsinasAccess()
    ? String(requestedUsina || '').trim()
    : String(currentUserUsina() || '').trim();

  if(!targetUsina){
    showToast("Selecione a usina das etiquetas.","err");
    return;
  }

  const labels = sortExtinguishersNumeric(
    STATE.extinguishers.filter(
      extinguisher=>extinguisher.usina===targetUsina
    )
  );

  if(labels.length===0){
    showToast("Nenhum extintor cadastrado nesta usina.","err");
    return;
  }

  const holder = document.getElementById('print-area');

  holder.innerHTML = `
    <div class="print-only qr-label-sheet">
      ${labels.map(e=>`
        <div class="qr-label-preview qr-label-batch">
          <div class="top-stripe"></div>
          <div
            id="qr-all-${escapeHtml(String(e.id))}"
            class="qr-label-code">
          </div>
          <b>#${escapeHtml(e.numero)} — ${escapeHtml(e.localizacao)}</b>
          <div class="company qr-label-usina">
            ${escapeHtml(e.usina || targetUsina)}
          </div>
        </div>
      `).join('')}
    </div>
  `;

  labels.forEach(e=>{
    new QRCode(
      document.getElementById('qr-all-'+e.id),
      {
        text:extinguisherDirectUrl(e.id),
        width:100,
        height:100
      }
    );
  });

  setTimeout(()=>window.print(),250);
}



/* ============================================================
   USUÁRIOS
============================================================ */
async function renderUsers(){
  if(!requirePermission('users')) return;

  setHeader(
    'Usuários',
    'Aprove novos cadastros e gerencie perfis de acesso',
    `<button class="btn btn-accent" id="btn-new-user">
      ${ICONS.plus}Novo usuário
    </button>`
  );

  const content = document.getElementById('content');

  content.innerHTML = `
    <div class="empty" style="padding:50px 20px;">
      <h4>Carregando usuários...</h4>
    </div>
  `;

  document.getElementById('btn-new-user')
    ?.addEventListener('click',()=>openUserModal());

  try{
    const users = await loadUsers();
    const pendingUsers = users.filter(user=>
      normalizeUserStatus(user)==='PENDENTE'
    );
    const managedUsers = users.filter(user=>
      normalizeUserStatus(user)!=='PENDENTE'
    );

    content.innerHTML = `
      ${pendingUsers.length
        ? `
          <section class="pending-users-section">
            <div class="pending-users-head">
              <div>
                <span>Solicitações de acesso</span>
                <h3>Cadastros aguardando aprovação</h3>
                <p>
                  Defina a função e a usina antes de liberar cada conta.
                </p>
              </div>
              <b>${pendingUsers.length}</b>
            </div>

            <div class="pending-users-grid">
              ${pendingUsers.map(pendingUserCard).join('')}
            </div>
          </section>
        `
        : `
          <section class="pending-users-empty">
            ${ICONS.checkCircle}
            <div>
              <strong>Nenhuma solicitação pendente</strong>
              <span>Novos cadastros aparecerão aqui automaticamente.</span>
            </div>
          </section>
        `
      }

      <div class="permission-grid user-permission-grid">
        <div class="permission-card">
          <b>Administrador</b>
          <p>
            Acesso completo, incluindo aprovação, configuração, bloqueio
            e exclusão de usuários.
          </p>
        </div>

        <div class="permission-card">
          <b>Inspetor</b>
          <p>
            Gerencia extintores e inspeções somente na usina definida pelo
            administrador.
          </p>
        </div>

        <div class="permission-card">
          <b>Visualizador</b>
          <p>
            Consulta painel, extintores, tratativas e relatórios, sem alterar
            equipamentos.
          </p>
        </div>
      </div>

      <div class="users-list-head">
        <div>
          <span>Contas gerenciadas</span>
          <h3>Usuários do sistema</h3>
        </div>
        <b>${managedUsers.length}</b>
      </div>

      ${managedUsers.length
        ? `<div class="users-grid">
            ${managedUsers.map(userCard).join('')}
          </div>`
        : `
          <div class="empty">
            <h4>Nenhum usuário ativo</h4>
            <p>Aprove uma solicitação ou crie um usuário manualmente.</p>
          </div>
        `
      }
    `;

    content.querySelectorAll('[data-review-user]').forEach(button=>{
      button.addEventListener('click',()=>{
        openPendingUserApprovalModal(button.dataset.reviewUser);
      });
    });

    content.querySelectorAll('[data-edit-user]').forEach(button=>{
      button.addEventListener('click',()=>{
        openUserModal(button.dataset.editUser);
      });
    });

    content.querySelectorAll('[data-toggle-user]').forEach(button=>{
      button.addEventListener('click',()=>{
        toggleUserStatus(button.dataset.toggleUser);
      });
    });

    content.querySelectorAll('[data-delete-user]').forEach(button=>{
      button.addEventListener('click',()=>{
        deleteManagedUser(button.dataset.deleteUser);
      });
    });
  }catch(error){
    console.error(error);

    content.innerHTML = `
      <div class="empty">
        <h4>Não foi possível carregar os usuários</h4>
        <p>
          Verifique se as regras incluídas no arquivo
          <strong>firestore.rules</strong> foram publicadas.
        </p>
      </div>
    `;
  }
}

function pendingUserCard(user){
  return `
    <article class="pending-user-card">
      <div class="pending-user-icon">${ICONS.history}</div>

      <div class="pending-user-content">
        <div class="pending-user-top">
          <div>
            <strong>${escapeHtml(user.name || 'Novo usuário')}</strong>
            <span>${escapeHtml(user.email || '')}</span>
          </div>

          <span class="user-status-pill pending">Pendente</span>
        </div>

        <div class="pending-user-date">
          Solicitação:
          ${escapeHtml(
            formatUserTimestamp(
              user.requestedAt ||
              user.createdAt
            )
          )}
        </div>

        <button
          type="button"
          class="btn btn-accent btn-sm"
          data-review-user="${user.uid}">
          Analisar cadastro
        </button>
      </div>
    </article>
  `;
}

function userCard(user){
  const status = normalizeUserStatus(user);
  const role = ['ADMINISTRADOR','INSPETOR','VISUALIZADOR'].includes(user.role)
    ? user.role
    : '';
  const isSelf = user.uid===AUTH_USER?.uid;
  const isActive = status==='ATIVO';
  const canToggle = !isSelf && ['ATIVO','BLOQUEADO'].includes(status);

  return `
    <div class="user-card">
      <div class="user-card-head">
        <div>
          <div class="user-name">
            ${escapeHtml(user.name || 'Usuário')}
          </div>
          <div class="user-email">
            ${escapeHtml(user.email || '')}
          </div>
        </div>

        <span class="user-status-pill ${userStatusClass(status)}">
          ${escapeHtml(USER_STATUS_LABELS[status] || status)}
        </span>
      </div>

      <div class="user-meta">
        ${role
          ? `
            <span class="user-role-pill ${roleClass(role)}">
              ${escapeHtml(ROLE_LABELS[role])}
            </span>
          `
          : '<span class="chip neutral">Função não definida</span>'
        }

        <span class="chip neutral">
          ${escapeHtml(
            role==='ADMINISTRADOR'
              ? 'Todas as usinas'
              : (user.usina || 'Usina não definida')
          )}
        </span>

        ${isSelf ? '<span class="chip neutral">Sua conta</span>' : ''}
      </div>

      <div class="user-actions">
        ${status==='REJEITADO'
          ? `
            <button
              class="btn btn-sm"
              data-review-user="${user.uid}">
              Reavaliar cadastro
            </button>
          `
          : `
            <button
              class="btn btn-sm"
              data-edit-user="${user.uid}">
              Editar perfil
            </button>
          `
        }

        ${canToggle
          ? `
            <button
              class="btn btn-sm ${isActive?'btn-danger':''}"
              data-toggle-user="${user.uid}">
              ${isActive?'Bloquear':'Reativar'}
            </button>
          `
          : ''
        }

        <button
          class="btn btn-sm btn-danger"
          data-delete-user="${user.uid}"
          ${isSelf
            ? 'disabled title="Você não pode excluir sua própria conta"'
            : ''
          }>
          Excluir
        </button>
      </div>
    </div>
  `;
}

function openPendingUserApprovalModal(uid){
  if(!requirePermission('users')) return;

  const user = USERS_CACHE.find(item=>item.uid===uid);
  if(!user) return;

  openModal(`
    <div class="modal user-approval-modal">
      <div class="modal-head">
        <div>
          <h3>Analisar solicitação</h3>
          <p class="user-approval-subtitle">
            Defina a função e o acesso antes de ativar a conta.
          </p>
        </div>

        <button class="icon-btn" id="m-close">
          ${ICONS.close}
        </button>
      </div>

      <div class="modal-body">
        <div class="approval-user-summary">
          <div class="approval-user-avatar">
            ${(user.name || 'U').trim().charAt(0).toUpperCase()}
          </div>

          <div>
            <strong>${escapeHtml(user.name || 'Usuário')}</strong>
            <span>${escapeHtml(user.email || '')}</span>
            <small>
              Solicitado em
              ${escapeHtml(
                formatUserTimestamp(
                  user.requestedAt ||
                  user.createdAt
                )
              )}
            </small>
          </div>
        </div>

        <div class="field">
          <label>Função que será liberada *</label>
          <select id="approval-role">
            <option value="">Selecione a função</option>
            <option value="ADMINISTRADOR">Administrador</option>
            <option value="INSPETOR">Inspetor</option>
            <option value="VISUALIZADOR">Visualizador</option>
          </select>
        </div>

        <div class="field" id="approval-usina-field">
          <label>Usina de acesso *</label>
          <select id="approval-usina">
            <option value="">Selecione a usina</option>
            ${STATE.config.usinas.map(usina=>`
              <option value="${escapeHtml(usina)}">
                ${escapeHtml(usina)}
              </option>
            `).join('')}
          </select>
        </div>

        <div class="approval-security-note">
          ${ICONS.alertTriangle}
          <div>
            <strong>Atenção</strong>
            <span>
              Após a aprovação, o usuário poderá entrar imediatamente com
              o e-mail e a senha criados no cadastro.
            </span>
          </div>
        </div>
      </div>

      <div class="modal-foot approval-modal-actions">
        <button class="btn btn-danger" id="approval-reject">
          Rejeitar solicitação
        </button>

        <div>
          <button class="btn" id="m-cancel">Cancelar</button>
          <button class="btn btn-accent" id="approval-approve">
            Aprovar e ativar
          </button>
        </div>
      </div>
    </div>
  `);

  const roleSelect = document.getElementById('approval-role');
  const usinaField = document.getElementById('approval-usina-field');
  const usinaSelect = document.getElementById('approval-usina');

  function updateApprovalScope(){
    const isAdmin = roleSelect.value==='ADMINISTRADOR';
    usinaField.style.display = isAdmin ? 'none' : 'flex';

    if(isAdmin){
      usinaSelect.value = '';
    }
  }

  roleSelect.addEventListener('change',updateApprovalScope);
  updateApprovalScope();

  document.getElementById('m-close')
    ?.addEventListener('click',closeModal);

  document.getElementById('m-cancel')
    ?.addEventListener('click',closeModal);

  document.getElementById('approval-approve')
    ?.addEventListener('click',async event=>{
      const role = roleSelect.value;
      const usina = role==='ADMINISTRADOR'
        ? 'TODAS'
        : usinaSelect.value;

      if(!role){
        showToast('Selecione a função do novo usuário.','err');
        return;
      }

      if(role!=='ADMINISTRADOR' && !usina){
        showToast('Selecione a usina de acesso.','err');
        return;
      }

      const button = event.currentTarget;
      button.disabled = true;
      button.textContent = 'Ativando...';

      try{
        await approvePendingUser(uid,{role,usina});
        closeModal();
        showToast('Conta aprovada e ativada.','ok');
        renderUsers();
        scheduleNotificationIndicatorRefresh(0);
      }catch(error){
        console.error('User approval error',error);
        showToast('Não foi possível ativar a conta.','err');
        button.disabled = false;
        button.textContent = 'Aprovar e ativar';
      }
    });

  document.getElementById('approval-reject')
    ?.addEventListener('click',async event=>{
      const confirmed = confirm(
        `Rejeitar a solicitação de "${user.name || user.email}"?`
      );

      if(!confirmed) return;

      const button = event.currentTarget;
      button.disabled = true;
      button.textContent = 'Rejeitando...';

      try{
        await rejectPendingUser(uid);
        closeModal();
        showToast('Solicitação rejeitada.');
        renderUsers();
        scheduleNotificationIndicatorRefresh(0);
      }catch(error){
        console.error('User rejection error',error);
        showToast('Não foi possível rejeitar a solicitação.','err');
        button.disabled = false;
        button.textContent = 'Rejeitar solicitação';
      }
    });
}

async function approvePendingUser(uid,{role,usina}){
  if(!requirePermission('users')) return;

  const normalizedRole = normalizeRole(role);
  const finalUsina = normalizedRole==='ADMINISTRADOR'
    ? 'TODAS'
    : usina;

  const {doc,updateDoc,serverTimestamp} = await import(
    'https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js'
  );

  await updateDoc(
    doc(FIREBASE_DB,'users',uid),
    {
      role:normalizedRole,
      usina:finalUsina,
      status:'ATIVO',
      active:true,
      approvedAt:serverTimestamp(),
      approvedBy:AUTH_USER.uid,
      rejectedAt:null,
      rejectedBy:null,
      updatedAt:serverTimestamp()
    }
  );
}

async function rejectPendingUser(uid){
  if(!requirePermission('users')) return;

  const {doc,updateDoc,serverTimestamp} = await import(
    'https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js'
  );

  await updateDoc(
    doc(FIREBASE_DB,'users',uid),
    {
      role:'',
      usina:'',
      status:'REJEITADO',
      active:false,
      rejectedAt:serverTimestamp(),
      rejectedBy:AUTH_USER.uid,
      updatedAt:serverTimestamp()
    }
  );
}

function openUserModal(uid=null){
  if(!requirePermission('users')) return;
  const editing = !!uid;
  const u = editing ? USERS_CACHE.find(x=>x.uid===uid) : null;

  openModal(`
    <div class="modal">
      <div class="modal-head">
        <h3>${editing?'Editar usuário':'Novo usuário'}</h3>
        <button class="icon-btn" id="m-close">${ICONS.close}</button>
      </div>
      <div class="modal-body">
        <div class="field">
          <label>Nome</label>
          <input type="text" id="u-name" value="${escapeHtml(u?.name||'')}" placeholder="Nome completo">
        </div>
        <div class="field">
          <label>E-mail</label>
          <input type="text" id="u-email" value="${escapeHtml(u?.email||'')}" placeholder="usuario@empresa.com" ${editing?'disabled':''}>
        </div>
        ${editing ? '' : `
          <div class="field">
            <label>Senha inicial</label>
            <input type="password" id="u-password" placeholder="Mínimo de 6 caracteres"
              style="background:var(--panel-2);border:1px solid var(--border);color:var(--text);border-radius:8px;padding:9px 11px;font-size:13.5px;width:100%;">
          </div>
        `}
        <div class="field">
          <label>Perfil</label>
          <select id="u-role">
            ${['ADMINISTRADOR','INSPETOR','VISUALIZADOR'].map(role=>`
              <option value="${role}" ${(u?.role||'VISUALIZADOR')===role?'selected':''}>${ROLE_LABELS[role]}</option>
            `).join('')}
          </select>
        </div>

        <div class="field" id="u-usina-field">
          <label>Usina de acesso</label>
          <select id="u-usina">
            <option value="">Selecione a usina</option>
            ${STATE.config.usinas.map(usina=>`
              <option value="${escapeHtml(usina)}" ${(u?.usina||'')===usina?'selected':''}>${escapeHtml(usina)}</option>
            `).join('')}
          </select>
        </div>

        <div class="report-info">
          O Administrador terá acesso a todas as usinas. Inspetor e Visualizador devem ser vinculados obrigatoriamente a uma única usina, identificada automaticamente no login.
        </div>
      </div>
      <div class="modal-foot">
        <button class="btn" id="m-cancel">Cancelar</button>
        <button class="btn btn-accent" id="m-save-user">${editing?'Salvar alterações':'Criar usuário'}</button>
      </div>
    </div>
  `);

  const roleSelect = document.getElementById('u-role');
  const usinaField = document.getElementById('u-usina-field');
  const usinaSelect = document.getElementById('u-usina');

  function updateUsinaField(){
    const isAdmin = roleSelect.value === 'ADMINISTRADOR';
    usinaField.style.display = isAdmin ? 'none' : 'flex';
    if(isAdmin) usinaSelect.value = '';
  }

  roleSelect.addEventListener('change', updateUsinaField);
  updateUsinaField();

  document.getElementById('m-close').addEventListener('click', closeModal);
  document.getElementById('m-cancel').addEventListener('click', closeModal);
  document.getElementById('m-save-user').addEventListener('click', async ()=>{
    const name = document.getElementById('u-name').value.trim();
    const email = document.getElementById('u-email').value.trim().toLowerCase();
    const role = normalizeRole(document.getElementById('u-role').value);
    const usina = role === 'ADMINISTRADOR' ? 'TODAS' : document.getElementById('u-usina').value;

    if(!name || !email){ showToast("Informe nome e e-mail.","err"); return; }
    if(role!=='ADMINISTRADOR' && !usina){
      showToast("Selecione a usina de acesso do usuário.","err");
      return;
    }

    const btn = document.getElementById('m-save-user');
    btn.disabled = true;
    btn.textContent = "Salvando...";

    try{
      if(editing){
        await updateUserProfile(uid,{name,role,usina});
      }else{
        const password = document.getElementById('u-password').value;
        if(password.length<6){ showToast("A senha deve ter pelo menos 6 caracteres.","err"); btn.disabled=false; btn.textContent="Criar usuário"; return; }
        await createManagedUser({name,email,password,role,usina});
      }
      closeModal();
      showToast(editing ? "Usuário atualizado" : "Usuário criado");
      renderUsers();
    }catch(e){
      console.error(e);
      const msg = e.code==='auth/email-already-in-use' ? "Este e-mail já está cadastrado." :
                  e.code==='auth/invalid-email' ? "E-mail inválido." :
                  e.code==="permission-denied" || String(e.message||"").includes("insufficient permissions") ? "O Firestore bloqueou a criação do perfil. Publique as regras definitivas de usuários." :
                  "Não foi possível salvar o usuário.";
      showToast(msg,"err");
      btn.disabled = false;
      btn.textContent = editing ? "Salvar alterações" : "Criar usuário";
    }
  });
}

async function createManagedUser({name,email,password,role,usina}){
  if(!requirePermission('users')) return;
  const { initializeApp, deleteApp } =
    await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js");
  const { getAuth, createUserWithEmailAndPassword, signOut, updateProfile, deleteUser } =
    await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js");
  const { doc, setDoc, serverTimestamp } =
    await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js");

  const secondary = initializeApp(firebaseConfig, "userCreation-"+Date.now());
  let createdUser = null;
  try{
    const secondaryAuth = getAuth(secondary);
    const cred = await createUserWithEmailAndPassword(secondaryAuth,email,password);
    createdUser = cred.user;
    await updateProfile(createdUser,{displayName:name});

    try{
      await setDoc(doc(FIREBASE_DB,"users",createdUser.uid),{
        uid:createdUser.uid,
        name,
        email,
        role,
        usina: role==='ADMINISTRADOR' ? 'TODAS' : usina,
        status:'ATIVO',
        active:true,
        approvedAt:serverTimestamp(),
        approvedBy:AUTH_USER.uid,
        createdBy:AUTH_USER.uid,
        createdAt:serverTimestamp(),
        updatedAt:serverTimestamp()
      });
    }catch(profileError){
      // Evita deixar uma conta órfã no Authentication quando o Firestore negar o perfil.
      try{ await deleteUser(createdUser); }catch(cleanupError){ console.error("Falha ao remover usuário órfão", cleanupError); }
      throw profileError;
    }

    await signOut(secondaryAuth);
  }finally{
    await deleteApp(secondary);
  }
}

async function updateUserProfile(uid,data){
  if(!requirePermission('users')) return;
  if(uid===AUTH_USER.uid && data.role!=='ADMINISTRADOR'){
    const admins = USERS_CACHE.filter(u=>normalizeUserStatus(u)==='ATIVO' && u.role==='ADMINISTRADOR');
    if(admins.length<=1) throw new Error("LAST_ADMIN");
  }
  const { doc, updateDoc, serverTimestamp } =
    await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js");
  await updateDoc(doc(FIREBASE_DB,"users",uid),{
    name:data.name,
    role:normalizeRole(data.role),
    usina: normalizeRole(data.role)==='ADMINISTRADOR' ? 'TODAS' : data.usina,
    status:'ATIVO',
    active:true,
    updatedAt:serverTimestamp()
  });
  if(uid===AUTH_USER.uid){
    CURRENT_USER_PROFILE = {
      ...CURRENT_USER_PROFILE,
      name:data.name,
      role:normalizeRole(data.role),
      usina: normalizeRole(data.role)==='ADMINISTRADOR' ? 'TODAS' : data.usina
    };
  }
}

async function toggleUserStatus(uid){
  if(!requirePermission('users')) return;

  const user = USERS_CACHE.find(item=>item.uid===uid);
  if(!user || uid===AUTH_USER.uid) return;

  const currentStatus = normalizeUserStatus(user);
  if(!['ATIVO','BLOQUEADO'].includes(currentStatus)) return;

  if(user.role==='ADMINISTRADOR' && currentStatus==='ATIVO'){
    const activeAdmins = USERS_CACHE.filter(item=>
      item.role==='ADMINISTRADOR' &&
      normalizeUserStatus(item)==='ATIVO'
    );

    if(activeAdmins.length<=1){
      showToast(
        'O sistema precisa manter pelo menos um administrador ativo.',
        'err'
      );
      return;
    }
  }

  const activating = currentStatus==='BLOQUEADO';

  const {doc,updateDoc,serverTimestamp} = await import(
    'https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js'
  );

  await updateDoc(
    doc(FIREBASE_DB,'users',uid),
    {
      status:activating ? 'ATIVO' : 'BLOQUEADO',
      active:activating,
      blockedAt:activating ? null : serverTimestamp(),
      blockedBy:activating ? null : AUTH_USER.uid,
      updatedAt:serverTimestamp()
    }
  );

  showToast(
    activating ? 'Usuário reativado.' : 'Usuário bloqueado.'
  );

  renderUsers();
}

async function deleteManagedUser(uid){
  if(!requirePermission('users')) return;

  const u = USERS_CACHE.find(x=>x.uid===uid);
  if(!u) return;

  if(uid===AUTH_USER.uid){
    showToast("Você não pode excluir sua própria conta.","err");
    return;
  }

  if(u.role==='ADMINISTRADOR'){
    const activeAdmins = USERS_CACHE.filter(x=>x.role==='ADMINISTRADOR' && normalizeUserStatus(x)==='ATIVO');
    if(activeAdmins.length<=1){
      showToast("O sistema precisa manter pelo menos um administrador ativo.","err");
      return;
    }
  }

  const confirmed = confirm(
    `Excluir o usuário "${u.name || u.email}"?\n\n` +
    `Ele perderá imediatamente o acesso ao sistema. ` +
    `O registro permanecerá apenas no Firebase Authentication até ser removido manualmente.`
  );
  if(!confirmed) return;

  try{
    const { doc, deleteDoc } =
      await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js");

    await deleteDoc(doc(FIREBASE_DB,"users",uid));

    USERS_CACHE = USERS_CACHE.filter(x=>x.uid!==uid);
    showToast("Usuário excluído e acesso revogado.");
    renderUsers();
  }catch(e){
    console.error("User delete error",e);
    showToast("Não foi possível excluir o usuário.","err");
  }
}

/* ============================================================
   CONFIGURAÇÕES
============================================================ */
function renderSettings(){
  if(!requirePermission('settings')) return;
  setHeader("Configurações","Empresa, usinas, agentes extintores e limites de alerta");
  const cfg = STATE.config;
  const content = document.getElementById('content');
  content.innerHTML = `
    <div class="grid grid-2">
      <div class="card">
        <div class="section-title" style="margin-top:0;">Empresa / Logotipo</div>
        <div class="field"><label>Nome da empresa (aparece no PDF)</label><input type="text" id="s-company" value="${escapeHtml(cfg.companyName)}"></div>
        <div class="field"><label>Logotipo</label>
          <label class="photo-upload" style="height:110px;">
            ${cfg.logo?`<img src="${cfg.logo}">`:`${ICONS.upload}<span>Enviar logotipo</span>`}
            <input type="file" accept="image/*" id="s-logo">
          </label>
        </div>
        <div class="field"><label>Limite de dias para status "Alerta" (recarga)</label><input type="number" id="s-alertdays" value="${cfg.alertDays}"></div>
        <button class="btn btn-accent" id="s-save-company" style="width:100%;justify-content:center;">Salvar configurações</button>
      </div>
      <div class="card">
        <div class="section-title" style="margin-top:0;">Usinas</div>
        <div id="usina-list" style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px;"></div>
        <div style="display:flex;gap:6px;"><input type="text" id="new-usina" placeholder="Nova usina" style="flex:1;background:var(--panel-2);border:1px solid var(--border);color:var(--text);border-radius:8px;padding:8px 10px;font-size:13px;"><button class="btn" id="add-usina">${ICONS.plus}</button></div>

        <div class="section-title">Agentes extintores</div>
        <div id="agent-list" style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px;"></div>
        <div style="display:flex;gap:6px;"><input type="text" id="new-agent" placeholder="Novo agente" style="flex:1;background:var(--panel-2);border:1px solid var(--border);color:var(--text);border-radius:8px;padding:8px 10px;font-size:13px;"><button class="btn" id="add-agent">${ICONS.plus}</button></div>
      </div>
    </div>
  `;
  renderListEditable('usina-list', cfg.usinas, removeUsina);
  renderListEditable('agent-list', cfg.agents, removeAgent);

  document.getElementById('s-logo').addEventListener('change', async ev=>{
    const file = ev.target.files[0]; if(!file) return;
    cfg.logo = await fileToDataUrl(file, 300);
    renderSettings();
  });
  document.getElementById('s-save-company').addEventListener('click', async ()=>{
    cfg.companyName = document.getElementById('s-company').value.trim() || cfg.companyName;
    cfg.alertDays = parseInt(document.getElementById('s-alertdays').value)||30;
    await persistConfig();
    renderShell();
    showToast("Configurações salvas");
  });
  document.getElementById('add-usina').addEventListener('click', async ()=>{
    const v = document.getElementById('new-usina').value.trim();
    if(v && !cfg.usinas.includes(v)){ cfg.usinas.push(v); await persistConfig(); renderSettings(); }
  });
  document.getElementById('add-agent').addEventListener('click', async ()=>{
    const v = document.getElementById('new-agent').value.trim();
    if(v && !cfg.agents.includes(v)){ cfg.agents.push(v); await persistConfig(); renderSettings(); }
  });
}
function renderListEditable(elId, arr, removeFn){
  const el = document.getElementById(elId);
  el.innerHTML = arr.map((v,i)=>`<div style="display:flex;justify-content:space-between;align-items:center;background:var(--panel-2);border:1px solid var(--border-soft);padding:7px 10px;border-radius:7px;font-size:13px;">
    <span>${escapeHtml(v)}</span><button class="icon-btn" data-i="${i}">${ICONS.trash}</button></div>`).join('') || `<p style="color:var(--muted);font-size:12.5px;">Nenhum item.</p>`;
  el.querySelectorAll('[data-i]').forEach(b=>b.addEventListener('click', ()=>removeFn(parseInt(b.dataset.i))));
}
async function removeUsina(i){ STATE.config.usinas.splice(i,1); await persistConfig(); renderSettings(); }
async function removeAgent(i){ STATE.config.agents.splice(i,1); await persistConfig(); renderSettings(); }


/* ============================================================
   AUTENTICAÇÃO
============================================================ */
async function waitForAuthState(){
  if(!FIREBASE_AUTH) return null;
  const { onAuthStateChanged } =
    await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js");

  return await new Promise(resolve=>{
    const unsub = onAuthStateChanged(FIREBASE_AUTH, user=>{
      unsub();
      AUTH_USER = user || null;
      resolve(AUTH_USER);
    });
  });
}

function accountStatusContent(profile){
  const status = normalizeUserStatus(profile);

  const map = {
    PENDENTE:{
      eyebrow:'Solicitação enviada',
      title:'Aguardando liberação',
      description:'Seu cadastro foi realizado. Um administrador precisa definir sua função e a usina de acesso antes da entrada no sistema.',
      icon:ICONS.history,
      tone:'pending'
    },
    REJEITADO:{
      eyebrow:'Solicitação analisada',
      title:'Cadastro não aprovado',
      description:'Sua solicitação de acesso foi rejeitada. Procure o administrador responsável para obter mais informações.',
      icon:ICONS.close,
      tone:'rejected'
    },
    BLOQUEADO:{
      eyebrow:'Acesso suspenso',
      title:'Conta bloqueada',
      description:'Esta conta está temporariamente bloqueada. Procure um administrador para solicitar a reativação.',
      icon:ICONS.alertTriangle,
      tone:'blocked'
    }
  };

  return map[status] || map.PENDENTE;
}

async function fetchCurrentProfileFromServer({
  timeoutMs=10000
}={}){
  if(!AUTH_USER || !FIREBASE_DB){
    throw new Error('AUTH_NOT_READY');
  }

  const {
    doc,
    getDocFromServer
  } = await import(
    'https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js'
  );

  const profileReference = doc(
    FIREBASE_DB,
    'users',
    AUTH_USER.uid
  );

  const timeoutPromise = new Promise((_,reject)=>{
    setTimeout(
      ()=>reject(new Error('PROFILE_CHECK_TIMEOUT')),
      timeoutMs
    );
  });

  const snapshot = await Promise.race([
    getDocFromServer(profileReference),
    timeoutPromise
  ]);

  if(!snapshot.exists()){
    throw new Error('PROFILE_NOT_FOUND');
  }

  const profile = {
    uid:AUTH_USER.uid,
    ...snapshot.data()
  };

  const status = normalizeUserStatus(profile);
  const role = ['ADMINISTRADOR','INSPETOR','VISUALIZADOR'].includes(
    profile.role
  )
    ? profile.role
    : '';

  CURRENT_USER_PROFILE = {
    ...profile,
    status,
    role,
    usina:role==='ADMINISTRADOR'
      ? 'TODAS'
      : (profile.usina || ''),
    active:status==='ATIVO' && profile.active !== false
  };

  await cacheOfflineValue(
    `profile:${AUTH_USER.uid}`,
    CURRENT_USER_PROFILE
  );

  return CURRENT_USER_PROFILE;
}

async function checkCurrentAccountApproval(button){
  const originalText = 'Verificar liberação';

  button.disabled = true;
  button.classList.add('checking');
  button.textContent = 'Verificando...';

  try{
    const profile = await fetchCurrentProfileFromServer({
      timeoutMs:10000
    });

    const status = normalizeUserStatus(profile);

    if(userCanEnterSystem(profile)){
      button.textContent = 'Acesso liberado';
      button.classList.remove('checking');
      button.classList.add('approved');

      showToast(
        'Conta aprovada. Entrando no sistema...',
        'ok'
      );

      // Recarregar reproduz o fluxo que já funciona corretamente
      // ao atualizar manualmente a página, sem deixar o botão preso.
      setTimeout(()=>{
        window.location.reload();
      },350);

      return;
    }

    if(status==='PENDENTE'){
      button.disabled = false;
      button.classList.remove('checking');
      button.textContent = originalText;

      showToast(
        'Sua conta ainda está aguardando a liberação do administrador.'
      );

      return;
    }

    // Rejeitado ou bloqueado: redesenha a tela com a situação atual.
    renderAccountStatusScreen(profile);
  }catch(error){
    console.error('Approval check error',error);

    button.disabled = false;
    button.classList.remove('checking');
    button.textContent = originalText;

    const isTimeout =
      String(error?.message || '')==='PROFILE_CHECK_TIMEOUT';

    showToast(
      isTimeout
        ? 'A consulta demorou mais que o esperado. Tente novamente.'
        : 'Não foi possível consultar a liberação. Verifique a internet.',
      'err'
    );
  }
}

function renderAccountStatusScreen(profile=CURRENT_USER_PROFILE){
  const content = accountStatusContent(profile);

  document.getElementById('app').innerHTML = `
    <div class="account-status-shell">
      <section class="account-status-card ${content.tone}">
        <div class="account-status-logo">
          <img src="./icon-192.png" alt="Gestão de Extintores">
        </div>

        <div class="account-status-icon">${content.icon}</div>
        <div class="account-status-eyebrow">${content.eyebrow}</div>
        <h1>${content.title}</h1>
        <p>${content.description}</p>

        <div class="account-status-user">
          <strong>${escapeHtml(profile?.name || AUTH_USER?.displayName || 'Usuário')}</strong>
          <span>${escapeHtml(profile?.email || AUTH_USER?.email || '')}</span>
          <small>
            Situação:
            ${escapeHtml(USER_STATUS_LABELS[normalizeUserStatus(profile)] || 'Pendente')}
          </small>
        </div>

        ${normalizeUserStatus(profile)==='PENDENTE'
          ? `
            <button
              type="button"
              class="btn btn-accent account-status-primary"
              id="account-check-status">
              Verificar liberação
            </button>
          `
          : ''
        }

        <button
          type="button"
          class="btn account-status-secondary"
          id="account-status-logout">
          Sair da conta
        </button>

        <div class="account-status-foot">
          O acesso é controlado pelo Administrador do Sistema.
        </div>
      </section>
    </div>
  `;

  document.getElementById('account-status-logout')
    ?.addEventListener('click',logout);

  document.getElementById('account-check-status')
    ?.addEventListener('click',event=>{
      checkCurrentAccountApproval(event.currentTarget);
    });
}

async function continueAfterAuthentication({
  openRequestedExtinguisher=false
}={}){
  await loadCurrentUserProfile();

  if(!userCanEnterSystem(CURRENT_USER_PROFILE)){
    renderAccountStatusScreen(CURRENT_USER_PROFILE);
    return false;
  }

  STATE.view = defaultViewForRole();
  await loadAll();
  validateCurrentUserScope();
  applyUserDataScope();
  renderShell();

  if(openRequestedExtinguisher){
    openRequestedExtinguisherFromUrl();
  }

  setTimeout(()=>processOfflineQueue(false),700);
  return true;
}

function renderRegistration(){
  document.getElementById('app').innerHTML = `
    <div class="login-v2-shell">
      <section class="login-v2-brand">
        <div>
          <div class="login-v2-logo">
            <img src="./icon-512.png" alt="Gestão de Extintores">
          </div>
          <div class="login-v2-brand-title">
            Solicite seu acesso com <strong>segurança.</strong>
          </div>
          <div class="login-v2-brand-sub">
            Crie sua conta. Após o cadastro, o Administrador definirá sua
            função e a usina autorizada.
          </div>
          <div class="login-v2-features">
            <div class="login-v2-feature">
              <b>Cadastro pessoal</b>
              <span>Nome, e-mail e senha protegidos pelo Firebase.</span>
            </div>
            <div class="login-v2-feature">
              <b>Aprovação</b>
              <span>O administrador analisa cada solicitação.</span>
            </div>
            <div class="login-v2-feature">
              <b>Acesso por usina</b>
              <span>Permissões aplicadas somente após a liberação.</span>
            </div>
          </div>
        </div>
        <div class="login-v2-version">
          Gestão de Extintores · Autocadastro seguro
        </div>
      </section>

      <section class="login-v2-access">
        <div class="login-v2-card login-register-card">
          <div class="login-v2-mobile-brand">
            <img src="./icon-192.png" alt="Gestão de Extintores">
            <div>
              <div style="font-family:var(--font-display);font-size:18px;font-weight:700;">
                Gestão de Extintores
              </div>
              <div style="font-size:11px;color:var(--muted);margin-top:2px;">
                Solicitação de acesso
              </div>
            </div>
          </div>

          <button type="button" class="login-register-back" id="register-back">
            ← Voltar para o login
          </button>

          <div class="login-v2-eyebrow">Nova conta</div>
          <div class="login-v2-heading">Solicitar acesso</div>
          <div class="login-v2-copy">
            Preencha seus dados. A função e a usina serão definidas pelo
            administrador.
          </div>

          <div class="login-v2-field">
            <label for="register-name">Nome e sobrenome</label>
            <div class="login-v2-input-wrap">
              <input
                type="text"
                id="register-name"
                autocomplete="name"
                maxlength="100"
                placeholder="Digite seu nome completo">
              <svg class="login-v2-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
            </div>
          </div>

          <div class="login-v2-field">
            <label for="register-email">E-mail</label>
            <div class="login-v2-input-wrap">
              <input
                type="email"
                id="register-email"
                autocomplete="email"
                placeholder="seuemail@empresa.com">
              <svg class="login-v2-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M4 6h16v12H4z"/>
                <path d="m4 7 8 6 8-6"/>
              </svg>
            </div>
          </div>

          <div class="login-register-grid">
            <div class="login-v2-field">
              <label for="register-password">Senha</label>
              <div class="login-v2-input-wrap">
                <input
                  type="password"
                  id="register-password"
                  autocomplete="new-password"
                  placeholder="Mínimo de 6 caracteres">
                <button
                  type="button"
                  class="login-v2-password-toggle"
                  data-register-password-toggle="register-password"
                  aria-label="Mostrar senha">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/>
                    <circle cx="12" cy="12" r="2.5"/>
                  </svg>
                </button>
              </div>
            </div>

            <div class="login-v2-field">
              <label for="register-confirm-password">Confirmar senha</label>
              <div class="login-v2-input-wrap">
                <input
                  type="password"
                  id="register-confirm-password"
                  autocomplete="new-password"
                  placeholder="Repita a senha">
                <button
                  type="button"
                  class="login-v2-password-toggle"
                  data-register-password-toggle="register-confirm-password"
                  aria-label="Mostrar senha">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/>
                    <circle cx="12" cy="12" r="2.5"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="login-register-policy">
            Ao criar a conta, o acesso permanecerá bloqueado até a aprovação
            de um administrador.
          </div>

          <button
            type="button"
            class="btn btn-accent login-v2-submit"
            id="register-submit">
            Criar conta e solicitar acesso
          </button>

          <div id="register-error" class="login-v2-error"></div>

          <div class="login-v2-security">
            ${ICONS.checkCircle}
            Senha armazenada somente no Firebase Authentication
          </div>
        </div>
      </section>
    </div>
  `;

  document.getElementById('register-back')
    ?.addEventListener('click',renderLogin);

  document.querySelectorAll('[data-register-password-toggle]')
    .forEach(button=>{
      button.addEventListener('click',()=>{
        const input = document.getElementById(
          button.dataset.registerPasswordToggle
        );

        if(!input) return;

        const showing = input.type==='text';
        input.type = showing ? 'password' : 'text';
        button.setAttribute(
          'aria-label',
          showing ? 'Mostrar senha' : 'Ocultar senha'
        );
      });
    });

  const submit = document.getElementById('register-submit');
  const nameInput = document.getElementById('register-name');
  const emailInput = document.getElementById('register-email');
  const passwordInput = document.getElementById('register-password');
  const confirmInput = document.getElementById('register-confirm-password');
  const errorBox = document.getElementById('register-error');

  async function submitRegistration(){
    const name = nameInput.value.trim().replace(/\s+/g,' ');
    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;
    const confirmation = confirmInput.value;

    errorBox.style.display = 'none';

    if(name.split(' ').filter(Boolean).length<2){
      errorBox.textContent = 'Informe seu nome e sobrenome.';
      errorBox.style.display = 'block';
      return;
    }

    if(!email){
      errorBox.textContent = 'Informe um e-mail válido.';
      errorBox.style.display = 'block';
      return;
    }

    if(password.length<6){
      errorBox.textContent = 'A senha deve possuir pelo menos 6 caracteres.';
      errorBox.style.display = 'block';
      return;
    }

    if(password!==confirmation){
      errorBox.textContent = 'A confirmação da senha não corresponde.';
      errorBox.style.display = 'block';
      return;
    }

    submit.disabled = true;
    submit.textContent = 'Criando conta...';

    let createdUser = null;

    try{
      const {
        createUserWithEmailAndPassword,
        updateProfile,
        deleteUser,
        signOut
      } = await import(
        'https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js'
      );

      const {
        doc,
        setDoc,
        serverTimestamp
      } = await import(
        'https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js'
      );

      const credential = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );

      createdUser = credential.user;
      await updateProfile(createdUser,{displayName:name});

      try{
        await setDoc(
          doc(FIREBASE_DB,'users',createdUser.uid),
          {
            uid:createdUser.uid,
            name,
            email,
            role:'',
            usina:'',
            status:'PENDENTE',
            active:false,
            requestedAt:serverTimestamp(),
            createdAt:serverTimestamp(),
            updatedAt:serverTimestamp()
          },
          {merge:false}
        );
      }catch(profileError){
        try{
          await deleteUser(createdUser);
        }catch(cleanupError){
          console.error('Falha ao remover conta sem perfil',cleanupError);
          try{ await signOut(FIREBASE_AUTH); }catch(signOutError){}
        }
        throw profileError;
      }

      AUTH_USER = createdUser;
      CURRENT_USER_PROFILE = {
        uid:createdUser.uid,
        name,
        email,
        role:'',
        usina:'',
        status:'PENDENTE',
        active:false,
        requestedAt:new Date().toISOString()
      };

      renderAccountStatusScreen(CURRENT_USER_PROFILE);
    }catch(error){
      console.error('Self registration error',error);

      const code = error?.code || '';
      const message = String(error?.message || '');

      errorBox.textContent =
        code==='auth/email-already-in-use'
          ? 'Este e-mail já possui uma conta. Volte ao login para entrar.'
          : code==='auth/invalid-email'
            ? 'O e-mail informado é inválido.'
            : code==='auth/weak-password'
              ? 'Escolha uma senha mais segura.'
              : code==='auth/network-request-failed'
                ? 'Não foi possível conectar ao Firebase. Verifique a internet.'
                : code==='permission-denied' ||
                  message.includes('insufficient permissions')
                  ? 'O cadastro foi bloqueado pelas regras do Firestore. Publique o arquivo firestore.rules incluído no pacote.'
                  : 'Não foi possível criar a conta. Tente novamente.';

      errorBox.style.display = 'block';
      submit.disabled = false;
      submit.textContent = 'Criar conta e solicitar acesso';
    }
  }

  submit?.addEventListener('click',submitRegistration);
  confirmInput?.addEventListener('keydown',event=>{
    if(event.key==='Enter') submitRegistration();
  });

  setTimeout(()=>nameInput?.focus(),100);
}

function renderLogin(){
  document.getElementById('app').innerHTML = `
    <div class="login-v2-shell">
      <section class="login-v2-brand">
        <div>
          <div class="login-v2-logo"><img src="./icon-512.png" alt="Gestão de Extintores"></div>
          <div class="login-v2-brand-title">Gestão inteligente para <strong>proteção contra incêndio.</strong></div>
          <div class="login-v2-brand-sub">Controle equipamentos, inspeções, vencimentos e relatórios em uma plataforma segura, organizada por usina e preparada para operação em campo.</div>
          <div class="login-v2-features">
            <div class="login-v2-feature"><b>QR Code</b><span>Identificação rápida dos equipamentos.</span></div>
            <div class="login-v2-feature"><b>Multiusinas</b><span>Acesso segmentado por unidade.</span></div>
            <div class="login-v2-feature"><b>Firebase</b><span>Dados protegidos e sincronizados.</span></div>
          </div>
        </div>
        <div class="login-v2-version">Gestão de Extintores · PWA Premium v2.1</div>
      </section>

      <section class="login-v2-access">
        <div class="login-v2-card">
          <div class="login-v2-mobile-brand">
            <img src="./icon-192.png" alt="Gestão de Extintores">
            <div>
              <div style="font-family:var(--font-display);font-size:18px;font-weight:700;">Gestão de Extintores</div>
              <div style="font-size:11px;color:var(--muted);margin-top:2px;">PWA Premium</div>
            </div>
          </div>

          <div class="login-v2-eyebrow">Acesso seguro</div>
          <div class="login-v2-heading">Bem-vindo de volta</div>
          <div class="login-v2-copy">Entre com suas credenciais ou solicite um novo acesso ao sistema.</div>

          <div class="login-v2-field">
            <label for="login-email">E-mail</label>
            <div class="login-v2-input-wrap">
              <input type="email" id="login-email" autocomplete="username" placeholder="seuemail@empresa.com">
              <svg class="login-v2-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>
            </div>
          </div>

          <div class="login-v2-field">
            <label for="login-password">Senha</label>
            <div class="login-v2-input-wrap">
              <input type="password" id="login-password" autocomplete="current-password" placeholder="Digite sua senha">
              <button type="button" class="login-v2-password-toggle" id="login-toggle-password" aria-label="Mostrar senha">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></svg>
              </button>
            </div>
          </div>

          <button type="button" class="btn btn-accent login-v2-submit" id="login-btn">Entrar no sistema</button>
          <div id="login-error" class="login-v2-error"></div>

          <div class="login-v2-divider"><span>ou</span></div>

          <button
            type="button"
            class="btn login-v2-secondary"
            id="login-register">
            ${ICONS.plus}Criar nova conta
          </button>

          <div class="login-v2-register-note">
            A conta será liberada após o Administrador definir sua função e usina.
          </div>

          <div class="login-v2-security">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6z"/><path d="m9 12 2 2 4-4"/></svg>
            Autenticação protegida pelo Firebase
          </div>
        </div>
      </section>
    </div>
  `;

  const btn = document.getElementById('login-btn');
  const emailEl = document.getElementById('login-email');
  const passEl = document.getElementById('login-password');
  const errEl = document.getElementById('login-error');
  const togglePassword = document.getElementById('login-toggle-password');
  const registerButton = document.getElementById('login-register');

  registerButton?.addEventListener('click',renderRegistration);

  togglePassword?.addEventListener('click', ()=>{
    const showing = passEl.type === 'text';
    passEl.type = showing ? 'password' : 'text';
    togglePassword.setAttribute('aria-label', showing ? 'Mostrar senha' : 'Ocultar senha');
  });

  async function doLogin(){
    const email = emailEl.value.trim();
    const password = passEl.value;

    if(!email || !password){
      errEl.textContent = "Informe o e-mail e a senha para continuar.";
      errEl.style.display = "block";
      return;
    }

    btn.disabled = true;
    btn.textContent = "Validando acesso...";
    errEl.style.display = "none";

    try{
      const { signInWithEmailAndPassword } =
        await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js");

      const cred = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );

      AUTH_USER = cred.user;
      await continueAfterAuthentication({
        openRequestedExtinguisher:true
      });
    }catch(e){
      console.error("Login error", e);
      errEl.textContent = e.message==="USER_DISABLED" ? "Este usuário está desativado." :
                          e.message==="PROFILE_NOT_FOUND" ? "Seu acesso ainda não foi autorizado pelo administrador." :
                          e.message==="USINA_NOT_ASSIGNED" ? "Seu usuário ainda não possui uma usina vinculada." :
                          e.message==="USINA_INVALID" ? "A usina vinculada ao usuário não está disponível no sistema." :
                          e.code==="auth/too-many-requests" ? "Muitas tentativas. Aguarde alguns minutos e tente novamente." :
                          "Não foi possível entrar. Verifique o e-mail e a senha.";
      errEl.style.display = "block";
      btn.disabled = false;
      btn.textContent = "Entrar no sistema";
    }
  }

  btn.addEventListener('click', doLogin);
  passEl.addEventListener('keydown', e=>{ if(e.key==='Enter') doLogin(); });
  emailEl.addEventListener('keydown', e=>{ if(e.key==='Enter') passEl.focus(); });
  setTimeout(()=>emailEl.focus(),100);
}

async function logout(){
  try{
    const { signOut } =
      await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js");
    await signOut(FIREBASE_AUTH);
    AUTH_USER = null;
    CURRENT_USER_PROFILE = null;
    USERS_CACHE = [];

    if(typeof NOTIFICATION_POLL_TIMER!=='undefined'){
      clearInterval(NOTIFICATION_POLL_TIMER);
    }

    if(NOTIFICATION_READ_STATE_UNSUBSCRIBE){
      NOTIFICATION_READ_STATE_UNSUBSCRIBE();
      NOTIFICATION_READ_STATE_UNSUBSCRIBE = null;
    }

    window.removeEventListener(
      'online',
      handleNotificationReadOnline
    );

    NOTIFICATION_REMOTE_READ_IDS = new Set();
    NOTIFICATION_READ_SYNCED_AT = 0;

    renderLogin();
  }catch(e){
    console.error("Logout error", e);
    showToast("Não foi possível sair da conta.","err");
  }
}

/* ============================================================
   BOOT
============================================================ */
async function boot(){
  document.getElementById('app').innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100vh;width:100%;color:var(--muted);font-size:13px;">Carregando aplicativo...</div>`;

  await openOfflineDatabase().catch(error=>console.error('IndexedDB init error:',error));

  if(!navigator.onLine){
    const restored = await restoreOfflineSession();
    if(restored){
      STATE.view = defaultViewForRole();
      validateCurrentUserScope();
      applyUserDataScope();
      renderShell();
      showToast('Aplicativo aberto em modo offline.');
      return;
    }

    document.getElementById('app').innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100vh;width:100%;color:var(--warning);font-size:13px;padding:24px;text-align:center;">Este aparelho ainda não possui uma sessão offline. Conecte-se à internet e faça login uma vez.</div>`;
    return;
  }

  const firebaseOk = await initFirebase();

  if(!firebaseOk){
    const restored = await restoreOfflineSession();
    if(restored){
      STATE.view = defaultViewForRole();
      validateCurrentUserScope();
      applyUserDataScope();
      renderShell();
      showToast('Firebase indisponível. Dados locais carregados.','err');
      return;
    }

    document.getElementById('app').innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100vh;width:100%;color:var(--danger);font-size:13px;padding:20px;text-align:center;">Não foi possível conectar ao Firebase.</div>`;
    return;
  }

  await waitForAuthState();

  if(AUTH_USER){
    try{
      await continueAfterAuthentication();
    }catch(error){
      console.error('Access profile error:',error);
      const {signOut} =
        await import('https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js');
      await signOut(FIREBASE_AUTH);
      AUTH_USER = null;
      CURRENT_USER_PROFILE = null;
      renderLogin();
    }
  }else{
    renderLogin();
  }
}

boot();


/* ============================================================
   PWA / SERVICE WORKER
============================================================ */
let PWA_WAITING_WORKER = null;

function showPwaUpdate(worker){
  PWA_WAITING_WORKER = worker;
  document.getElementById('pwa-update-banner')?.classList.add('show');
}

function hidePwaUpdate(){
  document.getElementById('pwa-update-banner')?.classList.remove('show');
}

async function registerPwa(){
  if(!('serviceWorker' in navigator)) return;

  try{
    const registration = await navigator.serviceWorker.register('./service-worker.js', {
      scope:'./'
    });

    if(registration.waiting){
      showPwaUpdate(registration.waiting);
    }

    registration.addEventListener('updatefound', ()=>{
      const worker = registration.installing;
      if(!worker) return;

      worker.addEventListener('statechange', ()=>{
        if(worker.state==='installed' && navigator.serviceWorker.controller){
          showPwaUpdate(worker);
        }
      });
    });

    // Verifica atualizações quando o app volta ao primeiro plano.
    document.addEventListener('visibilitychange', ()=>{
      if(document.visibilityState==='visible'){
        registration.update().catch(()=>{});
      }
    });

    // Também verifica periodicamente enquanto o app estiver aberto.
    setInterval(()=>registration.update().catch(()=>{}), 60 * 60 * 1000);

    navigator.serviceWorker.addEventListener('controllerchange', ()=>{
      window.location.reload();
    });
  }catch(error){
    console.error('Falha ao registrar PWA:', error);
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('pwa-update-now')?.addEventListener('click', ()=>{
    if(PWA_WAITING_WORKER){
      PWA_WAITING_WORKER.postMessage({type:'SKIP_WAITING'});
    }else{
      window.location.reload();
    }
  });

  document.getElementById('pwa-update-later')?.addEventListener('click', hidePwaUpdate);
  registerPwa();
});



/* ============================================================
   MOBILE PREMIUM v2.2
============================================================ */
function openMobileProfileMenu(){
  const menu = document.getElementById('mobile-profile-menu');
  const backdrop = document.getElementById('mobile-profile-backdrop');
  if(!menu || !backdrop) return;

  document.getElementById('mobile-profile-name').textContent =
    CURRENT_USER_PROFILE?.name || AUTH_USER?.email || 'Usuário';
  document.getElementById('mobile-profile-role').textContent =
    ROLE_LABELS[currentRole()] || currentRole();
  document.getElementById('mobile-profile-scope').textContent =
    accessScopeLabel();

  menu.classList.add('show');
  backdrop.classList.add('show');
}

function closeMobileProfileMenu(){
  document.getElementById('mobile-profile-menu')?.classList.remove('show');
  document.getElementById('mobile-profile-backdrop')?.classList.remove('show');
}

function openMobileAccountSummary(){
  closeMobileProfileMenu();
  openModal(`
    <div class="modal">
      <div class="modal-head">
        <h3>Minha conta</h3>
        <button class="icon-btn" id="m-close">${ICONS.close}</button>
      </div>
      <div class="modal-body">
        <div class="field"><label>Nome</label><input value="${escapeHtml(CURRENT_USER_PROFILE?.name || '')}" disabled></div>
        <div class="field"><label>E-mail</label><input value="${escapeHtml(AUTH_USER?.email || '')}" disabled></div>
        <div class="field"><label>Perfil</label><input value="${escapeHtml(ROLE_LABELS[currentRole()] || currentRole())}" disabled></div>
        <div class="field"><label>Escopo de acesso</label><input value="${escapeHtml(accessScopeLabel())}" disabled></div>
      </div>
      <div class="modal-foot"><button class="btn" id="m-account-close">Fechar</button></div>
    </div>
  `);
  document.getElementById('m-close').addEventListener('click', closeModal);
  document.getElementById('m-account-close').addEventListener('click', closeModal);
}

async function sendPasswordResetFromApp(){
  closeMobileProfileMenu();
  if(!AUTH_USER?.email){
    showToast("E-mail do usuário não identificado.","err");
    return;
  }

  try{
    const { sendPasswordResetEmail } =
      await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js");
    await sendPasswordResetEmail(FIREBASE_AUTH, AUTH_USER.email);
    showToast("Link para alteração de senha enviado ao seu e-mail.");
  }catch(error){
    console.error(error);
    showToast("Não foi possível enviar o link de alteração de senha.","err");
  }
}

function openAppInformation(){
  closeMobileProfileMenu();
  openModal(`
    <div class="modal">
      <div class="modal-head">
        <h3>Informações do aplicativo</h3>
        <button class="icon-btn" id="m-close">${ICONS.close}</button>
      </div>
      <div class="modal-body">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;">
          <img src="./icon-192.png" alt="Gestão de Extintores" style="width:62px;height:62px;border-radius:16px;">
          <div>
            <div style="font-family:var(--font-display);font-size:18px;font-weight:700;">Gestão de Extintores</div>
            <div style="font-size:11px;color:var(--muted);margin-top:4px;">PWA Enterprise v3.2.12.3 · Compartilhamento Profissional</div>
          </div>
        </div>
        <div class="report-info">Aplicativo instalado com atualização automática, controle por perfil e segmentação por usina.</div>
      </div>
      <div class="modal-foot"><button class="btn" id="m-app-close">Fechar</button></div>
    </div>
  `);
  document.getElementById('m-close').addEventListener('click', closeModal);
  document.getElementById('m-app-close').addEventListener('click', closeModal);
}

function bindMobileProfileMenu(){
  document.getElementById('mobile-profile-btn')?.addEventListener('click', openMobileProfileMenu);
  document.getElementById('mobile-profile-backdrop')?.addEventListener('click', closeMobileProfileMenu);
  document.getElementById('mobile-profile-account')?.addEventListener('click', openMobileAccountSummary);
  document.getElementById('mobile-profile-password')?.addEventListener('click', sendPasswordResetFromApp);
  document.getElementById('mobile-profile-appinfo')?.addEventListener('click', openAppInformation);
  document.getElementById('mobile-profile-logout')?.addEventListener('click', async ()=>{
    closeMobileProfileMenu();
    await logout();
  });
}

/* ============================================================
   PWA PREMIUM
============================================================ */
let PWA_INSTALL_PROMPT = null;

function isStandaloneMode(){
  return window.matchMedia('(display-mode: standalone)').matches ||
         window.navigator.standalone === true;
}

function updatePwaModeUi(){
  const installed = isStandaloneMode();
  const chip = document.getElementById('pwa-mode-chip');
  if(chip){
    chip.textContent = installed ? 'Aplicativo' : 'Navegador';
    chip.classList.toggle('installed', installed);
  }
  if(installed){
    document.getElementById('pwa-install-button')?.classList.remove('show');
    document.getElementById('pwa-install-card')?.classList.remove('show');
  }
}

function showInstallUi(){
  if(isStandaloneMode()) return;
  document.getElementById('pwa-install-button')?.classList.add('show');
  document.getElementById('pwa-install-card')?.classList.add('show');
}

async function requestPwaInstall(){
  if(!PWA_INSTALL_PROMPT) return;
  PWA_INSTALL_PROMPT.prompt();
  try{ await PWA_INSTALL_PROMPT.userChoice; }catch(e){}
  PWA_INSTALL_PROMPT = null;
  document.getElementById('pwa-install-button')?.classList.remove('show');
  document.getElementById('pwa-install-card')?.classList.remove('show');
}

window.addEventListener('beforeinstallprompt', event=>{
  event.preventDefault();
  PWA_INSTALL_PROMPT = event;
  showInstallUi();
});

window.addEventListener('appinstalled', ()=>{
  PWA_INSTALL_PROMPT = null;
  updatePwaModeUi();
  showToast?.("Aplicativo instalado com sucesso");
});

window.matchMedia('(display-mode: standalone)').addEventListener?.('change', updatePwaModeUi);

document.addEventListener('DOMContentLoaded', ()=>{
  updatePwaModeUi();

  document.getElementById('pwa-install-button')?.addEventListener('click', requestPwaInstall);
  document.getElementById('pwa-install-card-btn')?.addEventListener('click', requestPwaInstall);

  // Splash nunca bloqueia o app em caso de erro de rede.
  const splash = document.getElementById('pwa-splash');
  const hideSplash = ()=>splash?.classList.add('hide');
  window.addEventListener('load', ()=>setTimeout(hideSplash, 450), {once:true});
  setTimeout(hideSplash, 3200);
});