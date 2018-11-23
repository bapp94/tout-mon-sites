<?php get_header('404');?>

    <main>
          <?php echo'404'; ?>
      <section class="404">
            <h1 class="titler">Mauvaise page !  abruti..</h1>
            <img alt="404" src="<?php bloginfo('template_url')?>/img/images.jpeg">
       </section>
       <section class="products">
         <h2 class="section-title">Voici <span>nos 4 derniere motos</span></h2>
         <?php
         $args = array(
           'category_name'=>'motto',
           'posts_per_page'=>4
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
    </main>
    <?php get_footer();?>
