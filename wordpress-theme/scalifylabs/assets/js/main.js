/**
 * ScalifyLabs - Main JS
 * Navbar scroll, mobile menu, scroll reveal, icon rendering, particles
 */

(function() {
  'use strict';

  /* ═══ NAVBAR SCROLL DETECTION ═══ */
  const header = document.getElementById('site-header');
  if (header) {
    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(function() {
          header.classList.toggle('scrolled', window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ═══ MOBILE MENU ═══ */
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileBackdrop = document.getElementById('mobile-backdrop');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  function openMobileMenu() {
    if (mobileOverlay) {
      mobileOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (menuIcon) menuIcon.style.display = 'none';
      if (closeIcon) closeIcon.style.display = 'block';
    }
  }

  window.closeMobileMenu = function() {
    if (mobileOverlay) {
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
      if (menuIcon) menuIcon.style.display = 'block';
      if (closeIcon) closeIcon.style.display = 'none';
    }
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
      if (mobileOverlay && mobileOverlay.classList.contains('active')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMobileMenu);
  }

  /* ═══ SCROLL REVEAL (IntersectionObserver) ═══ */
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if (revealElements.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '-50px'
    });

    revealElements.forEach(function(el) {
      observer.observe(el);
    });
  }

  /* ═══ LUCIDE ICONS RENDERING ═══ */
  function renderIcons() {
    if (typeof lucide === 'undefined') return;

    // Render icons into data-icon elements
    document.querySelectorAll('[data-icon]').forEach(function(el) {
      var iconName = el.getAttribute('data-icon');
      var color = el.getAttribute('data-color') || 'currentColor';
      var size = el.getAttribute('data-size') || '22';

      // Convert kebab-case to PascalCase for lucide
      var iconKey = iconName.split('-').map(function(w) {
        return w.charAt(0).toUpperCase() + w.slice(1);
      }).join('');

      if (lucide.icons && lucide.icons[iconKey]) {
        var svg = lucide.icons[iconKey].toSvg({
          color: color,
          width: size,
          height: size,
          'stroke-width': 2
        });
        el.innerHTML = svg;
      }
    });

    // Also run lucide.createIcons for any i-lucide elements
    if (lucide.createIcons) {
      lucide.createIcons();
    }
  }

  // Wait for lucide to load
  if (typeof lucide !== 'undefined') {
    renderIcons();
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(renderIcons, 100);
    });
  }

  /* ═══ HERO PARTICLES ═══ */
  function createParticles() {
    var container = document.getElementById('hero-particles');
    if (!container) return;

    function seededRandom(seed) {
      var x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    }

    for (var i = 0; i < 12; i++) {
      var particle = document.createElement('div');
      particle.className = 'particle';
      var top = seededRandom(i * 7 + 1) * 100;
      var left = seededRandom(i * 13 + 3) * 100;
      var size = 1 + seededRandom(i * 3 + 5) * 2;
      var yDrift = -(30 + seededRandom(i * 11 + 7) * 50);
      var dur = 4 + seededRandom(i * 17 + 9) * 5;
      var delay = seededRandom(i * 19 + 11) * 4;

      particle.style.cssText = 'top:' + top + '%;left:' + left + '%;width:' + size + 'px;height:' + size + 'px;animation-duration:' + dur + 's;animation-delay:' + delay + 's;--y-drift:' + yDrift + 'px;';
      container.appendChild(particle);
    }
  }

  /* ═══ DASHBOARD CHART ANIMATION ═══ */
  function animateDashboard() {
    // Animate chart bars
    var chartBars = document.querySelectorAll('.chart-bar[data-height]');
    chartBars.forEach(function(bar, i) {
      setTimeout(function() {
        bar.style.height = bar.getAttribute('data-height') + '%';
      }, 1200 + i * 80);
    });

    // Animate channel bars
    var channelBars = document.querySelectorAll('.channel-bar-fill[data-width]');
    channelBars.forEach(function(bar, i) {
      setTimeout(function() {
        bar.style.width = bar.getAttribute('data-width') + '%';
      }, 1400 + i * 100);
    });
  }

  /* ═══ INIT ═══ */
  document.addEventListener('DOMContentLoaded', function() {
    createParticles();

    // Animate dashboard when it comes into view
    var dashboard = document.querySelector('.dashboard-mockup');
    if (dashboard && 'IntersectionObserver' in window) {
      var dashObs = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
          animateDashboard();
          dashObs.unobserve(dashboard);
        }
      }, { threshold: 0.3 });
      dashObs.observe(dashboard);
    }

    // Re-render icons after a delay (in case lucide loads late)
    setTimeout(renderIcons, 500);
  });

  /* ═══ HIDE MOBILE ELEMENTS ═══ */
  var style = document.createElement('style');
  style.textContent = '@media(max-width:639px){.hide-mobile{display:none!important}}';
  document.head.appendChild(style);

})();
