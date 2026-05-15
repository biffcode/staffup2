// app-shell.js — injects sidebar + topbar, handles theme + lang + fullscreen + pause + active-indicator glide.

(function () {
  function t(k) { return (window.STAFFUP_T && window.STAFFUP_T(k)) || k; }

  const D = window.STAFFUP_DATA;

  // ---------- Theme ----------
  function readTheme() {
    try {
      const th = localStorage.getItem('staffup-theme');
      if (th === 'light' || th === 'dark') return th;
    } catch (_) {}
    return 'light'; // default per Andrea
  }
  function applyTheme(th) {
    document.documentElement.setAttribute('data-theme', th);
    try { localStorage.setItem('staffup-theme', th); } catch (_) {}
  }
  applyTheme(readTheme()); // early apply to avoid flash

  window.STAFFUP_TOGGLE_THEME = function () {
    document.body.classList.add('theme-transitioning');
    setTimeout(() => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'light' ? 'dark' : 'light';
      applyTheme(next);
      // Re-render icon
      const btn = document.querySelector('.theme-toggle');
      if (btn) btn.innerHTML = next === 'light' ? sunSVG() : moonSVG();
      setTimeout(() => document.body.classList.remove('theme-transitioning'), 60);
    }, 80);
  };

  function sunSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';
  }
  function moonSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  function currentSection() {
    const meta = document.querySelector('meta[name="section"]');
    return meta ? meta.getAttribute('content') : 'tableau-bord';
  }

  // ---------- Sidebar ----------
  function buildSidebar(activeId) {
    const sb = document.createElement('aside');
    sb.className = 'app-sidebar';
    const items = D.sidebar.map(s => {
      const active = s.id === activeId ? ' active' : '';
      const badge = s.badge ? `<span class="badge">${s.badge}</span>` : '';
      const icon = `<i data-lucide="${s.icon || 'circle'}"></i>`;
      const label = t('sb.' + s.id) || s.label;
      return `<a class="sb-item${active}" href="${s.file}" data-id="${s.id}">${icon}<span data-i18n="sb.${s.id}">${label}</span>${badge}</a>`;
    }).join('');
    sb.innerHTML = `
      <div class="sb-brand">StaffUp <span class="x">×</span> Trinity</div>
      <div class="sb-section-label" data-i18n="shell.section-ops">${t('shell.section-ops')}</div>
      <div class="sb-items">
        <div class="sb-active-indicator" id="sb-indicator"></div>
        ${items}
      </div>
      <div class="sb-footer">
        <span data-i18n="shell.footer">${t('shell.footer')}</span><br>
        <a href="#" id="sb-reset" data-i18n="shell.reset">${t('shell.reset')}</a>
      </div>
    `;
    return sb;
  }

  function positionActiveIndicator() {
    const indicator = document.getElementById('sb-indicator');
    const active = document.querySelector('.sb-item.active');
    if (!indicator || !active) return;
    const parent = active.parentElement;
    const offsetTop = active.offsetTop - parent.offsetTop;
    indicator.style.top = offsetTop + 'px';
    indicator.style.height = active.offsetHeight + 'px';
  }

  // ---------- Topbar ----------
  function buildTopbar() {
    const tb = document.createElement('header');
    tb.className = 'app-topbar';
    const theme = document.documentElement.getAttribute('data-theme') || 'light';
    const langLabel = t('lang.toggle');
    const langTitle = t('lang.title');
    tb.innerHTML = `
      <span class="tb-pill" data-i18n="shell.mode-demo">${t('shell.mode-demo')}</span>
      <div class="tb-search">
        <span class="tb-search-icon"><i data-lucide="search"></i></span>
        <input type="text" data-i18n-placeholder="shell.search-placeholder" placeholder="${t('shell.search-placeholder')}" />
      </div>
      <div class="tb-spacer"></div>
      <div class="tb-controls">
        <button id="btn-pause" data-i18n-title="shell.pause-title" title="${t('shell.pause-title')}"><i data-lucide="pause"></i><span data-i18n="shell.pause">${t('shell.pause')}</span></button>
        <button data-i18n-title="shell.annuler-title" title="${t('shell.annuler-title')}"><i data-lucide="undo-2"></i><span data-i18n="shell.annuler">${t('shell.annuler')}</span></button>
        <button data-i18n-title="shell.approuver-title" title="${t('shell.approuver-title')}"><i data-lucide="check"></i><span data-i18n="shell.approuver">${t('shell.approuver')}</span></button>
        <button id="btn-fullscreen" data-i18n-title="shell.fullscreen-title" title="${t('shell.fullscreen-title')}"><i data-lucide="maximize-2"></i></button>
      </div>
      <button class="lang-toggle" id="lang-toggle" title="${langTitle}">${langLabel}</button>
      <button class="theme-toggle" id="theme-toggle" data-i18n-title="shell.theme-title" title="${t('shell.theme-title')}">${theme === 'light' ? sunSVG() : moonSVG()}</button>
      <div class="tb-user" id="tb-user">
        <div class="avatar">LC</div>
        <div class="name">Lorraine Costa</div>
        <div class="menu">
          <a href="#" id="reset-demo"><i data-lucide="refresh-cw"></i> <span data-i18n="shell.reset-demo">${t('shell.reset-demo')}</span></a>
          <a href="pres-4-pourquoi-maintenant.html"><i data-lucide="arrow-left"></i> <span data-i18n="shell.reprendre">${t('shell.reprendre')}</span></a>
          <a href="pres-1-cover.html"><i data-lucide="home"></i> <span data-i18n="shell.retour-cover">${t('shell.retour-cover')}</span></a>
        </div>
      </div>
    `;
    return tb;
  }

  // ---------- Toast ----------
  function buildToast() {
    let t = document.getElementById('toast');
    if (t) return t;
    t = document.createElement('div');
    t.id = 'toast';
    document.body.appendChild(t);
    return t;
  }

  window.STAFFUP_TOAST = function (msg, ms) {
    const t = buildToast();
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), ms || 1800);
  };

  // ---------- Slide-over backdrop ----------
  function addSlideOverBackdrop() {
    if (document.querySelector('.slide-over-backdrop')) return;
    const bd = document.createElement('div');
    bd.className = 'slide-over-backdrop';
    bd.addEventListener('click', function () {
      if (typeof window.staffupCloseSlideOver === 'function') window.staffupCloseSlideOver();
    });
    document.body.appendChild(bd);
  }

  // Patch slide-over open/close to manage backdrop
  function wrapSlideOverFns() {
    const orig = window.staffupOpenCandidate;
    if (orig && !orig._wrapped) {
      window.staffupOpenCandidate = function (id) {
        const r = orig.apply(this, arguments);
        document.body.classList.add('so-open');
        return r;
      };
      window.staffupOpenCandidate._wrapped = true;
    }
    const orig2 = window.staffupOpenClient;
    if (orig2 && !orig2._wrapped) {
      window.staffupOpenClient = function (id) {
        const r = orig2.apply(this, arguments);
        document.body.classList.add('so-open');
        return r;
      };
      window.staffupOpenClient._wrapped = true;
    }
    const orig3 = window.staffupCloseSlideOver;
    if (orig3 && !orig3._wrapped) {
      window.staffupCloseSlideOver = function () {
        const r = orig3.apply(this, arguments);
        document.body.classList.remove('so-open');
        return r;
      };
      window.staffupCloseSlideOver._wrapped = true;
    }
  }

  // ---------- Wire user menu, theme, lang, pause, fullscreen, reset ----------
  function wireControls() {
    const u = document.getElementById('tb-user');
    if (u) {
      u.addEventListener('click', function (e) {
        e.stopPropagation();
        u.classList.toggle('open');
      });
      document.addEventListener('click', function () { u.classList.remove('open'); });
    }

    const r = document.getElementById('reset-demo');
    if (r) r.addEventListener('click', function (e) {
      e.preventDefault();
      try { localStorage.removeItem('staffup-demo'); } catch (_) {}
      window.STAFFUP_TOAST(t('toast.demo-reset'));
    });
    const sr = document.getElementById('sb-reset');
    if (sr) sr.addEventListener('click', function (e) {
      e.preventDefault();
      try { localStorage.removeItem('staffup-demo'); } catch (_) {}
      window.STAFFUP_TOAST(t('toast.demo-reset'));
    });

    const tt = document.getElementById('theme-toggle');
    if (tt) tt.addEventListener('click', function () {
      window.STAFFUP_TOGGLE_THEME();
      const newTheme = document.documentElement.getAttribute('data-theme');
      window.STAFFUP_TOAST(t(newTheme === 'light' ? 'toast.theme-light' : 'toast.theme-dark'));
    });

    const lt = document.getElementById('lang-toggle');
    if (lt) lt.addEventListener('click', function () {
      window.STAFFUP_TOGGLE_LANG && window.STAFFUP_TOGGLE_LANG();
    });

    const pause = document.getElementById('btn-pause');
    if (pause) pause.addEventListener('click', function () {
      const on = document.body.classList.toggle('has-paused');
      pause.classList.toggle('paused', on);
      window.STAFFUP_TOAST(t(on ? 'toast.agent-pause' : 'toast.agent-resume'));
    });

    const fs = document.getElementById('btn-fullscreen');
    if (fs) fs.addEventListener('click', function () {
      document.body.classList.toggle('fullscreen');
      window.STAFFUP_TOAST(t(document.body.classList.contains('fullscreen') ? 'toast.fullscreen-on' : 'toast.fullscreen-off'));
    });
  }

  // ---------- Lucide icons ----------
  function initLucide() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  // ---------- Main mount ----------
  document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('has-app-shell');
    const activeId = currentSection();
    const content = document.querySelector('.app-content');
    if (!content) return;

    const layout = document.createElement('div');
    layout.className = 'app-layout';
    content.parentNode.insertBefore(layout, content);

    layout.appendChild(buildSidebar(activeId));
    layout.appendChild(buildTopbar());
    layout.appendChild(content);

    buildToast();
    addSlideOverBackdrop();
    wireControls();
    // Init icons after DOM mount, then apply translations
    setTimeout(() => {
      initLucide();
      positionActiveIndicator();
      wrapSlideOverFns();
      document.body.classList.add('is-loaded');
      window.STAFFUP_APPLY_LANG && window.STAFFUP_APPLY_LANG();
    }, 0);

    // Re-position indicator on resize
    window.addEventListener('resize', positionActiveIndicator);
  });
})();
