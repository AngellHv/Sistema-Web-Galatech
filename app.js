/* GALATECH · Prototipo frontend. Los datos se guardan solo en este navegador. */
(() => {
  const icons = {
    spark: '<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z"/><path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    laptop: '<rect x="4" y="4" width="16" height="13" rx="2"/><path d="M2 20h20l-2-3H4l-2 3Z"/>',
    phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.6 9a2.5 2.5 0 1 1 4.5 1.5c-1.1 1.1-2.1 1.4-2.1 3M12 17h.01"/>',
    home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1V10Z"/>',
    grid: '<rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="5" rx="1.5"/><rect x="13" y="10" width="8" height="11" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/>',
    plus: '<path d="M12 5v14m-7-7h14"/>',
    list: '<path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/>',
    logout: '<path d="M10 17l5-5-5-5m5 5H3"/><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/>',
    eye: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    people: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    close: '<path d="m18 6-12 12M6 6l12 12"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
  };
  const svg = (name, cls = 'icon') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.spark}</svg>`;
  const STATUS = ['Recibido', 'En diagnóstico', 'En reparación', 'Reparación terminada', 'Entregado'];
  const seed = [
    { code: 'RT-000124', client: 'Lucía Mendoza', phone: '999 421 880', email: 'lucia@email.com', type: 'Laptop', brand: 'Lenovo', model: 'IdeaPad 3', problem: 'La batería no carga y el equipo se apaga.', status: 'En reparación', diagnosis: 'Se identificó desgaste en batería. Se está realizando el reemplazo.', cost: 180, created: '2026-10-12T10:30:00', history: [{status:'Recibido',date:'2026-10-12T10:30:00'},{status:'En diagnóstico',date:'2026-10-12T14:15:00'},{status:'En reparación',date:'2026-10-13T09:20:00'}] },
    { code: 'RT-000123', client: 'Andrés Salazar', phone: '987 221 604', email: 'andres@email.com', type: 'Celular', brand: 'Samsung', model: 'Galaxy A54', problem: 'Pantalla con líneas y respuesta táctil irregular.', status: 'En diagnóstico', diagnosis: 'Evaluación de pantalla en curso.', cost: null, created: '2026-10-13T11:00:00', history: [{status:'Recibido',date:'2026-10-13T11:00:00'},{status:'En diagnóstico',date:'2026-10-13T15:35:00'}] },
    { code: 'RT-000122', client: 'Mariana Rojas', phone: '965 804 118', email: '', type: 'PC de escritorio', brand: 'HP', model: 'Pavilion TG01', problem: 'El equipo no enciende.', status: 'Recibido', diagnosis: '', cost: null, created: '2026-10-14T08:45:00', history: [{status:'Recibido',date:'2026-10-14T08:45:00'}] },
    { code: 'RT-000121', client: 'Diego Paredes', phone: '978 560 342', email: 'diego@email.com', type: 'Laptop', brand: 'ASUS', model: 'VivoBook 15', problem: 'Teclado con teclas que no responden.', status: 'Reparación terminada', diagnosis: 'Se reemplazó el teclado y se validó su funcionamiento.', cost: 145, created: '2026-10-09T09:10:00', history: [{status:'Recibido',date:'2026-10-09T09:10:00'},{status:'En diagnóstico',date:'2026-10-09T12:10:00'},{status:'En reparación',date:'2026-10-10T09:00:00'},{status:'Reparación terminada',date:'2026-10-12T16:30:00'}] },
  ];
  let repairs;
  try { repairs = JSON.parse(localStorage.getItem('galatech_repairs')) || seed; } catch { repairs = seed; }
  let clients = [
    {name:'Lucía Mendoza',phone:'999 421 880',email:'lucia@email.com'}, {name:'Andrés Salazar',phone:'987 221 604',email:'andres@email.com'},
    {name:'Mariana Rojas',phone:'965 804 118',email:''}, {name:'Diego Paredes',phone:'978 560 342',email:'diego@email.com'}
  ];
  let state = { view: 'home', loggedIn: sessionStorage.getItem('galatech_session') === 'demo', filter: 'Todos', search: '', selected: null, lookup: '', customerMode: 'search', foundClient: null, mobileNav: false, returnView: 'home' };
  const app = document.querySelector('#app');
  const save = () => localStorage.setItem('galatech_repairs', JSON.stringify(repairs));
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const money = v => v == null || v === '' ? 'Por definir' : `S/ ${Number(v).toFixed(2)}`;
  const dateFmt = v => new Intl.DateTimeFormat('es-PE',{day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}).format(new Date(v));
  const statusClass = s => ({'Recibido':'status-recibido','En diagnóstico':'status-diagnostico','En reparación':'status-reparacion','Reparación terminada':'status-terminada','Entregado':'status-entregado'}[s] || '');
  const pill = s => `<span class="status-pill ${statusClass(s)}">${esc(s)}</span>`;
  const brand = `<div class="brand brand-wordmark"><span role="img" aria-label="GALATECH" title="GALATECH">GALATECH</span></div>`;
  const toast = (message, type='success') => { const n=document.createElement('div'); n.className=`toast ${type}`; n.innerHTML=`${svg(type==='success'?'check':'help')}<span>${esc(message)}</span>`; document.querySelector('#toast-region').append(n); setTimeout(()=>n.remove(),3600); };
  const go = view => { state.view=view; state.mobileNav=false; if(!['result','history'].includes(view)) state.selected=null; render(); window.scrollTo(0,0); };
  const statusIndex = s => Math.max(0, STATUS.indexOf(s));

  function homeView() {
    return `<header class="public-header"><div class="public-nav-title">Inicio / Consulta</div><div class="header-actions"><button class="quiet-link" data-nav="login">Iniciar sesión técnico</button></div></header>
      <main class="wireframe-page"><section class="wireframe-card home-card" id="consulta"><div class="card-brand">${brand}</div><h1>Consulta tu reparación</h1><p>Ingresa el código de seguimiento que te entregaron.</p><form class="search-form" id="tracking-form"><label class="sr-only" for="tracking-code">Código de seguimiento</label><div class="input-wrap">${svg('search')}<input class="field" id="tracking-code" name="code" placeholder="Ej. RT-000123" autocomplete="off" required /></div><button class="btn" type="submit">Consultar</button></form><div id="home-error" class="form-error" role="alert"></div><button class="text-btn card-link" data-nav="login">¿Eres técnico? Iniciar sesión</button></section></main>`;
  }

  function resultView() {
    const r=state.selected; if(!r) return homeView();
    return `<header class="public-header"><div class="public-nav-title">Resultado de reparación</div></header><main class="wireframe-page"><section class="wireframe-card tracking-card"><div class="card-brand">${brand}</div><h1>Estado de tu reparación</h1><div class="wire-detail"><span>Código</span><strong>${esc(r.code)}</strong></div><div class="wire-detail"><span>Equipo</span><strong>${esc(r.brand)} ${esc(r.model||r.type)}</strong></div><div class="wire-detail"><span>Estado actual</span><strong>${pill(r.status)}</strong></div><div class="wire-detail"><span>Diagnóstico</span><strong>${esc(r.diagnosis||'En proceso de revisión.')}</strong></div><div class="wire-detail"><span>Costo</span><strong>${money(r.cost)}</strong></div><button class="btn btn-block history-button" data-show-history="${esc(r.code)}">Ver historial</button><button class="text-btn card-link" data-nav="home">Realizar otra consulta</button></section></main>`;
  }

  function authView() {
    return `<header class="public-header"><div class="public-nav-title">Inicio / Login técnico</div></header><main class="wireframe-page"><section class="wireframe-card login-card"><div class="card-brand">${brand}</div><h1>Acceso para técnicos</h1><form class="auth-form" id="login-form"><div class="form-group"><label for="username">Usuario</label><input id="username" name="username" class="field" placeholder="Ingresa tu usuario" autocomplete="username" required /></div><div class="form-group"><label for="password">Contraseña</label><div class="password-wrap"><input id="password" name="password" type="password" class="field" placeholder="Ingresa tu contraseña" autocomplete="current-password" required /><button type="button" class="password-toggle" data-toggle-password aria-label="Mostrar contraseña">${svg('eye')}</button></div></div><div class="form-error" id="login-error" role="alert"></div><button class="btn btn-block" type="submit">Iniciar sesión</button><button type="button" class="text-btn auth-back" data-nav="home">Volver a consulta de cliente</button></form></section></main>`;
  }

  function sidebar() {
    const links=[['dashboard','grid','Panel principal'],['repairs','list','Reparaciones'],['new','plus','Registrar reparación']];
    return `<div class="sidebar-backdrop ${state.mobileNav?'open':''}" data-close-nav></div><aside class="sidebar ${state.mobileNav?'open':''}">${brand}<div class="nav-label">Espacio de trabajo</div>${links.map(([v,i,l])=>`<button class="nav-link ${state.view===v?'active':''}" data-nav="${v}">${svg(i)}${l}</button>`).join('')}<div class="sidebar-bottom"><div class="user-card"><div class="avatar">MA</div><div class="user-meta"><strong>Manuel técnico</strong><span>Personal técnico</span></div><button class="logout-btn" title="Cerrar sesión" data-logout>${svg('logout')}</button></div></div></aside>`;
  }

  function tableRows(items) {
    if(!items.length) return `<tr><td colspan="6" class="table-empty"><div class="empty-icon">${svg('file')}</div>${state.search?'No encontramos reparaciones con esa búsqueda.':'Todavía no hay reparaciones registradas.'}</td></tr>`;
    return items.map(r=>`<tr><td class="code-cell">${esc(r.code)}</td><td><div class="equipment-cell"><strong>${esc(r.brand)} ${esc(r.model)}</strong><span>${esc(r.type)}</span></div></td><td>${esc(r.client)}</td><td>${pill(r.status)}</td><td>${new Intl.DateTimeFormat('es-PE',{day:'2-digit',month:'short'}).format(new Date(r.created))}</td><td><button class="row-btn" data-manage="${esc(r.code)}">Gestionar</button></td></tr>`).join('');
  }

  function dashboardView() {
    const active=repairs.filter(r=>r.status!=='Entregado').length;
    const inProgress=repairs.filter(r=>r.status==='En reparación').length;
    const ready=repairs.filter(r=>r.status==='Reparación terminada').length;
    const today=repairs.filter(r=>new Date(r.created).toDateString()===new Date().toDateString()).length;
    const filtered=repairs.filter(r=>(state.filter==='Todos'||r.status===state.filter)&&`${r.code} ${r.brand} ${r.model} ${r.client}`.toLowerCase().includes(state.search.toLowerCase()));
    return `<div class="page-heading"><div><h1>Panel principal</h1><p>Hola, Manuel. Aquí tienes el resumen de hoy.</p></div><button class="btn" data-nav="new">${svg('plus')} Registrar reparación</button></div>
      <div class="stats-grid"><article class="stat-card"><div class="stat-top"><span>Servicios activos</span><span class="stat-icon">${svg('list')}</span></div><div class="stat-num">${active}</div><div class="stat-sub">Requieren seguimiento</div></article><article class="stat-card"><div class="stat-top"><span>En reparación</span><span class="stat-icon">${svg('laptop')}</span></div><div class="stat-num">${inProgress}</div><div class="stat-sub">Trabajo en curso</div></article><article class="stat-card"><div class="stat-top"><span>Listos para entregar</span><span class="stat-icon">${svg('check')}</span></div><div class="stat-num">${ready}</div><div class="stat-sub">Esperando al cliente</div></article><article class="stat-card"><div class="stat-top"><span>Recibidos hoy</span><span class="stat-icon">${svg('calendar')}</span></div><div class="stat-num">${today}</div><div class="stat-sub">Nuevos equipos</div></article></div>
      <section class="panel"><div class="panel-head"><h2>Reparaciones recientes</h2><div class="filter-row"><input class="field" id="table-search" placeholder="Buscar código, equipo o cliente" value="${esc(state.search)}" /><select class="field" id="status-filter" aria-label="Filtrar por estado"><option>Todos</option>${STATUS.map(s=>`<option ${state.filter===s?'selected':''}>${esc(s)}</option>`).join('')}</select></div></div><div class="table-wrap"><table><thead><tr><th>Código</th><th>Equipo</th><th>Cliente</th><th>Estado</th><th>Ingreso</th><th></th></tr></thead><tbody>${tableRows(filtered)}</tbody></table></div></section>`;
  }

  function repairsView() { return `<div class="page-heading"><div><h1>Reparaciones</h1><p>Consulta y gestiona los servicios técnicos registrados.</p></div><button class="btn" data-nav="new">${svg('plus')} Registrar reparación</button></div>${dashboardView().match(/<section class="panel">[\s\S]*<\/section>/)?.[0] || ''}`; }

  function newRepairView() {
    const client=state.foundClient;
    return `<form id="repair-form" class="wireframe-card repair-card"><div class="card-brand">${brand}</div><h1 class="wire-card-title">Registrar Nueva Reparación</h1><div class="wire-repair-grid"><section><h2>Datos del cliente</h2>${state.customerMode==='search'?`${client?`<div class="selected-client">${svg('check')} <span><strong>${esc(client.name)}</strong><br>${esc(client.phone)}${client.email?` · ${esc(client.email)}`:''}</span></div><button type="button" class="text-btn" data-client-mode="search">Cambiar cliente</button>`:`<label class="wire-field-label" for="client-search">Buscar cliente (teléfono o correo)</label><input class="field" id="client-search" placeholder="Ej. 987654321 o cliente@email.com" value="${esc(state.clientQuery||'')}" /><button type="button" class="btn client-search-button" data-find-client>Buscar cliente</button><div class="form-error customer-found" id="client-result">${state.clientError?esc(state.clientError):''}</div><div class="or-divider"><span>O</span></div><button type="button" class="btn btn-outline btn-block new-client-btn" data-client-mode="new">+ Registrar nuevo cliente</button>`}`:`<div class="form-group"><label for="client-name">Nombre completo *</label><input class="field" id="client-name" name="clientName" maxlength="100" required /></div><div class="form-group"><label for="client-phone">Teléfono *</label><input class="field" id="client-phone" name="clientPhone" maxlength="20" required /></div><div class="form-group"><label for="client-email">Correo electrónico</label><input class="field" id="client-email" name="clientEmail" type="email" maxlength="100" /></div><button type="button" class="btn btn-outline btn-block new-client-btn" data-client-mode="search">Buscar cliente existente</button>`}</section><section><h2>Datos del equipo</h2><div class="form-group"><label for="device-type">Tipo de equipo</label><select class="field" id="device-type" name="type" required><option value="">Seleccionar tipo de equipo</option><option>Laptop</option><option>PC</option><option>Celular</option><option>Tablet</option><option>Otro</option></select></div><div class="form-group"><label for="device-brand">Marca</label><input class="field" id="device-brand" name="brand" maxlength="50" placeholder="Ingresar marca" required /></div><div class="form-group"><label for="device-model">Modelo</label><input class="field" id="device-model" name="model" maxlength="50" placeholder="Ingresar modelo" /></div><div class="form-group"><label for="device-problem">Problema reportado</label><textarea class="field" id="device-problem" name="problem" maxlength="255" placeholder="Describa el problema aquí..." required></textarea></div></section></div><div class="wire-form-actions"><button class="btn register-submit" type="submit">Registrar reparación</button><button type="button" class="text-btn" data-nav="dashboard">Volver al panel</button></div></form>`;
  }

  function manageView() {
    const r=repairs.find(x=>x.code===state.selected); if(!r) return repairsView();
    return `<form id="manage-form" data-code="${esc(r.code)}" class="wireframe-card manage-card"><div class="card-brand">${brand}</div><h1 class="wire-card-title">Gestionar Reparación</h1><h2 class="manage-section-title">Datos de la reparación</h2><div class="manage-summary"><div><span>Código:</span><strong>${esc(r.code)}</strong></div><div><span>Cliente:</span><strong>${esc(r.client)}</strong></div><div><span>Equipo:</span><strong>${esc(r.brand)} ${esc(r.model||r.type)}</strong></div><div><span>Problema:</span><strong>${esc(r.problem)}</strong></div></div><div class="form-group manage-status-group"><label for="manage-status">Estado actual</label><select class="field" id="manage-status" name="status" required>${STATUS.map(s=>`<option ${s===r.status?'selected':''}>${esc(s)}</option>`).join('')}</select></div><div class="form-group"><label for="manage-diagnosis">Diagnóstico</label><textarea id="manage-diagnosis" class="field" name="diagnosis" maxlength="2000" placeholder="Ingresar diagnóstico...">${esc(r.diagnosis)}</textarea></div><div class="form-group"><label for="manage-cost">Costo</label><input id="manage-cost" class="field" name="cost" type="number" min="0" step="0.01" value="${r.cost ?? ''}" placeholder="S/ 0.00" /></div><button class="btn manage-save" type="submit">Guardar cambios</button><h2 class="manage-section-title history-title">Historial de estados</h2><div class="manage-history">${r.history.map(h=>`<div class="manage-history-item"><i></i><div><strong>${esc(h.status)}</strong><small>${dateFmt(h.date)}</small></div></div>`).join('')}</div><button type="button" class="text-btn manage-back" data-nav="dashboard">Volver al panel</button></form>`;
  }

  function appView() {
    const labels={dashboard:'Panel principal',repairs:'Reparaciones',new:'Registrar reparación',manage:'Gestionar reparación'};
    const body={dashboard:dashboardView,repairs:repairsView,new:newRepairView,manage:manageView}[state.view]?.()||dashboardView();
    return `<div class="app-shell view-${state.view}">${sidebar()}<main class="main-area"><header class="topbar"><div class="topbar-left"><button class="mobile-menu" data-menu aria-label="Abrir menú">${svg('menu')}</button><div class="breadcrumb">${state.view==='new'?'Registrar reparación':state.view==='manage'?'Gestionar reparación':labels[state.view]==='Panel principal'?'Panel del técnico':`Panel técnico / ${labels[state.view]||''}`}</div></div><div class="topbar-right"><button class="wire-nav" data-nav="dashboard">Panel</button><button class="wire-nav" data-nav="repairs">Reparaciones</button><button class="wire-nav logout-wire" data-logout>Cerrar sesión</button></div></header><div class="content">${body}</div></main></div>`;
  }

  function render() {
    if(state.view==='login' && state.loggedIn) state.view='dashboard';
    const publicViews=['home','result','history'];
    if(!state.loggedIn && !publicViews.includes(state.view) && state.view!=='login') state.view='login';
    if(state.loggedIn && ['home','result','history'].includes(state.view)) { /* Public tracking remains available after technician sign-in. */ }
    if(state.view==='home') app.innerHTML=homeView();
    else if(state.view==='result') app.innerHTML=resultView();
    else if(state.view==='history') app.innerHTML=historyView();
    else if(state.view==='login') app.innerHTML=authView();
    else app.innerHTML=appView();
  }

  function historyView() {
    const r=state.selected; if(!r) { state.view='home'; return homeView(); }
    return `<header class="public-header"><div class="public-nav-title">Historial de reparación</div></header><main class="wireframe-page"><section class="wireframe-card tracking-card history-card"><div class="card-brand">${brand}</div><h1>Historial de estados</h1><div class="code-subtitle">Código ${esc(r.code)}</div><div class="wire-history">${r.history.map(h=>`<div class="wire-history-item"><span class="wire-history-dot"></span><div><strong>${esc(h.status)}</strong><small>${dateFmt(h.date)}</small></div></div>`).join('')}</div><button class="btn btn-block history-button" data-nav="result">Volver</button></section></main>`;
  }

  function lookup(code) {
    const normalized=code.trim().toUpperCase();
    if(!/^RT-\d{6}$/.test(normalized)) return {error:'Revisa el formato del código. Debe tener el formato RT-000123.'};
    const found=repairs.find(r=>r.code===normalized); return found?{repair:found}:{error:'No encontramos una reparación con ese código. Verifica que esté escrito correctamente.'};
  }
  function showRepair(code) { const result=lookup(code); if(result.error){toast(result.error,'error');return false;}state.selected=result.repair;state.view='result';render();window.scrollTo(0,0);return true; }
  function findClient() {
    const q=(document.querySelector('#client-search')?.value||'').trim().toLowerCase(); state.clientQuery=q;
    if(!q){state.clientError='Ingresa un teléfono o correo para buscar.';render();return;}
    const c=clients.find(x=>x.phone.replace(/\s/g,'').includes(q.replace(/\s/g,''))||(x.email&&x.email.toLowerCase()===q));
    if(c){state.foundClient=c;state.clientError='';}else{state.foundClient=null;state.clientError='No encontramos este cliente. Puedes registrar uno nuevo.';state.customerMode='new';}
    render();
  }

  document.addEventListener('click', e => {
    const nav=e.target.closest('[data-nav]'); if(nav){const v=nav.dataset.nav;if(v==='result'&&!state.selected)v='home';if(v==='login'&&state.loggedIn)v='dashboard';go(v);return;}
    if(e.target.closest('[data-focus-search]')){document.querySelector('#tracking-code')?.focus();document.querySelector('#consulta')?.scrollIntoView({behavior:'smooth'});return;}
    if(e.target.closest('[data-menu]')){state.mobileNav=true;document.querySelector('.sidebar')?.classList.add('open');document.querySelector('.sidebar-backdrop')?.classList.add('open');return;}
    if(e.target.closest('[data-close-nav]')){state.mobileNav=false;document.querySelector('.sidebar')?.classList.remove('open');document.querySelector('.sidebar-backdrop')?.classList.remove('open');return;}
    if(e.target.closest('[data-logout]')){sessionStorage.removeItem('galatech_session');state.loggedIn=false;state.view='home';state.selected=null;render();toast('Sesión técnica cerrada.');return;}
    const manage=e.target.closest('[data-manage]');if(manage){state.selected=repairs.find(r=>r.code===manage.dataset.manage);state.view='manage';render();return;}
    const hist=e.target.closest('[data-show-history]');if(hist){state.selected=repairs.find(r=>r.code===hist.dataset.showHistory);state.view='history';render();return;}
    const mode=e.target.closest('[data-client-mode]');if(mode){state.customerMode=mode.dataset.clientMode;state.foundClient=null;state.clientError='';render();return;}
    if(e.target.closest('[data-find-client]')){findClient();return;}
    if(e.target.closest('[data-toggle-password]')){const p=document.querySelector('#password');if(p)p.type=p.type==='password'?'text':'password';return;}
  });
  document.addEventListener('submit', e => {
    if(e.target.id==='tracking-form'){e.preventDefault();const code=new FormData(e.target).get('code');if(!/^RT-\d{6}$/i.test(String(code).trim())){document.querySelector('#home-error').textContent='Ingresa un código válido, por ejemplo RT-000123.';return;}showRepair(code);}
    if(e.target.id==='login-form'){e.preventDefault();const fd=new FormData(e.target);const error=document.querySelector('#login-error');if(fd.get('username')==='tecnico'&&fd.get('password')==='galatech'){sessionStorage.setItem('galatech_session','demo');state.loggedIn=true;state.view='dashboard';render();toast('Bienvenido al panel técnico.');}else error.textContent='El usuario o la contraseña no son válidos.';}
    if(e.target.id==='repair-form'){e.preventDefault();if(state.customerMode==='search'&&!state.foundClient){toast('Busca un cliente o selecciona registrar uno nuevo.','error');return;}const fd=new FormData(e.target);let client=state.foundClient;if(state.customerMode==='new'){client={name:String(fd.get('clientName')).trim(),phone:String(fd.get('clientPhone')).trim(),email:String(fd.get('clientEmail')).trim()};if(!client.name||!client.phone){toast('Completa el nombre y teléfono del cliente.','error');return;}clients.push(client);}
      const next=Math.max(0,...repairs.map(r=>Number(r.code.slice(3))||0))+1;const code=`RT-${String(next).padStart(6,'0')}`;const now=new Date().toISOString();const r={code,client:client.name,phone:client.phone,email:client.email,type:String(fd.get('type')),brand:String(fd.get('brand')).trim(),model:String(fd.get('model')).trim(),problem:String(fd.get('problem')).trim(),status:'Recibido',diagnosis:'',cost:null,created:now,history:[{status:'Recibido',date:now}]};repairs.unshift(r);save();state.selected=r;state.customerMode='search';state.foundClient=null;state.clientQuery='';state.view='manage';render();toast(`Reparación registrada con el código ${code}.`);}
    if(e.target.id==='manage-form'){e.preventDefault();const r=repairs.find(x=>x.code===e.target.dataset.code);if(!r)return;const fd=new FormData(e.target);const nextStatus=String(fd.get('status'));const cost=String(fd.get('cost')).trim();if(!STATUS.includes(nextStatus)){toast('Selecciona un estado válido.','error');return;}if(cost!==''&&(!Number.isFinite(Number(cost))||Number(cost)<0)){toast('Ingresa un costo igual o mayor que cero.','error');return;}if(nextStatus!==r.status)r.history.push({status:nextStatus,date:new Date().toISOString()});r.status=nextStatus;r.diagnosis=String(fd.get('diagnosis')).trim();r.cost=cost===''?null:Number(cost);save();render();toast('Cambios guardados en esta demostración.');}
  });
  document.addEventListener('input', e=>{if(e.target.id==='table-search'){const pos=e.target.selectionStart;state.search=e.target.value;const active=document.activeElement;const rendered=appView();app.innerHTML=rendered;const input=document.querySelector('#table-search');input?.focus();input?.setSelectionRange(pos,pos);}});
  document.addEventListener('change', e=>{if(e.target.id==='status-filter'){state.filter=e.target.value;render();}});
  window.addEventListener('hashchange',()=>{const route=location.hash.slice(1);if(route==='login')go('login');else if(route==='home'||!route)go('home');});
  render();
})();
