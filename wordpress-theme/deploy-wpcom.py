#!/usr/bin/env python3
"""Deploy ScalifyLabs pages to WordPress.com via REST API (OAuth)"""

import json
import urllib.request
import urllib.parse
import ssl
import sys

TOKEN = 'oDnwyXfmELE#jV0kGH^j^7r^ZyNZG#FUWirn(PVt%7gLRci(J)T1&A(Cd2V^AdW&'
SITE = '253799364'
API = f'https://public-api.wordpress.com/rest/v1.1/sites/{SITE}'

# Disable SSL verification issues on Windows
ctx = ssl.create_default_context()

def api_post(endpoint, data):
    """Make POST request to WP.com API"""
    url = f'{API}/{endpoint}'
    body = json.dumps(data).encode('utf-8')
    req = urllib.request.Request(url, data=body, method='POST')
    req.add_header('Authorization', f'Bearer {TOKEN}')
    req.add_header('Content-Type', 'application/json')
    try:
        resp = urllib.request.urlopen(req, context=ctx)
        return json.loads(resp.read().decode('utf-8'))
    except urllib.error.HTTPError as e:
        err = e.read().decode('utf-8')
        print(f'  ERROR {e.code}: {err[:200]}')
        return None

def api_get(endpoint):
    """Make GET request to WP.com API"""
    url = f'{API}/{endpoint}'
    req = urllib.request.Request(url)
    req.add_header('Authorization', f'Bearer {TOKEN}')
    try:
        resp = urllib.request.urlopen(req, context=ctx)
        return json.loads(resp.read().decode('utf-8'))
    except urllib.error.HTTPError as e:
        err = e.read().decode('utf-8')
        print(f'  ERROR {e.code}: {err[:200]}')
        return None

def create_page(title, slug, content, parent_id=0, status='publish'):
    """Create a WordPress page"""
    data = {
        'title': title,
        'slug': slug,
        'content': content,
        'status': status,
        'type': 'page',
        'parent': parent_id
    }
    result = api_post('posts/new?type=page', data)
    if result:
        print(f'  OK: "{title}" -> ID {result["ID"]} | {result["URL"]}')
        return result['ID']
    return None

# ══════════════════════════════════════════════════════════════
# CSS VARIABLES (inline everywhere)
# ══════════════════════════════════════════════════════════════
P = '#6C3AED'  # primary purple
B = '#3B82F6'  # blue
PK = '#EC4899'  # pink
V = '#8B5CF6'  # violet
C = '#06B6D4'  # cyan
A = '#F59E0B'  # amber
G = '#10B981'  # green
R = '#EF4444'  # red
BG = '#050510'
CARD = '#0a0a1a'
TXT = '#e2e8f0'
TXT2 = '#9ca3af'
MUTED = '#6b7280'
GRAD = f'linear-gradient(135deg, {P}, {B}, {PK})'

# Common inline style fragments
def glass(extra=''):
    return f'background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:1rem;backdrop-filter:blur(12px);{extra}'

def section(extra=''):
    return f'max-width:1280px;margin:0 auto;padding:3rem 1rem;{extra}'

def badge(color, text):
    return f'<span style="display:inline-block;font-size:0.75rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:{color};background:{color}15;padding:0.375rem 1rem;border-radius:9999px;border:1px solid {color}30;margin-bottom:1rem;">{text}</span>'

def heading(text, gradient_part=''):
    if gradient_part:
        parts = text.split(gradient_part)
        return f'<h2 style="font-size:2rem;font-weight:700;color:white;line-height:1.2;margin-bottom:0.75rem;">{parts[0]}<span style="background:{GRAD};-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">{gradient_part}</span>{"".join(parts[1:])}</h2>'
    return f'<h2 style="font-size:2rem;font-weight:700;color:white;line-height:1.2;margin-bottom:0.75rem;">{text}</h2>'

def subtitle(text):
    return f'<p style="color:{TXT2};font-size:1rem;max-width:640px;margin:0 auto 2rem;">{text}</p>'

def gradient_text(text):
    return f'<span style="background:{GRAD};-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">{text}</span>'

def btn_primary(text, href='#'):
    return f'<a href="{href}" style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.875rem 1.75rem;background:{P};color:white;font-weight:600;font-size:0.9rem;border-radius:12px;text-decoration:none;transition:all 0.3s;">&#9654; {text}</a>'

def btn_secondary(text, href='#'):
    return f'<a href="{href}" style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.875rem 1.75rem;background:rgba(255,255,255,0.05);color:white;font-weight:500;font-size:0.9rem;border-radius:12px;border:1px solid rgba(255,255,255,0.1);text-decoration:none;">{text}</a>'

def card(inner, extra=''):
    return f'<div style="{glass(f"padding:1.5rem;{extra}")}">{inner}</div>'

def metric_card(value, label, color=P):
    return f'<div style="text-align:center;padding:1rem;border-radius:12px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);"><div style="font-weight:700;font-size:1.25rem;color:{color};">{value}</div><div style="font-size:0.7rem;color:{MUTED};margin-top:0.25rem;">{label}</div></div>'

def cta_section(title_plain, title_gradient, sub, btn_text):
    return f'''
<div style="{section('text-align:center;')}">
    <div style="{glass('padding:3rem;text-align:center;position:relative;overflow:hidden;')}">
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(108,58,237,0.15),transparent 70%);"></div>
        <div style="position:relative;">
            <h2 style="font-size:2rem;font-weight:700;color:white;margin-bottom:0.75rem;">{title_plain} {gradient_text(title_gradient)}</h2>
            <p style="color:{TXT2};margin-bottom:1.5rem;max-width:500px;margin-left:auto;margin-right:auto;">{sub}</p>
            <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
                {btn_primary(btn_text)}
                {btn_secondary('&#128172; WhatsApp directo', 'https://wa.me/34604561592')}
            </div>
        </div>
    </div>
</div>'''

# ══════════════════════════════════════════════════════════════
# PAGE: INICIO (HOME)
# ══════════════════════════════════════════════════════════════
def build_home():
    services = [
        ('Desarrollo Web', 'Webs que convierten visitas en clientes. Rapidas, responsive y disenadas para vender.', P, '/servicios/desarrollo-web/', 'Core Web Vitals: 98/100'),
        ('Posicionamiento SEO', 'Escalamos tu visibilidad en Google hasta que seas la primera opcion.', B, '/servicios/seo/', 'Posiciones TOP 3: +240%'),
        ('Redes Sociales', 'Estrategia, contenido y comunidad. Convertimos seguidores en clientes.', PK, '/servicios/redes-sociales/', 'Engagement: 8.4%'),
        ('Campanas Ads', 'Facebook, Instagram, TikTok y Google Ads. Cada euro optimizado.', V, '/servicios/ads/', 'ROAS medio: 5.2x'),
        ('Programacion a Medida', 'Apps, plataformas SaaS, blockchain. Si puedes sonarlo, lo construimos.', C, '/servicios/programacion/', '99.9% uptime'),
        ('Embudo de Ventas', 'Automatizacion completa: de desconocido a cliente fiel.', A, '/servicios/embudo-ventas/', 'Conversion: 4.2%'),
    ]

    projects = [
        ('MasifyLabs', 'Desarrollo Web + SEO', 'Rediseno completo con estrategia SEO. Visitas duplicadas en 3 meses.', [('Trafico','+120%'),('Leads','+85%'),('Velocidad','98/100')], P),
        ('OnixMusic', 'Branding + Web + RRSS', 'Plataforma e-commerce y estrategia de redes con comunidad activa.', [('Ventas','+210%'),('Seguidores','+15K'),('ROAS','5.2x')], B),
        ('FreshBites', 'Ads + Embudo de Ventas', 'Campana de captacion de reservas para cadena de restaurantes.', [('Reservas','+340%'),('CPA','-62%'),('ROI','7.8x')], PK),
    ]

    why_points = [
        ('Estrategia primero', 'Cada euro que inviertes responde a un plan con KPIs claros.', P),
        ('Resultados medibles', 'Reporting mensual transparente. Ves donde va tu inversion.', B),
        ('Equipo dedicado', 'Disenadores, devs, marketers y analistas a tu servicio.', PK),
        ('Comunicacion directa', 'Hablas con quien ejecuta. Sin call centers.', V),
    ]

    steps = [
        ('01', 'Analisis', 'Estudiamos tu negocio, mercado y competencia.', P),
        ('02', 'Estrategia', 'Plan personalizado con KPIs y calendario.', B),
        ('03', 'Ejecucion', 'Implementamos con precision y optimizacion continua.', PK),
        ('04', 'Resultados', 'Medimos, analizamos y escalamos.', V),
    ]

    stats = [
        ('7+', 'Anos de Experiencia', 'Escalando negocios en Espana'),
        ('100+', 'Negocios Escalados', 'PYMEs y startups transformadas'),
        ('3+', 'Premios como Agencia', 'Reconocimiento del sector'),
        ('98%', 'Clientes Satisfechos', 'Retencion y resultados'),
    ]

    testimonials = [
        ('El equipo de ScalifyLabs transformo nuestra presencia digital. Los resultados superaron todas las expectativas.', 'Carlos M.', 'CEO, MasifyLabs'),
        ('Pasamos de 5 pedidos al dia a mas de 30. La estrategia de redes fue clave.', 'Ana R.', 'Fundadora, OnixMusic'),
        ('Cada euro invertido genera casi 8 de retorno. Nunca habiamos tenido resultados asi.', 'Laura S.', 'Dir. Marketing, FreshBites'),
    ]

    # HERO
    hero = f'''
<div style="background:{BG};padding:6rem 1rem 4rem;text-align:center;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 30%,rgba(108,58,237,0.2),rgba(59,130,246,0.1) 40%,transparent 70%);"></div>
    <div style="position:relative;max-width:800px;margin:0 auto;">
        <div style="display:inline-flex;align-items:center;gap:0.5rem;{glass('padding:0.5rem 1rem;border-radius:9999px;margin-bottom:1.5rem;font-size:0.8rem;')}">
            <span style="width:8px;height:8px;border-radius:50%;background:#4ade80;display:inline-block;"></span>
            <span style="color:{TXT2};">Aceptando nuevos proyectos para Q2 2026</span>
        </div>
        <h1 style="font-size:3rem;font-weight:800;color:white;line-height:1.1;margin-bottom:1rem;">
            Estrategia digital<br>para {gradient_text('escalar tu negocio')}
        </h1>
        <p style="color:{TXT2};font-size:1.1rem;max-width:600px;margin:0 auto 2rem;line-height:1.7;">
            Combinamos datos, creatividad y tecnologia para convertir tu inversion digital en clientes reales. Sin humo, sin metricas vanidosas. <span style="color:#d1d5db;">Solo resultados.</span>
        </p>
        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
            {btn_primary('Agenda tu consulta gratis')}
            {btn_secondary('&#9654; Ver resultados reales', '/casos/')}
        </div>
    </div>
</div>

<div style="max-width:1000px;margin:-2rem auto 0;padding:0 1rem;position:relative;">
    <div style="{glass('padding:0;overflow:hidden;border-radius:1rem;')}">
        <div style="padding:0.75rem 1rem;display:flex;align-items:center;gap:0.75rem;border-bottom:1px solid rgba(255,255,255,0.06);">
            <div style="display:flex;gap:6px;"><span style="width:10px;height:10px;border-radius:50%;background:#ef4444;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#f59e0b;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#22c55e;display:inline-block;"></span></div>
            <div style="flex:1;text-align:center;font-size:0.75rem;color:{MUTED};{glass('padding:0.25rem 0.75rem;border-radius:6px;')}">scalifylabs.es/dashboard</div>
        </div>
        <div style="padding:1.5rem;">
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-bottom:1.5rem;">
                <div style="padding:1rem;border-radius:12px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);"><div style="font-size:0.7rem;color:{MUTED};margin-bottom:0.5rem;">Visitas</div><div style="font-size:1.25rem;font-weight:700;color:white;">24.5K</div><div style="font-size:0.7rem;color:#4ade80;">+32%</div></div>
                <div style="padding:1rem;border-radius:12px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);"><div style="font-size:0.7rem;color:{MUTED};margin-bottom:0.5rem;">Leads</div><div style="font-size:1.25rem;font-weight:700;color:white;">1,847</div><div style="font-size:0.7rem;color:#4ade80;">+28%</div></div>
                <div style="padding:1rem;border-radius:12px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);"><div style="font-size:0.7rem;color:{MUTED};margin-bottom:0.5rem;">Conversion</div><div style="font-size:1.25rem;font-weight:700;color:white;">4.2%</div><div style="font-size:0.7rem;color:#4ade80;">+0.8%</div></div>
                <div style="padding:1rem;border-radius:12px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);"><div style="font-size:0.7rem;color:{MUTED};margin-bottom:0.5rem;">Revenue</div><div style="font-size:1.25rem;font-weight:700;color:white;">&euro;47.2K</div><div style="font-size:0.7rem;color:#4ade80;">+41%</div></div>
            </div>
            <div style="display:flex;align-items:flex-end;gap:8px;height:120px;padding:1rem;border-radius:12px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);">
                <div style="flex:1;height:40%;border-radius:4px 4px 0 0;background:linear-gradient(to top,{P}80,{P}30);"></div>
                <div style="flex:1;height:65%;border-radius:4px 4px 0 0;background:linear-gradient(to top,{P}80,{P}30);"></div>
                <div style="flex:1;height:50%;border-radius:4px 4px 0 0;background:linear-gradient(to top,{P}80,{P}30);"></div>
                <div style="flex:1;height:80%;border-radius:4px 4px 0 0;background:linear-gradient(to top,{P}80,{P}30);"></div>
                <div style="flex:1;height:60%;border-radius:4px 4px 0 0;background:linear-gradient(to top,{P}80,{P}30);"></div>
                <div style="flex:1;height:90%;border-radius:4px 4px 0 0;background:linear-gradient(to top,{P}80,{B}30);"></div>
                <div style="flex:1;height:75%;border-radius:4px 4px 0 0;background:linear-gradient(to top,{P}80,{B}30);"></div>
            </div>
        </div>
    </div>
    <div style="text-align:center;margin-top:2rem;">
        <p style="font-size:0.8rem;color:{MUTED};margin-bottom:0.75rem;">Empresas que ya escalan con nosotros</p>
        <div style="display:flex;justify-content:center;gap:2rem;flex-wrap:wrap;">
            <span style="font-size:0.9rem;font-weight:600;color:rgba(255,255,255,0.3);">MasifyLabs</span>
            <span style="font-size:0.9rem;font-weight:600;color:rgba(255,255,255,0.3);">OnixMusic</span>
            <span style="font-size:0.9rem;font-weight:600;color:rgba(255,255,255,0.3);">TechFlow</span>
            <span style="font-size:0.9rem;font-weight:600;color:rgba(255,255,255,0.3);">NovaBrand</span>
            <span style="font-size:0.9rem;font-weight:600;color:rgba(255,255,255,0.3);">UrbanEats</span>
        </div>
    </div>
</div>'''

    # SERVICES
    svc_cards = ''
    for title, desc, color, href, label in services:
        svc_cards += f'''
        <a href="{href}" style="text-decoration:none;{glass('padding:1.5rem;display:block;transition:transform 0.3s;')}">
            <div style="display:flex;justify-content:space-between;margin-bottom:0.75rem;">
                <div style="width:40px;height:40px;border-radius:10px;background:{color}15;display:flex;align-items:center;justify-content:center;">
                    <div style="width:16px;height:16px;border-radius:50%;background:{color};"></div>
                </div>
                <span style="color:{MUTED};font-size:1.2rem;">&#8599;</span>
            </div>
            <h3 style="color:white;font-size:1rem;font-weight:600;margin-bottom:0.5rem;">{title}</h3>
            <p style="color:{TXT2};font-size:0.85rem;line-height:1.6;margin-bottom:0.75rem;">{desc}</p>
            <div style="font-size:0.75rem;color:{color};font-weight:500;">{label}</div>
        </a>'''

    services_section = f'''
<div style="{section('text-align:center;')}">
    {badge(P, 'SERVICIOS')}
    {heading('Todo lo que tu negocio necesita, bajo un mismo techo', 'bajo un mismo techo')}
    {subtitle('Estrategia + ejecucion + medicion. Sin subcontratas, sin sorpresas.')}
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.25rem;text-align:left;">
        {svc_cards}
    </div>
</div>'''

    # PORTFOLIO
    proj_html = ''
    for title, cat, desc, metrics, color in projects:
        metrics_html = ''.join([metric_card(v, l, color) for l, v in metrics])
        proj_html += f'''
        <div style="{glass('padding:0;overflow:hidden;margin-bottom:2rem;')}">
            <div style="padding:1.5rem;background:linear-gradient(135deg,{color}15,transparent);">
                <span style="font-size:0.7rem;color:{color};background:{color}15;padding:0.25rem 0.75rem;border-radius:9999px;">{cat}</span>
                <h3 style="color:white;font-size:1.5rem;font-weight:700;margin-top:0.75rem;">{title}</h3>
                <p style="color:{TXT2};font-size:0.875rem;">{desc}</p>
            </div>
            <div style="padding:1.5rem;">
                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;">
                    {metrics_html}
                </div>
            </div>
        </div>'''

    portfolio_section = f'''
<div style="{section('text-align:center;')}">
    {badge(PK, 'PORTFOLIO')}
    {heading('Proyectos que hablan por si solos', 'hablan por si solos')}
    {subtitle('Cada proyecto es un caso de exito con metricas reales.')}
    {proj_html}
</div>'''

    # WHY SECTION
    why_html = ''
    for title, desc, color in why_points:
        why_html += f'''
        <div style="{glass('padding:1.25rem;')}">
            <div style="width:40px;height:40px;border-radius:10px;background:{color}15;display:flex;align-items:center;justify-content:center;margin-bottom:0.75rem;">
                <div style="width:14px;height:14px;border-radius:50%;background:{color};"></div>
            </div>
            <h3 style="color:white;font-size:0.95rem;font-weight:600;margin-bottom:0.5rem;">{title}</h3>
            <p style="color:{TXT2};font-size:0.85rem;line-height:1.6;">{desc}</p>
        </div>'''

    why_section = f'''
<div style="{section()}">
    {badge(B, 'POR QUE SCALIFYLABS')}
    {heading('Tu negocio necesita un socio digital, no otro proveedor.', 'socio digital,')}
    <p style="color:{TXT2};font-size:0.9rem;line-height:1.7;margin-bottom:2rem;max-width:600px;">Nos metemos de lleno en tu negocio. Entendemos tus numeros, tu cliente y tu mercado antes de tocar una sola campana.</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1rem;">
        {why_html}
    </div>
</div>'''

    # PROCESS
    steps_html = ''
    for num, title, desc, color in steps:
        steps_html += f'''
        <div style="{glass('padding:1.5rem;text-align:center;')}">
            <div style="font-size:2rem;font-weight:800;color:{color};opacity:0.3;margin-bottom:0.5rem;">{num}</div>
            <div style="width:40px;height:40px;border-radius:10px;background:{color}15;display:flex;align-items:center;justify-content:center;margin:0 auto 0.75rem;">
                <div style="width:14px;height:14px;border-radius:50%;background:{color};"></div>
            </div>
            <h3 style="color:white;font-size:1rem;font-weight:600;margin-bottom:0.5rem;">{title}</h3>
            <p style="color:{TXT2};font-size:0.85rem;line-height:1.6;">{desc}</p>
        </div>'''

    process_section = f'''
<div style="{section('text-align:center;')}">
    {badge(P, 'PROCESO')}
    {heading('Como trabajamos contigo', 'contigo')}
    {subtitle('Un metodo probado en 100+ proyectos. Sin improvisaciones.')}
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.25rem;">
        {steps_html}
    </div>
</div>'''

    # STATS
    stats_html = ''
    for val, label, desc in stats:
        stats_html += f'''
        <div style="text-align:center;padding:1.5rem;">
            <div style="font-size:2.5rem;font-weight:800;background:{GRAD};-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">{val}</div>
            <h3 style="color:white;font-size:0.9rem;font-weight:600;margin-top:0.5rem;">{label}</h3>
            <p style="color:{MUTED};font-size:0.8rem;">{desc}</p>
        </div>'''

    stats_section = f'''
<div style="{section()}">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;border-top:1px solid rgba(255,255,255,0.06);border-bottom:1px solid rgba(255,255,255,0.06);padding:2rem 0;">
        {stats_html}
    </div>
</div>'''

    # TESTIMONIALS
    test_html = ''
    for quote, name, role in testimonials:
        test_html += f'''
        <div style="{glass('padding:1.5rem;')}">
            <div style="display:flex;gap:2px;margin-bottom:0.75rem;">
                <span style="color:#facc15;">&#9733;</span><span style="color:#facc15;">&#9733;</span><span style="color:#facc15;">&#9733;</span><span style="color:#facc15;">&#9733;</span><span style="color:#facc15;">&#9733;</span>
            </div>
            <p style="color:#d1d5db;font-size:0.9rem;line-height:1.7;font-style:italic;margin-bottom:1rem;">&ldquo;{quote}&rdquo;</p>
            <div>
                <p style="color:white;font-size:0.85rem;font-weight:600;">{name}</p>
                <p style="color:{MUTED};font-size:0.75rem;">{role}</p>
            </div>
        </div>'''

    testimonials_section = f'''
<div style="{section('text-align:center;')}">
    {badge(PK, 'TESTIMONIOS')}
    {heading('Lo que dicen nuestros clientes', 'nuestros clientes')}
    {subtitle('Los resultados hablan por si solos')}
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.25rem;text-align:left;">
        {test_html}
    </div>
</div>'''

    cta = cta_section('Listo para escalar', 'tu empresa?', 'Escribenos hoy y descubre como podemos llevar tu negocio al siguiente nivel.', 'Empecemos ahora')

    return hero + services_section + portfolio_section + why_section + process_section + stats_section + testimonials_section + cta


# ══════════════════════════════════════════════════════════════
# PAGE: SERVICIOS HUB
# ══════════════════════════════════════════════════════════════
def build_servicios():
    services = [
        ('Desarrollo Web', 'Webs rapidas, modernas y optimizadas para convertir. Desde landing pages hasta e-commerce completos.', P, '/servicios/desarrollo-web/', ['Next.js / React','WordPress','E-commerce','Responsive']),
        ('Posicionamiento SEO', 'Estrategia SEO completa para dominar las primeras posiciones de Google.', B, '/servicios/seo/', ['SEO Tecnico','Link Building','Contenidos','Local SEO']),
        ('Redes Sociales', 'Gestion integral de redes con estrategia de contenidos y crecimiento organico.', PK, '/servicios/redes-sociales/', ['Instagram','TikTok','LinkedIn','Contenidos']),
        ('Campanas Ads', 'Publicidad digital en Google, Meta y TikTok. Cada euro optimizado.', V, '/servicios/ads/', ['Google Ads','Meta Ads','TikTok Ads','Retargeting']),
        ('Programacion a Medida', 'Desarrollo de aplicaciones, plataformas SaaS, APIs e integraciones.', C, '/servicios/programacion/', ['Apps Web','SaaS','APIs','Integraciones']),
        ('Embudo de Ventas', 'Automatizacion del proceso de venta: captacion hasta fidelizacion.', A, '/servicios/embudo-ventas/', ['Lead Magnets','Email Marketing','CRM','Automatizacion']),
        ('Diseno Grafico', 'Identidad visual, branding y piezas graficas profesionales.', R, '/servicios/diseno-grafico/', ['Branding','Social Media','Packaging','UI/UX']),
    ]

    cards = ''
    for title, desc, color, href, tags in services:
        tags_html = ''.join([f'<span style="font-size:0.7rem;padding:0.25rem 0.5rem;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);color:{TXT2};">{t}</span>' for t in tags])
        cards += f'''
        <a href="{href}" style="text-decoration:none;{glass('padding:1.5rem;display:block;')}">
            <div style="display:flex;justify-content:space-between;margin-bottom:0.75rem;">
                <div style="width:40px;height:40px;border-radius:10px;background:{color}15;display:flex;align-items:center;justify-content:center;">
                    <div style="width:14px;height:14px;border-radius:50%;background:{color};"></div>
                </div>
                <span style="color:{MUTED};font-size:1.2rem;">&#8599;</span>
            </div>
            <h3 style="color:white;font-size:1rem;font-weight:600;margin-bottom:0.5rem;">{title}</h3>
            <p style="color:{TXT2};font-size:0.85rem;line-height:1.6;margin-bottom:1rem;">{desc}</p>
            <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">{tags_html}</div>
        </a>'''

    header = f'''
<div style="background:{BG};padding:6rem 1rem 3rem;text-align:center;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(108,58,237,0.15),transparent 70%);"></div>
    <div style="position:relative;">
        {badge(P, 'NUESTROS SERVICIOS')}
        <h1 style="font-size:2.5rem;font-weight:700;color:white;margin-bottom:0.75rem;">Soluciones digitales {gradient_text('que escalan')}</h1>
        {subtitle('Cada servicio esta disenado para generar resultados medibles. Elige el que necesitas o combinalos todos.')}
    </div>
</div>'''

    grid = f'''
<div style="{section()}">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.25rem;">
        {cards}
    </div>
</div>'''

    return header + grid + cta_section('Hablemos de', 'tu proyecto', 'Cuentanos que necesitas y te proponemos la mejor estrategia.', 'Agenda tu consulta gratis')


# ══════════════════════════════════════════════════════════════
# PAGE: CASOS DE EXITO
# ══════════════════════════════════════════════════════════════
def build_casos():
    cases = [
        ('MasifyLabs', 'Plataforma de marketing digital', '3 meses', 'web', P,
         'Web obsoleta con tiempos de carga >8s y tasa de rebote del 75%.',
         'Rediseno completo con Next.js, optimizacion Core Web Vitals y estrategia SEO integral.',
         'Duplicamos el trafico organico y redujimos el bounce rate al 35%.',
         [('Trafico','+120%'),('Leads','+85%'),('Velocidad','98/100'),('Bounce Rate','-53%')],
         'El equipo de ScalifyLabs transformo nuestra presencia digital. Los resultados superaron todas las expectativas.', 'CEO de MasifyLabs'),
        ('OnixMusic', 'E-commerce de instrumentos musicales', '6 meses', 'e-commerce', B,
         'Tienda online con pocas ventas, sin estrategia de redes sociales.',
         'Rediseno de tienda con Shopify, branding completo, estrategia Instagram/TikTok y Meta Ads.',
         'Ventas online aumentaron un 210% con comunidad activa de 15K seguidores.',
         [('Ventas','+210%'),('Seguidores','+15K'),('ROAS','5.2x'),('Engagement','8.4%')],
         'Pasamos de 5 pedidos al dia a mas de 30. La estrategia de redes fue clave.', 'Fundador de OnixMusic'),
        ('FreshBites', 'Cadena de restaurantes saludables', '4 meses', 'ads', PK,
         'Baja ocupacion en nuevas aperturas. CPA muy elevado sin seguimiento de conversiones.',
         'Embudo completo: landing optimizada, campanas Google y Meta Ads con retargeting.',
         'Reservas aumentaron 340% con CPA reducido un 62%.',
         [('Reservas','+340%'),('CPA','-62%'),('ROI','7.8x'),('Conversiones','+180%')],
         'Cada euro invertido genera casi 8 de retorno. Nunca habiamos tenido resultados asi.', 'Directora de Marketing, FreshBites'),
    ]

    header = f'''
<div style="background:{BG};padding:6rem 1rem 3rem;text-align:center;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(236,72,153,0.15),transparent 70%);"></div>
    <div style="position:relative;">
        {badge(PK, 'CASOS DE EXITO')}
        <h1 style="font-size:2.5rem;font-weight:700;color:white;margin-bottom:0.75rem;">Resultados que {gradient_text('hablan solos')}</h1>
        {subtitle('Cada proyecto es una historia de crecimiento real. Metricas reales, clientes reales.')}
    </div>
</div>'''

    cases_html = ''
    for title, sub, dur, cat, color, challenge, solution, results, metrics, testimonial, author in cases:
        metrics_html = ''.join([metric_card(v, l, color) for l, v in metrics])
        cases_html += f'''
<div style="{glass('padding:0;overflow:hidden;margin-bottom:2rem;')}">
    <div style="padding:2rem;background:linear-gradient(135deg,{color}15,transparent);">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
            <div>
                <span style="font-size:0.75rem;font-weight:500;color:{color};background:{color}15;padding:0.25rem 0.75rem;border-radius:9999px;">{cat}</span>
                <h3 style="font-size:1.75rem;color:white;margin-top:0.75rem;">{title}</h3>
                <p style="color:{TXT2};font-size:0.875rem;">{sub}</p>
            </div>
            <span style="font-size:0.8rem;color:{MUTED};">Duracion: {dur}</span>
        </div>
    </div>
    <div style="padding:2rem;">
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.5rem;margin-bottom:1.5rem;">
            <div><h4 style="font-size:0.8rem;color:#f87171;margin-bottom:0.5rem;text-transform:uppercase;letter-spacing:0.05em;">DESAFIO</h4><p style="font-size:0.875rem;color:{TXT2};line-height:1.7;">{challenge}</p></div>
            <div><h4 style="font-size:0.8rem;color:{P};margin-bottom:0.5rem;text-transform:uppercase;letter-spacing:0.05em;">SOLUCION</h4><p style="font-size:0.875rem;color:{TXT2};line-height:1.7;">{solution}</p></div>
            <div><h4 style="font-size:0.8rem;color:#4ade80;margin-bottom:0.5rem;text-transform:uppercase;letter-spacing:0.05em;">RESULTADOS</h4><p style="font-size:0.875rem;color:{TXT2};line-height:1.7;">{results}</p></div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.75rem;margin-bottom:1.5rem;">{metrics_html}</div>
        <div style="padding:1.5rem;border-radius:12px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);">
            <div style="margin-bottom:0.75rem;">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p style="font-size:0.875rem;color:#d1d5db;line-height:1.7;font-style:italic;margin-bottom:0.75rem;">&ldquo;{testimonial}&rdquo;</p>
            <p style="font-size:0.8rem;color:{MUTED};">&mdash; {author}</p>
        </div>
    </div>
</div>'''

    return header + f'<div style="{section()}">{cases_html}</div>' + cta_section('Quieres ser el', 'proximo caso de exito?', 'Cuentanos tu proyecto y te mostramos como podemos ayudarte.', 'Empecemos ahora')


# ══════════════════════════════════════════════════════════════
# PAGE: SOBRE NOSOTROS
# ══════════════════════════════════════════════════════════════
def build_nosotros():
    header = f'''
<div style="background:{BG};padding:6rem 1rem 3rem;text-align:center;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(59,130,246,0.15),transparent 70%);"></div>
    <div style="position:relative;">
        {badge(B, 'SOBRE NOSOTROS')}
        <h1 style="font-size:2.5rem;font-weight:700;color:white;margin-bottom:0.75rem;">El equipo detras de {gradient_text('tus resultados')}</h1>
        {subtitle('Somos un equipo multidisciplinar de estrategas, disenadores y desarrolladores obsesionados con hacer crecer negocios.')}
    </div>
</div>'''

    story = f'''
<div style="{section()}">
    {badge(P, 'NUESTRA HISTORIA')}
    {heading('Nacimos para cambiar las reglas', 'cambiar las reglas')}
    <p style="color:{TXT2};line-height:1.8;margin-bottom:1.5rem;">ScalifyLabs nacio de una frustracion: ver como agencias tradicionales cobraban fortunas por resultados mediocres. Decidimos crear algo diferente: una agencia donde cada euro invertido se justifica con datos, donde el cliente habla directamente con quien ejecuta, y donde los resultados no son promesas sino compromisos.</p>
    <p style="color:{TXT2};line-height:1.8;margin-bottom:2rem;">Despues de 7+ anos y mas de 100 negocios escalados, seguimos con la misma filosofia: estrategia primero, resultados siempre.</p>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;">
        {metric_card('7+', 'Anos', P)}
        {metric_card('100+', 'Proyectos', B)}
        {metric_card('98%', 'Satisfaccion', PK)}
    </div>
</div>'''

    values = [
        ('Resultados por encima de todo', 'No nos interesan las metricas vanidosas. Medimos exito en facturacion y crecimiento real.', P),
        ('Transparencia radical', 'Acceso completo a tus datos, reporting claro y sin letra pequena.', B),
        ('Agilidad y adaptacion', 'El mercado cambia rapido. Nos adaptamos e iteramos en tiempo real.', PK),
        ('Partnership, no proveedor', 'Nos involucramos en tu negocio como si fuera nuestro.', A),
    ]
    values_html = ''
    for title, desc, color in values:
        values_html += f'''
        <div style="{glass('padding:1.5rem;')}">
            <div style="width:48px;height:48px;border-radius:12px;background:{color}15;display:flex;align-items:center;justify-content:center;margin-bottom:1rem;">
                <div style="width:16px;height:16px;border-radius:50%;background:{color};"></div>
            </div>
            <h3 style="color:white;font-size:1rem;font-weight:600;margin-bottom:0.5rem;">{title}</h3>
            <p style="color:{TXT2};font-size:0.875rem;line-height:1.7;">{desc}</p>
        </div>'''

    values_section = f'''
<div style="{section('text-align:center;')}">
    {badge(P, 'VALORES')}
    {heading('Lo que nos define', 'define')}
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.25rem;text-align:left;">{values_html}</div>
</div>'''

    locations = [('Canarias', 'Sede central y operaciones', P), ('Barcelona', 'Oficina creativa', B), ('Madrid', 'Hub de negocio', PK)]
    loc_html = ''
    for city, desc, color in locations:
        loc_html += f'''
        <div style="{glass('padding:1.5rem;text-align:center;')}">
            <div style="width:20px;height:20px;margin:0 auto 0.75rem;color:{color};">&#128205;</div>
            <h3 style="color:white;font-size:1.125rem;margin-bottom:0.25rem;">{city}</h3>
            <p style="color:{MUTED};font-size:0.8rem;">{desc}</p>
        </div>'''

    locations_section = f'''
<div style="{section('text-align:center;')}">
    {badge(B, 'PRESENCIA')}
    {heading('Donde estamos', 'estamos')}
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.25rem;">{loc_html}</div>
</div>'''

    return header + story + values_section + locations_section + cta_section('Quieres conocernos', 'mejor?', 'Agenda una llamada sin compromiso.', 'Hablemos')


# ══════════════════════════════════════════════════════════════
# SERVICE DETAIL PAGES
# ══════════════════════════════════════════════════════════════
def build_servicio(title, color, intro, features, process_steps, results):
    header = f'''
<div style="background:{BG};padding:6rem 1rem 3rem;text-align:center;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse at center,{color}25,transparent 70%);"></div>
    <div style="position:relative;">
        <a href="/servicios/" style="display:inline-flex;align-items:center;gap:0.5rem;font-size:0.875rem;color:{TXT2};margin-bottom:1.5rem;text-decoration:none;">&#8592; Volver a Servicios</a>
        <h1 style="font-size:2.5rem;font-weight:700;color:white;">{title}</h1>
    </div>
</div>'''

    intro_section = f'''
<div style="{section()}">
    <p style="color:{TXT2};font-size:1.05rem;line-height:1.8;max-width:800px;margin:0 auto 2rem;text-align:center;">{intro}</p>
</div>'''

    feat_html = ''
    for feat_title, feat_desc in features:
        feat_html += f'''
        <div style="{glass('padding:1.5rem;')}">
            <div style="width:40px;height:40px;border-radius:10px;background:{color}15;display:flex;align-items:center;justify-content:center;margin-bottom:0.75rem;">
                <div style="width:14px;height:14px;border-radius:50%;background:{color};"></div>
            </div>
            <h3 style="color:white;font-size:1rem;font-weight:600;margin-bottom:0.5rem;">{feat_title}</h3>
            <p style="color:{TXT2};font-size:0.85rem;line-height:1.6;">{feat_desc}</p>
        </div>'''

    features_section = f'''
<div style="{section('text-align:center;')}">
    {badge(color, 'QUE INCLUYE')}
    {heading(f'Todo lo que incluye {title}', title)}
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.25rem;text-align:left;">{feat_html}</div>
</div>'''

    results_html = ''.join([metric_card(v, l, color) for l, v in results])
    results_section = f'''
<div style="{section('text-align:center;')}">
    {badge(color, 'RESULTADOS TIPICOS')}
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;max-width:600px;margin:1rem auto;">{results_html}</div>
</div>'''

    return header + intro_section + features_section + results_section + cta_section('Te interesa este', 'servicio?', 'Cuentanos tu proyecto y te proponemos un plan a medida.', 'Solicitar presupuesto')


# ══════════════════════════════════════════════════════════════
# LEGAL PAGES
# ══════════════════════════════════════════════════════════════
def build_aviso_legal():
    return f'''
<div style="{section()}max-width:800px;">
    <h1 style="font-size:2rem;color:white;text-align:center;margin-bottom:0.5rem;">Aviso Legal</h1>
    <p style="text-align:center;color:{MUTED};font-size:0.875rem;margin-bottom:3rem;">Ultima actualizacion: marzo 2026</p>
    <div style="color:#d1d5db;line-height:1.8;font-size:0.9375rem;">
        <h2 style="font-size:1.25rem;color:white;margin:2rem 0 0.75rem;">1. Datos identificativos</h2>
        <p>En cumplimiento del deber de informacion recogido en el articulo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Informacion y del Comercio Electronico, ScalifyLabs pone a disposicion la siguiente informacion:</p>
        <ul style="padding-left:1.5rem;margin:1rem 0;"><li style="list-style:disc;margin-bottom:0.5rem;">Denominacion social: ScalifyLabs</li><li style="list-style:disc;margin-bottom:0.5rem;">Domicilio: Canarias, Espana</li><li style="list-style:disc;margin-bottom:0.5rem;">Email: info@scalifylabs.es</li></ul>
        <h2 style="font-size:1.25rem;color:white;margin:2rem 0 0.75rem;">2. Objeto</h2>
        <p>El presente sitio web tiene por objeto facilitar al publico informacion sobre los servicios y actividades de ScalifyLabs.</p>
        <h2 style="font-size:1.25rem;color:white;margin:2rem 0 0.75rem;">3. Propiedad intelectual</h2>
        <p>Todos los contenidos del sitio web (textos, fotografias, graficos, imagenes, iconos, tecnologia, software, enlaces, diseno grafico y codigos fuente) son propiedad de ScalifyLabs o de terceros que han autorizado su uso.</p>
        <h2 style="font-size:1.25rem;color:white;margin:2rem 0 0.75rem;">4. Limitacion de responsabilidad</h2>
        <p>ScalifyLabs no se hace responsable de los perjuicios que pudieran derivarse del uso de la informacion contenida en este sitio web.</p>
        <h2 style="font-size:1.25rem;color:white;margin:2rem 0 0.75rem;">5. Legislacion aplicable</h2>
        <p>Para la resolucion de las controversias o cuestiones relacionadas con el presente sitio web, sera de aplicacion la legislacion espanola.</p>
    </div>
</div>'''

def build_privacidad():
    return f'''
<div style="{section()}max-width:800px;">
    <h1 style="font-size:2rem;color:white;text-align:center;margin-bottom:0.5rem;">Politica de Privacidad</h1>
    <p style="text-align:center;color:{MUTED};font-size:0.875rem;margin-bottom:3rem;">Ultima actualizacion: marzo 2026</p>
    <div style="color:#d1d5db;line-height:1.8;font-size:0.9375rem;">
        <h2 style="font-size:1.25rem;color:white;margin:2rem 0 0.75rem;">1. Responsable del tratamiento</h2>
        <p>ScalifyLabs es responsable del tratamiento de los datos personales recogidos a traves de este sitio web.</p>
        <h2 style="font-size:1.25rem;color:white;margin:2rem 0 0.75rem;">2. Datos que recopilamos</h2>
        <ul style="padding-left:1.5rem;margin:1rem 0;"><li style="list-style:disc;margin-bottom:0.5rem;">Nombre y apellidos</li><li style="list-style:disc;margin-bottom:0.5rem;">Direccion de email</li><li style="list-style:disc;margin-bottom:0.5rem;">Mensaje o consulta</li><li style="list-style:disc;margin-bottom:0.5rem;">Datos de navegacion (cookies)</li></ul>
        <h2 style="font-size:1.25rem;color:white;margin:2rem 0 0.75rem;">3. Finalidad del tratamiento</h2>
        <p>Los datos recopilados se utilizan para responder a las consultas y solicitudes de los usuarios, enviar informacion comercial (solo con consentimiento previo) y mejorar nuestros servicios.</p>
        <h2 style="font-size:1.25rem;color:white;margin:2rem 0 0.75rem;">4. Base legal</h2>
        <p>El tratamiento de datos se basa en el consentimiento del usuario y en el interes legitimo de ScalifyLabs.</p>
        <h2 style="font-size:1.25rem;color:white;margin:2rem 0 0.75rem;">5. Derechos del usuario</h2>
        <p>Puedes ejercer tus derechos de acceso, rectificacion, supresion, limitacion, oposicion y portabilidad enviando un email a info@scalifylabs.es.</p>
    </div>
</div>'''

def build_cookies():
    return f'''
<div style="{section()}max-width:800px;">
    <h1 style="font-size:2rem;color:white;text-align:center;margin-bottom:0.5rem;">Politica de Cookies</h1>
    <p style="text-align:center;color:{MUTED};font-size:0.875rem;margin-bottom:3rem;">Ultima actualizacion: marzo 2026</p>
    <div style="color:#d1d5db;line-height:1.8;font-size:0.9375rem;">
        <h2 style="font-size:1.25rem;color:white;margin:2rem 0 0.75rem;">1. Que son las cookies</h2>
        <p>Las cookies son pequenos archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web.</p>
        <h2 style="font-size:1.25rem;color:white;margin:2rem 0 0.75rem;">2. Cookies que utilizamos</h2>
        <ul style="padding-left:1.5rem;margin:1rem 0;"><li style="list-style:disc;margin-bottom:0.5rem;"><strong style="color:white;">Cookies tecnicas:</strong> necesarias para el funcionamiento del sitio</li><li style="list-style:disc;margin-bottom:0.5rem;"><strong style="color:white;">Cookies analiticas:</strong> nos ayudan a entender como usas el sitio</li><li style="list-style:disc;margin-bottom:0.5rem;"><strong style="color:white;">Cookies de marketing:</strong> para personalizar la publicidad</li></ul>
        <h2 style="font-size:1.25rem;color:white;margin:2rem 0 0.75rem;">3. Como gestionar las cookies</h2>
        <p>Puedes configurar tu navegador para bloquear o eliminar las cookies. Ten en cuenta que desactivar ciertas cookies puede afectar al funcionamiento del sitio.</p>
        <h2 style="font-size:1.25rem;color:white;margin:2rem 0 0.75rem;">4. Mas informacion</h2>
        <p>Para mas informacion sobre el uso de cookies, contacta con nosotros en info@scalifylabs.es.</p>
    </div>
</div>'''


# ══════════════════════════════════════════════════════════════
# MAIN - CREATE ALL PAGES
# ══════════════════════════════════════════════════════════════
if __name__ == '__main__':
    print('='*60)
    print('DEPLOYING SCALIFYLABS TO WORDPRESS.COM')
    print('='*60)

    # Check existing pages
    print('\n[1/8] Checking existing pages...')
    existing = api_get('posts?type=page&status=publish,draft,trash&number=50')
    if existing and existing.get('posts'):
        for p in existing['posts']:
            if p['status'] != 'trash':
                print(f'  Deleting: {p["title"]} (ID {p["ID"]})')
                api_post(f'posts/{p["ID"]}/delete', {})

    # HOME
    print('\n[2/8] Creating HOME page...')
    home_id = create_page('Inicio', 'inicio', build_home())

    # SERVICIOS HUB
    print('\n[3/8] Creating SERVICIOS hub...')
    svc_id = create_page('Servicios', 'servicios', build_servicios())

    # SERVICE DETAIL PAGES
    print('\n[4/8] Creating SERVICE DETAIL pages...')

    service_pages = [
        ('Desarrollo Web', 'desarrollo-web', P,
         'Disenamos y desarrollamos sitios web que no solo se ven increibles, sino que estan optimizados para convertir visitantes en clientes. Desde landing pages hasta e-commerce completos.',
         [('Diseno UI/UX personalizado', 'Interfaces modernas y funcionales que reflejan tu marca y guian al usuario hacia la conversion.'),
          ('Desarrollo responsive', 'Tu web se ve perfecta en movil, tablet y desktop. Mobile-first siempre.'),
          ('Optimizacion de velocidad', 'Core Web Vitals perfectos. Tiempos de carga < 1.5s para maximizar conversiones y SEO.'),
          ('E-commerce integrado', 'Tiendas online con pasarelas de pago, inventario y panel de gestion completo.')],
         [],
         [('Velocidad','98/100'),('Conversion','+180%'),('Bounce','-45%')]),

        ('Posicionamiento SEO', 'seo', B,
         'Estrategia SEO completa para que tu negocio aparezca en las primeras posiciones de Google cuando tus clientes potenciales te buscan.',
         [('Auditoria SEO tecnica', 'Analisis completo de tu web: indexacion, velocidad, estructura, errores y oportunidades.'),
          ('Estrategia de contenidos', 'Contenido optimizado para keywords transaccionales que atraen trafico cualificado.'),
          ('Link Building', 'Estrategia de enlaces de calidad para aumentar la autoridad de tu dominio.'),
          ('SEO Local', 'Optimizacion para busquedas locales, Google My Business y directorios.')],
         [],
         [('Trafico','+240%'),('Keywords TOP 3','+180%'),('Leads','+150%')]),

        ('Redes Sociales', 'redes-sociales', PK,
         'Gestion integral de redes sociales con estrategia de contenidos, comunidad y crecimiento organico que convierte seguidores en clientes.',
         [('Estrategia de contenidos', 'Calendarios editoriales, pilares de contenido y creatividades disenadas para enganchar.'),
          ('Community management', 'Gestion de comunidad, respuestas e interaccion que genera confianza.'),
          ('Crecimiento organico', 'Estrategias de hashtags, colaboraciones y contenido viral para crecer sin pagar.'),
          ('Reporting mensual', 'Informes detallados de rendimiento, engagement y crecimiento.')],
         [],
         [('Seguidores','+300%'),('Engagement','8.4%'),('Alcance','+500%')]),

        ('Campanas Ads', 'ads', V,
         'Publicidad digital en Google, Meta y TikTok. Cada euro invertido esta rastreado y optimizado para maximo retorno.',
         [('Google Ads', 'Campanas de Search, Display, Shopping y YouTube optimizadas para conversion.'),
          ('Meta Ads', 'Facebook e Instagram Ads con segmentacion avanzada y creatividades A/B tested.'),
          ('TikTok Ads', 'Publicidad nativa en TikTok para alcanzar audiencias jovenes y engagement alto.'),
          ('Retargeting', 'Campanas de remarketing para recuperar visitantes y maximizar conversiones.')],
         [],
         [('ROAS','5.2x'),('CPA','-62%'),('Conversiones','+340%')]),

        ('Programacion a Medida', 'programacion', C,
         'Desarrollo de aplicaciones web, plataformas SaaS, APIs e integraciones personalizadas que automatizan y escalan tu negocio.',
         [('Apps web', 'Aplicaciones web modernas con React, Next.js, Vue.js o la tecnologia que mejor se adapte.'),
          ('Plataformas SaaS', 'Desarrollo de plataformas de software como servicio escalables y seguras.'),
          ('APIs e integraciones', 'Conexion entre sistemas, automatizacion de procesos y desarrollo de APIs REST/GraphQL.'),
          ('Mantenimiento', 'Soporte tecnico continuo, actualizaciones de seguridad y mejoras incrementales.')],
         [],
         [('Uptime','99.9%'),('Velocidad','<200ms'),('Usuarios','+10K')]),

        ('Diseno Grafico', 'diseno-grafico', R,
         'Identidad visual, branding y piezas graficas que transmiten profesionalidad y confianza en cada punto de contacto.',
         [('Branding completo', 'Logo, paleta de colores, tipografia y manual de marca que define tu identidad.'),
          ('Diseno para redes', 'Templates, stories, reels y creatividades disenadas para cada plataforma.'),
          ('Packaging', 'Diseno de packaging y etiquetado que destaca en el punto de venta.'),
          ('UI/UX Design', 'Diseno de interfaces de usuario funcionales, atractivas y centradas en la experiencia.')],
         [],
         [('Proyectos','50+'),('Satisfaccion','100%'),('Entrega','48-72h')]),

        ('Embudo de Ventas', 'embudo-ventas', A,
         'Automatizacion completa del proceso de venta: desde la captacion del lead hasta el cierre y la fidelizacion.',
         [('Lead magnets', 'Ebooks, webinars, checklists y recursos de valor que captan emails cualificados.'),
          ('Email marketing', 'Secuencias automatizadas de nurturing que educan y convierten leads en clientes.'),
          ('CRM y automatizacion', 'Configuracion de CRM, scoring de leads y automatizacion de tareas repetitivas.'),
          ('Optimizacion continua', 'A/B testing, analisis de funnel y mejora constante de las tasas de conversion.')],
         [],
         [('Conversion','4.2%'),('Email Open','38%'),('ROI','7.8x')]),
    ]

    for title, slug, color, intro, features, process_steps, results in service_pages:
        page_id = create_page(title, slug, build_servicio(title, color, intro, features, process_steps, results), parent_id=svc_id or 0)

    # CASOS
    print('\n[5/8] Creating CASOS DE EXITO...')
    create_page('Casos de Exito', 'casos', build_casos())

    # NOSOTROS
    print('\n[6/8] Creating SOBRE NOSOTROS...')
    create_page('Sobre Nosotros', 'nosotros', build_nosotros())

    # LEGAL
    print('\n[7/8] Creating LEGAL pages...')
    legal_id = create_page('Legal', 'legal', '<p>Paginas legales de ScalifyLabs.</p>')
    create_page('Aviso Legal', 'aviso-legal', build_aviso_legal(), parent_id=legal_id or 0)
    create_page('Politica de Privacidad', 'privacidad', build_privacidad(), parent_id=legal_id or 0)
    create_page('Politica de Cookies', 'cookies', build_cookies(), parent_id=legal_id or 0)

    # SETTINGS
    print('\n[8/8] Configuring site settings...')

    # Set site title and description
    settings_result = api_post('settings', {
        'blogname': 'ScalifyLabs',
        'blogdescription': 'Agencia de Marketing Digital | Estrategia, Desarrollo y Resultados',
    })
    if settings_result:
        print('  OK: Site title and description updated')

    # Set static front page
    if home_id:
        fp_result = api_post('settings', {
            'show_on_front': 'page',
            'page_on_front': home_id,
        })
        if fp_result:
            print(f'  OK: Static front page set to ID {home_id}')

    print('\n' + '='*60)
    print('DEPLOYMENT COMPLETE!')
    print(f'Site: https://syncralabs.wordpress.com')
    print('='*60)
