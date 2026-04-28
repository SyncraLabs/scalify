/**
 * ScalifyLabs - Animations JS
 * Typing effect, animated counters
 */

(function() {
  'use strict';

  /* ═══ TYPING EFFECT ═══ */
  var TypingEffect = {
    words: ['escalar', 'facturar', 'crecer', 'dominar', 'convertir'],
    speed: 90,
    pause: 2200,
    deleteSpeed: 45,
    currentWord: 0,
    currentChar: 0,
    isDeleting: false,
    element: null,

    init: function() {
      this.element = document.getElementById('typing-text');
      if (!this.element) return;
      this.type();
    },

    type: function() {
      var self = this;
      var word = this.words[this.currentWord];

      if (this.isDeleting) {
        this.currentChar--;
        this.element.textContent = word.substring(0, this.currentChar);

        if (this.currentChar === 0) {
          this.isDeleting = false;
          this.currentWord = (this.currentWord + 1) % this.words.length;
          setTimeout(function() { self.type(); }, self.speed);
          return;
        }

        setTimeout(function() { self.type(); }, self.deleteSpeed);
      } else {
        this.currentChar++;
        this.element.textContent = word.substring(0, this.currentChar);

        if (this.currentChar === word.length) {
          setTimeout(function() {
            self.isDeleting = true;
            self.type();
          }, self.pause);
          return;
        }

        setTimeout(function() { self.type(); }, self.speed);
      }
    }
  };

  /* ═══ ANIMATED COUNTERS ═══ */
  function animateCounters() {
    var counters = document.querySelectorAll('.stat-value[data-target]');
    if (!counters.length || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-target'), 10);
          var suffix = el.getAttribute('data-suffix') || '';
          var duration = 2000;
          var start = 0;
          var startTime = null;

          function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            // easeOut
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = Math.round(eased * target);
            el.textContent = current + suffix;

            if (progress < 1) {
              requestAnimationFrame(step);
            }
          }

          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function(counter) {
      observer.observe(counter);
    });
  }

  /* ═══ INIT ═══ */
  document.addEventListener('DOMContentLoaded', function() {
    TypingEffect.init();
    animateCounters();
  });

})();
