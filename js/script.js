// ==========================================================================
// Michal Bartek — Portfolio interactions
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Nav: scrolled state ---------- */
  const nav = document.getElementById('siteNav');
  const onScroll = () => {
    if (window.scrollY > 12) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  const closeMenu = () => {
    navToggle.classList.remove('is-open');
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  /* ---------- HUD coordinate readout ----------
     A small nod to GIS viewer status bars: tracks pointer position
     within the hero and maps it to a plausible lat/lon range
     centered on Wageningen, NL. Purely decorative. */
  const hero = document.querySelector('.hero');
  const hudCoords = document.getElementById('hudCoords');

  const LAT_MIN = 51.955, LAT_MAX = 52.015;   // roughly north-south range
  const LON_MIN = 5.595,  LON_MAX = 5.735;    // roughly east-west range

  if (hero && hudCoords && window.matchMedia('(hover: hover)').matches) {
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const xRatio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
      const yRatio = Math.min(Math.max((e.clientY - rect.top) / rect.height, 0), 1);

      const lon = LON_MIN + xRatio * (LON_MAX - LON_MIN);
      const lat = LAT_MAX - yRatio * (LAT_MAX - LAT_MIN);

      hudCoords.textContent = `${lat.toFixed(5)}\u00B0 N   ${lon.toFixed(5)}\u00B0 E`;
    });
  }

  /* ---------- Contact form: mailto fallback ----------
     No backend is included in this static site. Submitting opens
     the visitor's email client with the message pre-filled.
     See README for options to wire this to a real form handler. */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

      window.location.href = `mailto:michal.bartek@wur.nl?subject=${subject}&body=${body}`;
    });
  }

});
