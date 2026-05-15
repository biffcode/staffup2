// interactions.js — chat, slide-over, filters, toggles, undo, kpi count-up, animated confidence bars.

(function () {
  const D = window.STAFFUP_DATA;

  // ----- Chat -----
  window.staffupSendPrompt = function (promptText, targetId) {
    const chat = document.getElementById(targetId || 'chat-stream');
    if (!chat) return;
    if (document.body.classList.contains('has-paused')) {
      window.STAFFUP_TOAST("L'agent est en pause. Réactivez-le pour envoyer.");
      return;
    }
    const user = document.createElement('div');
    user.className = 'msg user';
    user.textContent = promptText;
    chat.appendChild(user);

    // Typing indicator
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
    const t = text.toLowerCase();
    if (t.includes('chef de rang') || t.includes('weekend') || t.includes('week-end')) {
      const c = D.candidates.filter(x => x.role === 'Chef de rang' && x.available).slice(0, 3);
      return shortlistHTML(c, "J'ai trouvé 3 correspondances dans votre pool :");
    }
    if (t.includes('60 jours') || t.includes('dormant') || t.includes('pas été placés')) {
      return `<div><span class="companion-mark">C</span><strong>Un lot de profils n'a pas eu de mission depuis plus de 60 jours.</strong><br><br>
        <span class="chip">Cuisine</span><span class="chip">Service</span><span class="chip">Housekeeping</span>
        <br><br>Voulez-vous lancer une campagne de réactivation ?<br><br>
        <button class="btn small" onclick="staffupApprove(this,'Campagne de réactivation lancée.')">Lancer la campagne →</button>
        <button class="btn ghost small" onclick="staffupApprove(this,'Ignoré.')">Ignorer</button></div>`;
    }
    if (t.includes('facture')) {
      return `<div><span class="companion-mark">C</span><strong>3 factures impayées depuis plus de 30 jours :</strong>
        <ul style="margin:8px 0 12px;"><li>BuildCo SARL · CHF 2'400 · 32j</li><li>Orllati Group · CHF 1'800 · 12j</li><li>FC Echallens · CHF 950 · 14j</li></ul>
        <button class="btn small" onclick="staffupApprove(this,'Rappels envoyés.')">Envoyer les rappels</button></div>`;
    }
    if (t.includes('clients') || t.includes('commandé')) {
      const dormants = D.clients.filter(c => c.status === 'dormant' || c.status === 'tiède');
      return `<div><span class="companion-mark">C</span><strong>${dormants.length} clients n'ont pas commandé récemment :</strong>
        <ul style="margin:8px 0 12px;">${dormants.map(c => `<li><strong>${c.name}</strong> — dernière mission il y a ${c.lastMission}</li>`).join('')}</ul>
        <button class="btn small" onclick="staffupApprove(this,'Messages de reprise envoyés.')">Envoyer des messages de reprise</button></div>`;
    }
    if (t.includes('carlton')) {
      return `<div><span class="companion-mark">C</span><strong>Historique Carlton Boutique Hotel (12 derniers mois) :</strong>
        <ul style="margin:8px 0 0;"><li>14 missions réalisées</li><li>CHF 28'400 facturés</li><li>Note moyenne : 4.9 / 5</li><li>Dernière mission il y a 12 jours</li></ul>
        Contact : Sara Mateus, Directrice.</div>`;
    }
    return `<div><span class="companion-mark">C</span>Demande reçue. Je traite — résultat dans un instant.<br><br><span class="chip mute">Démo</span> <span class="muted small">Cette réponse n'est pas encore câblée pour cette formulation précise.</span></div>`;
  }

  function shortlistHTML(list, head) {
    let out = `<div><span class="companion-mark">C</span>✓ ${head}</div>`;
    list.forEach((c, i) => {
      const num = ['①','②','③','④','⑤'][i] || `(${i+1})`;
      out += `
      <div class="candidate-card">
        <div class="name">${num} ${c.prenom} ${c.nom} <span class="muted small">(profil #${c.id})</span></div>
        <div class="meta">📍 ${c.ville} · ${c.distanceLausanne} min de Lausanne</div>
        <div class="meta">⭐ ${c.role}, ${c.experienceYears} ans d'expérience${c.ecole ? ' · ' + c.ecole : ''}</div>
        <div class="meta">✅ ${c.dispo}${c.lastPlacement ? ' · Dernier placement : ' + c.lastPlacement : ''}</div>
      </div>`;
    });
    out += `<div style="margin-top:12px;">
      <button class="btn small" onclick="staffupApprove(this,'Proposition envoyée au client.')">Proposer les 3 →</button>
      <button class="btn ghost small" onclick="staffupApprove(this,'Sélection modifiée.')">Modifier</button>
      <a class="btn ghost small" href="app-pool.html">Voir les profils complets</a>
    </div>`;
    return out;
  }

  // ----- Approve / Reject -----
  window.staffupApprove = function (btn, msg) {
    const box = btn.closest('.suggestion, .msg, .candidate-card, .agent-card, .entry, .draft, .agent-mgmt, .anon-card, .draft-card') || btn.parentElement;
    btn.disabled = true;
    if (box) box.classList.add('undone');
    window.STAFFUP_TOAST(msg || 'Action confirmée.');
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
    const role = document.getElementById('f-role').value;
    const region = document.getElementById('f-region').value;
    const exp = document.getElementById('f-exp').value;
    const cards = document.querySelectorAll('.gallery .anon-card');
    let shown = 0;
    cards.forEach(card => {
      const r = card.dataset.role;
      const reg = card.dataset.region;
      const e = parseInt(card.dataset.exp, 10);
      let ok = true;
      if (role !== 'all' && r !== role) ok = false;
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
    if (count) count.textContent = shown + ' profil' + (shown > 1 ? 's' : '') + ' visibles';
  };

  // ----- Pool filter -----
  window.staffupFilterPool = function () {
    const role = document.getElementById('pf-role').value;
    const canton = document.getElementById('pf-canton').value;
    const dispo = document.getElementById('pf-dispo').value;
    const rows = document.querySelectorAll('#pool-table tbody tr');
    let n = 0;
    rows.forEach(r => {
      let ok = true;
      if (role !== 'all' && r.dataset.role !== role) ok = false;
      if (canton !== 'all' && r.dataset.canton !== canton) ok = false;
      if (dispo === 'available' && r.dataset.dispo !== 'true') ok = false;
      r.style.display = ok ? '' : 'none';
      if (ok) n++;
    });
    const c = document.getElementById('pool-count');
    if (c) c.textContent = n + ' profil' + (n > 1 ? 's' : '');
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
    document.querySelectorAll('[data-tab-group="' + group + '"]').forEach(t => {
      t.classList.toggle('active', t.dataset.tab === key);
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
    // Re-init Lucide icons inside the slide-over
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
      `<div class="placement-row"><div>${p.date}</div><div>${p.client} · ${p.mission}</div><div>${'⭐'.repeat(p.rating)}</div></div>`
    ).join('');
    const tags = (c.tags || []).map(t => `<span class="chip">${t}</span>`).join('');
    const days = ['L','M','M','J','V','S','D'];
    const portrait = c.photo
      ? `<div class="so-portrait" style="background-image:url('${c.photo}');"></div>`
      : `<div class="so-portrait no-photo" style="background:linear-gradient(135deg, ${c.avatarColor}, ${c.avatarColor}aa);">${c.initials}</div>`;
    return `
      <button class="so-close" onclick="staffupCloseSlideOver()">×</button>

      ${portrait}

      <div class="view-toggle">
        <button class="active" data-view="lorraine" onclick="staffupViewToggle('lorraine', this.closest('.slide-over'))">Vue Lorraine</button>
        <button data-view="client" onclick="staffupViewToggle('client', this.closest('.slide-over'))">Vue client</button>
        <button data-view="candidat" onclick="staffupViewToggle('candidat', this.closest('.slide-over'))">Vue candidate</button>
      </div>

      <div data-view-only="lorraine">
        <h2>${c.fullName} <span class="muted" style="font-weight:400;">#${c.id}</span></h2>
        <div class="small muted">📍 ${c.ville}, ${c.canton} · ☎ +41 79 ••• •••• · 📧 …@…</div>
        <h4 style="margin-top:14px;">Rôles</h4>
        <div class="tag-list">${(c.roles || [c.role]).map(r => `<span class="chip">${r}</span>`).join('')}</div>
        <h4 style="margin-top:12px;">Compétences &amp; tags</h4>
        <div class="tag-list">${tags}${(c.langues || []).map(l => `<span class="chip mute">${l}</span>`).join('')}</div>
        <h4 style="margin-top:12px;">Permis / formation</h4>
        <p class="small">${c.permis}${c.ecole ? ' · ' + c.ecole : ''}</p>
        <h4 style="margin-top:12px;">Disponibilité (7 prochains jours)</h4>
        <div style="display:flex;gap:4px;font-size:11px;text-align:center;font-weight:600;">
          ${(c.week || []).map((b, i) => `<span style="flex:1;padding:7px 0;border-radius:6px;background:${b ? 'rgba(47,154,95,0.18)' : 'rgba(125,132,151,0.10)'};color:${b ? 'var(--ok)' : 'var(--text-dim)'};">${days[i]}</span>`).join('')}
        </div>
        <p class="small muted" style="margin-top:8px;">${c.dispo}</p>
        <h4 style="margin-top:14px;">Historique (${(c.placements || []).length})</h4>
        ${placements || '<p class="small muted">Pas encore de placement enregistré.</p>'}
        ${c.notesAgent ? `<h4 style="margin-top:12px;">Note agent</h4><p class="small quote">« ${c.notesAgent} »</p>` : ''}
        <div style="margin-top:18px;">
          <button class="btn small" onclick="staffupApprove(this,'Proposition pré-remplie ouverte.')">Proposer pour une mission →</button>
          <button class="btn ghost small" onclick="staffupApprove(this,'Disponibilité ajustée.')">Marquer indisponible</button>
        </div>
      </div>

      <div data-view-only="client" style="display:none;">
        <h2>Profil C-${c.id} <span class="chip mute">anonymisé</span></h2>
        <p class="small muted">Vue identique à celle affichée dans la galerie publique.</p>
        <h4>Rôle</h4><p>${c.roles ? c.roles.join(' · ') : c.role}</p>
        <h4>Région</h4><p>${c.canton}</p>
        <h4>Expérience</h4><p>${c.experienceYears} ans${c.ecole ? ' · ' + c.ecole : ''}</p>
        <h4>Note moyenne</h4><p>${'⭐'.repeat(c.rating)}</p>
        <h4>Disponibilité</h4><p>${c.dispo}</p>
        <p class="muted small" style="margin-top:12px;">Aucun contact direct. La demande passe par StaffUp.</p>
      </div>

      <div data-view-only="candidat" style="display:none;">
        <h2>Mon profil — ${c.prenom} ${c.nom}</h2>
        <h4>Mes informations</h4>
        <p class="small">${c.ville} (${c.canton}) · ${c.permis}${c.ecole ? ' · ' + c.ecole : ''}</p>
        <h4>Mes rôles préférés</h4>
        <div class="tag-list">${(c.roles || [c.role]).map(r => `<span class="chip">${r}</span>`).join('')}</div>
        <h4>Mes 5 dernières missions StaffUp</h4>
        ${placements || '<p class="small muted">Pas encore de mission.</p>'}
        <p class="muted small" style="margin-top:8px;">Vue de la candidate. Pas d'accès aux autres profils ni aux coordonnées clients.</p>
        <button class="btn small" onclick="staffupApprove(this,'Mise à jour de disponibilité envoyée.')">Mettre à jour mes disponibilités</button>
      </div>
    `;
  }

  function renderClientDetail(cl) {
    const missions = (cl.missions || []).map(m =>
      `<div class="placement-row"><div>${m.date}</div><div>${m.role} · ${m.candidate}</div><div>CHF ${m.fee.toLocaleString('fr-CH').replace(/,/g,"'")} · ${'⭐'.repeat(m.rating)}</div></div>`
    ).join('');
    const contacts = (cl.contacts || []).map(p =>
      `<div class="settings-row"><div class="left"><strong>${p.name}</strong> — <span class="muted small">${p.role}</span></div><div class="small muted">${p.phone}${p.email ? ' · ' + p.email : ''}</div></div>`
    ).join('');
    const invoices = D.invoices.filter(i => i.client === cl.name).map(i =>
      `<div class="placement-row"><div>${i.dateSent}</div><div>Facture #${i.id}</div><div>CHF ${i.amount.toLocaleString('fr-CH').replace(/,/g,"'")} · ${invoiceChip(i)}</div></div>`
    ).join('');
    return `
      <button class="so-close" onclick="staffupCloseSlideOver()">×</button>
      <h2>${cl.name}</h2>
      <div class="small muted">${cl.sector} · ${cl.city}</div>
      <div class="tag-list" style="margin-top:8px;">
        <span class="chip ${cl.status === 'dormant' ? 'accent' : cl.status === 'tiède' ? 'mute' : 'ok'}">${cl.status}</span>
        <span class="chip mute">Dernière mission : il y a ${cl.lastMission}</span>
        <span class="chip mute">CHF ${cl.revenue.toLocaleString('fr-CH').replace(/,/g,"'")} cumulé</span>
      </div>

      ${cl.status === 'dormant' || cl.status === 'tiède'
        ? `<div class="card alt" style="margin-top:12px;padding:14px;border-left:3px solid var(--pink);"><strong class="pink">Alerte de dormance</strong><div class="small" style="margin-top:4px;">${cl.missionsCount} missions précédentes, ${cl.lastMission} sans commande.</div><button class="btn small" style="margin-top:10px;" onclick="staffupApprove(this,'Message de reprise envoyé.')">Reprendre contact ✓</button></div>`
        : ''
      }

      <h4 style="margin-top:14px;">Contacts</h4>
      ${contacts || '<p class="small muted">Aucun contact enregistré.</p>'}

      <h4 style="margin-top:14px;">Historique missions (${cl.missionsCount})</h4>
      ${missions || '<p class="small muted">Aucune mission encore.</p>'}

      <h4 style="margin-top:14px;">Factures</h4>
      ${invoices || '<p class="small muted">Aucune facture pour ce client.</p>'}

      ${cl.agentNote ? `<h4 style="margin-top:14px;">Note agent</h4><p class="small quote">« ${cl.agentNote} »</p>` : ''}
    `;
  }

  function invoiceChip(i) {
    if (i.status === 'paid') return '<span class="chip ok">payée</span>';
    if (i.status === 'overdue') return `<span class="chip accent">retard ${i.daysOverdue || ''}j</span>`;
    return '<span class="chip">en attente</span>';
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
    window.STAFFUP_TOAST('Agent ' + (btn.dataset.state === 'on' ? 'activé' : 'mis en pause') + '.');
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
    window.STAFFUP_TOAST(entry.classList.contains('undone') ? 'Action annulée.' : 'Action restaurée.');
  };

  window.staffupFilterJournal = function (key) {
    document.querySelectorAll('.journal-filter .tab').forEach(t => t.classList.toggle('active', t.dataset.k === key));
    document.querySelectorAll('.timeline .entry').forEach(e => {
      let ok = true;
      if (key === 'agent' && e.dataset.author !== 'Agent') ok = false;
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
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      const v = start + (end - start) * eased;
      el.textContent = formatter(v);
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  window.staffupAnimateKPIs = function () {
    document.querySelectorAll('.kpi-card .value').forEach(el => {
      const raw = el.textContent.trim();
      // Skip decimals (e.g., "4.8 / 5") — they don't animate cleanly with integer count-up.
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

  // ----- Confidence bar animation (Demande detail) -----
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
