<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wolfy</title>
    <?php wp_head(); ?>
  </head>
  <body <?php body_class();?>>
    <?php get_header();?>
        <h1><?php bloginfo('name') ?></h1>
        <!-- <p><?php bloginfo('description') ?></p> -->
        <header class="header-main">
          <div class="container">
          <a href="<?php bloginfo('url') ?>" ><img class="logo" src='<?php header_image(); ?>' alt='image'></a>
          <nav class="nav-main">

            <?php wp_nav_menu(array('theme_location'=>'primary')); ?>
          </nav>
          <?php get_search_form(); ?>
        </div>
        </header>
