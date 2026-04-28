/**
 * ScalifyLabs - Testimonials Carousel JS
 * Auto-advance, manual nav, dot indicators
 */

(function() {
  'use strict';

  var ScalifyCarousel = {
    testimonials: [
      {
        text: 'Nos redisenaron la web y gestionaron el SEO. En 3 meses duplicamos las visitas. Equipo cercano y siempre disponible.',
        author: 'Maria G.',
        role: 'CEO, Marca de Moda',
        location: 'Tenerife',
        stars: 5
      },
      {
        text: 'El enfoque estrategico de ScalifyLabs marco la diferencia. Todo el contenido alineado con nuestros objetivos. Conversiones arriba significativamente.',
        author: 'Carlos R.',
        role: 'Director, Agencia de Viajes',
        location: 'Canarias',
        stars: 5
      },
      {
        text: 'Pasamos de no tener presencia en redes a tener una comunidad activa con reservas semanales directas desde Instagram.',
        author: 'Ana M.',
        role: 'Propietaria, Restaurante',
        location: 'Las Palmas',
        stars: 5
      },
      {
        text: 'Solucion integral: web, redes, SEO y soporte tecnico. Un acompanamiento real que se nota en los resultados.',
        author: 'David L.',
        role: 'Emprendedor Digital',
        location: 'Barcelona',
        stars: 5
      }
    ],

    current: 0,
    autoTimer: null,
    contentEl: null,
    dotsEl: null,

    init: function() {
      this.contentEl = document.getElementById('testimonial-content');
      this.dotsEl = document.getElementById('testimonial-dots');
      if (!this.contentEl || !this.dotsEl) return;

      this.render();
      this.renderDots();
      this.startAuto();
    },

    render: function() {
      var t = this.testimonials[this.current];

      // Stars
      var starsHtml = '';
      for (var i = 0; i < t.stars; i++) {
        starsHtml += '<svg width="16" height="16" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
      }

      this.contentEl.innerHTML =
        '<div class="testimonial-slide">' +
          '<div class="testimonial-stars">' + starsHtml + '</div>' +
          '<p class="testimonial-text">&ldquo;' + t.text + '&rdquo;</p>' +
          '<div class="testimonial-author">' +
            '<div class="testimonial-avatar bg-gradient-brand">' + t.author.charAt(0) + '</div>' +
            '<div>' +
              '<p class="testimonial-name">' + t.author + '</p>' +
              '<p class="testimonial-role">' + t.role + ' &middot; ' + t.location + '</p>' +
            '</div>' +
          '</div>' +
        '</div>';
    },

    renderDots: function() {
      var html = '';
      var self = this;
      for (var i = 0; i < this.testimonials.length; i++) {
        var cls = i === this.current ? 'testimonial-dot active' : 'testimonial-dot inactive';
        html += '<button class="' + cls + '" data-index="' + i + '"></button>';
      }
      this.dotsEl.innerHTML = html;

      // Add click handlers
      this.dotsEl.querySelectorAll('.testimonial-dot').forEach(function(dot) {
        dot.addEventListener('click', function() {
          self.goTo(parseInt(this.getAttribute('data-index'), 10));
        });
      });
    },

    goTo: function(index) {
      this.current = index;
      this.render();
      this.renderDots();
      this.resetAuto();
    },

    next: function() {
      this.current = (this.current + 1) % this.testimonials.length;
      this.render();
      this.renderDots();
      this.resetAuto();
    },

    prev: function() {
      this.current = (this.current - 1 + this.testimonials.length) % this.testimonials.length;
      this.render();
      this.renderDots();
      this.resetAuto();
    },

    startAuto: function() {
      var self = this;
      this.autoTimer = setInterval(function() {
        self.next();
      }, 6000);
    },

    resetAuto: function() {
      if (this.autoTimer) clearInterval(this.autoTimer);
      this.startAuto();
    }
  };

  // Expose globally
  window.ScalifyCarousel = ScalifyCarousel;

  document.addEventListener('DOMContentLoaded', function() {
    ScalifyCarousel.init();
  });

})();
