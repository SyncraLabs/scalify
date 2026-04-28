<?php
/**
 * Template Name: Casos de Exito
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
            <span class="section-badge pink">CASOS DE EXITO</span>
            <h1 class="section-title" style="font-size:2.5rem;">Resultados que <span class="text-gradient">hablan solos</span></h1>
            <p class="section-subtitle">Cada proyecto es una historia de crecimiento real. Metricas reales, clientes reales.</p>
        </div>
    </div>
</section>

<!-- Filter tabs -->
<section style="position:relative;padding:0 1rem 2rem;">
    <div style="max-width:1280px;margin:0 auto;">
        <div class="reveal" style="display:flex;flex-wrap:wrap;justify-content:center;gap:0.5rem;margin-bottom:3rem;" id="case-filters">
            <?php
            $filters = ['Todos','Web','SEO','Social','Ads','Branding','E-commerce'];
            foreach ($filters as $i => $f):
                $active = $i === 0;
            ?>
            <button class="case-filter-btn <?php echo $active ? 'active' : ''; ?>" data-filter="<?php echo strtolower($f); ?>" style="padding:0.5rem 1.25rem;border-radius:9999px;font-size:0.8125rem;font-weight:500;border:1px solid <?php echo $active ? 'rgba(108,58,237,0.5)' : 'rgba(255,255,255,0.08)'; ?>;background:<?php echo $active ? 'rgba(108,58,237,0.15)' : 'rgba(255,255,255,0.03)'; ?>;color:<?php echo $active ? '#a78bfa' : '#9ca3af'; ?>;transition:all 0.3s;cursor:pointer;">
                <?php echo $f; ?>
            </button>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Cases -->
<section class="section-padding" style="padding-top:0;">
    <div style="max-width:1280px;margin:0 auto;padding:0 1rem;">
        <div style="display:flex;flex-direction:column;gap:4rem;">
            <?php
            $cases = [
                [
                    'title' => 'MasifyLabs',
                    'subtitle' => 'Plataforma de marketing digital',
                    'duration' => '3 meses',
                    'category' => 'web',
                    'color' => '#6C3AED',
                    'challenge' => 'Web obsoleta con tiempos de carga superiores a 8 segundos y tasa de rebote del 75%. Sin posicionamiento organico.',
                    'solution' => 'Rediseno completo con Next.js, optimizacion de Core Web Vitals y estrategia SEO integral con contenido enfocado en keywords transaccionales.',
                    'results' => 'Duplicamos el trafico organico y redujimos el bounce rate al 35%. Velocidad de carga < 1.5s.',
                    'metrics' => [['Trafico','+120%'],['Leads','+85%'],['Velocidad','98/100'],['Bounce Rate','-53%']],
                    'testimonial' => 'El equipo de ScalifyLabs transformo nuestra presencia digital por completo. Los resultados superaron todas las expectativas.',
                    'testimonial_author' => 'CEO de MasifyLabs',
                ],
                [
                    'title' => 'OnixMusic',
                    'subtitle' => 'E-commerce de instrumentos musicales',
                    'duration' => '6 meses',
                    'category' => 'e-commerce',
                    'color' => '#3B82F6',
                    'challenge' => 'Tienda online con pocas ventas, sin estrategia de redes sociales y baja visibilidad de marca.',
                    'solution' => 'Rediseno de tienda con Shopify, branding completo, estrategia de contenidos en Instagram/TikTok y campanas de Meta Ads segmentadas.',
                    'results' => 'Ventas online aumentaron un 210% con una comunidad activa de mas de 15K seguidores.',
                    'metrics' => [['Ventas','+210%'],['Seguidores','+15K'],['ROAS','5.2x'],['Engagement','8.4%']],
                    'testimonial' => 'Pasamos de vender 5 pedidos al dia a mas de 30. La estrategia de redes fue clave para conectar con nuestra audiencia.',
                    'testimonial_author' => 'Fundador de OnixMusic',
                ],
                [
                    'title' => 'FreshBites',
                    'subtitle' => 'Cadena de restaurantes saludables',
                    'duration' => '4 meses',
                    'category' => 'ads',
                    'color' => '#EC4899',
                    'challenge' => 'Baja ocupacion en nuevas aperturas. Campanas publicitarias anteriores con CPA muy elevado y sin seguimiento de conversiones.',
                    'solution' => 'Embudo de ventas completo: landing page optimizada, campanas en Google y Meta Ads con retargeting, y sistema de reservas automatizado.',
                    'results' => 'Reservas aumentaron un 340% con un coste por adquisicion reducido en un 62%.',
                    'metrics' => [['Reservas','+340%'],['CPA','-62%'],['ROI','7.8x'],['Conversiones','+180%']],
                    'testimonial' => 'Cada euro invertido en publicidad genera casi 8 de retorno. Nunca habiamos tenido resultados asi.',
                    'testimonial_author' => 'Directora de Marketing, FreshBites',
                ],
            ];
            foreach ($cases as $i => $case):
            ?>
            <div class="reveal glass-card" style="border-radius:1.5rem;overflow:hidden;padding:0;">
                <!-- Header -->
                <div style="padding:2rem;background:linear-gradient(135deg,<?php echo $case['color']; ?>15,transparent);">
                    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
                        <div>
                            <span style="font-size:0.75rem;font-weight:500;color:<?php echo $case['color']; ?>;background:<?php echo $case['color']; ?>15;padding:0.25rem 0.75rem;border-radius:9999px;"><?php echo $case['category']; ?></span>
                            <h3 style="font-family:var(--font-heading);font-size:1.75rem;color:white;margin-top:0.75rem;"><?php echo $case['title']; ?></h3>
                            <p style="color:#9ca3af;font-size:0.875rem;"><?php echo $case['subtitle']; ?></p>
                        </div>
                        <span style="font-size:0.8125rem;color:#6b7280;">Duracion: <?php echo $case['duration']; ?></span>
                    </div>
                </div>

                <!-- Body -->
                <div style="padding:2rem;">
                    <div style="display:grid;grid-template-columns:1fr;gap:2rem;">
                        <!-- Challenge / Solution / Results -->
                        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem;">
                            <div>
                                <h4 style="font-family:var(--font-heading);font-size:0.875rem;color:#f87171;margin-bottom:0.5rem;text-transform:uppercase;letter-spacing:0.05em;">Desafio</h4>
                                <p style="font-size:0.875rem;color:#9ca3af;line-height:1.7;"><?php echo $case['challenge']; ?></p>
                            </div>
                            <div>
                                <h4 style="font-family:var(--font-heading);font-size:0.875rem;color:#6C3AED;margin-bottom:0.5rem;text-transform:uppercase;letter-spacing:0.05em;">Solucion</h4>
                                <p style="font-size:0.875rem;color:#9ca3af;line-height:1.7;"><?php echo $case['solution']; ?></p>
                            </div>
                            <div>
                                <h4 style="font-family:var(--font-heading);font-size:0.875rem;color:#4ade80;margin-bottom:0.5rem;text-transform:uppercase;letter-spacing:0.05em;">Resultados</h4>
                                <p style="font-size:0.875rem;color:#9ca3af;line-height:1.7;"><?php echo $case['results']; ?></p>
                            </div>
                        </div>

                        <!-- Metrics -->
                        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.75rem;">
                            <?php foreach ($case['metrics'] as $m): ?>
                            <div style="text-align:center;padding:1rem;border-radius:12px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);">
                                <div style="font-family:var(--font-heading);font-weight:700;font-size:1.25rem;color:<?php echo $case['color']; ?>;"><?php echo $m[1]; ?></div>
                                <div style="font-size:0.6875rem;color:#6b7280;margin-top:0.25rem;"><?php echo $m[0]; ?></div>
                            </div>
                            <?php endforeach; ?>
                        </div>

                        <!-- Testimonial -->
                        <div style="padding:1.5rem;border-radius:12px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);">
                            <div style="display:flex;gap:0.25rem;margin-bottom:0.75rem;">
                                <?php for($s=0;$s<5;$s++): ?>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                <?php endfor; ?>
                            </div>
                            <p style="font-size:0.875rem;color:#d1d5db;line-height:1.7;font-style:italic;margin-bottom:0.75rem;">&ldquo;<?php echo $case['testimonial']; ?>&rdquo;</p>
                            <p style="font-size:0.8125rem;color:#6b7280;">&mdash; <?php echo $case['testimonial_author']; ?></p>
                        </div>
                    </div>
                </div>
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
                <h2 class="cta-title">Quieres ser el <span class="text-gradient">proximo caso de exito?</span></h2>
                <p class="cta-subtitle">Cuentanos tu proyecto y te mostramos como podemos ayudarte a crecer.</p>
                <div class="cta-buttons">
                    <button class="btn-primary" onclick="ScalifyContact.open()">
                        <span>Empecemos ahora</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position:relative;z-index:1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                </div>
            </div>
            <div class="cta-border gradient-border" style="border-radius:1.5rem;"></div>
        </div>
    </div>
</section>

<script>
// Filter buttons
document.querySelectorAll('.case-filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.case-filter-btn').forEach(function(b) {
            b.style.borderColor = 'rgba(255,255,255,0.08)';
            b.style.background = 'rgba(255,255,255,0.03)';
            b.style.color = '#9ca3af';
            b.classList.remove('active');
        });
        this.style.borderColor = 'rgba(108,58,237,0.5)';
        this.style.background = 'rgba(108,58,237,0.15)';
        this.style.color = '#a78bfa';
        this.classList.add('active');
    });
});
</script>

<?php get_footer(); ?>
