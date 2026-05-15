// auth.js — password gate for the StaffUp × Trinity mockup

(function () {
  var PASSWORD = 'staffup2026!';
  var KEY = 'staffup-auth';

  if (localStorage.getItem(KEY) === '1') return;

  // ---------- i18n ----------
  var STRINGS = {
    fr: {
      subtitle:    'Présentation privée',
      placeholder: 'Mot de passe',
      error:       'Mot de passe incorrect.',
      submit:      'Accéder →',
      footer:      'blackcode SA · démonstration confidentielle',
      show:        'Afficher',
      hide:        'Masquer',
    },
    en: {
      subtitle:    'Private presentation',
      placeholder: 'Password',
      error:       'Incorrect password.',
      submit:      'Enter →',
      footer:      'blackcode SA · confidential demonstration',
      show:        'Show',
      hide:        'Hide',
    }
  };

  // Inherit language from the main app if already set, else default FR
  var lang = (localStorage.getItem('staffup-lang') === 'en') ? 'en' : 'fr';

  function s(k) { return STRINGS[lang][k]; }

  // ---------- CSS ----------
  var CSS = [
    '@keyframes authShake{',
      '0%,100%{transform:translateX(0)}',
      '20%,60%{transform:translateX(-7px)}',
      '40%,80%{transform:translateX(7px)}',
    '}',
    '@keyframes authIn{from{opacity:0;transform:scale(0.96)}to{opacity:1;transform:scale(1)}}',
    // Eye button
    '#auth-eye{',
      'position:absolute;right:12px;top:50%;transform:translateY(-50%);',
      'background:none;border:none;cursor:pointer;padding:4px;',
      'color:#8b8f99;display:flex;align-items:center;justify-content:center;',
      'transition:color 0.15s;',
    '}',
    '#auth-eye:hover{color:#df98a6;}',
    '#auth-eye svg{width:16px;height:16px;pointer-events:none;}',
    // Lang toggle
    '#auth-lang{',
      'background:none;border:1px solid #2a3556;border-radius:6px;',
      'color:#8b8f99;font-family:DM Sans,system-ui,sans-serif;',
      'font-size:11px;font-weight:700;letter-spacing:0.06em;',
      'padding:4px 8px;cursor:pointer;',
      'transition:color 0.15s,border-color 0.15s;',
    '}',
    '#auth-lang:hover{color:#df98a6;border-color:#df98a6;}',
  ].join('');

  // ---------- SVG icons ----------
  function eyeOpenSVG() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
  }
  function eyeClosedSVG() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
  }

  // ---------- Build overlay ----------
  function buildOverlay() {
    var styleEl = document.createElement('style');
    styleEl.textContent = CSS;
    document.head.appendChild(styleEl);

    var overlay = document.createElement('div');
    overlay.id = 'auth-overlay';
    overlay.style.cssText = [
      'position:fixed', 'inset:0', 'z-index:99999',
      'background:#0e1626',
      'display:flex', 'align-items:center', 'justify-content:center',
      'font-family:DM Sans,system-ui,sans-serif',
      'transition:opacity 0.28s ease',
    ].join(';');

    overlay.innerHTML = [
      '<div id="auth-card" style="',
        'background:#151f36;',
        'border:1px solid #2a3556;',
        'border-radius:16px;',
        'padding:44px 40px 36px;',
        'width:380px;',
        'max-width:92vw;',
        'text-align:center;',
        'box-shadow:0 24px 64px rgba(0,0,0,0.5);',
        'animation:authIn 0.22s ease both;',
      '">',

        // Top-right lang toggle
        '<div style="text-align:right;margin-bottom:20px;">',
          '<button id="auth-lang">' + (lang === 'fr' ? 'EN' : 'FR') + '</button>',
        '</div>',

        // Brand
        '<div style="font-size:22px;font-weight:700;color:#f5f5f5;letter-spacing:-0.02em;margin-bottom:6px;">',
          'StaffUp <span style="color:#c42a4e;">×</span> Trinity',
        '</div>',
        '<p id="auth-subtitle" style="color:#8b8f99;font-size:12px;margin:0 0 32px;letter-spacing:0.12em;text-transform:uppercase;">',
          s('subtitle'),
        '</p>',

        // Password input + eye toggle
        '<div style="position:relative;">',
          '<input id="auth-input" type="password" autocomplete="current-password" style="',
            'width:100%;padding:12px 42px 12px 16px;',
            'background:#0e1626;',
            'border:1.5px solid #2a3556;',
            'border-radius:8px;',
            'color:#f5f5f5;',
            'font-family:DM Sans,system-ui,sans-serif;',
            'font-size:15px;',
            'outline:none;',
            'box-sizing:border-box;',
            'transition:border-color 0.15s;',
          '"/>',
          '<button id="auth-eye" title="" tabindex="-1">' + eyeOpenSVG() + '</button>',
        '</div>',

        // Error
        '<div id="auth-error" style="',
          'color:#c42a4e;font-size:13px;margin-top:10px;min-height:18px;',
          'opacity:0;transition:opacity 0.18s;',
        '"></div>',

        // Submit
        '<button id="auth-btn" style="',
          'width:100%;margin-top:16px;padding:13px;',
          'background:#c42a4e;color:#fff;',
          'border:none;border-radius:8px;',
          'font-family:DM Sans,system-ui,sans-serif;',
          'font-size:15px;font-weight:600;',
          'cursor:pointer;',
          'transition:background 0.15s;',
        '">' + s('submit') + '</button>',

        // Footer
        '<p id="auth-footer" style="color:#2a3556;font-size:12px;margin:22px 0 0;">',
          s('footer'),
        '</p>',

      '</div>',
    ].join('');

    return overlay;
  }

  // ---------- Apply language ----------
  function applyLang() {
    var input    = document.getElementById('auth-input');
    var subtitle = document.getElementById('auth-subtitle');
    var btn      = document.getElementById('auth-btn');
    var footer   = document.getElementById('auth-footer');
    var langBtn  = document.getElementById('auth-lang');
    var error    = document.getElementById('auth-error');

    if (input)    input.placeholder = s('placeholder');
    if (subtitle) subtitle.textContent = s('subtitle');
    if (btn)      btn.textContent = s('submit');
    if (footer)   footer.textContent = s('footer');
    if (langBtn)  langBtn.textContent = lang === 'fr' ? 'EN' : 'FR';
    // Update error text if currently visible
    if (error && parseFloat(error.style.opacity) > 0) error.textContent = s('error');
  }

  // ---------- Attempt ----------
  function attempt(overlay) {
    var input = document.getElementById('auth-input');
    var error = document.getElementById('auth-error');
    var card  = document.getElementById('auth-card');

    if (input.value === PASSWORD) {
      try { localStorage.setItem(KEY, '1'); } catch (e) {}
      overlay.style.opacity = '0';
      setTimeout(function () {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }, 300);
    } else {
      error.textContent = s('error');
      error.style.opacity = '1';
      input.style.borderColor = '#c42a4e';
      card.style.animation = 'none';
      void card.offsetWidth;
      card.style.animation = 'authShake 0.36s ease';
      input.value = '';
      input.focus();
    }
  }

  // ---------- Mount ----------
  document.addEventListener('DOMContentLoaded', function () {
    var overlay = buildOverlay();
    document.body.appendChild(overlay);

    var input   = document.getElementById('auth-input');
    var error   = document.getElementById('auth-error');
    var btn     = document.getElementById('auth-btn');
    var eye     = document.getElementById('auth-eye');
    var langBtn = document.getElementById('auth-lang');

    // Set initial placeholder
    input.placeholder = s('placeholder');

    setTimeout(function () { input.focus(); }, 50);

    // Clear error on typing
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { attempt(overlay); return; }
      error.style.opacity = '0';
      input.style.borderColor = '#2a3556';
    });

    // Submit
    btn.addEventListener('click', function () { attempt(overlay); });
    btn.addEventListener('mouseenter', function () { btn.style.background = '#a82040'; });
    btn.addEventListener('mouseleave', function () { btn.style.background = '#c42a4e'; });

    // Show / hide password
    var visible = false;
    eye.addEventListener('click', function () {
      visible = !visible;
      input.type = visible ? 'text' : 'password';
      eye.innerHTML = visible ? eyeClosedSVG() : eyeOpenSVG();
      input.focus();
    });

    // Language toggle
    langBtn.addEventListener('click', function () {
      lang = (lang === 'fr') ? 'en' : 'fr';
      try { localStorage.setItem('staffup-lang', lang); } catch (e) {}
      applyLang();
    });
  });
})();
