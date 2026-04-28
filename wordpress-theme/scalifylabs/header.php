<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg">
    <?php wp_head(); ?>
</head>
<body <?php body_class('noise'); ?>>
<?php wp_body_open(); ?>

<?php if (!scalify_elementor_header_footer()): ?>
<!-- ═══ NAVBAR ═══ -->
<header class="site-header" id="site-header">
    <nav class="nav-inner">
        <!-- Logo -->
        <a href="<?php echo esc_url(home_url('/')); ?>" class="nav-logo">
            <div style="position:relative;">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg" alt="ScalifyLabs" width="36" height="36">
            </div>
            <span class="nav-logo-text">Scalify<span class="text-gradient">Labs</span></span>
        </a>

        <!-- Desktop nav -->
        <div class="nav-links">
            <!-- Servicios dropdown -->
            <div class="nav-item">
                <a href="<?php echo esc_url(home_url('/servicios/')); ?>" class="nav-link">
                    Servicios
                    <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </a>
                <div class="nav-dropdown">
                    <a href="<?php echo esc_url(home_url('/servicios/desarrollo-web/')); ?>">
                        <span>Desarrollo Web</span>
                        <svg class="arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                    <a href="<?php echo esc_url(home_url('/servicios/seo/')); ?>">
                        <span>Posicionamiento SEO</span>
                        <svg class="arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                    <a href="<?php echo esc_url(home_url('/servicios/redes-sociales/')); ?>">
                        <span>Redes Sociales</span>
                        <svg class="arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                    <a href="<?php echo esc_url(home_url('/servicios/ads/')); ?>">
                        <span>Campanas Ads</span>
                        <svg class="arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                    <a href="<?php echo esc_url(home_url('/servicios/programacion/')); ?>">
                        <span>Programacion a Medida</span>
                        <svg class="arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                    <a href="<?php echo esc_url(home_url('/servicios/diseno-grafico/')); ?>">
                        <span>Diseno Grafico</span>
                        <svg class="arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                    <a href="<?php echo esc_url(home_url('/servicios/embudo-ventas/')); ?>">
                        <span>Embudo de Ventas</span>
                        <svg class="arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                </div>
            </div>

            <a href="<?php echo esc_url(home_url('/casos/')); ?>" class="nav-link">Casos de Exito</a>
            <a href="<?php echo esc_url(home_url('/nosotros/')); ?>" class="nav-link">Sobre Nosotros</a>
        </div>

        <!-- Right side -->
        <div style="display:flex;align-items:center;gap:1rem;">
            <button class="nav-cta btn-primary" onclick="ScalifyContact.open()" style="font-size:0.875rem;">
                <span>Hablemos</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position:relative;z-index:1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>

            <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle menu">
                <svg id="menu-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                <svg id="close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>
    </nav>
</header>

<!-- ═══ MOBILE MENU ═══ -->
<div class="mobile-overlay" id="mobile-overlay">
    <div class="mobile-backdrop" id="mobile-backdrop"></div>
    <div class="mobile-panel">
        <div style="display:flex;flex-direction:column;gap:0.5rem;">
            <a href="<?php echo esc_url(home_url('/servicios/')); ?>" class="mobile-nav-link" onclick="closeMobileMenu()">Servicios</a>
            <div style="margin-left:1rem;display:flex;flex-direction:column;gap:0.25rem;">
                <a href="<?php echo esc_url(home_url('/servicios/desarrollo-web/')); ?>" class="mobile-sub-link" onclick="closeMobileMenu()">Desarrollo Web</a>
                <a href="<?php echo esc_url(home_url('/servicios/seo/')); ?>" class="mobile-sub-link" onclick="closeMobileMenu()">Posicionamiento SEO</a>
                <a href="<?php echo esc_url(home_url('/servicios/redes-sociales/')); ?>" class="mobile-sub-link" onclick="closeMobileMenu()">Redes Sociales</a>
                <a href="<?php echo esc_url(home_url('/servicios/ads/')); ?>" class="mobile-sub-link" onclick="closeMobileMenu()">Campanas Ads</a>
                <a href="<?php echo esc_url(home_url('/servicios/programacion/')); ?>" class="mobile-sub-link" onclick="closeMobileMenu()">Programacion a Medida</a>
                <a href="<?php echo esc_url(home_url('/servicios/diseno-grafico/')); ?>" class="mobile-sub-link" onclick="closeMobileMenu()">Diseno Grafico</a>
                <a href="<?php echo esc_url(home_url('/servicios/embudo-ventas/')); ?>" class="mobile-sub-link" onclick="closeMobileMenu()">Embudo de Ventas</a>
            </div>
            <a href="<?php echo esc_url(home_url('/casos/')); ?>" class="mobile-nav-link" onclick="closeMobileMenu()">Casos de Exito</a>
            <a href="<?php echo esc_url(home_url('/nosotros/')); ?>" class="mobile-nav-link" onclick="closeMobileMenu()">Sobre Nosotros</a>
        </div>
        <div style="margin-top:2rem;">
            <button class="btn-primary" style="width:100%;justify-content:center;font-size:0.875rem;" onclick="closeMobileMenu();ScalifyContact.open();">
                <span>Hablemos</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position:relative;z-index:1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
        </div>
    </div>
</div>
<?php endif; ?>

<!-- ═══ CONTACT FORM MODAL ═══ -->
<div class="contact-overlay" id="contact-overlay">
    <div class="contact-backdrop" onclick="ScalifyContact.close()"></div>
    <div class="contact-card">
        <div class="contact-card-bg"></div>
        <div class="contact-card-overlay"></div>
        <div class="contact-card-orb-1"></div>
        <div class="contact-card-orb-2"></div>

        <div class="contact-content">
            <button class="contact-close" onclick="ScalifyContact.close()" aria-label="Cerrar">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <!-- Form state -->
            <div id="contact-form-state">
                <h3 class="contact-title" style="font-family:var(--font-heading);">Cuentanos tu proyecto</h3>
                <p class="contact-subtitle">Rellena el formulario y te respondemos en menos de 24h.</p>

                <form id="scalify-contact-form" class="contact-form">
                    <div>
                        <label class="contact-label" for="cf-nombre">Nombre completo</label>
                        <input class="contact-input" type="text" id="cf-nombre" name="nombre" placeholder="Tu nombre" required>
                    </div>
                    <div>
                        <label class="contact-label" for="cf-email">Email</label>
                        <input class="contact-input" type="email" id="cf-email" name="email" placeholder="tu@email.com" required>
                    </div>
                    <div>
                        <label class="contact-label" for="cf-mensaje">Cuentanos que proyecto tienes en mente</label>
                        <textarea class="contact-textarea" id="cf-mensaje" name="mensaje" rows="4" placeholder="Describe brevemente tu proyecto, objetivos o lo que necesitas..." required></textarea>
                    </div>
                    <p class="contact-error" id="contact-error" style="display:none;"></p>
                    <button type="submit" class="btn-primary contact-submit" id="contact-submit">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position:relative;z-index:1"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        <span>Enviar mensaje</span>
                    </button>
                </form>
            </div>

            <!-- Success state -->
            <div id="contact-success-state" style="display:none;">
                <div class="contact-success">
                    <div class="contact-success-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </div>
                    <h3 style="font-family:var(--font-heading);">Mensaje enviado!</h3>
                    <p>Nos pondremos en contacto contigo muy pronto.</p>
                    <button class="btn-primary" onclick="ScalifyContact.close()" style="font-size:0.875rem;">
                        <span>Cerrar</span>
                    </button>
                </div>
            </div>
        </div>

        <div class="gradient-border" style="position:absolute;inset:0;border-radius:1rem;pointer-events:none;"></div>
    </div>
</div>

<main>
