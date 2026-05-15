// Narrative-shell nav — 5 screens. Adds theme + lang toggles, page fade-in, Lucide init.

(function () {
  function t(k) { return (window.STAFFUP_T && window.STAFFUP_T(k)) || k; }

  const STEPS = [
    { n: 1, file: 'pres-1-cover.html',               key: 'nav.step-1' },
    { n: 2, file: 'pres-2-marche.html',              key: 'nav.step-2' },
    { n: 3, file: 'pres-3-comparaison.html',         key: 'nav.step-3' },
    { n: 4, file: 'pres-4-pourquoi-maintenant.html', key: 'nav.step-4' },
    { n: 5, file: 'pres-5-et-apres.html',            key: 'nav.step-5' }
  ];
  const TOTAL = STEPS.length;

  // ---------- Theme (mirrors app-shell.js) ----------
  function readTheme() {
    try {
      const t = localStorage.getItem('staffup-theme');
      if (t === 'light' || t === 'dark') return t;
    } catch (_) {}
    return 'light';
  }
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('staffup-theme', t); } catch (_) {}
  }
  applyTheme(readTheme());

  function sunSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';
  }
  function moonSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  function currentStep() {
    const meta = document.querySelector('meta[name="step"]');
    if (!meta) return 1;
    const n = parseInt(meta.getAttribute('content'), 10);
    return isNaN(n) ? 1 : n;
  }

  function buildTopbar(step) {
    const tb = document.createElement('div');
    tb.className = 'topbar';
    const cur = STEPS.find(s => s.n === step) || STEPS[0];
    const theme = document.documentElement.getAttribute('data-theme') || 'light';
    const langLabel = t('lang.toggle');
    const langTitle = t('lang.title');
    tb.innerHTML = `
      <div class="topbar-inner">
        <div class="brand">StaffUp <span class="x">×</span> Trinity</div>
        <div class="progress">
          <span class="mono">${cur.n}/${TOTAL}</span>
          <div class="progress-bar"><div class="progress-fill" style="width:${(cur.n / TOTAL * 100).toFixed(0)}%"></div></div>
          <span class="muted step-label">${t(cur.key)}</span>
        </div>
        <div class="intervention">
          <a class="btn ghost small" href="app-tableau-bord.html" data-i18n="nav.open-app">${t('nav.open-app')}</a>
          <button class="lang-toggle" id="lang-toggle" title="${langTitle}">${langLabel}</button>
          <button class="theme-toggle" id="theme-toggle" data-i18n-title="shell.theme-title" title="${t('shell.theme-title')}">${theme === 'light' ? sunSVG() : moonSVG()}</button>
        </div>
      </div>
    `;
    return tb;
  }

  function buildFooter(step) {
    const prev = STEPS.find(s => s.n === step - 1);
    const next = STEPS.find(s => s.n === step + 1);
    const f = document.createElement('div');
    f.className = 'footer-nav';
    f.innerHTML = `
      <div>
        ${prev
          ? `<a class="btn ghost" href="${prev.file}">← ${t(prev.key)}</a>`
          : `<span class="meta" data-i18n="nav.debut">${t('nav.debut')}</span>`}
      </div>
      <div class="meta">
        <span data-i18n="nav.footer-contact">${t('nav.footer-contact')}</span>
        · <a href="#" id="reset-demo" class="small" data-i18n="nav.reset">${t('nav.reset')}</a>
        · <select id="step-jump">
            ${STEPS.map(s => `<option value="${s.file}" ${s.n === step ? 'selected' : ''}>${s.n}. ${t(s.key)}</option>`).join('')}
          </select>
      </div>
      <div>
        ${next
          ? `<a class="btn" href="${next.file}">${t(next.key)} →</a>`
          : `<a class="btn" href="pres-1-cover.html" data-i18n="nav.recommencer">${t('nav.recommencer')}</a>`}
      </div>
    `;
    return f;
  }

  function buildToast() {
    let tb = document.getElementById('toast');
    if (tb) return tb;
    tb = document.createElement('div');
    tb.id = 'toast';
    document.body.appendChild(tb);
    return tb;
  }

  window.STAFFUP_TOAST = function (msg, ms) {
    const tb = buildToast();
    tb.textContent = msg;
    tb.classList.add('show');
    clearTimeout(tb._timer);
    tb._timer = setTimeout(() => tb.classList.remove('show'), ms || 1800);
  };

  window.STAFFUP_TOGGLE_THEME = function () {
    document.body.classList.add('theme-transitioning');
    setTimeout(() => {
      const cur = document.documentElement.getAttribute('data-theme') || 'light';
      const next = cur === 'light' ? 'dark' : 'light';
      applyTheme(next);
      const btn = document.getElementById('theme-toggle');
      if (btn) btn.innerHTML = next === 'light' ? sunSVG() : moonSVG();
      setTimeout(() => document.body.classList.remove('theme-transitioning'), 60);
    }, 80);
  };

  function wireControls() {
    const r = document.getElementById('reset-demo');
    if (r) {
      r.addEventListener('click', function (e) {
        e.preventDefault();
        try { localStorage.removeItem('staffup-demo'); } catch (_) {}
        window.STAFFUP_TOAST(t('toast.demo-reset'));
      });
    }
    const j = document.getElementById('step-jump');
    if (j) {
      j.addEventListener('change', function () {
        window.location.href = j.value;
      });
    }
    const tt = document.getElementById('theme-toggle');
    if (tt) tt.addEventListener('click', function () {
      window.STAFFUP_TOGGLE_THEME();
      const newTheme = document.documentElement.getAttribute('data-theme');
      window.STAFFUP_TOAST(t(newTheme === 'light' ? 'toast.theme-light' : 'toast.theme-dark'));
    });
    const lt = document.getElementById('lang-toggle');
    if (lt) lt.addEventListener('click', function () {
      window.STAFFUP_TOGGLE_LANG && window.STAFFUP_TOGGLE_LANG();
      // Rebuild dynamic text (step label, nav links) without full page reload
      rebuildDynamicText();
    });
  }

  function rebuildDynamicText() {
    // Update step label in progress bar
    const step = currentStep();
    const cur = STEPS.find(s => s.n === step) || STEPS[0];
    const stepLabel = document.querySelector('.step-label');
    if (stepLabel) stepLabel.textContent = t(cur.key);
    // Update prev/next buttons
    const prev = STEPS.find(s => s.n === step - 1);
    const next = STEPS.find(s => s.n === step + 1);
    const footerBtns = document.querySelectorAll('.footer-nav .btn');
    footerBtns.forEach(btn => {
      if (prev && btn.href && btn.href.endsWith(prev.file)) btn.textContent = '← ' + t(prev.key);
      if (next && btn.href && btn.href.endsWith(next.file)) btn.textContent = t(next.key) + ' →';
    });
    // Update step-jump options
    const jump = document.getElementById('step-jump');
    if (jump) {
      Array.from(jump.options).forEach(opt => {
        const s = STEPS.find(x => x.file === opt.value);
        if (s) opt.textContent = s.n + '. ' + t(s.key);
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const step = currentStep();
    document.body.classList.add('app');
    const app = document.querySelector('.app-shell');
    if (!app) return;
    app.insertAdjacentElement('beforebegin', buildTopbar(step));
    app.insertAdjacentElement('afterend', buildFooter(step));
    buildToast();
    wireControls();
    setTimeout(() => {
      if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
      document.body.classList.add('is-loaded');
      // Apply all data-i18n translations after DOM is ready
      window.STAFFUP_APPLY_LANG && window.STAFFUP_APPLY_LANG();
    }, 0);
  });
})();
