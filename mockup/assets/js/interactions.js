// interactions.js — chat, slide-over, filters, toggles, undo, kpi count-up, animated confidence bars.

(function () {
  const D = window.STAFFUP_DATA;
  function t(k) { return (window.STAFFUP_T && window.STAFFUP_T(k)) || k; }
  function isEn() { return window.STAFFUP_LANG === 'en'; }
  function dispo(c) { return (isEn() && c.dispoEn) ? c.dispoEn : c.dispo; }

  // ---------- Data-value lookup maps ----------
  const ROLE_EN = {
    'Chef de rang': 'Head waiter',
    "Maître d'hôtel": "Maître d'hôtel",
    'Événementiel': 'Events',
    'Cuisinier': 'Cook',
    'Chef de partie': 'Chef de partie',
    'Service': 'Service',
    'Accueil': 'Front desk',
    'Housekeeping': 'Housekeeping',
    'Gouvernante': 'Head housekeeper',
    'Barman': 'Bartender',
    'Mixologie': 'Mixology',
    'Réception': 'Reception',
    'Conciergerie': 'Concierge',
    'Sommelier': 'Sommelier',
  };
  const TAG_EN = {
    'Gastronomie': 'Gastronomy',
    'Anglais courant': 'Fluent English',
    'Sommelier certifié': 'Certified sommelier',
    'Pâtisserie': 'Pastry',
    'Luxe': 'Luxury',
    'Gouvernante': 'Head housekeeper',
    'Mixologie': 'Mixology',
    'Italien': 'Italian cuisine',
    'Luxe montagne': 'Mountain luxury',
    'Trilingue': 'Trilingual',
    'Mariages': 'Weddings',
    'Étoilé': 'Michelin-starred',
    'Cuisine française': 'French cuisine',
    'Bilingue FR/DE': 'Bilingual FR/DE',
    'Vins du Lavaux': 'Lavaux wines',
    'Gestion équipe': 'Team management',
    'Galas': 'Galas',
    'Cocktails': 'Cocktails',
  };
  const MISSION_EN = {
    'Gala Lausanne': 'Lausanne Gala',
    'Service dîner': 'Dinner service',
    'Service': 'Service',
    'Réveillon': "New Year's Eve",
    'Événement': 'Event',
    'Service gala': 'Gala service',
    'Réception': 'Reception',
    'Soirée corporate': 'Corporate evening',
    'Gala': 'Gala',
    'Cuisine semaine': 'Weekly kitchen',
    'Housekeeping semaine': 'Weekly housekeeping',
    'Bar gala': 'Gala bar',
    'Service événement': 'Event service',
    'Cuisine weekend': 'Weekend kitchen',
    'Service CDD': 'Fixed-term service',
    'Banquet': 'Banquet',
    'Service mariage': 'Wedding service',
    'Soirée dégustation': 'Wine tasting evening',
  };
  const CONTACT_ROLE_EN = {
    'Directrice': 'Director', 'Directeur': 'Director', 'Directrice générale': 'General Manager',
    'Chef de cuisine': 'Head chef', 'Chef de réception': 'Front desk manager',
    'Cheffe de réception': 'Front desk manager', 'Chef de réception': 'Front desk manager',
    'Resp. événements': 'Events manager', 'Responsable événements': 'Events manager',
    'Directeur F&B': 'F&B Director', 'F&B Manager': 'F&B Manager',
    'Producteur événements': 'Events producer', 'Office Manager': 'Office Manager',
    'Direction': 'Management',
  };
  window.staffupLocContactRole = function(r) { return (isEn() && CONTACT_ROLE_EN[r]) ? CONTACT_ROLE_EN[r] : r; };

  const STATUS_EN = {
    'actif': 'active', 'tiède': 'warm', 'dormant': 'dormant', 'nouveau': 'new',
  };
  const SECTOR_EN = {
    'Restaurant gastronomique': 'Fine dining restaurant',
    'Hôtel de luxe': 'Luxury hotel',
    'Hôtel boutique': 'Boutique hotel',
    'Événementiel construction': 'Events & construction',
    'Événementiel sportif': 'Sports events',
    'Événementiel corporate': 'Corporate events',
    'Événementiel': 'Events',
    'Hôtel de montagne': 'Mountain hotel',
    'Hôtel-restaurant lacustre': 'Lakeside hotel-restaurant',
  };

  // Expose helpers for use in inline page scripts
  window.staffupLocRole    = function(r)   { return (isEn() && ROLE_EN[r])    ? ROLE_EN[r]    : r; };
  window.staffupLocTag     = function(tag) { return (isEn() && TAG_EN[tag])   ? TAG_EN[tag]   : tag; };
  window.staffupLocMission = function(m)   { return (isEn() && MISSION_EN[m]) ? MISSION_EN[m] : m; };
  window.staffupLocStatus  = function(s)   { return (isEn() && STATUS_EN[s])  ? STATUS_EN[s]  : s; };
  window.staffupLocSector  = function(s)   { return (isEn() && SECTOR_EN[s])  ? SECTOR_EN[s]  : s; };

  // ----- Chat -----
  window.staffupSendPrompt = function (promptText, targetId) {
    const chat = document.getElementById(targetId || 'chat-stream');
    if (!chat) return;
    if (document.body.classList.contains('has-paused')) {
      window.STAFFUP_TOAST(t('chat.paused'));
      return;
    }
    const user = document.createElement('div');
    user.className = 'msg user';
    user.textContent = promptText;
    chat.appendChild(user);

    const typing = document.createElement('div');
    typing.className = 'msg typing';
    typing.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
    chat.appendChild(typing);
    chat.scrollTop = chat.scrollHeight;

    setTimeout(() => {
      typing.remove();
      const reply = document.createElement('div');
      reply.className = 'msg agent';
      reply.innerHTML = buildAgentReply(promptText);
      chat.appendChild(reply);
      chat.scrollTop = chat.scrollHeight;
    }, 700);
  };

  function buildAgentReply(text) {
    const tl = text.toLowerCase();
    if (tl.includes('chef de rang') || tl.includes('head waiter') || tl.includes('weekend') || tl.includes('week-end') || tl.includes('lausanne')) {
      const c = D.candidates.filter(x => x.role === 'Chef de rang' && x.available).slice(0, 3);
      return shortlistHTML(c, t('chat.found-3'));
    }
    if (tl.includes('60 jours') || tl.includes('60 days') || tl.includes('dormant') || tl.includes('placés') || tl.includes('placed')) {
      return `<div><span class="companion-mark">C</span><strong>${t('chat.dormant-title')}</strong><br><br>
        <span class="chip">Cuisine</span><span class="chip">Service</span><span class="chip">Housekeeping</span>
        <br><br>
        <button class="btn small" onclick="staffupApprove(this,'${t('chat.launch-campaign')}')">${t('chat.launch-campaign')}</button>
        <button class="btn ghost small" onclick="staffupApprove(this,'${t('chat.ignore')}')">${t('chat.ignore')}</button></div>`;
    }
    if (tl.includes('facture') || tl.includes('invoice') || tl.includes('carlton')) {
      return `<div><span class="companion-mark">C</span><strong>${t('chat.unpaid-title')}</strong>
        <ul style="margin:8px 0 12px;"><li>BuildCo SARL · CHF 2'400 · 32j</li><li>Orllati Group · CHF 1'800 · 12j</li><li>FC Echallens · CHF 950 · 14j</li></ul>
        <button class="btn small" onclick="staffupApprove(this,'${t('chat.send-reminders')}')">${t('chat.send-reminders')}</button></div>`;
    }
    if (tl.includes('clients') || tl.includes('commandé') || tl.includes('ordered') || tl.includes('45')) {
      const dormants = D.clients.filter(c => c.status === 'dormant' || c.status === 'tiède');
      return `<div><span class="companion-mark">C</span><strong>${dormants.length}${t('chat.inactive-suffix')}</strong>
        <ul style="margin:8px 0 12px;">${dormants.map(c => `<li><strong>${c.name}</strong> — ${t('chat.ago')}${c.lastMission}</li>`).join('')}</ul>
        <button class="btn small" onclick="staffupApprove(this,'${t('chat.send-revival')}')">${t('chat.send-revival')}</button></div>`;
    }
    return `<div><span class="companion-mark">C</span>${t('chat.processing')}<br><br><span class="chip mute">Demo</span> <span class="muted small">${t('chat.demo-note')}</span></div>`;
  }

  function shortlistHTML(list, head) {
    let out = `<div><span class="companion-mark">C</span>✓ ${head}</div>`;
    list.forEach((c, i) => {
      const num = ['①','②','③','④','⑤'][i] || `(${i+1})`;
      out += `
      <div class="candidate-card">
        <div class="name">${num} ${c.prenom} ${c.nom} <span class="muted small">(profil #${c.id})</span></div>
        <div class="meta">📍 ${c.ville} · ${c.distanceLausanne} min de Lausanne</div>
        <div class="meta">⭐ ${c.role}, ${c.experienceYears} ans${c.ecole ? ' · ' + c.ecole : ''}</div>
        <div class="meta">✅ ${dispo(c)}${c.lastPlacement ? ' · ' + c.lastPlacement : ''}</div>
      </div>`;
    });
    out += `<div style="margin-top:12px;">
      <button class="btn small" onclick="staffupApprove(this,'${t('chat.propose-3')}')">${t('chat.propose-3')}</button>
      <button class="btn ghost small" onclick="staffupApprove(this,'${t('chat.edit')}')">${t('chat.edit')}</button>
      <a class="btn ghost small" href="app-pool.html">${t('chat.see-profiles')}</a>
    </div>`;
    return out;
  }

  // ----- Approve / Reject -----
  window.staffupApprove = function (btn, msg) {
    const box = btn.closest('.suggestion, .msg, .candidate-card, .agent-card, .entry, .draft, .agent-mgmt, .anon-card, .draft-card') || btn.parentElement;
    btn.disabled = true;
    if (box) box.classList.add('undone');
    window.STAFFUP_TOAST(msg || 'OK');
  };

  // ----- View toggle -----
  window.staffupViewToggle = function (mode, root) {
    const scope = root || document;
    const buttons = scope.querySelectorAll('.view-toggle button');
    buttons.forEach(b => b.classList.toggle('active', b.dataset.view === mode));
    scope.querySelectorAll('[data-view-only]').forEach(el => {
      el.style.display = (el.dataset.viewOnly === mode) ? '' : 'none';
    });
  };

  // ----- Public gallery filter -----
  window.staffupFilterGallery = function () {
    const role   = document.getElementById('f-role').value;
    const region = document.getElementById('f-region').value;
    const exp    = document.getElementById('f-exp').value;
    const cards  = document.querySelectorAll('.gallery .anon-card');
    let shown = 0;
    cards.forEach(card => {
      const r   = card.dataset.role;
      const reg = card.dataset.region;
      const e   = parseInt(card.dataset.exp, 10);
      let ok = true;
      if (role   !== 'all' && r !== role) ok = false;
      if (region !== 'all' && reg !== region) ok = false;
      if (exp !== 'all') {
        if (exp === '0-2' && e > 2) ok = false;
        if (exp === '3-5' && (e < 3 || e > 5)) ok = false;
        if (exp === '6+'  && e < 6) ok = false;
      }
      card.style.display = ok ? '' : 'none';
      if (ok) shown++;
    });
    const count = document.getElementById('gallery-count');
    if (count) count.textContent = shown + ' ' + t(shown > 1 ? 'so.profile-plural' : 'so.profile-singular') + ' ' + t('so.visible');
  };

  // ----- Pool filter -----
  window.staffupFilterPool = function () {
    const role   = document.getElementById('pf-role').value;
    const canton = document.getElementById('pf-canton').value;
    const disp   = document.getElementById('pf-dispo').value;
    const rows   = document.querySelectorAll('#pool-table tbody tr');
    let n = 0;
    rows.forEach(r => {
      let ok = true;
      if (role   !== 'all' && r.dataset.role   !== role)   ok = false;
      if (canton !== 'all' && r.dataset.canton !== canton) ok = false;
      if (disp === 'available' && r.dataset.dispo !== 'true') ok = false;
      r.style.display = ok ? '' : 'none';
      if (ok) n++;
    });
    const c = document.getElementById('pool-count');
    if (c) c.textContent = n + ' ' + t(n > 1 ? 'so.profile-plural' : 'so.profile-singular');
  };

  // ----- Pool view switcher -----
  window.staffupPoolView = function (view) {
    document.querySelectorAll('.pool-view').forEach(v => v.style.display = 'none');
    const target = document.getElementById('pool-view-' + view);
    if (target) target.style.display = '';
    document.querySelectorAll('.pool-tabs .tab').forEach(t => {
      t.classList.toggle('active', t.dataset.view === view);
    });
  };

  // ----- Tabs (generic) -----
  window.staffupTab = function (group, key) {
    document.querySelectorAll('[data-tab-group="' + group + '"]').forEach(tb => {
      tb.classList.toggle('active', tb.dataset.tab === key);
    });
    document.querySelectorAll('[data-tab-panel="' + group + '"]').forEach(p => {
      p.style.display = (p.dataset.panel === key) ? '' : 'none';
    });
  };

  // ----- Slide-over -----
  window.staffupOpenCandidate = function (id) {
    const c = D.candidates.find(x => x.id === id);
    if (!c) return;
    const panel = document.getElementById('slide-over');
    if (!panel) return;
    panel.innerHTML = renderCandidateDetail(c);
    panel.classList.add('open');
    setTimeout(() => { if (window.lucide) window.lucide.createIcons(); }, 0);
  };

  window.staffupOpenClient = function (id) {
    const c = D.clients.find(x => x.id === id);
    if (!c) return;
    const panel = document.getElementById('slide-over');
    if (!panel) return;
    panel.innerHTML = renderClientDetail(c);
    panel.classList.add('open');
    setTimeout(() => { if (window.lucide) window.lucide.createIcons(); }, 0);
  };

  window.staffupCloseSlideOver = function () {
    const panel = document.getElementById('slide-over');
    if (panel) panel.classList.remove('open');
  };

  function renderCandidateDetail(c) {
    const placements = (c.placements || []).map(p =>
      `<div class="placement-row"><div>${p.date}</div><div>${p.client} · ${window.staffupLocMission(p.mission)}</div><div>${'⭐'.repeat(p.rating)}</div></div>`
    ).join('');
    const tags = (c.tags || []).map(tag => `<span class="chip">${window.staffupLocTag(tag)}</span>`).join('');
    const days = [0,1,2,3,4,5,6].map(i => t('so.day-' + i));
    const portrait = c.photo
      ? `<div class="so-portrait" style="background-image:url('${c.photo}');"></div>`
      : `<div class="so-portrait no-photo" style="background:linear-gradient(135deg, ${c.avatarColor}, ${c.avatarColor}aa);">${c.initials}</div>`;

    return `
      <button class="so-close" onclick="staffupCloseSlideOver()">×</button>

      ${portrait}

      <div class="view-toggle">
        <button class="active" data-view="lorraine" onclick="staffupViewToggle('lorraine', this.closest('.slide-over'))">${t('so.view-lorraine')}</button>
        <button data-view="client" onclick="staffupViewToggle('client', this.closest('.slide-over'))">${t('so.view-client')}</button>
        <button data-view="candidat" onclick="staffupViewToggle('candidat', this.closest('.slide-over'))">${t('so.view-candidat')}</button>
      </div>

      <div data-view-only="lorraine">
        <h2>${c.fullName} <span class="muted" style="font-weight:400;">#${c.id}</span></h2>
        <div class="small muted">📍 ${c.ville}, ${c.canton} · ☎ +41 79 ••• •••• · 📧 …@…</div>
        <h4 style="margin-top:14px;">${t('so.roles')}</h4>
        <div class="tag-list">${(c.roles || [c.role]).map(r => `<span class="chip">${window.staffupLocRole(r)}</span>`).join('')}</div>
        <h4 style="margin-top:12px;">${t('so.skills')}</h4>
        <div class="tag-list">${tags}${(c.langues || []).map(l => `<span class="chip mute">${l}</span>`).join('')}</div>
        <h4 style="margin-top:12px;">${t('so.education')}</h4>
        <p class="small">${c.permis}${c.ecole ? ' · ' + c.ecole : ''}</p>
        <h4 style="margin-top:12px;">${t('so.availability')}</h4>
        <div style="display:flex;gap:4px;font-size:11px;text-align:center;font-weight:600;">
          ${(c.week || []).map((b, i) => `<span style="flex:1;padding:7px 0;border-radius:6px;background:${b ? 'rgba(47,154,95,0.18)' : 'rgba(125,132,151,0.10)'};color:${b ? 'var(--ok)' : 'var(--text-dim)'};">${days[i]}</span>`).join('')}
        </div>
        <p class="small muted" style="margin-top:8px;">${dispo(c)}</p>
        <h4 style="margin-top:14px;">${t('so.history')} (${(c.placements || []).length})</h4>
        ${placements || `<p class="small muted">${t('so.no-placements')}</p>`}
        ${c.notesAgent ? `<h4 style="margin-top:12px;">${t('so.agent-note')}</h4><p class="small quote">« ${c.notesAgent} »</p>` : ''}
        <div style="margin-top:18px;">
          <button class="btn small" onclick="staffupApprove(this,'OK')">${t('so.propose')}</button>
          <button class="btn ghost small" onclick="staffupApprove(this,'OK')">${t('so.mark-unavailable')}</button>
        </div>
      </div>

      <div data-view-only="client" style="display:none;">
        <h2>Profil C-${c.id} <span class="chip mute">${t('so.anon-label')}</span></h2>
        <p class="small muted">${t('so.public-note')}</p>
        <h4>${t('so.role')}</h4><p>${(c.roles || [c.role]).map(r => window.staffupLocRole(r)).join(' · ')}</p>
        <h4>${t('so.region')}</h4><p>${c.canton}</p>
        <h4>${t('so.experience')}</h4><p>${c.experienceYears} ans${c.ecole ? ' · ' + c.ecole : ''}</p>
        <h4>${t('so.avg-rating')}</h4><p>${'⭐'.repeat(c.rating)}</p>
        <h4>${t('so.availability').split(' (')[0]}</h4><p>${dispo(c)}</p>
        <p class="muted small" style="margin-top:12px;">${t('so.no-direct-contact')}</p>
      </div>

      <div data-view-only="candidat" style="display:none;">
        <h2>${t('so.my-profile')} — ${c.prenom} ${c.nom}</h2>
        <h4>${t('so.my-info')}</h4>
        <p class="small">${c.ville} (${c.canton}) · ${c.permis}${c.ecole ? ' · ' + c.ecole : ''}</p>
        <h4>${t('so.my-roles')}</h4>
        <div class="tag-list">${(c.roles || [c.role]).map(r => `<span class="chip">${window.staffupLocRole(r)}</span>`).join('')}</div>
        <h4>${t('so.my-missions')}</h4>
        ${placements || `<p class="small muted">${t('so.no-missions-yet')}</p>`}
        <p class="muted small" style="margin-top:8px;">${t('so.candidate-footer')}</p>
        <button class="btn small" onclick="staffupApprove(this,'OK')">${t('so.update-avail')}</button>
      </div>
    `;
  }

  function renderClientDetail(cl) {
    const missions = (cl.missions || []).map(m =>
      `<div class="placement-row"><div>${m.date}</div><div>${m.role} · ${m.candidate}</div><div>CHF ${m.fee.toLocaleString('fr-CH').replace(/,/g,"'")} · ${'⭐'.repeat(m.rating)}</div></div>`
    ).join('');
    const contacts = (cl.contacts || []).map(p =>
      `<div class="settings-row"><div class="left"><strong>${p.name}</strong> — <span class="muted small">${window.staffupLocContactRole(p.role)}</span></div><div class="small muted">${p.phone}${p.email ? ' · ' + p.email : ''}</div></div>`
    ).join('');
    const invoices = D.invoices.filter(i => i.client === cl.name).map(i =>
      `<div class="placement-row"><div>${i.dateSent}</div><div>#${i.id}</div><div>CHF ${i.amount.toLocaleString('fr-CH').replace(/,/g,"'")} · ${invoiceChip(i)}</div></div>`
    ).join('');

    return `
      <button class="so-close" onclick="staffupCloseSlideOver()">×</button>
      <h2>${cl.name}</h2>
      <div class="small muted">${window.staffupLocSector(cl.sector)} · ${cl.city}</div>
      <div class="tag-list" style="margin-top:8px;">
        <span class="chip ${cl.status === 'dormant' ? 'accent' : cl.status === 'tiède' ? 'mute' : 'ok'}">${window.staffupLocStatus(cl.status)}</span>
        <span class="chip mute">${t('so.last-mission-prefix')}${isEn() && cl.lastMissionEn ? cl.lastMissionEn : cl.lastMission}</span>
        <span class="chip mute">CHF ${cl.revenue.toLocaleString('fr-CH').replace(/,/g,"'")} ${t('so.cumulated')}</span>
      </div>

      ${cl.status === 'dormant' || cl.status === 'tiède'
        ? `<div class="card alt" style="margin-top:12px;padding:14px;border-left:3px solid var(--pink);"><strong class="pink">${t('so.dormancy-alert')}</strong><div class="small" style="margin-top:4px;">${cl.missionsCount} ${t('so.prev-missions')} ${cl.lastMission} ${t('so.without-order')}</div><button class="btn small" style="margin-top:10px;" onclick="staffupApprove(this,'OK')">${t('so.resume-contact')}</button></div>`
        : ''
      }

      <h4 style="margin-top:14px;">${t('so.contacts')}</h4>
      ${contacts || `<p class="small muted">${t('so.no-contacts')}</p>`}

      <h4 style="margin-top:14px;">${t('so.missions-history')} (${cl.missionsCount})</h4>
      ${missions || `<p class="small muted">${t('so.no-missions')}</p>`}

      <h4 style="margin-top:14px;">${t('so.invoices-label')}</h4>
      ${invoices || `<p class="small muted">${t('so.no-invoices')}</p>`}

      ${(cl.agentNote || cl.agentNoteEn) ? `<h4 style="margin-top:14px;">${t('so.agent-note')}</h4><p class="small quote">« ${isEn() && cl.agentNoteEn ? cl.agentNoteEn : cl.agentNote} »</p>` : ''}
    `;
  }

  function invoiceChip(i) {
    if (i.status === 'paid')    return `<span class="chip ok">${t('so.chip-paid')}</span>`;
    if (i.status === 'overdue') return `<span class="chip accent">${t('so.chip-overdue')} ${i.daysOverdue || ''}j</span>`;
    return `<span class="chip">${t('so.chip-pending')}</span>`;
  }

  // ----- Demandes filter -----
  window.staffupFilterDemandes = function () {
    const status = document.getElementById('df-status') ? document.getElementById('df-status').value : 'all';
    document.querySelectorAll('.kanban .col').forEach(col => {
      col.style.display = (status === 'all' || col.dataset.status === status) ? '' : 'none';
    });
  };

  // ----- Agent active toggle -----
  window.staffupAgentToggle = function (btn, agentId) {
    const card = btn.closest('.agent-mgmt');
    if (!card) return;
    const btns = card.querySelectorAll('.toggle button');
    btns.forEach(b => { b.classList.remove('on'); b.classList.remove('off'); });
    if (btn.dataset.state === 'on') { btn.classList.add('on'); }
    else { btn.classList.add('off'); }
    window.STAFFUP_TOAST(t(btn.dataset.state === 'on' ? 'toast.agent-on' : 'toast.agent-off'));
  };

  // ----- Agent library -----
  window.staffupOpenLibrary = function () {
    const m = document.getElementById('agent-library');
    if (m) m.classList.add('open');
  };
  window.staffupCloseLibrary = function () {
    const m = document.getElementById('agent-library');
    if (m) m.classList.remove('open');
  };

  // ----- Journal undo + filter -----
  window.staffupUndoEntry = function (btn) {
    const entry = btn.closest('.entry');
    entry.classList.toggle('undone');
    window.STAFFUP_TOAST(t(entry.classList.contains('undone') ? 'toast.undo-action' : 'toast.redo-action'));
  };

  window.staffupFilterJournal = function (key) {
    document.querySelectorAll('.journal-filter .tab').forEach(tb => tb.classList.toggle('active', tb.dataset.k === key));
    document.querySelectorAll('.timeline .entry').forEach(e => {
      let ok = true;
      if (key === 'agent'    && e.dataset.author !== 'Agent')    ok = false;
      if (key === 'lorraine' && e.dataset.author !== 'Lorraine') ok = false;
      if (key === 'annulees' && !e.classList.contains('undone')) ok = false;
      e.style.display = ok ? '' : 'none';
    });
  };

  // ----- KPI count-up animation -----
  function animateNumber(el, start, end, duration, formatter) {
    const startTime = performance.now();
    function tick(now) {
      const elapsed = now - startTime;
      const tv = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - tv, 3);
      const v = start + (end - start) * eased;
      el.textContent = formatter(v);
      if (tv < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  window.staffupAnimateKPIs = function () {
    document.querySelectorAll('.kpi-card .value').forEach(el => {
      const raw = el.textContent.trim();
      if (/[0-9]\.[0-9]/.test(raw)) return;
      const m = raw.match(/^(?:CHF\s*)?([0-9]+(?:[' ]?[0-9]{3})*)/);
      if (!m) return;
      const target = parseInt(m[1].replace(/[' ]/g, ''), 10);
      if (isNaN(target) || target <= 0) return;
      const prefix = raw.slice(0, m.index + (m[0].length - m[1].length));
      const suffix = raw.slice(m.index + m[0].length);
      el.textContent = prefix + '0' + suffix;
      animateNumber(el, 0, target, 900, v => {
        const formatted = Math.round(v).toLocaleString('fr-CH').replace(/,/g, "'");
        return prefix + formatted + suffix;
      });
    });
  };

  // ----- Confidence bar animation -----
  window.staffupAnimateConfidence = function () {
    document.querySelectorAll('.confidence-fill').forEach(fill => {
      const target = fill.style.width;
      fill.style.width = '0%';
      setTimeout(() => { fill.style.width = target; }, 50);
    });
  };

  // ----- Auto-trigger animations on page load -----
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
      window.staffupAnimateKPIs();
      window.staffupAnimateConfidence();
    }, 200);
  });

})();
