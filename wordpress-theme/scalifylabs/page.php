<?php get_header(); ?>

<div class="section-padding" style="min-height:60vh;padding-top:8rem;">
    <div style="max-width:1280px;margin:0 auto;padding:0 1rem;">
        <?php while (have_posts()): the_post(); ?>
            <h1 style="font-family:var(--font-heading);font-size:2rem;margin-bottom:2rem;text-align:center;">
                <?php the_title(); ?>
            </h1>
            <div style="color:#e2e8f0;line-height:1.8;max-width:800px;margin:0 auto;">
                <?php the_content(); ?>
            </div>
        <?php endwhile; ?>
    </div>
</div>

<?php get_footer(); ?>
