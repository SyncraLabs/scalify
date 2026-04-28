<?php
/**
 * Template Name: Pagina Legal
 */
get_header();
?>

<div class="section-padding" style="min-height:60vh;padding-top:8rem;">
    <div style="max-width:800px;margin:0 auto;padding:0 1rem;">
        <?php while (have_posts()): the_post(); ?>
            <div class="reveal">
                <h1 style="font-family:var(--font-heading);font-size:2rem;margin-bottom:0.5rem;text-align:center;">
                    <?php the_title(); ?>
                </h1>
                <p style="text-align:center;color:#6b7280;font-size:0.875rem;margin-bottom:3rem;">
                    Ultima actualizacion: <?php echo get_the_modified_date(); ?>
                </p>
            </div>
            <div class="reveal" style="transition-delay:0.2s;color:#d1d5db;line-height:1.8;font-size:0.9375rem;">
                <style>
                    .entry-content h2 { font-family: var(--font-heading); font-size: 1.25rem; color: white; margin: 2rem 0 0.75rem; }
                    .entry-content h3 { font-family: var(--font-heading); font-size: 1.1rem; color: white; margin: 1.5rem 0 0.5rem; }
                    .entry-content p { margin-bottom: 1rem; }
                    .entry-content ul, .entry-content ol { margin-bottom: 1rem; padding-left: 1.5rem; }
                    .entry-content li { margin-bottom: 0.5rem; }
                    .entry-content ul li { list-style: disc; }
                    .entry-content ol li { list-style: decimal; }
                    .entry-content a { color: #6C3AED; transition: color 0.3s; }
                    .entry-content a:hover { color: #a78bfa; }
                    .entry-content strong { color: white; }
                </style>
                <div class="entry-content">
                    <?php the_content(); ?>
                </div>
            </div>
        <?php endwhile; ?>
    </div>
</div>

<?php get_footer(); ?>
