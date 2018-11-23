<?php get_header();?>
    <main>

      <section class="products">
        <h2 class="section-title">Découvrez <span>nos motos</span></h2>
        <?php
        $args = array(
          'post_type'=>'moto',
          'posts_per_page'=>5
        );
          query_posts($args);

            if(have_posts()):
              while(have_posts()):
                  the_post();
                  echo'<article class="item-products">';
                  get_template_part('template-parts/content','home');
                  echo'</article>';
              endwhile;
            endif;
            wp_reset_query();
         ?>
       </section>
       <section class="infos">
         <h2 class="section-title">Pour nous connaitre <span>plus en détail</span></h2>
         <div class="social">
            <?php get_sidebar(); ?>

         </div>
         <div class="video">
              <?php get_sidebar('video'); ?>
         </div>
       </section>
    </main>
    <?php get_footer();?>
