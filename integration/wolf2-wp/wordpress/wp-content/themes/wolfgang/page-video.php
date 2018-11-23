<?php
/*
Template Name: page avec Vidéo
*/

get_header();
?>

    <main>
          <?php echo'archive'; ?>
      <section class="products">
        <?php



            if(have_posts()):
              while(have_posts()):
                  the_post();
                  echo'<article class="item-products">';
                  get_template_part('template-parts/content','page');
                  echo'</article>';
              endwhile;
            endif;
            wp_reset_query();
         ?>
       </section>
       <div class="video">
            <?php get_sidebar('video'); ?>
       </div>
    </main>
    <?php get_footer();?>
