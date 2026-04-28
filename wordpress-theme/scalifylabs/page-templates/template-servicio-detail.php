<?php
/**
 * Template Name: Servicio Detalle
 *
 * Template generico para las paginas individuales de servicios.
 * El contenido se edita desde el editor de WordPress o Elementor.
 */
get_header();
?>

<section class="hero" style="min-height:auto;padding-top:8rem;padding-bottom:4rem;">
    <div class="hero-bg">
        <div class="aurora-1"></div>
        <div class="aurora-2"></div>
        <div class="vignette"></div>
    </div>
    <div style="position:relative;z-index:10;max-width:1280px;margin:0 auto;padding:0 1rem;">
        <?php while (have_posts()): the_post(); ?>
        <div class="reveal" style="text-align:center;">
            <a href="<?php echo esc_url(home_url('/servicios/')); ?>" style="display:inline-flex;align-items:center;gap:0.5rem;font-size:0.875rem;color:#9ca3af;margin-bottom:1.5rem;transition:color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#9ca3af'">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Volver a Servicios
            </a>
            <h1 class="section-title" style="font-size:2.5rem;"><?php the_title(); ?></h1>
        </div>

        <div class="reveal" style="transition-delay:0.2s;max-width:900px;margin:2rem auto 0;">
            <div style="color:#d1d5db;line-height:1.8;">
                <style>
                    .service-content h2 { font-family: var(--font-heading); font-size: 1.5rem; color: white; margin: 3rem 0 1rem; }
                    .service-content h3 { font-family: var(--font-heading); font-size: 1.2rem; color: white; margin: 2rem 0 0.75rem; }
                    .service-content p { margin-bottom: 1.25rem; color: #9ca3af; }
                    .service-content ul { margin-bottom: 1.25rem; padding-left: 1.5rem; }
                    .service-content li { margin-bottom: 0.5rem; color: #9ca3af; list-style: disc; }
                    .service-content strong { color: white; }
                    .service-content a { color: #6C3AED; transition: color 0.3s; }
                    .service-content a:hover { color: #a78bfa; }
                    .service-content img { border-radius: 12px; margin: 1.5rem 0; }
                    .service-content blockquote { border-left: 3px solid #6C3AED; padding: 1rem 1.5rem; margin: 1.5rem 0; background: rgba(108,58,237,0.05); border-radius: 0 12px 12px 0; }
                    .service-content blockquote p { color: #d1d5db; font-style: italic; margin-bottom: 0; }
                </style>
                <div class="service-content">
                    <?php the_content(); ?>
                </div>
            </div>
        </div>
        <?php endwhile; ?>
    </div>
</section>

<!-- CTA -->
<section class="section-padding">
    <div class="cta-wrapper">
        <div class="cta-card reveal">
            <div class="cta-bg"></div>
            <div class="glass" style="position:absolute;inset:0;"></div>
            <div class="cta-orb-1"></div>
            <div class="cta-orb-2"></div>
            <div class="cta-content">
                <h2 class="cta-title">Te interesa este <span class="text-gradient">servicio?</span></h2>
                <p class="cta-subtitle">Cuentanos tu proyecto y te proponemos un plan a medida. Sin compromiso.</p>
                <div class="cta-buttons">
                    <button class="btn-primary" onclick="ScalifyContact.open()">
                        <span>Solicitar presupuesto</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position:relative;z-index:1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                    <a href="https://wa.me/34604561592" target="_blank" rel="noopener noreferrer" class="btn-secondary">&#128172; WhatsApp directo</a>
                </div>
            </div>
            <div class="cta-border gradient-border" style="border-radius:1.5rem;"></div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
