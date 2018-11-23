<?php get_header();?>

    <main>
          <h2>Résultat de recherche pour <?php echo get_search_query(); ?></h2>
      <section class="products">

        <?php



            if(have_posts()):
              while(have_posts()):
                  the_post();
                  echo'<article class="item-products">';
                  get_template_part('template-parts/content','search');
                  echo'</article>';
              endwhile;?>  <div class="next-previous">
            <?php
            previous_posts_link();
             next_posts_link();

              ?>
            </div>
            <?php
            else:
              ?>
              <h4>NOPE!!</h4>
              <?php
            endif;
            wp_reset_query();
         ?>
       </section>
    </main>
    <?php get_footer();?>
