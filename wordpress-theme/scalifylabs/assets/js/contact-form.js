/**
 * ScalifyLabs - Contact Form JS
 * Modal open/close, form submission to n8n webhook, confetti
 */

(function() {
  'use strict';

  var ScalifyContact = {
    overlay: null,
    form: null,
    formState: null,
    successState: null,
    errorEl: null,
    submitBtn: null,

    init: function() {
      this.overlay = document.getElementById('contact-overlay');
      this.form = document.getElementById('scalify-contact-form');
      this.formState = document.getElementById('contact-form-state');
      this.successState = document.getElementById('contact-success-state');
      this.errorEl = document.getElementById('contact-error');
      this.submitBtn = document.getElementById('contact-submit');

      if (this.form) {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
      }

      // ESC key to close
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          ScalifyContact.close();
        }
      });
    },

    open: function() {
      if (this.overlay) {
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Reset form
        this.reset();
      }
    },

    close: function() {
      if (this.overlay) {
        this.overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    },

    reset: function() {
      if (this.form) this.form.reset();
      if (this.formState) this.formState.style.display = '';
      if (this.successState) this.successState.style.display = 'none';
      if (this.errorEl) this.errorEl.style.display = 'none';
      if (this.submitBtn) {
        this.submitBtn.disabled = false;
        this.submitBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position:relative;z-index:1"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg><span>Enviar mensaje</span>';
      }
    },

    handleSubmit: function(e) {
      e.preventDefault();

      var nombre = document.getElementById('cf-nombre').value.trim();
      var email = document.getElementById('cf-email').value.trim();
      var mensaje = document.getElementById('cf-mensaje').value.trim();

      if (!nombre || !email || !mensaje) return;

      // Show loading
      this.submitBtn.disabled = true;
      this.submitBtn.innerHTML = '<svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position:relative;z-index:1"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg><span>Enviando...</span>';
      if (this.errorEl) this.errorEl.style.display = 'none';

      var webhookUrl = (typeof scalifyData !== 'undefined' && scalifyData.webhookUrl)
        ? scalifyData.webhookUrl
        : 'https://n8n.srv1256702.hstgr.cloud/webhook/scalifyformweb1';

      var self = this;

      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre: nombre, email: email, mensaje: mensaje })
      })
      .then(function(res) {
        if (!res.ok) throw new Error('Error');
        // Success
        self.formState.style.display = 'none';
        self.successState.style.display = '';
        self.fireConfetti();
      })
      .catch(function() {
        // Error
        if (self.errorEl) {
          self.errorEl.textContent = 'Hubo un error. Intentalo de nuevo o escribenos por WhatsApp.';
          self.errorEl.style.display = '';
        }
        self.submitBtn.disabled = false;
        self.submitBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position:relative;z-index:1"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg><span>Enviar mensaje</span>';
      });
    },

    fireConfetti: function() {
      if (typeof confetti === 'undefined') return;

      var colors = ['#6C3AED', '#06B6D4', '#F472B6', '#FACC15'];
      var end = Date.now() + 1500;

      (function frame() {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.6 },
          colors: colors
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.6 },
          colors: colors
        });
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  };

  // Expose globally
  window.ScalifyContact = ScalifyContact;

  document.addEventListener('DOMContentLoaded', function() {
    ScalifyContact.init();
  });

})();
