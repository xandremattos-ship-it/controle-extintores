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
  camera:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  download:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  printer:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
  upload:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
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
  "AGUARDANDO VERIFICAÇÃO",
  "RESOLVIDA",
  "ENCERRADA",
  "CANCELADA"
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
    await persistConfig();
    await persistExtinguishers();
  }

  await migrateInspectionUsinaFields();
  STATE.loaded = true;
  await cacheCurrentOfflineSession();
}

async function persistConfig(){
  if(CURRENT_USER_PROFILE && !can('settings')) throw new Error('PERMISSION_DENIED');

  saveLocalKey('config',STATE.config);
  await cacheOfflineValue('config',STATE.config);

  if(!navigator.onLine || !FIREBASE_READY || !FIREBASE_DB){
    await enqueueOfflineOperation({
      type:'config',
      id:`config:${AUTH_USER?.uid || 'user'}`,
      value:STATE.config
    });
    return;
  }

  try{
    const {doc,setDoc,serverTimestamp} =
      await import('https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js');

    await setDoc(
      doc(FIREBASE_DB,'settings','main'),
      {value:STATE.config,updatedAt:serverTimestamp()},
      {merge:true}
    );
  }catch(error){
    console.error('Config save error:',error);
    await enqueueOfflineOperation({
      type:'config',
      id:`config:${AUTH_USER?.uid || 'user'}`,
      value:STATE.config
    });
    showToast('Configuração salva no aparelho e aguardando sincronização.','err');
  }
}

async function persistExtinguishers(){
  if(CURRENT_USER_PROFILE && !can('createExtinguishers') && !can('editExtinguishers') && !can('deleteExtinguishers')){
    throw new Error('PERMISSION_DENIED');
  }

  const cacheKey = scopedOfflineKey('extinguishers');
  saveLocalKey(cacheKey,STATE.extinguishers);
  await cacheOfflineValue(cacheKey,STATE.extinguishers);

  if(!navigator.onLine || !FIREBASE_READY || !FIREBASE_DB){
    await enqueueOfflineOperation({
      type:'snapshot',
      collection:'extinguishers',
      items:STATE.extinguishers
    });
    return;
  }

  try{
    if(hasAllUsinasAccess()){
      await syncCollectionData('extinguishers','extinguishers',STATE.extinguishers);
    }else{
      const {doc,setDoc,serverTimestamp} =
        await import('https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js');

      for(const item of STATE.extinguishers){
        if(!item?.id || item.usina!==currentUserUsina()) continue;
        await setDoc(
          doc(FIREBASE_DB,'extinguishers',String(item.id)),
          {...item,usina:currentUserUsina(),updatedAt:serverTimestamp()},
          {merge:true}
        );
      }
    }
  }catch(error){
    console.error('Extinguisher save error:',error);
    await enqueueOfflineOperation({
      type:'snapshot',
      collection:'extinguishers',
      items:STATE.extinguishers
    });
    showToast('Extintores salvos no aparelho e aguardando sincronização.','err');
  }
}

async function persistInspections(){
  if(CURRENT_USER_PROFILE && !can('createInspections')) throw new Error('PERMISSION_DENIED');

  STATE.inspections = STATE.inspections.map(inspectionWithScope);
  const cacheKey = scopedOfflineKey('inspections');
  saveLocalKey(cacheKey,STATE.inspections);
  await cacheOfflineValue(cacheKey,STATE.inspections);

  if(!navigator.onLine || !FIREBASE_READY || !FIREBASE_DB){
    await enqueueOfflineOperation({
      type:'snapshot',
      collection:'inspections',
      items:STATE.inspections
    });
    return;
  }

  try{
    if(hasAllUsinasAccess()){
      await syncCollectionData('inspections','inspections',STATE.inspections);
    }else{
      await upsertScopedInspections(STATE.inspections);
    }
  }catch(error){
    console.error('Inspection save error:',error);
    await enqueueOfflineOperation({
      type:'snapshot',
      collection:'inspections',
      items:STATE.inspections
    });
    showToast('Inspeções salvas no aparelho e aguardando sincronização.','err');
  }
}

/* ============================================================
   HELPERS
============================================================ */

function markPendingSync(record){
  if(!record) return record;
  record._syncStatus = 'pending';
  record._localUpdatedAt = Date.now();
  record._localUserId = AUTH_USER?.uid || '';
  return record;
}

function pendingSyncBadge(record){
  return record?._syncStatus === 'pending'
    ? `<span class="sync-record-badge">Aguardando sincronização</span>`
    : '';
}

function ncStatusMeta(status){
  const normalized = String(status || 'ENCAMINHADA').toUpperCase();
  const map = {
    'ENCAMINHADA': {label:'Encaminhada', cls:'encaminhada'},
    'EM ANDAMENTO': {label:'Em andamento', cls:'andamento'},
    'AGUARDANDO VERIFICAÇÃO': {label:'Aguardando verificação', cls:'verificacao'},
    'RESOLVIDA': {label:'Resolvida', cls:'resolvida'},
    'ENCERRADA': {label:'Encerrada', cls:'encerrada'},
    'CANCELADA': {label:'Cancelada', cls:'cancelada'}
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
function fileToDataUrl(file, maxDim=900){
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
        resolve(canvas.toDataURL('image/jpeg', 0.78));
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
    dashboard:true, extinguishers:true, inspect:true, reports:true,
    settings:true, users:true,
    createExtinguishers:true, editExtinguishers:true, deleteExtinguishers:true,
    createInspections:true, editInspections:true, deleteInspections:true
  },
  INSPETOR:{
    dashboard:true, extinguishers:true, inspect:true, reports:true,
    settings:false, users:false,
    createExtinguishers:true, editExtinguishers:true, deleteExtinguishers:true,
    createInspections:true, editInspections:true, deleteInspections:false
  },
  VISUALIZADOR:{
    dashboard:true, extinguishers:true, inspect:false, reports:true,
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

async function loadCurrentUserProfile(){
  if(!AUTH_USER || !FIREBASE_DB) return null;
  const { doc, getDoc, setDoc, collection, getDocs, query, limit, serverTimestamp } =
    await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js");

  const ref = doc(FIREBASE_DB, "users", AUTH_USER.uid);
  const snap = await getDoc(ref);

  if(snap.exists()){
    const profile = {uid:AUTH_USER.uid, ...snap.data()};
    if(profile.active === false) throw new Error("USER_DISABLED");
    CURRENT_USER_PROFILE = {
      ...profile,
      role:normalizeRole(profile.role),
      usina: normalizeRole(profile.role)==='ADMINISTRADOR' ? 'TODAS' : (profile.usina || ''),
      active:profile.active !== false
    };
    await cacheOfflineValue('lastAuthUser',{
      uid:AUTH_USER.uid,
      email:AUTH_USER.email || '',
      displayName:AUTH_USER.displayName || ''
    });
    await cacheOfflineValue(`profile:${AUTH_USER.uid}`,CURRENT_USER_PROFILE);
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
      active:true,
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
  USERS_CACHE = snap.docs.map(d=>({uid:d.id,...d.data()}))
    .sort((a,b)=>(a.name||a.email||'').localeCompare(b.name||b.email||'','pt-BR'));
  return USERS_CACHE;
}

/* ============================================================
   RENDER SHELL
============================================================ */
const NAV_ITEMS = [
  {id:'dashboard', label:'Painel', icon:'dashboard', permission:'dashboard'},
  {id:'extinguishers', label:'Extintores', icon:'ext', permission:'extinguishers'},
  {id:'inspect', label:'Inspecionar', icon:'scan', permission:'inspect'},
  {id:'reports', label:'Relatórios', icon:'report', permission:'reports'},
  {id:'users', label:'Usuários', icon:'history', permission:'users'},
  {id:'settings', label:'Configurações', icon:'settings', permission:'settings'},
];

function allowedNavItems(){
  return NAV_ITEMS.filter(n=>can(n.permission));
}

function renderShell(){
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
      ${allowedNavItems().map(n=>`<button class="${STATE.view===n.id?'active':''}" data-nav="${n.id}">${ICONS[n.icon]}<span>${n.label}</span></button>`).join('')}
    </div>
  `;
  app.querySelectorAll('[data-nav]').forEach(b=>b.addEventListener('click', ()=>{
    const target = NAV_ITEMS.find(n=>n.id===b.dataset.nav);
    if(!target || !can(target.permission)) return;
    stopScanner?.();
    STATE.view=b.dataset.nav;
    renderShell();
  }));
  document.getElementById('btn-logout')?.addEventListener('click', logout);
  bindMobileProfileMenu();
  bindOfflineEvents();
  renderView();
}

function setHeader(title, sub, actionsHtml=""){
  document.getElementById('page-title').textContent = title;
  document.getElementById('page-sub').textContent = sub;
  document.getElementById('topbar-actions').innerHTML = actionsHtml;
}

function renderView(){
  const nav = NAV_ITEMS.find(n=>n.id===STATE.view);
  if(!nav || !can(nav.permission)){
    STATE.view = defaultViewForRole();
  }
  if(STATE.view==='dashboard') return renderDashboard();
  if(STATE.view==='extinguishers') return renderExtinguishers();
  if(STATE.view==='inspect') return renderInspect();
  if(STATE.view==='reports') return renderReports();
  if(STATE.view==='users') return renderUsers();
  if(STATE.view==='settings') return renderSettings();
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

  content.innerHTML = operationCard + `
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
let extFilters = { usina:'', status:'', operational:'', search:'' };

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
  let list = STATE.extinguishers.slice();
  if(extFilters.usina) list = list.filter(e=>e.usina===extFilters.usina);
  if(extFilters.status) list = list.filter(e=>dateStatus(e.dataRecarga).label===extFilters.status);
  if(extFilters.operational) list = list.filter(e=>(e.statusGeral||'EM CAMPO')===extFilters.operational);
  if(extFilters.search){
    const q = extFilters.search.toLowerCase();
    list = list.filter(e=> (e.numero+e.localizacao+e.usina+e.agente).toLowerCase().includes(q));
  }

  content.innerHTML = `
    <div class="filters">
      <div class="search-box">${ICONS.search}<input type="text" id="f-search" placeholder="Buscar por nº, local, usina..." value="${escapeHtml(extFilters.search)}"></div>
      <select id="f-usina" ${hasAllUsinasAccess()?'':'disabled title="Usina definida pelo perfil do usuário"'}>
        ${hasAllUsinasAccess() ? '<option value="">Todas as usinas</option>' : ''}
        ${usinas.map(s=>`<option ${(!hasAllUsinasAccess() || extFilters.usina===s)?'selected':''}>${escapeHtml(s)}</option>`).join('')}
      </select>
      <select id="f-status"><option value="">Todos os status de recarga</option><option ${extFilters.status==='VÁLIDO'?'selected':''}>VÁLIDO</option><option ${extFilters.status==='ALERTA'?'selected':''}>ALERTA</option><option ${extFilters.status==='VENCIDO'?'selected':''}>VENCIDO</option></select><select id="f-operational"><option value="">Todos os status operacionais</option>${['EM CAMPO','ESTOQUE','ENVIADO PARA RECARGA','DESATIVADO'].map(s=>`<option ${extFilters.operational===s?'selected':''}>${s}</option>`).join('')}</select>
    </div>
    ${list.length===0 ? emptyState('ext','Nenhum extintor encontrado','Ajuste os filtros para localizar um equipamento.',canCreateExtinguisher()?'Cadastrar extintor':null) : `<div class="grid ext-grid">${list.map(cardExt).join('')}</div>`}
  `;
  document.getElementById('empty-cta')?.addEventListener('click', ()=>openExtinguisherModal());
  document.getElementById('f-search').addEventListener('input', e=>{extFilters.search=e.target.value; renderExtinguishers();});
  document.getElementById('f-usina').addEventListener('change', e=>{ if(!hasAllUsinasAccess()) return; extFilters.usina=e.target.value; renderExtinguishers();});
  document.getElementById('f-status').addEventListener('change', e=>{extFilters.status=e.target.value; renderExtinguishers();});
  document.getElementById('f-operational').addEventListener('change', e=>{extFilters.operational=e.target.value; renderExtinguishers();});

  content.querySelectorAll('[data-view-ext]').forEach(b=>b.addEventListener('click', ()=>openExtinguisherDetail(b.dataset.viewExt)));
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

async function deleteExtinguisher(id){
  if(!requirePermission('deleteExtinguishers')) return;

  const ext = STATE.extinguishers.find(e=>String(e.id)===String(id));
  if(!ext) return;
  if(!canDeleteExtinguisher(ext)){
    showToast("Você não pode excluir extintores de outra usina.","err");
    return;
  }

  if(!confirm("Excluir este extintor e todo seu histórico de inspeções?")) return;

  STATE.extinguishers = STATE.extinguishers.filter(e=>String(e.id)!==String(id));
  STATE.inspections = STATE.inspections.filter(i=>String(i.extinguisherId)!==String(id));

  await cacheOfflineValue(scopedOfflineKey('extinguishers'),STATE.extinguishers);
  await cacheOfflineValue(scopedOfflineKey('inspections'),STATE.inspections);
  saveLocalKey(scopedOfflineKey('extinguishers'),STATE.extinguishers);
  saveLocalKey(scopedOfflineKey('inspections'),STATE.inspections);

  if(!navigator.onLine || !FIREBASE_READY || !FIREBASE_DB){
    await enqueueOfflineOperation({
      type:'delete',
      collection:'extinguishers',
      documentId:id
    });
    showToast("Extintor excluído neste aparelho. A nuvem será atualizada quando a conexão voltar.");
    renderExtinguishers();
    return;
  }

  try{
    const {doc,deleteDoc,collection,getDocs,query,where} =
      await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js");

    await deleteDoc(doc(FIREBASE_DB,"extinguishers",String(id)));

    const snap = await getDocs(
      query(collection(FIREBASE_DB,"inspections"),where("extinguisherId","==",id))
    );
    for(const inspectionDoc of snap.docs){
      const data = inspectionDoc.data();
      if(hasAllUsinasAccess() || (data.usina || ext.usina)===currentUserUsina()){
        await deleteDoc(inspectionDoc.ref);
      }
    }

    showToast("Extintor excluído");
  }catch(error){
    console.error(error);
    await enqueueOfflineOperation({
      type:'delete',
      collection:'extinguishers',
      documentId:id
    });
    showToast("Extintor excluído no aparelho e aguardando sincronização.","err");
  }

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
  CHECK_ITEMS.forEach((_,i)=>checklistAnswers[i]='C');

  openModal(`
    <div class="modal">
      <div class="modal-head"><h3>${editing?'Editar extintor':'Novo extintor'}</h3><button class="icon-btn" id="m-close">${ICONS.close}</button></div>
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
    document.querySelectorAll('#cad-checklist .seg').forEach(seg=>{
      seg.querySelectorAll('button').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          seg.querySelectorAll('button').forEach(b=>b.classList.remove('sel'));
          btn.classList.add('sel');
          checklistAnswers[seg.dataset.item] = btn.dataset.v;
        });
      });
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

        STATE.extinguishers.push(e);
        addedExtinguisher = true;

        const resultado = Object.values(checklistAnswers).includes('NC') ? 'NÃO CONFORME' : 'CONFORME';
        newInspection = {
          id: uid('INSP'),
          extinguisherId: e.id,
          usina: e.usina,
          date: document.getElementById('f-data-cad').value || todayISO(),
          responsavel,
          observacoes: document.getElementById('f-obs-cad').value.trim(),
          checklist: CHECK_ITEMS.map((label,i)=>({item:label, valor:checklistAnswers[i]})),
          resultado,
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
      showToast(editing ? "Extintor atualizado" : "Extintor cadastrado");
      renderView();
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
function openExtinguisherDetail(id){
  const e = STATE.extinguishers.find(x=>String(x.id)===String(id));
  if(!e){
    showToast("Você não possui acesso a este extintor.","err");
    return;
  }

  const history = STATE.inspections
    .filter(i=>i.extinguisherId===id)
    .sort((a,b)=>(b.date||'').localeCompare(a.date||''));

  const last = history[0] || null;
  const conformes = history.filter(h=>h.resultado==='CONFORME').length;
  const naoConformes = history.filter(h=>h.resultado==='NÃO CONFORME').length;
  const total = history.length;
  const percConformes = total ? Math.round((conformes/total)*100) : 0;
  const percNC = total ? Math.round((naoConformes/total)*100) : 0;
  const status = operationalStatusMeta(e.statusGeral);

  const nextDate = last?.date ? new Date(last.date + 'T12:00:00') : null;
  if(nextDate) nextDate.setMonth(nextDate.getMonth()+1);

  openModal(`
    <div class="modal ext-full-modal" style="max-width:1240px;">
      <div class="modal-head ext-full-head">
        <div>
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
            <h3 style="margin:0;">Extintor #${escapeHtml(e.numero)}</h3>
            <span class="chip ${status.cls==='em-campo'?'ok':status.cls==='estoque'?'neutral':status.cls==='recarga'?'warn':'bad'}">${status.label}</span>
          </div>
          <div style="font-size:12px;color:var(--muted);margin-top:5px;">
            ${escapeHtml(e.localizacao)} · ${escapeHtml(e.capacidade||'')} · ${escapeHtml(e.agente||'')}
          </div>
        </div>
        <button class="icon-btn" id="m-close">${ICONS.close}</button>
      </div>

      <div class="modal-body">
        <div class="ext-detail-tabs">
          <button class="ext-tab active">${ICONS.history}Inspeções</button>
          <button class="ext-tab" id="tab-edit-ext">${ICONS.edit}Dados do extintor</button>
          <button class="ext-tab" id="tab-print-qr">${ICONS.qr}Etiqueta / QR Code</button>
        </div>

        <div class="ext-detail-grid">
          <aside class="ext-side-column">
            <div class="card ext-summary-card">
              <div style="display:flex;gap:14px;align-items:flex-start;">
                <div class="ext-photo-box">
                  ${e.foto
                    ? `<img src="${e.foto}" alt="Foto do extintor">`
                    : `<div class="ext-photo-placeholder">SEM FOTO</div>`}
                </div>

                <div style="min-width:0;flex:1;">
                  <div class="ext-small-label">Número</div>
                  <div class="ext-main-value">${escapeHtml(e.numero)}</div>

                  <div class="ext-small-label" style="margin-top:10px;">Localização</div>
                  <div class="ext-main-text">${escapeHtml(e.usina)}<br>${escapeHtml(e.localizacao)}</div>

                  <div class="ext-small-label" style="margin-top:10px;">Status operacional</div>
                  <div class="status-op ${status.cls}" style="margin-top:5px;">${status.label}</div>
                </div>
              </div>

              <div class="ext-date-block">
                <div>
                  <div class="ext-small-label">Última inspeção</div>
                  <div class="ext-date-value">${last ? fmtDate(last.date) : 'Não realizada'}</div>
                </div>
                <div>
                  <div class="ext-small-label">Próxima inspeção</div>
                  <div class="ext-date-value">${nextDate ? nextDate.toLocaleDateString('pt-BR') : '—'}</div>
                </div>
              </div>
            </div>

            <div class="card ext-resume-card">
              <div class="section-title" style="margin-bottom:12px;">Resumo das inspeções</div>

              <div class="ext-resume-grid">
                <div class="ext-resume-box">
                  <div class="ext-resume-icon ok">✓</div>
                  <div>
                    <div class="ext-resume-number">${conformes}</div>
                    <div class="ext-resume-label">Conformes</div>
                    <div class="ext-resume-percent">${percConformes}%</div>
                  </div>
                </div>

                <div class="ext-resume-box">
                  <div class="ext-resume-icon warn">!</div>
                  <div>
                    <div class="ext-resume-number">${naoConformes}</div>
                    <div class="ext-resume-label">Não conformes</div>
                    <div class="ext-resume-percent">${percNC}%</div>
                  </div>
                </div>
              </div>

              <button class="btn btn-accent" id="btn-new-history-inspection" style="width:100%;justify-content:center;margin-top:14px;padding:12px;">
                ${ICONS.scan}Nova inspeção
              </button>
            </div>

            <div class="card ext-tip-card">
              <div style="font-size:12px;font-weight:700;margin-bottom:6px;">Dica</div>
              <div style="font-size:11.5px;color:var(--muted);line-height:1.5;">
                Realize inspeções periódicas para manter a segurança e a conformidade do equipamento.
              </div>
            </div>
          </aside>

          <section class="card ext-history-panel">
            <div class="ext-history-header">
              <div>
                <div class="section-title" style="margin:0;">Histórico de inspeções</div>
                <div style="font-size:12px;color:var(--muted);margin-top:4px;">Todas as inspeções realizadas neste extintor.</div>
              </div>
              <div class="chip neutral">${total} registro(s)</div>
            </div>

            ${history.length===0 ? `
              <div class="ext-empty-history">
                Nenhuma inspeção registrada para este extintor.
              </div>
            ` : `
              <div class="ext-timeline">
                ${history.map((h,index)=>`
                  <div class="ext-history-row">
                    <div class="ext-timeline-marker ${h.resultado==='CONFORME'?'ok':'bad'}"></div>

                    <div class="ext-history-date">
                      <div class="ext-history-date-main">${fmtDate(h.date)}</div>
                      <div class="ext-history-date-sub">Registro ${history.length-index}</div>
                    </div>

                    <div class="ext-history-result">
                      <span class="chip ${h.resultado==='CONFORME'?'ok':'bad'}">${escapeHtml(h.resultado)}</span>
                      <div class="ext-history-note">${escapeHtml(h.observacoes || (h.resultado==='CONFORME'?'Todos os itens conformes':'Inspeção com não conformidade'))}</div>
                      ${h.resultado==='NÃO CONFORME' ? ncTreatmentSummary(h) : ''}
                    </div>

                    <div class="ext-history-responsible">
                      <div class="ext-small-label">Responsável</div>
                      <div style="font-weight:700;">${escapeHtml(h.responsavel||'—')}</div>
                    </div>

                    <div class="ext-history-actions">
                      <button class="btn btn-sm" data-view-inspection="${h.id}">${ICONS.search}Visualizar</button>
                      ${can('editInspections') ? `<button class="btn btn-sm btn-primary" data-edit-inspection="${h.id}">${ICONS.edit}Editar</button>` : ''}
                      ${can('deleteInspections') ? `<button class="btn btn-sm btn-danger" data-delete-inspection="${h.id}">${ICONS.trash}Excluir</button>` : ''}
                    </div>
                  </div>
                `).join('')}
              </div>
            `}
          </section>
        </div>
      </div>
    </div>
  `);

  document.getElementById('m-close').addEventListener('click', closeModal);
  document.getElementById('btn-new-history-inspection')?.addEventListener('click', ()=>{
    if(!requirePermission('createInspections')) return;
    closeModal();
    openInspectionModal(e.id);
  });
  document.getElementById('tab-edit-ext').addEventListener('click', ()=>{ closeModal(); openExtinguisherModal(e.id); });
  document.getElementById('tab-print-qr').addEventListener('click', ()=>printSingleLabel(e));

  document.querySelectorAll('[data-view-inspection]').forEach(btn=>{
    btn.addEventListener('click', ()=>openInspectionView(btn.dataset.viewInspection));
  });

  document.querySelectorAll('[data-edit-inspection]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      if(!requirePermission('editInspections')) return;
      openInspectionModal(e.id, btn.dataset.editInspection);
    });
  });

  document.querySelectorAll('[data-delete-inspection]').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      if(!requirePermission('deleteInspections')) return;
      const inspectionId = btn.dataset.deleteInspection;
      const inspection = STATE.inspections.find(i=>i.id===inspectionId);
      if(!inspection) return;

      const ok = confirm(`Excluir definitivamente a inspeção de ${fmtDate(inspection.date)}?`);
      if(!ok) return;

      STATE.inspections = STATE.inspections.filter(i=>i.id!==inspectionId);
      await persistInspections();
      showToast(navigator.onLine ? "Inspeção excluída" : "Inspeção excluída no aparelho e aguardando sincronização","ok");
      openExtinguisherDetail(e.id);
    });
  });
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

        ${!isConforme ? (()=>{
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
                  <div class="nc-view-sub">Registro do encaminhamento e acompanhamento da ocorrência.</div>
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
  document.getElementById('m-back').addEventListener('click', ()=>openExtinguisherDetail(inspection.extinguisherId));
  document.getElementById('m-edit-analysis').addEventListener('click', ()=>openInspectionModal(inspection.extinguisherId, inspection.id));
  document.getElementById('m-delete-analysis')?.addEventListener('click', async ()=>{
    if(!requirePermission('deleteInspections')) return;
    const ok = confirm(`Excluir definitivamente a inspeção de ${fmtDate(inspection.date)}?`);
    if(!ok) return;

    STATE.inspections = STATE.inspections.filter(i=>i.id!==inspection.id);
    await persistInspections();
    showToast(navigator.onLine ? "Inspeção excluída" : "Inspeção excluída no aparelho e aguardando sincronização","ok");
    openExtinguisherDetail(inspection.extinguisherId);
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
      const historico = Array.isArray(existingNc?.historico)
        ? existingNc.historico.map(item=>({...item}))
        : [];

      if(!existingNc){
        historico.push({
          tipo:'DETECCAO',
          status:'NC DETECTADA',
          data:nowIso,
          usuario:actor,
          perfil:currentRole()
        });
      }

      if(!existingNc || previousStatus !== statusNc){
        historico.push({
          tipo:'STATUS',
          status:statusNc,
          data:nowIso,
          usuario:actor,
          perfil:currentRole()
        });
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
      <div class="company">${escapeHtml(STATE.config.companyName)} · ${escapeHtml(e.usina)}</div>
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
      const historico = Array.isArray(existingNc?.historico)
        ? existingNc.historico.map(item=>({...item}))
        : [];

      if(!existingNc){
        historico.push({
          tipo:'DETECCAO',
          status:'NC DETECTADA',
          data:nowIso,
          usuario:actor,
          perfil:currentRole()
        });
      }

      if(!existingNc || previousStatus !== statusNc){
        historico.push({
          tipo:'STATUS',
          status:statusNc,
          data:nowIso,
          usuario:actor,
          perfil:currentRole()
        });
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
      <div class="company">${escapeHtml(STATE.config.companyName)} · ${escapeHtml(e.usina)}</div>
    </div>
  </div>`;
  new QRCode(document.getElementById(qrId), {text:extinguisherDirectUrl(e.id), width:160, height:160});
  setTimeout(()=>window.print(), 200);
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
              Relatório executivo em A4 paisagem, com indicadores, filtros utilizados, tabela operacional, legendas, assinaturas e páginas numeradas.
            </div>
          </div>
        </div>

        <div class="report-info">
          O relatório incluirá os dados dos extintores e das inspeções conforme os filtros selecionados abaixo.
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
            Cada etiqueta é gerada com o QR Code correspondente ao extintor cadastrado no sistema.
          </div>

          <div class="report-actions">
            <button class="btn" id="btn-print-all-qr" style="width:100%;justify-content:center;">
              Imprimir todas as etiquetas
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
          O PDF é gerado em A4 paisagem, pronto para impressão, auditorias e compartilhamento.
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

  document.getElementById('btn-print-all-qr')?.addEventListener('click', printAllLabels);
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
  const {jsPDF} = window.jspdf;
  const doc = new jsPDF({unit:'pt', format:'a4'});
  const cfg = STATE.config;
  if(cfg.logo){ try{ doc.addImage(cfg.logo,'JPEG',40,30,40,40); }catch(err){} }
  doc.setFont('helvetica','bold'); doc.setFontSize(14);
  doc.text(cfg.companyName || 'Empresa', 92, 48);
  doc.setFontSize(11); doc.setFont('helvetica','normal');
  doc.text(`Ficha do extintor #${e.numero}`, 92, 64);

  let y = 100;
  if(e.foto){ try{ doc.addImage(e.foto,'JPEG',40,y,140,140); }catch(err){} }
  doc.setFontSize(10);
  const info = [
    ['Localização', e.localizacao], ['Usina', e.usina], ['Agente', e.agente],
    ['Capacidade', e.capacidade||'—'], ['Situação', e.statusGeral],
    ['Vencimento recarga', fmtDate(e.dataRecarga)+" — "+dateStatus(e.dataRecarga).label],
    ['Vencimento TH', fmtDate(e.dataTH)+" — "+dateStatus(e.dataTH,false).label],
  ];
  let ty = y+8;
  info.forEach(([k,v])=>{ doc.setFont('helvetica','bold'); doc.text(k+':', 200, ty); doc.setFont('helvetica','normal'); doc.text(String(v), 300, ty); ty+=18; });

  const history = STATE.inspections.filter(i=>i.extinguisherId===e.id).sort((a,b)=>b.date.localeCompare(a.date));
  doc.autoTable({
    startY: y+150,
    head:[['Data','Resultado','Responsável','Observações']],
    body: history.length? history.map(h=>[fmtDate(h.date), h.resultado, h.responsavel, h.observacoes||'—']) : [['—','—','—','Nenhuma inspeção registrada']],
    styles:{fontSize:8.5},
    headStyles:{fillColor:[224,67,42], textColor:255},
    margin:{left:40,right:40},
  });
  doc.save(`extintor-${e.numero}.pdf`);
  showToast("PDF do extintor gerado");
}

function printAllLabels(){
  if(STATE.extinguishers.length===0){ showToast("Nenhum extintor cadastrado","err"); return; }
  const holder = document.getElementById('print-area');
  holder.innerHTML = `<div class="print-only" style="display:flex;flex-wrap:wrap;gap:16px;padding:30px;">
    ${STATE.extinguishers.map(e=>`
      <div class="qr-label-preview" style="width:150px;">
        <div class="top-stripe"></div>
        <div id="qr-all-${e.id}" style="display:flex;justify-content:center;"></div>
        <b style="font-size:11px;">#${escapeHtml(e.numero)} — ${escapeHtml(e.localizacao)}</b>
        <div class="company" style="font-size:8px;">${escapeHtml(STATE.config.companyName)}</div>
      </div>`).join('')}
  </div>`;
  STATE.extinguishers.forEach(e=>{ new QRCode(document.getElementById('qr-all-'+e.id), {text:extinguisherDirectUrl(e.id), width:100, height:100}); });
  setTimeout(()=>window.print(), 250);
}


/* ============================================================
   USUÁRIOS
============================================================ */
async function renderUsers(){
  if(!requirePermission('users')) return;
  setHeader("Usuários","Gerencie perfis e permissões de acesso",
    `<button class="btn btn-accent" id="btn-new-user">${ICONS.plus}Novo usuário</button>`);
  const content = document.getElementById('content');
  content.innerHTML = `<div class="empty" style="padding:50px 20px;"><h4>Carregando usuários...</h4></div>`;
  document.getElementById('btn-new-user')?.addEventListener('click', ()=>openUserModal());

  try{
    const users = await loadUsers();
    content.innerHTML = `
      <div class="permission-grid" style="margin-top:0;margin-bottom:18px;">
        <div class="permission-card">
          <b>Administrador</b>
          <p>Acesso completo, incluindo cadastro de extintores, configurações e criação, edição, bloqueio ou exclusão de usuários.</p>
        </div>
        <div class="permission-card">
          <b>Inspetor</b>
          <p>Consulta, cadastra, edita e exclui extintores somente da própria usina, realiza inspeções e gera relatórios. Não acessa usuários ou configurações.</p>
        </div>
        <div class="permission-card">
          <b>Visualizador</b>
          <p>Acesso ao Painel, consulta dos extintores e geração de relatórios. Não pode cadastrar, editar ou excluir equipamentos.</p>
        </div>
      </div>

      ${users.length ? `<div class="users-grid">${users.map(userCard).join('')}</div>` :
        `<div class="empty"><h4>Nenhum usuário cadastrado</h4><p>Cadastre o primeiro usuário do sistema.</p></div>`}
    `;

    content.querySelectorAll('[data-edit-user]').forEach(btn=>{
      btn.addEventListener('click', ()=>openUserModal(btn.dataset.editUser));
    });
    content.querySelectorAll('[data-toggle-user]').forEach(btn=>{
      btn.addEventListener('click', ()=>toggleUserStatus(btn.dataset.toggleUser));
    });
    content.querySelectorAll('[data-delete-user]').forEach(btn=>{
      btn.addEventListener('click', ()=>deleteManagedUser(btn.dataset.deleteUser));
    });
  }catch(e){
    console.error(e);
    content.innerHTML = `<div class="empty"><h4>Não foi possível carregar os usuários</h4><p>Verifique as regras do Firestore.</p></div>`;
  }
}

function userCard(u){
  const role = normalizeRole(u.role);
  const active = u.active !== false;
  const isSelf = u.uid === AUTH_USER?.uid;
  return `
    <div class="user-card">
      <div class="user-card-head">
        <div>
          <div class="user-name">${escapeHtml(u.name || 'Usuário')}</div>
          <div class="user-email">${escapeHtml(u.email || '')}</div>
        </div>
        <span class="user-status-pill ${active?'active':'inactive'}">${active?'Ativo':'Inativo'}</span>
      </div>
      <div class="user-meta">
        <span class="user-role-pill ${roleClass(role)}">${escapeHtml(ROLE_LABELS[role])}</span>
        <span class="chip neutral">${escapeHtml(role==='ADMINISTRADOR' ? 'Todas as usinas' : (u.usina || 'Usina não definida'))}</span>
        ${isSelf ? `<span class="chip neutral">Sua conta</span>` : ''}
      </div>
      <div class="user-actions">
        <button class="btn btn-sm" data-edit-user="${u.uid}">Editar perfil</button>
        <button class="btn btn-sm ${active?'btn-danger':''}" data-toggle-user="${u.uid}" ${isSelf?'disabled title="Você não pode desativar sua própria conta"':''}>
          ${active?'Desativar':'Ativar'}
        </button>
        <button class="btn btn-sm btn-danger" data-delete-user="${u.uid}" ${isSelf?'disabled title="Você não pode excluir sua própria conta"':''}>
          Excluir
        </button>
      </div>
    </div>
  `;
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
        active:true,
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
    const admins = USERS_CACHE.filter(u=>u.active!==false && u.role==='ADMINISTRADOR');
    if(admins.length<=1) throw new Error("LAST_ADMIN");
  }
  const { doc, updateDoc, serverTimestamp } =
    await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js");
  await updateDoc(doc(FIREBASE_DB,"users",uid),{
    name:data.name,
    role:normalizeRole(data.role),
    usina: normalizeRole(data.role)==='ADMINISTRADOR' ? 'TODAS' : data.usina,
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
  const u = USERS_CACHE.find(x=>x.uid===uid);
  if(!u || uid===AUTH_USER.uid) return;
  if(u.role==='ADMINISTRADOR' && u.active!==false){
    const activeAdmins = USERS_CACHE.filter(x=>x.role==='ADMINISTRADOR' && x.active!==false);
    if(activeAdmins.length<=1){ showToast("O sistema precisa manter pelo menos um administrador ativo.","err"); return; }
  }
  const { doc, updateDoc, serverTimestamp } =
    await import("https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js");
  await updateDoc(doc(FIREBASE_DB,"users",uid),{
    active:u.active===false,updatedAt:serverTimestamp()
  });
  showToast(u.active===false ? "Usuário ativado" : "Usuário desativado");
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
    const activeAdmins = USERS_CACHE.filter(x=>x.role==='ADMINISTRADOR' && x.active!==false);
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
          <div class="login-v2-copy">Entre com as credenciais cadastradas pelo Administrador do Sistema.</div>

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

      const cred = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
      AUTH_USER = cred.user;
      await loadCurrentUserProfile();
      STATE.view = defaultViewForRole();
      await loadAll();
      validateCurrentUserScope();
      applyUserDataScope();
      renderShell();
      openRequestedExtinguisherFromUrl();
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
      await loadCurrentUserProfile();
      STATE.view = defaultViewForRole();
      await loadAll();
      validateCurrentUserScope();
      applyUserDataScope();
      renderShell();
      setTimeout(()=>processOfflineQueue(false),700);
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

if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('sw.js').catch(()=>{ /* offline caching is optional */ });
  });
}

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
            <div style="font-size:11px;color:var(--muted);margin-top:4px;">PWA Enterprise v3.2.1 · Gestão de NC</div>
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