# ScalifyLabs WordPress Theme - Guia de Instalacion

## 1. Subir el tema

1. Comprime la carpeta `scalifylabs/` en un archivo ZIP
2. Ve a **WordPress Admin > Apariencia > Temas > Anadir nuevo > Subir tema**
3. Sube el ZIP y activa el tema

## 2. Crear las paginas

Crea las siguientes paginas en WordPress y asigna los templates indicados:

| Pagina | Slug | Template |
|--------|------|----------|
| Inicio | (portada) | — (usa front-page.php automaticamente) |
| Servicios | `servicios` | Servicios Hub |
| Desarrollo Web | `desarrollo-web` (padre: servicios) | Servicio Detalle |
| Posicionamiento SEO | `seo` (padre: servicios) | Servicio Detalle |
| Redes Sociales | `redes-sociales` (padre: servicios) | Servicio Detalle |
| Campanas Ads | `ads` (padre: servicios) | Servicio Detalle |
| Programacion a Medida | `programacion` (padre: servicios) | Servicio Detalle |
| Diseno Grafico | `diseno-grafico` (padre: servicios) | Servicio Detalle |
| Embudo de Ventas | `embudo-ventas` (padre: servicios) | Servicio Detalle |
| Casos de Exito | `casos` | Casos de Exito |
| Sobre Nosotros | `nosotros` | Sobre Nosotros |
| Aviso Legal | `aviso-legal` (padre: legal) | Pagina Legal |
| Politica de Privacidad | `privacidad` (padre: legal) | Pagina Legal |
| Politica de Cookies | `cookies` (padre: legal) | Pagina Legal |

## 3. Configurar la portada

1. Ve a **Ajustes > Lectura**
2. Selecciona **"Una pagina estatica"**
3. Portada: selecciona la pagina "Inicio"

## 4. Configurar los enlaces permanentes

1. Ve a **Ajustes > Enlaces permanentes**
2. Selecciona **"Nombre de la entrada"** (`/%postname%/`)
3. Guarda cambios

## 5. Plugins recomendados

### Obligatorios
- **Elementor** (gratis) - Para editar las paginas de servicios con drag & drop
- **Elementor Pro** (opcional) - Para header/footer builder y formularios avanzados

### Recomendados
- **Yoast SEO** o **Rank Math** - SEO avanzado
- **WP Super Cache** o **LiteSpeed Cache** - Cache y velocidad
- **Wordfence** - Seguridad
- **UpdraftPlus** - Backups
- **WPForms Lite** - Formularios alternativos (el tema ya tiene formulario integrado)

### Opcionales
- **Social Icons Widget** - Iconos de redes en footer
- **Cookie Notice** - Banner de cookies RGPD
- **Redirection** - Gestionar redirecciones 301

## 6. Editar con Elementor

Las paginas de **Servicio Detalle** estan preparadas para editarse con Elementor:

1. Ve a la pagina (ej: Desarrollo Web)
2. Haz clic en **"Editar con Elementor"**
3. Anade secciones con el contenido del servicio
4. El header, footer, formulario de contacto y WhatsApp button son del tema (no necesitas recrearlos)

Si quieres usar Elementor Pro para el header/footer:
- El tema detecta automaticamente si Elementor gestiona el header/footer
- Crea tus templates en **Elementor > Creador de temas**

## 7. Personalizar contenido

### Cambiar numero de WhatsApp
Numero actual: `34604561592` (en `functions.php` y `footer.php`).

### Cambiar email de contacto
Busca `info@scalifylabs.es` en `footer.php`.

### Cambiar webhook del formulario
El webhook de n8n esta en `functions.php` (variable `webhookUrl` en `wp_localize_script`).

### Cambiar redes sociales
Edita los enlaces en `footer.php` (seccion footer-socials).

## 8. Estructura del tema

```
scalifylabs/
├── style.css              # CSS completo (2400+ lineas)
├── functions.php           # Funciones, enqueues, AJAX
├── header.php              # Navbar + modal contacto
├── footer.php              # Footer + WhatsApp button
├── front-page.php          # Home page completa
├── index.php               # Fallback blog
├── page.php                # Pagina generica
├── 404.php                 # Error 404 con glitch
├── page-templates/
│   ├── template-servicios.php      # Hub de servicios
│   ├── template-servicio-detail.php # Servicio individual
│   ├── template-casos.php          # Casos de exito
│   ├── template-nosotros.php       # Sobre nosotros
│   └── template-legal.php          # Paginas legales
├── assets/
│   ├── css/                # (vacio - todo en style.css)
│   ├── js/
│   │   ├── main.js         # Navbar, scroll, reveal, particles
│   │   ├── animations.js   # Typing effect, counters
│   │   ├── contact-form.js # Modal + webhook + confetti
│   │   ├── carousel.js     # Testimonios
│   │   └── marquee.js      # Tech tools marquee
│   └── images/
│       ├── icon.svg
│       └── logo-icon.svg
├── template-parts/         # (para futuros partials)
└── inc/                    # (para futuros includes)
```

## 9. Funcionalidades incluidas

Todo lo del sitio Next.js original esta replicado:

- [x] Navbar con scroll detection + dropdown + mobile menu
- [x] Hero con typing effect (escalar, facturar, crecer, dominar, convertir)
- [x] Dashboard mockup animado con KPIs y graficos
- [x] Seccion de servicios con cards hover
- [x] Portfolio/showcase con browser mockups
- [x] Seccion "Por que" con phone mockup
- [x] Proceso en 4 pasos con timeline
- [x] Tech marquee infinito (20 herramientas)
- [x] Contadores animados (7+, 100+, 3+, 98%)
- [x] Carrusel de testimonios con autoplay 6s
- [x] CTA con gradient border animado + orbs
- [x] Formulario de contacto modal con webhook n8n
- [x] Confetti en envio exitoso
- [x] Boton WhatsApp flotante con tooltip
- [x] Scroll reveal animations (IntersectionObserver)
- [x] Glassmorphism, gradients, aurora background
- [x] Particles, light beams, orbs animados
- [x] 404 con mouse tracking + glitch effect
- [x] Responsive completo (mobile-first)
- [x] Reduced motion support
- [x] Compatible con Elementor
