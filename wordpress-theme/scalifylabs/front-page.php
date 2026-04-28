<?php get_header(); ?>

<!-- ═══════════════════════════════════════════════════════════
     HERO SECTION
     ═══════════════════════════════════════════════════════════ -->
<section class="hero">
    <!-- Background -->
    <div class="hero-bg">
        <div class="aurora-1"></div>
        <div class="aurora-2"></div>
        <div class="aurora-3"></div>
        <div class="aurora-ribbon-1"></div>
        <div class="aurora-ribbon-2"></div>
        <div class="orb orb-purple" style="width:500px;height:500px;top:-160px;right:-160px;animation:orbDrift1 12s ease-in-out infinite"></div>
        <div class="orb orb-blue" style="width:400px;height:400px;top:33%;left:-240px;animation:orbDrift2 15s ease-in-out infinite"></div>
        <div class="orb orb-pink" style="width:350px;height:350px;bottom:80px;right:25%;opacity:0.25;animation:orbDrift3 10s ease-in-out infinite"></div>
        <div class="grid-overlay bg-grid" style="position:absolute;inset:0;opacity:0.3;"></div>
        <div class="beam-1"></div>
        <div class="beam-2"></div>
        <div id="hero-particles"></div>
        <div class="vignette"></div>
    </div>

    <!-- Content -->
    <div class="hero-content">
        <div style="text-align:center;">
            <!-- Badge -->
            <div class="hero-badge glass reveal">
                <div class="pulse-dot">
                    <span class="ping"></span>
                    <span class="dot"></span>
                </div>
                <span>Aceptando nuevos proyectos para Q2 2026</span>
            </div>

            <!-- Headline -->
            <h1 class="hero-title reveal" style="transition-delay:0.1s">
                <span style="color:white">Estrategia digital</span><br>
                <span style="color:white">para </span>
                <span class="text-gradient typing-text" id="typing-text"></span>
                <span class="typing-cursor"></span>
            </h1>

            <!-- Subtitle -->
            <p class="hero-subtitle reveal" style="transition-delay:0.25s">
                Combinamos datos, creatividad y tecnologia para convertir tu inversion
                digital en clientes reales. Sin humo, sin metricas vanidosas.
                <span style="color:#d1d5db;">Solo resultados.</span>
            </p>

            <!-- CTAs -->
            <div class="hero-ctas reveal" style="transition-delay:0.4s">
                <button class="btn-primary" onclick="ScalifyContact.open()">
                    <span>Agenda tu consulta gratis</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position:relative;z-index:1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
                <a href="<?php echo esc_url(home_url('/casos/')); ?>" class="btn-secondary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    Ver resultados reales
                </a>
            </div>
        </div>

        <!-- Dashboard Mockup -->
        <div class="dashboard-mockup reveal" style="transition-delay:0.6s">
            <div class="glow-behind"></div>
            <div class="dashboard-frame glass">
                <!-- Top bar -->
                <div class="dashboard-bar">
                    <div class="dashboard-dots">
                        <span class="dot-red"></span>
                        <span class="dot-yellow"></span>
                        <span class="dot-green"></span>
                    </div>
                    <div class="dashboard-url"><div>scalifylabs.es/dashboard</div></div>
                </div>

                <!-- Dashboard body -->
                <div class="dashboard-body">
                    <!-- KPI Cards -->
                    <div class="kpi-grid">
                        <div class="kpi-card reveal-scale" style="transition-delay:1s">
                            <div class="kpi-header">
                                <span class="kpi-label">Visitas</span>
                                <svg class="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="#6C3AED" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            </div>
                            <div class="kpi-value">24.5K</div>
                            <div class="kpi-change">+32%</div>
                        </div>
                        <div class="kpi-card reveal-scale" style="transition-delay:1.1s">
                            <div class="kpi-header">
                                <span class="kpi-label">Leads</span>
                                <svg class="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                            <div class="kpi-value">1,847</div>
                            <div class="kpi-change">+28%</div>
                        </div>
                        <div class="kpi-card reveal-scale" style="transition-delay:1.2s">
                            <div class="kpi-header">
                                <span class="kpi-label">Conversion</span>
                                <svg class="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="#EC4899" stroke-width="2"><path d="M3 3v18h18"></path><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path></svg>
                            </div>
                            <div class="kpi-value">4.2%</div>
                            <div class="kpi-change">+0.8%</div>
                        </div>
                        <div class="kpi-card reveal-scale" style="transition-delay:1.3s">
                            <div class="kpi-header">
                                <span class="kpi-label">Revenue</span>
                                <svg class="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                            </div>
                            <div class="kpi-value">&euro;47.2K</div>
                            <div class="kpi-change">+41%</div>
                        </div>
                    </div>

                    <!-- Chart -->
                    <div class="chart-area">
                        <div class="chart-header">
                            <span class="chart-title">Rendimiento mensual</span>
                            <span class="chart-subtitle">Ultimos 7 meses</span>
                        </div>
                        <div class="chart-bars" id="dashboard-chart">
                            <div class="chart-bar" data-height="40"></div>
                            <div class="chart-bar" data-height="65"></div>
                            <div class="chart-bar" data-height="50"></div>
                            <div class="chart-bar" data-height="80"></div>
                            <div class="chart-bar" data-height="60"></div>
                            <div class="chart-bar" data-height="90"></div>
                            <div class="chart-bar" data-height="75"></div>
                        </div>
                        <div class="chart-months">
                            <span>Sep</span><span>Oct</span><span>Nov</span><span>Dic</span><span>Ene</span><span>Feb</span><span>Mar</span>
                        </div>
                    </div>

                    <!-- Side panel -->
                    <div class="side-panel">
                        <span class="channel-title">Top canales</span>
                        <div class="channel-list">
                            <div>
                                <div class="channel-header"><span class="channel-name">Google Ads</span><span class="channel-pct">38%</span></div>
                                <div class="channel-bar-bg"><div class="channel-bar-fill" style="width:0%;background:#6C3AED" data-width="38"></div></div>
                            </div>
                            <div>
                                <div class="channel-header"><span class="channel-name">SEO</span><span class="channel-pct">29%</span></div>
                                <div class="channel-bar-bg"><div class="channel-bar-fill" style="width:0%;background:#3B82F6" data-width="29"></div></div>
                            </div>
                            <div>
                                <div class="channel-header"><span class="channel-name">Social Media</span><span class="channel-pct">21%</span></div>
                                <div class="channel-bar-bg"><div class="channel-bar-fill" style="width:0%;background:#EC4899" data-width="21"></div></div>
                            </div>
                            <div>
                                <div class="channel-header"><span class="channel-name">Email</span><span class="channel-pct">12%</span></div>
                                <div class="channel-bar-bg"><div class="channel-bar-fill" style="width:0%;background:#F59E0B" data-width="12"></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Floating badges -->
            <div class="floating-badge glass left">
                <div class="badge-icon" style="background:rgba(34,197,94,0.2)">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                </div>
                <div>
                    <div class="badge-label">ROI</div>
                    <div class="badge-value" style="color:#4ade80">+340%</div>
                </div>
            </div>
            <div class="floating-badge glass right">
                <div class="badge-icon" style="background:rgba(108,58,237,0.2)">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6C3AED" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
                </div>
                <div>
                    <div class="badge-label">Leads/mes</div>
                    <div class="badge-value" style="color:white">+1.2K</div>
                </div>
            </div>
        </div>

        <!-- Trust bar -->
        <div class="trust-bar reveal" style="transition-delay:1s">
            <p class="trust-label">Empresas que ya escalan con nosotros</p>
            <div class="trust-logos">
                <span class="trust-brand">MasifyLabs</span>
                <span class="trust-brand">OnixMusic</span>
                <span class="trust-brand">TechFlow</span>
                <span class="trust-brand">NovaBrand</span>
                <span class="trust-brand">UrbanEats</span>
            </div>
        </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator">
        <div class="scroll-mouse">
            <div class="scroll-dot"></div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     SERVICES SECTION
     ═══════════════════════════════════════════════════════════ -->
<section class="section-padding" style="position:relative;">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse 70% 50% at 50% 50%,rgba(108,58,237,0.06),transparent 60%)"></div>
    <div style="position:relative;max-width:1280px;margin:0 auto;padding:0 1rem;">
        <div class="section-header reveal">
            <span class="section-badge purple">SERVICIOS</span>
            <h2 class="section-title">Todo lo que tu negocio necesita, <br class="hide-mobile"><span class="text-gradient">bajo un mismo techo</span></h2>
            <p class="section-subtitle">Estrategia + ejecucion + medicion. Sin subcontratas, sin sorpresas.</p>
        </div>

        <div class="services-grid stagger-children">
            <?php
            $services = [
                ['icon' => 'globe', 'title' => 'Desarrollo Web', 'desc' => 'Webs que convierten visitas en clientes. Rapidas, responsive y disenadas para vender.', 'color' => '#6C3AED', 'href' => '/servicios/desarrollo-web/', 'bars' => [70,90,55,85], 'label' => 'Core Web Vitals: 98/100'],
                ['icon' => 'search', 'title' => 'Posicionamiento SEO', 'desc' => 'Escalamos tu visibilidad en Google hasta que seas la primera opcion de tu cliente ideal.', 'color' => '#3B82F6', 'href' => '/servicios/seo/', 'bars' => [30,50,70,90], 'label' => 'Posiciones TOP 3: +240%'],
                ['icon' => 'share-2', 'title' => 'Redes Sociales', 'desc' => 'Estrategia, contenido y comunidad. Convertimos seguidores en clientes que repiten.', 'color' => '#EC4899', 'href' => '/servicios/redes-sociales/', 'bars' => [45,60,75,95], 'label' => 'Engagement: 8.4%'],
                ['icon' => 'megaphone', 'title' => 'Campanas Ads', 'desc' => 'Facebook, Instagram, TikTok y Google Ads. Cada euro rastreado, cada campana optimizada al centimo.', 'color' => '#8B5CF6', 'href' => '/servicios/ads/', 'bars' => [50,65,80,92], 'label' => 'ROAS medio: 5.2x'],
                ['icon' => 'code-2', 'title' => 'Programacion a Medida', 'desc' => 'Apps, plataformas SaaS, blockchain. Si puedes sonarlo, lo construimos.', 'color' => '#06B6D4', 'href' => '/servicios/programacion/', 'bars' => [85,70,90,80], 'label' => '99.9% uptime'],
                ['icon' => 'trending-up', 'title' => 'Embudo de Ventas', 'desc' => 'Automatizacion completa: de desconocido a cliente fiel. Funciona mientras duermes.', 'color' => '#F59E0B', 'href' => '/servicios/embudo-ventas/', 'bars' => [90,70,50,30], 'label' => 'Funnel → Conversion: 4.2%'],
            ];
            foreach ($services as $s):
            ?>
            <a href="<?php echo esc_url(home_url($s['href'])); ?>" class="service-card glass-card reveal">
                <div class="service-preview">
                    <div class="service-preview-bars">
                        <?php foreach ($s['bars'] as $h): ?>
                        <div class="service-preview-bar" style="height:<?php echo $h; ?>%;background:linear-gradient(to top,<?php echo $s['color']; ?>50,<?php echo $s['color']; ?>20)"></div>
                        <?php endforeach; ?>
                    </div>
                    <div class="service-preview-label" style="color:<?php echo $s['color']; ?>"><?php echo $s['label']; ?></div>
                </div>
                <div class="service-divider" style="background:<?php echo $s['color']; ?>"></div>
                <div class="service-body">
                    <div class="service-top">
                        <div class="service-icon-wrap" style="background:<?php echo $s['color']; ?>15" data-icon="<?php echo $s['icon']; ?>" data-color="<?php echo $s['color']; ?>"></div>
                        <svg class="service-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </div>
                    <h3 class="service-name"><?php echo $s['title']; ?></h3>
                    <p class="service-desc"><?php echo $s['desc']; ?></p>
                </div>
                <div class="service-glow" style="background:linear-gradient(90deg,transparent,<?php echo $s['color']; ?>60,transparent)"></div>
            </a>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     SHOWCASE / PORTFOLIO SECTION
     ═══════════════════════════════════════════════════════════ -->
<section class="section-padding" style="position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 40% at 50% 60%,rgba(108,58,237,0.06),transparent 60%)"></div>
    <div style="position:relative;max-width:1280px;margin:0 auto;padding:0 1rem;">
        <div class="section-header reveal">
            <span class="section-badge pink">PORTFOLIO</span>
            <h2 class="section-title">Proyectos que <span class="text-gradient">hablan por si solos</span></h2>
            <p class="section-subtitle">Cada proyecto es un caso de exito con metricas reales. Asi trabajamos, asi entregamos.</p>
        </div>

        <div class="showcase-list">
            <?php
            $projects = [
                ['title' => 'MasifyLabs', 'cat' => 'Desarrollo Web + SEO', 'desc' => 'Rediseno completo con estrategia SEO. Visitas duplicadas en 3 meses.', 'metrics' => [['Trafico','+120%'],['Leads','+85%'],['Velocidad','98/100']], 'color' => '#6C3AED', 'gradient' => 'rgba(108,58,237,0.3),rgba(59,130,246,0.2),transparent'],
                ['title' => 'OnixMusic', 'cat' => 'Branding + Web + RRSS', 'desc' => 'Plataforma e-commerce y estrategia de redes con comunidad activa.', 'metrics' => [['Ventas','+210%'],['Seguidores','+15K'],['ROAS','5.2x']], 'color' => '#3B82F6', 'gradient' => 'rgba(59,130,246,0.3),rgba(236,72,153,0.2),transparent'],
                ['title' => 'FreshBites', 'cat' => 'Ads + Embudo de Ventas', 'desc' => 'Campana de captacion de reservas para cadena de restaurantes.', 'metrics' => [['Reservas','+340%'],['CPA','-62%'],['ROI','7.8x']], 'color' => '#EC4899', 'gradient' => 'rgba(236,72,153,0.3),rgba(108,58,237,0.2),transparent'],
            ];
            foreach ($projects as $i => $p):
            $reverse = $i % 2 === 1;
            ?>
            <div class="showcase-item <?php echo $reverse ? 'reverse' : ''; ?> reveal">
                <div class="showcase-mockup">
                    <div class="glow" style="background:linear-gradient(135deg,<?php echo $p['gradient']; ?>)"></div>
                    <div class="showcase-mockup-inner">
                        <div class="browser-mockup">
                            <div class="browser-bar">
                                <div class="browser-dots"><span></span><span></span><span></span></div>
                                <div class="browser-url"><div><?php echo strtolower($p['title']); ?>.es</div></div>
                            </div>
                            <div class="browser-content">
                                <div class="mock-nav">
                                    <div style="width:64px;height:12px;border-radius:4px;background:<?php echo $p['color']; ?>40"></div>
                                    <div style="display:flex;gap:12px"><div style="width:40px;height:8px;border-radius:4px;background:rgba(255,255,255,0.1)"></div><div style="width:40px;height:8px;border-radius:4px;background:rgba(255,255,255,0.1)"></div><div style="width:40px;height:8px;border-radius:4px;background:rgba(255,255,255,0.1)"></div></div>
                                </div>
                                <div class="mock-hero">
                                    <div style="width:75%;height:16px;border-radius:4px;background:<?php echo $p['color']; ?>30"></div>
                                    <div style="width:50%;height:16px;border-radius:4px;background:<?php echo $p['color']; ?>20"></div>
                                    <div style="width:66%;height:8px;border-radius:4px;background:rgba(255,255,255,0.05);margin-top:8px"></div>
                                    <div style="width:50%;height:8px;border-radius:4px;background:rgba(255,255,255,0.05)"></div>
                                    <div style="width:96px;height:24px;border-radius:8px;margin-top:12px;background:<?php echo $p['color']; ?>50"></div>
                                </div>
                                <div class="mock-cards">
                                    <?php for($j=0;$j<3;$j++): ?>
                                    <div style="aspect-ratio:4/3;border-radius:8px;border:1px solid rgba(255,255,255,0.05);background:<?php echo $p['color']; ?>08;padding:8px;display:flex;flex-direction:column;gap:4px">
                                        <div style="width:16px;height:16px;border-radius:4px;background:<?php echo $p['color']; ?>20"></div>
                                        <div style="width:100%;height:6px;border-radius:4px;background:rgba(255,255,255,0.05);margin-top:4px"></div>
                                        <div style="width:66%;height:6px;border-radius:4px;background:rgba(255,255,255,0.05)"></div>
                                    </div>
                                    <?php endfor; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="showcase-info">
                    <span class="showcase-category" style="color:<?php echo $p['color']; ?>;background:<?php echo $p['color']; ?>15"><?php echo $p['cat']; ?></span>
                    <h3 class="showcase-name"><?php echo $p['title']; ?></h3>
                    <p class="showcase-desc"><?php echo $p['desc']; ?></p>
                    <div class="showcase-metrics">
                        <?php foreach ($p['metrics'] as $m): ?>
                        <div class="metric-card glass-card">
                            <div class="metric-value" style="color:<?php echo $p['color']; ?>"><?php echo $m[1]; ?></div>
                            <div class="metric-label"><?php echo $m[0]; ?></div>
                        </div>
                        <?php endforeach; ?>
                    </div>
                    <a href="<?php echo esc_url(home_url('/casos/')); ?>" class="showcase-link">
                        Ver caso completo
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </a>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     WHY SECTION
     ═══════════════════════════════════════════════════════════ -->
<section class="section-padding" style="position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse 50% 50% at 80% 50%,rgba(59,130,246,0.06),transparent 60%)"></div>
    <div style="position:relative;max-width:1280px;margin:0 auto;padding:0 1rem;">
        <div class="why-grid">
            <div>
                <div class="reveal-left">
                    <span class="section-badge blue">POR QUE SCALIFYLABS</span>
                    <h2 class="section-title" style="text-align:left;line-height:1.15">Tu negocio necesita un <span class="text-gradient">socio digital,</span><br class="hide-mobile"> no otro proveedor.</h2>
                    <p style="font-size:0.875rem;color:#9ca3af;line-height:1.7;margin-bottom:2rem;max-width:512px;">Nos metemos de lleno en tu negocio. Entendemos tus numeros, tu cliente y tu mercado antes de tocar una sola campana. Por eso nuestros resultados no son casualidad.</p>
                </div>

                <div class="why-cards stagger-children">
                    <?php
                    $whyPoints = [
                        ['icon'=>'target','title'=>'Estrategia primero','desc'=>'Cada euro que inviertes responde a un plan con KPIs claros. Nada al azar.','color'=>'#6C3AED'],
                        ['icon'=>'bar-chart-3','title'=>'Resultados medibles','desc'=>'Reporting mensual transparente. Ves exactamente donde va tu inversion.','color'=>'#3B82F6'],
                        ['icon'=>'users','title'=>'Equipo dedicado','desc'=>'Disenadores, devs, marketers y analistas. Un equipo completo a tu servicio.','color'=>'#EC4899'],
                        ['icon'=>'message-circle','title'=>'Comunicacion directa','desc'=>'Hablas con quien ejecuta. Sin comerciales, sin call centers, sin esperas.','color'=>'#8B5CF6'],
                    ];
                    foreach ($whyPoints as $wp):
                    ?>
                    <div class="why-card glass-card reveal">
                        <div class="why-card-icon" style="background:<?php echo $wp['color']; ?>15" data-icon="<?php echo $wp['icon']; ?>" data-color="<?php echo $wp['color']; ?>"></div>
                        <h3><?php echo $wp['title']; ?></h3>
                        <p><?php echo $wp['desc']; ?></p>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- Phone mockup -->
            <div class="phone-mockup-wrap reveal-right">
                <div class="phone-mockup">
                    <div class="phone-glow"></div>
                    <div class="phone-frame">
                        <div class="phone-notch"><div></div></div>
                        <div class="phone-screen">
                            <div class="phone-stories">
                                <?php
                                $storyColors = [['#6C3AED','#3B82F6'],['#3B82F6','#EC4899'],['#EC4899','#6C3AED'],['#F59E0B','#EF4444'],['#10B981','#3B82F6']];
                                $storyLetters = ['S','M','O','T','N'];
                                foreach ($storyLetters as $i => $l):
                                ?>
                                <div class="story-circle" style="background:linear-gradient(135deg,<?php echo $storyColors[$i][0]; ?>,<?php echo $storyColors[$i][1]; ?>)">
                                    <div class="story-circle-inner"><?php echo $l; ?></div>
                                </div>
                                <?php endforeach; ?>
                            </div>
                            <div class="phone-post">
                                <div class="phone-post-header">
                                    <div class="phone-post-avatar bg-gradient-brand"></div>
                                    <span class="phone-post-user">scalifylabs</span>
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6C3AED" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                </div>
                                <div class="phone-post-content">
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C3AED" stroke-width="2" style="margin:0 auto 8px"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                                        <div class="phone-post-stat">+340% ROI</div>
                                        <div class="phone-post-sub">en 90 dias</div>
                                    </div>
                                </div>
                                <div class="phone-post-footer">
                                    <div class="phone-post-actions">
                                        <span>&hearts;</span><span>&#128172;</span><span>&#128228;</span>
                                    </div>
                                    <div class="phone-post-likes"><span>2,847 likes</span></div>
                                </div>
                            </div>
                            <div class="phone-engagement">
                                <div class="phone-engagement-icon">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                                </div>
                                <div>
                                    <div class="phone-engagement-label">Engagement rate</div>
                                    <div class="phone-engagement-value">8.4% (+2.1%)</div>
                                </div>
                            </div>
                        </div>
                        <div class="phone-home-bar"><div></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     PROCESS SECTION
     ═══════════════════════════════════════════════════════════ -->
<section class="section-padding" style="position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 40% at 50% 0%,rgba(108,58,237,0.08),transparent 60%)"></div>
    <div style="position:relative;max-width:1280px;margin:0 auto;padding:0 1rem;">
        <div class="section-header reveal">
            <span class="section-badge purple">PROCESO</span>
            <h2 class="section-title">Como trabajamos <span class="text-gradient">contigo</span></h2>
            <p class="section-subtitle">Un metodo probado en 100+ proyectos. Sin improvisaciones.</p>
        </div>

        <div class="process-wrapper">
            <div class="process-line"></div>
            <div class="process-grid stagger-children">
                <?php
                $steps = [
                    ['num'=>'01','icon'=>'search','title'=>'Analisis','desc'=>'Estudiamos tu negocio, mercado y competencia para entender donde estas y a donde quieres llegar.','color'=>'#6C3AED'],
                    ['num'=>'02','icon'=>'lightbulb','title'=>'Estrategia','desc'=>'Disenamos un plan de accion personalizado con objetivos claros, KPIs y calendario de ejecucion.','color'=>'#3B82F6'],
                    ['num'=>'03','icon'=>'rocket','title'=>'Ejecucion','desc'=>'Implementamos cada accion con precision: desarrollo, contenido, campanas y optimizacion continua.','color'=>'#EC4899'],
                    ['num'=>'04','icon'=>'bar-chart-3','title'=>'Resultados','desc'=>'Medimos, analizamos y escalamos. Reporting transparente y mejora constante basada en datos.','color'=>'#8B5CF6'],
                ];
                foreach ($steps as $i => $step):
                ?>
                <div class="process-step reveal">
                    <div class="process-card glass-card">
                        <div class="process-number" style="color:<?php echo $step['color']; ?>"><?php echo $step['num']; ?></div>
                        <div class="process-icon" style="background:<?php echo $step['color']; ?>15" data-icon="<?php echo $step['icon']; ?>" data-color="<?php echo $step['color']; ?>"></div>
                        <h3><?php echo $step['title']; ?></h3>
                        <p><?php echo $step['desc']; ?></p>
                    </div>
                    <?php if ($i < 3): ?>
                    <span class="process-arrow">&rarr;</span>
                    <?php endif; ?>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     TECH MARQUEE
     ═══════════════════════════════════════════════════════════ -->
<section class="marquee-section">
    <div class="marquee-line top"></div>
    <div class="reveal">
        <p class="marquee-label">Herramientas y tecnologias que dominamos</p>
        <div class="marquee-row" id="marquee-row-1"></div>
        <div class="marquee-row reverse" id="marquee-row-2"></div>
    </div>
    <div class="marquee-line bottom"></div>
    <div class="marquee-fade-left"></div>
    <div class="marquee-fade-right"></div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     STATS SECTION
     ═══════════════════════════════════════════════════════════ -->
<section class="section-padding" style="position:relative;">
    <div class="stats-line top"></div>
    <div style="position:relative;max-width:1280px;margin:0 auto;padding:0 1rem;">
        <div class="stats-grid">
            <?php
            $stats = [
                ['value'=>7,'suffix'=>'+','label'=>'Anos de Experiencia','desc'=>'Escalando negocios en Espana'],
                ['value'=>100,'suffix'=>'+','label'=>'Negocios Escalados','desc'=>'PYMEs y startups transformadas'],
                ['value'=>3,'suffix'=>'+','label'=>'Premios como Agencia','desc'=>'Reconocimiento del sector'],
                ['value'=>98,'suffix'=>'%','label'=>'Clientes Satisfechos','desc'=>'Retencion y resultados'],
            ];
            foreach ($stats as $i => $stat):
            ?>
            <div class="stat-item reveal" style="transition-delay:<?php echo $i * 0.1; ?>s">
                <div class="stat-value-wrap">
                    <span class="stat-value text-gradient" data-target="<?php echo $stat['value']; ?>" data-suffix="<?php echo $stat['suffix']; ?>">0<?php echo $stat['suffix']; ?></span>
                    <div class="stat-glow"></div>
                </div>
                <h3 class="stat-label"><?php echo $stat['label']; ?></h3>
                <p class="stat-desc"><?php echo $stat['desc']; ?></p>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
    <div class="stats-line bottom"></div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     TESTIMONIALS SECTION
     ═══════════════════════════════════════════════════════════ -->
<section class="section-padding" style="position:relative;">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 40% at 30% 50%,rgba(236,72,153,0.06),transparent 60%)"></div>
    <div style="position:relative;max-width:1280px;margin:0 auto;padding:0 1rem;">
        <div class="section-header reveal">
            <span class="section-badge pink">TESTIMONIOS</span>
            <h2 class="section-title">Lo que dicen <span class="text-gradient">nuestros clientes</span></h2>
            <p class="section-subtitle">Los resultados hablan por si solos</p>
        </div>

        <div class="reveal">
            <div class="testimonials-card glass-card" id="testimonials-carousel">
                <svg class="testimonials-quote-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
                <div id="testimonial-content"></div>
                <div class="testimonial-nav">
                    <div class="testimonial-dots" id="testimonial-dots"></div>
                    <div class="testimonial-arrows">
                        <button class="testimonial-arrow glass" onclick="ScalifyCarousel.prev()">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                        <button class="testimonial-arrow glass" onclick="ScalifyCarousel.next()">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     CTA SECTION
     ═══════════════════════════════════════════════════════════ -->
<section class="section-padding" style="position:relative;">
    <div class="cta-wrapper">
        <div class="cta-card reveal">
            <div class="cta-bg"></div>
            <div class="glass" style="position:absolute;inset:0;"></div>
            <div class="cta-orb-1"></div>
            <div class="cta-orb-2"></div>
            <div class="cta-content">
                <div class="cta-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="2"><path d="M12 3l1.5 4.5H18l-3.5 2.5L16 14.5 12 11.5 8 14.5l1.5-4.5L6 7.5h4.5z"></path></svg>
                    <span>Consulta gratuita</span>
                </div>
                <h2 class="cta-title">Listo para escalar <span class="text-gradient">tu empresa?</span></h2>
                <p class="cta-subtitle">Escribenos hoy y descubre como podemos llevar tu negocio al siguiente nivel. Sin compromiso, sin letra pequena.</p>
                <div class="cta-buttons">
                    <button class="btn-primary" onclick="ScalifyContact.open()">
                        <span>Empecemos ahora</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position:relative;z-index:1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                    <a href="https://wa.me/34604561592" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                        &#128172; WhatsApp directo
                    </a>
                </div>
            </div>
            <div class="cta-border gradient-border" style="border-radius:1.5rem;"></div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
