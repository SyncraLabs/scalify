<?php
/**
 * Template Name: Servicios Hub
 */
get_header();
?>

<section class="hero" style="min-height:auto;padding-top:8rem;padding-bottom:4rem;">
    <div class="hero-bg">
        <div class="aurora-1"></div>
        <div class="aurora-2"></div>
        <div class="vignette"></div>
    </div>
    <div style="position:relative;z-index:10;max-width:1280px;margin:0 auto;padding:0 1rem;text-align:center;">
        <div class="reveal">
            <span class="section-badge purple">NUESTROS SERVICIOS</span>
            <h1 class="section-title" style="font-size:2.5rem;">Soluciones digitales <span class="text-gradient">que escalan</span></h1>
            <p class="section-subtitle">Cada servicio esta disenado para generar resultados medibles. Elige el que necesitas o combinalos todos.</p>
        </div>
    </div>
</section>

<section class="section-padding" style="position:relative;padding-top:2rem;">
    <div style="max-width:1280px;margin:0 auto;padding:0 1rem;">
        <div class="services-grid stagger-children">
            <?php
            $services = [
                ['icon'=>'globe','title'=>'Desarrollo Web','desc'=>'Webs rapidas, modernas y optimizadas para convertir. Desde landing pages hasta e-commerce completos.','color'=>'#6C3AED','href'=>'/servicios/desarrollo-web/','tags'=>['Next.js / React','WordPress','E-commerce','Responsive']],
                ['icon'=>'search','title'=>'Posicionamiento SEO','desc'=>'Estrategia SEO completa para dominar las primeras posiciones de Google con trafico cualificado.','color'=>'#3B82F6','href'=>'/servicios/seo/','tags'=>['SEO Tecnico','Link Building','Contenidos','Local SEO']],
                ['icon'=>'share-2','title'=>'Redes Sociales','desc'=>'Gestion integral de redes con estrategia de contenidos, comunidad y crecimiento organico.','color'=>'#EC4899','href'=>'/servicios/redes-sociales/','tags'=>['Instagram','TikTok','LinkedIn','Contenidos']],
                ['icon'=>'megaphone','title'=>'Campanas Ads','desc'=>'Publicidad digital en Google, Meta y TikTok. Cada euro optimizado para maximo retorno.','color'=>'#8B5CF6','href'=>'/servicios/ads/','tags'=>['Google Ads','Meta Ads','TikTok Ads','Retargeting']],
                ['icon'=>'code-2','title'=>'Programacion a Medida','desc'=>'Desarrollo de aplicaciones, plataformas SaaS, APIs e integraciones personalizadas.','color'=>'#06B6D4','href'=>'/servicios/programacion/','tags'=>['Apps Web','SaaS','APIs','Integraciones']],
                ['icon'=>'trending-up','title'=>'Embudo de Ventas','desc'=>'Automatizacion del proceso de venta: desde captacion hasta cierre y fidelizacion.','color'=>'#F59E0B','href'=>'/servicios/embudo-ventas/','tags'=>['Lead Magnets','Email Marketing','CRM','Automatizacion']],
                ['icon'=>'palette','title'=>'Diseno Grafico','desc'=>'Identidad visual, branding y piezas graficas que transmiten profesionalidad y confianza.','color'=>'#EF4444','href'=>'/servicios/diseno-grafico/','tags'=>['Branding','Social Media','Packaging','UI/UX']],
            ];
            foreach ($services as $s):
            ?>
            <a href="<?php echo esc_url(home_url($s['href'])); ?>" class="service-card glass-card reveal" style="padding:1.5rem;">
                <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:1rem;">
                    <div class="service-icon-wrap" style="background:<?php echo $s['color']; ?>15" data-icon="<?php echo $s['icon']; ?>" data-color="<?php echo $s['color']; ?>"></div>
                    <svg class="service-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </div>
                <h3 class="service-name"><?php echo $s['title']; ?></h3>
                <p class="service-desc" style="margin-bottom:1rem;"><?php echo $s['desc']; ?></p>
                <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
                    <?php foreach ($s['tags'] as $tag): ?>
                    <span style="font-size:0.7rem;padding:0.25rem 0.5rem;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);color:#9ca3af;"><?php echo $tag; ?></span>
                    <?php endforeach; ?>
                </div>
            </a>
            <?php endforeach; ?>
        </div>
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
                <h2 class="cta-title">Hablemos de <span class="text-gradient">tu proyecto</span></h2>
                <p class="cta-subtitle">Cuentanos que necesitas y te proponemos la mejor estrategia. Sin compromiso.</p>
                <div class="cta-buttons">
                    <button class="btn-primary" onclick="ScalifyContact.open()">
                        <span>Agenda tu consulta gratis</span>
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
