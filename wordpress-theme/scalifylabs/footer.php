</main>

<?php if (!scalify_elementor_footer()): ?>
<!-- ═══ FOOTER ═══ -->
<footer class="site-footer">
    <div class="footer-glow"></div>

    <div class="footer-inner">
        <div class="footer-grid">
            <!-- Brand -->
            <div class="footer-brand">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="footer-logo">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg" alt="ScalifyLabs" width="32" height="32">
                    <span class="footer-logo-text">Scalify<span class="text-gradient">Labs</span></span>
                </a>
                <p class="footer-desc">Tu aliado estrategico digital. Escalamos tu negocio con soluciones integrales que generan resultados reales.</p>
                <div class="footer-contact">
                    <a href="mailto:info@scalifylabs.es">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        info@scalifylabs.es
                    </a>
                    <a href="tel:+34604561592">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        +34 604 56 15 92
                    </a>
                    <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        Canarias &middot; Barcelona &middot; Madrid
                    </span>
                </div>
            </div>

            <!-- Servicios -->
            <div>
                <h4 class="footer-col-title">Servicios</h4>
                <div class="footer-links">
                    <a href="<?php echo esc_url(home_url('/servicios/desarrollo-web/')); ?>" class="footer-link">Desarrollo Web <svg class="arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a>
                    <a href="<?php echo esc_url(home_url('/servicios/seo/')); ?>" class="footer-link">Posicionamiento SEO <svg class="arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a>
                    <a href="<?php echo esc_url(home_url('/servicios/redes-sociales/')); ?>" class="footer-link">Redes Sociales <svg class="arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a>
                    <a href="<?php echo esc_url(home_url('/servicios/ads/')); ?>" class="footer-link">Campanas Ads <svg class="arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a>
                    <a href="<?php echo esc_url(home_url('/servicios/embudo-ventas/')); ?>" class="footer-link">Embudo de Ventas <svg class="arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a>
                    <a href="<?php echo esc_url(home_url('/servicios/diseno-grafico/')); ?>" class="footer-link">Diseno Grafico <svg class="arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a>
                </div>
            </div>

            <!-- Empresa -->
            <div>
                <h4 class="footer-col-title">Empresa</h4>
                <div class="footer-links">
                    <a href="<?php echo esc_url(home_url('/nosotros/')); ?>" class="footer-link">Sobre Nosotros <svg class="arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a>
                    <a href="<?php echo esc_url(home_url('/casos/')); ?>" class="footer-link">Casos de Exito <svg class="arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a>
                    <a href="#" class="footer-link" onclick="event.preventDefault();ScalifyContact.open();">Contacto <svg class="arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a>
                </div>
            </div>

            <!-- Legal -->
            <div>
                <h4 class="footer-col-title">Legal</h4>
                <div class="footer-links">
                    <a href="<?php echo esc_url(home_url('/legal/aviso-legal/')); ?>" class="footer-link">Aviso Legal</a>
                    <a href="<?php echo esc_url(home_url('/legal/privacidad/')); ?>" class="footer-link">Politica de Privacidad</a>
                    <a href="<?php echo esc_url(home_url('/legal/cookies/')); ?>" class="footer-link">Politica de Cookies</a>
                </div>
            </div>
        </div>

        <!-- Bottom bar -->
        <div class="footer-bottom">
            <p class="footer-copy">&copy; <?php echo date('Y'); ?> ScalifyLabs. Todos los derechos reservados.</p>
            <div class="footer-socials">
                <a href="https://www.instagram.com/scalifylabsmarketing/" target="_blank" rel="noopener noreferrer" class="footer-social">Instagram</a>
                <a href="https://www.instagram.com/scalifylabsmarketing/" target="_blank" rel="noopener noreferrer" class="footer-social">Facebook</a>
                <a href="https://www.instagram.com/scalifylabsmarketing/" target="_blank" rel="noopener noreferrer" class="footer-social">TikTok</a>
            </div>
        </div>
    </div>
</footer>
<?php endif; ?>

<!-- ═══ WHATSAPP BUTTON ═══ -->
<a href="https://wa.me/34604561592" target="_blank" rel="noopener noreferrer" class="whatsapp-btn" aria-label="WhatsApp">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
    <span class="whatsapp-pulse"></span>
    <span class="whatsapp-tooltip">Hablamos? Escribenos!</span>
</a>

<?php wp_footer(); ?>
</body>
</html>
