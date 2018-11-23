<h3 class="product-title"><?php the_title(); ?></h3>
<?php if(has_post_thumbnail()):?>
<?php the_post_thumbnail('full'); ?>
<?php else:?>
  <img alt="404" src="<?php bloginfo('template_url')?>/img/a.jpeg">
<?php endif;?>


<?php the_content(); ?>
<?php the_field('marque');?>
<?php the_field('cylindre');?>
<p> Les catégorie:<?php the_category(' - ');?></p>
<?php if (has_tag()): ?>

<p> les tags: <?php the_tags('');?></p>
<?php endif;   ?>
