<?php
/**
 * ScalifyLabs Theme Functions
 *
 * @package ScalifyLabs
 */

if (!defined('ABSPATH')) exit;

define('SCALIFY_VERSION', '1.0.0');
define('SCALIFY_DIR', get_template_directory());
define('SCALIFY_URI', get_template_directory_uri());

/* ═══════════════════════════════════════════
   THEME SETUP
   ═══════════════════════════════════════════ */

function scalify_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);
    add_theme_support('custom-logo', [
        'height'      => 36,
        'width'       => 36,
        'flex-height' => true,
        'flex-width'  => true,
    ]);
    add_theme_support('editor-styles');
    add_theme_support('wp-block-styles');
    add_theme_support('responsive-embeds');

    register_nav_menus([
        'primary'  => __('Menu Principal', 'scalifylabs'),
        'services' => __('Menu Servicios', 'scalifylabs'),
        'footer'   => __('Menu Footer', 'scalifylabs'),
    ]);

    // Set content width
    if (!isset($content_width)) {
        $content_width = 1280;
    }
}
add_action('after_setup_theme', 'scalify_setup');

/* ═══════════════════════════════════════════
   ENQUEUE STYLES & SCRIPTS
   ═══════════════════════════════════════════ */

function scalify_enqueue_assets() {
    // Google Fonts
    wp_enqueue_style(
        'scalify-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap',
        [],
        null
    );

    // Main stylesheet
    wp_enqueue_style('scalify-style', get_stylesheet_uri(), ['scalify-fonts'], SCALIFY_VERSION);

    // Lucide Icons (CDN)
    wp_enqueue_script(
        'lucide-icons',
        'https://unpkg.com/lucide@latest/dist/umd/lucide.min.js',
        [],
        null,
        true
    );

    // Canvas Confetti
    wp_enqueue_script(
        'canvas-confetti',
        'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js',
        [],
        '1.9.4',
        true
    );

    // Theme scripts
    wp_enqueue_script('scalify-main', SCALIFY_URI . '/assets/js/main.js', [], SCALIFY_VERSION, true);
    wp_enqueue_script('scalify-animations', SCALIFY_URI . '/assets/js/animations.js', [], SCALIFY_VERSION, true);
    wp_enqueue_script('scalify-contact', SCALIFY_URI . '/assets/js/contact-form.js', ['canvas-confetti'], SCALIFY_VERSION, true);
    wp_enqueue_script('scalify-carousel', SCALIFY_URI . '/assets/js/carousel.js', [], SCALIFY_VERSION, true);
    wp_enqueue_script('scalify-marquee', SCALIFY_URI . '/assets/js/marquee.js', [], SCALIFY_VERSION, true);

    // Pass data to JS
    wp_localize_script('scalify-contact', 'scalifyData', [
        'webhookUrl' => 'https://n8n.srv1256702.hstgr.cloud/webhook/scalifyformweb1',
        'whatsappUrl' => 'https://wa.me/34604561592',
        'themeUrl'   => SCALIFY_URI,
    ]);
}
add_action('wp_enqueue_scripts', 'scalify_enqueue_assets');

/* ═══════════════════════════════════════════
   CUSTOM PAGE TEMPLATES REGISTRATION
   ═══════════════════════════════════════════ */

function scalify_page_templates($templates) {
    $templates['page-templates/template-servicios.php'] = 'Servicios Hub';
    $templates['page-templates/template-casos.php'] = 'Casos de Exito';
    $templates['page-templates/template-nosotros.php'] = 'Sobre Nosotros';
    $templates['page-templates/template-legal.php'] = 'Pagina Legal';
    $templates['page-templates/template-servicio-detail.php'] = 'Servicio Detalle';
    return $templates;
}
add_filter('theme_page_templates', 'scalify_page_templates');

/* ═══════════════════════════════════════════
   REMOVE UNNECESSARY WP STUFF
   ═══════════════════════════════════════════ */

function scalify_cleanup() {
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
}
add_action('init', 'scalify_cleanup');

/* ═══════════════════════════════════════════
   CUSTOM META TAGS & SEO
   ═══════════════════════════════════════════ */

function scalify_meta_tags() {
    if (is_front_page()) {
        echo '<meta name="description" content="Escalamos tu negocio con desarrollo web, SEO, redes sociales y publicidad digital. 7+ anos, 100+ empresas. Resultados reales.">' . "\n";
        echo '<meta name="keywords" content="agencia marketing digital, SEO Espana, desarrollo web, publicidad digital, ScalifyLabs">' . "\n";
        echo '<meta property="og:title" content="ScalifyLabs | Agencia de Marketing Digital en Espana">' . "\n";
        echo '<meta property="og:description" content="Escalamos tu negocio con desarrollo web, SEO, redes sociales y publicidad digital.">' . "\n";
        echo '<meta property="og:url" content="https://scalifylabs.es">' . "\n";
        echo '<meta property="og:site_name" content="ScalifyLabs">' . "\n";
        echo '<meta property="og:locale" content="es_ES">' . "\n";
        echo '<meta property="og:type" content="website">' . "\n";
    }
}
add_action('wp_head', 'scalify_meta_tags');

/* ═══════════════════════════════════════════
   ELEMENTOR COMPATIBILITY
   ═══════════════════════════════════════════ */

function scalify_elementor_support() {
    // Register Elementor locations for header/footer
    if (did_action('elementor/loaded')) {
        add_action('elementor/theme/register_locations', function($manager) {
            $manager->register_all_core_locations();
        });
    }
}
add_action('init', 'scalify_elementor_support');

// Allow Elementor to override header/footer
function scalify_elementor_header_footer() {
    if (did_action('elementor/loaded')) {
        if (function_exists('elementor_theme_do_location') && elementor_theme_do_location('header')) {
            return true;
        }
    }
    return false;
}

function scalify_elementor_footer() {
    if (did_action('elementor/loaded')) {
        if (function_exists('elementor_theme_do_location') && elementor_theme_do_location('footer')) {
            return true;
        }
    }
    return false;
}

/* ═══════════════════════════════════════════
   WIDGET AREAS
   ═══════════════════════════════════════════ */

function scalify_widgets_init() {
    register_sidebar([
        'name'          => 'Footer Widget Area',
        'id'            => 'footer-widgets',
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="footer-col-title">',
        'after_title'   => '</h4>',
    ]);
}
add_action('widgets_init', 'scalify_widgets_init');

/* ═══════════════════════════════════════════
   CONTACT FORM AJAX HANDLER (Fallback)
   ═══════════════════════════════════════════ */

function scalify_contact_form_handler() {
    check_ajax_referer('scalify_contact', 'nonce');

    $nombre = sanitize_text_field($_POST['nombre'] ?? '');
    $email = sanitize_email($_POST['email'] ?? '');
    $mensaje = sanitize_textarea_field($_POST['mensaje'] ?? '');

    if (empty($nombre) || empty($email) || empty($mensaje)) {
        wp_send_json_error('Todos los campos son obligatorios.');
    }

    // Forward to n8n webhook
    $response = wp_remote_post('https://n8n.srv1256702.hstgr.cloud/webhook/scalifyformweb1', [
        'headers' => ['Content-Type' => 'application/json'],
        'body'    => wp_json_encode([
            'nombre' => $nombre,
            'email'  => $email,
            'mensaje' => $mensaje,
        ]),
        'timeout' => 15,
    ]);

    if (is_wp_error($response)) {
        wp_send_json_error('Error al enviar el mensaje.');
    }

    wp_send_json_success('Mensaje enviado correctamente.');
}
add_action('wp_ajax_scalify_contact', 'scalify_contact_form_handler');
add_action('wp_ajax_nopriv_scalify_contact', 'scalify_contact_form_handler');

/* ═══════════════════════════════════════════
   SVG SUPPORT
   ═══════════════════════════════════════════ */

function scalify_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'scalify_mime_types');

/* ═══════════════════════════════════════════
   BODY CLASSES
   ═══════════════════════════════════════════ */

function scalify_body_classes($classes) {
    $classes[] = 'scalify-theme';
    if (is_front_page()) {
        $classes[] = 'is-home';
    }
    return $classes;
}
add_filter('body_class', 'scalify_body_classes');

/* ═══════════════════════════════════════════
   ADMIN: HIDE UNNECESSARY ITEMS
   ═══════════════════════════════════════════ */

function scalify_admin_style() {
    echo '<style>#wp-admin-bar-comments { display: none; }</style>';
}
add_action('admin_head', 'scalify_admin_style');
