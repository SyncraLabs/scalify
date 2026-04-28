<?php get_header(); ?>

<div class="page-404" id="page-404">
    <div class="page-404-bg" id="page-404-bg" style="background:radial-gradient(circle at 50% 50%,rgba(108,58,237,0.15),transparent 60%)"></div>

    <div class="page-404-particles">
        <?php for ($i = 0; $i < 20; $i++):
            $top = rand(5, 95);
            $left = rand(5, 95);
            $delay = rand(0, 40) / 10;
            $dur = rand(30, 70) / 10;
        ?>
        <div class="page-404-particle" style="top:<?php echo $top; ?>%;left:<?php echo $left; ?>%;animation-delay:<?php echo $delay; ?>s;animation-duration:<?php echo $dur; ?>s;--y-drift:-<?php echo rand(20, 60); ?>px"></div>
        <?php endfor; ?>
    </div>

    <div class="page-404-content">
        <div class="page-404-number text-gradient" id="page-404-number">404</div>
        <h1>Pagina no encontrada</h1>
        <p>La pagina que buscas no existe o ha sido movida. Pero tranquilo, te ayudamos a volver.</p>
        <div class="page-404-ctas">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="btn-primary">
                <span>Volver al inicio</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position:relative;z-index:1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="<?php echo esc_url(home_url('/servicios/')); ?>" class="btn-secondary">
                Ver servicios
            </a>
        </div>
    </div>
</div>

<script>
(function() {
  // Mouse tracking glow
  var bg = document.getElementById('page-404-bg');
  if (bg) {
    window.addEventListener('mousemove', function(e) {
      var x = (e.clientX / window.innerWidth) * 100;
      var y = (e.clientY / window.innerHeight) * 100;
      bg.style.background = 'radial-gradient(circle at ' + x + '% ' + y + '%, rgba(108,58,237,0.15), transparent 60%)';
    });
  }

  // Glitch effect every 3 seconds
  var num = document.getElementById('page-404-number');
  if (num) {
    setInterval(function() {
      num.classList.add('glitch');
      setTimeout(function() {
        num.classList.remove('glitch');
      }, 200);
    }, 3000);
  }
})();
</script>

<?php get_footer(); ?>
