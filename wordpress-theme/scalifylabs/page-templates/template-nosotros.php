<?php
/**
 * Template Name: Sobre Nosotros
 */
get_header();
?>

<section class="hero" style="min-height:auto;padding-top:8rem;padding-bottom:4rem;">
    <div class="hero-bg">
        <div class="aurora-1"></div>
        <div class="aurora-3"></div>
        <div class="vignette"></div>
    </div>
    <div style="position:relative;z-index:10;max-width:1280px;margin:0 auto;padding:0 1rem;text-align:center;">
        <div class="reveal">
            <span class="section-badge blue">SOBRE NOSOTROS</span>
            <h1 class="section-title" style="font-size:2.5rem;">El equipo detras de <span class="text-gradient">tus resultados</span></h1>
            <p class="section-subtitle">Somos un equipo multidisciplinar de estrategas, disenadores y desarrolladores obsesionados con hacer crecer negocios.</p>
        </div>
    </div>
</section>

<!-- Story -->
<section class="section-padding" style="padding-top:2rem;">
    <div style="max-width:1280px;margin:0 auto;padding:0 1rem;">
        <div style="display:grid;grid-template-columns:1fr;gap:4rem;align-items:center;" class="why-grid">
            <div class="reveal-left">
                <span class="section-badge purple">NUESTRA HISTORIA</span>
                <h2 class="section-title" style="text-align:left;">Nacimos para <span class="text-gradient">cambiar las reglas</span></h2>
                <p style="color:#9ca3af;line-height:1.8;margin-bottom:1.5rem;">
                    ScalifyLabs nacio de una frustracion: ver como agencias tradicionales cobraban fortunas por resultados mediocres. Decidimos crear algo diferente: una agencia donde cada euro invertido se justifica con datos, donde el cliente habla directamente con quien ejecuta, y donde los resultados no son promesas sino compromisos.
                </p>
                <p style="color:#9ca3af;line-height:1.8;margin-bottom:1.5rem;">
                    Despues de 7+ anos y mas de 100 negocios escalados, seguimos con la misma filosofia: estrategia primero, resultados siempre.
                </p>
                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:2rem;">
                    <div style="text-align:center;padding:1rem;border-radius:12px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);">
                        <div style="font-family:var(--font-heading);font-weight:700;font-size:1.5rem;" class="text-gradient">7+</div>
                        <div style="font-size:0.75rem;color:#6b7280;margin-top:0.25rem;">Anos</div>
                    </div>
                    <div style="text-align:center;padding:1rem;border-radius:12px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);">
                        <div style="font-family:var(--font-heading);font-weight:700;font-size:1.5rem;" class="text-gradient">100+</div>
                        <div style="font-size:0.75rem;color:#6b7280;margin-top:0.25rem;">Proyectos</div>
                    </div>
                    <div style="text-align:center;padding:1rem;border-radius:12px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);">
                        <div style="font-family:var(--font-heading);font-weight:700;font-size:1.5rem;" class="text-gradient">98%</div>
                        <div style="font-size:0.75rem;color:#6b7280;margin-top:0.25rem;">Satisfaccion</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Values -->
<section class="section-padding">
    <div style="max-width:1280px;margin:0 auto;padding:0 1rem;">
        <div class="section-header reveal">
            <span class="section-badge purple">VALORES</span>
            <h2 class="section-title">Lo que nos <span class="text-gradient">define</span></h2>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.25rem;" class="stagger-children">
            <?php
            $values = [
                ['icon'=>'target','title'=>'Resultados por encima de todo','desc'=>'No nos interesan las metricas vanidosas. Medimos exito en facturacion, leads y crecimiento real de tu negocio.','color'=>'#6C3AED'],
                ['icon'=>'shield','title'=>'Transparencia radical','desc'=>'Acceso completo a tus datos, reporting claro y sin letra pequena. Si algo no funciona, lo decimos.','color'=>'#3B82F6'],
                ['icon'=>'zap','title'=>'Agilidad y adaptacion','desc'=>'El mercado cambia rapido. Nos adaptamos, iteramos y optimizamos en tiempo real.','color'=>'#EC4899'],
                ['icon'=>'users','title'=>'Partnership, no proveedor','desc'=>'Nos involucramos en tu negocio como si fuera nuestro. Tu exito es nuestro exito.','color'=>'#F59E0B'],
            ];
            foreach ($values as $v):
            ?>
            <div class="glass-card reveal" style="border-radius:1rem;padding:1.5rem;">
                <div style="width:48px;height:48px;border-radius:12px;background:<?php echo $v['color']; ?>15;display:flex;align-items:center;justify-content:center;margin-bottom:1rem;" data-icon="<?php echo $v['icon']; ?>" data-color="<?php echo $v['color']; ?>" data-size="24"></div>
                <h3 style="font-family:var(--font-heading);font-size:1rem;color:white;margin-bottom:0.5rem;"><?php echo $v['title']; ?></h3>
                <p style="font-size:0.875rem;color:#9ca3af;line-height:1.7;"><?php echo $v['desc']; ?></p>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Locations -->
<section class="section-padding">
    <div style="max-width:1280px;margin:0 auto;padding:0 1rem;">
        <div class="section-header reveal">
            <span class="section-badge blue">PRESENCIA</span>
            <h2 class="section-title">Donde <span class="text-gradient">estamos</span></h2>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.25rem;" class="stagger-children">
            <?php
            $locations = [
                ['city'=>'Canarias','desc'=>'Sede central y operaciones','color'=>'#6C3AED'],
                ['city'=>'Barcelona','desc'=>'Oficina creativa','color'=>'#3B82F6'],
                ['city'=>'Madrid','desc'=>'Hub de negocio','color'=>'#EC4899'],
            ];
            foreach ($locations as $loc):
            ?>
            <div class="glass-card reveal" style="border-radius:1rem;padding:1.5rem;text-align:center;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="<?php echo $loc['color']; ?>" stroke-width="2" style="margin:0 auto 0.75rem;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <h3 style="font-family:var(--font-heading);font-size:1.125rem;color:white;margin-bottom:0.25rem;"><?php echo $loc['city']; ?></h3>
                <p style="font-size:0.8125rem;color:#6b7280;"><?php echo $loc['desc']; ?></p>
            </div>
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
                <h2 class="cta-title">Quieres conocernos <span class="text-gradient">mejor?</span></h2>
                <p class="cta-subtitle">Agenda una llamada sin compromiso y te contamos como podemos ayudarte.</p>
                <div class="cta-buttons">
                    <button class="btn-primary" onclick="ScalifyContact.open()">
                        <span>Hablemos</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position:relative;z-index:1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                </div>
            </div>
            <div class="cta-border gradient-border" style="border-radius:1.5rem;"></div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
