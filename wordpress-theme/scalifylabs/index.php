<?php get_header(); ?>

<div class="section-padding" style="min-height:60vh;padding-top:8rem;">
    <div style="max-width:1280px;margin:0 auto;padding:0 1rem;">
        <?php if (have_posts()): ?>
            <?php while (have_posts()): the_post(); ?>
                <article style="margin-bottom:3rem;">
                    <h2 style="font-family:var(--font-heading);font-size:1.5rem;margin-bottom:1rem;">
                        <a href="<?php the_permalink(); ?>" style="color:white;transition:color 0.3s;" onmouseover="this.style.color='#6C3AED'" onmouseout="this.style.color='white'">
                            <?php the_title(); ?>
                        </a>
                    </h2>
                    <div style="color:#9ca3af;line-height:1.7;">
                        <?php the_excerpt(); ?>
                    </div>
                </article>
            <?php endwhile; ?>
        <?php else: ?>
            <p style="color:#9ca3af;">No se encontraron entradas.</p>
        <?php endif; ?>
    </div>
</div>

<?php get_footer(); ?>
