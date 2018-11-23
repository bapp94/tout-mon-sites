<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wolfy</title>
    <?php wp_head(); ?>
  </head>
  <body>
    <h1><?php bloginfo('name') ?></h1>
    <!-- <p><?php bloginfo('description') ?></p> -->
    <header class="header-main">
      <div class="container">
      <a href="<?php bloginfo('url') ?>" ><img class="logo" src='<?php header_image(); ?>' alt='image'></a>
      <nav class="nav-main">

        <?php wp_nav_menu(array('theme_location'=>'primary')); ?>
      </nav>
    </div>
    </header>
    <main>
      <?php
        if(have_posts()):
          while(have_posts()):
              the_post();
              the_title();
          endwhile;
        endif;
       ?>
    </main>
    <footer>
      <nav>
         <?php wp_nav_menu(array('theme_location'=>'secondary')); ?>
       </nav>
    </footer>
    <?php wp_footer();?>
  </body>
</html>
