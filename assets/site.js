// PT Zul Labs Teknologi — tema, bahasa, menu, efek
(function () {
  var root = document.documentElement;
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  // Tema
  var savedTheme = store('theme-pref');
  if (savedTheme) root.setAttribute('data-theme', savedTheme);
  var themeBtn = document.getElementById('themeBtn');
  if (themeBtn) themeBtn.addEventListener('click', function () {
    var c = root.getAttribute('data-theme');
    var isDark = c === 'dark' || (!c && !matchMedia('(prefers-color-scheme: light)').matches);
    var n = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', n);
    store('theme-pref', n);
  });

  // Bahasa (default Indonesia)
  var I18N = window.I18N || {}, I18N_HTML = window.I18N_HTML || {};
  function setLang(lang) {
    var idx = lang === 'en' ? 1 : 0;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var t = I18N[el.getAttribute('data-i18n')]; if (t) el.textContent = t[idx];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var t = I18N_HTML[el.getAttribute('data-i18n-html')]; if (t) el.innerHTML = t[idx];
    });
    document.querySelectorAll('.lang-block').forEach(function (el) {
      el.hidden = el.getAttribute('lang') !== lang;
    });
    var b = document.getElementById('langBtn');
    if (b) b.innerHTML = lang === 'en' ? '<span>ID</span>|<span class="on">EN</span>' : '<span class="on">ID</span>|<span>EN</span>';
    root.setAttribute('lang', lang);
    store('lang-pref', lang);
  }
  var lang = store('lang-pref') || 'id';
  setLang(lang);
  var langBtn = document.getElementById('langBtn');
  if (langBtn) langBtn.addEventListener('click', function () {
    lang = lang === 'id' ? 'en' : 'id'; setLang(lang);
  });

  // Menu mobile
  var menuBtn = document.getElementById('menuBtn'), links = document.getElementById('navLinks');
  if (menuBtn && links) {
    menuBtn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); });
    });
  }

  // GlowCard
  document.querySelectorAll('.glow-card').forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var r = card.getBoundingClientRect();
      var a = Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180 / Math.PI + 180;
      card.style.setProperty('--start', a + 'deg');
    });
  });

  // Reveal
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: .06, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('visible'); });
  }

  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
})();
