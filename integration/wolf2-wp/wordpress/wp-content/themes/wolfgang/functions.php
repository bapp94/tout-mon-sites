<?php

// creation de la function exemple_add_css_js pour appeler le js et le css
function exemple_add_css_js(){
 wp_enqueue_style('moncss' , get_template_directory_uri().'/css/wolfgang.css', '', '1.5', 'all');
 wp_enqueue_script('monjs', get_template_directory_uri().'/js/wolfgang.js', '', '2.2', true);
}

// appel du css et js via la function exemple_add_css_js
add_action('wp_enqueue_scripts', 'exemple_add_css_js');

function wolfy_add_menu(){
// on demande à utiliser le menus
 add_theme_support('menus');
// on crée 2 emplacements (ou plus) de menus, 2 paremètre à chaque fois
// identifant unique (en minuscules)
// desription qu'on retrouve dabs l'adminastration des menus
 register_nav_menu('primary', 'menu primaire');
 register_nav_menu('secondary', 'menu secondaire');
}
// on appelle la fonction qui active les menus, au moment de l'initialisation du thème (init)
add_action('init', 'wolfy_add_menu');

add_theme_support('custom-header');

//image à la Une
add_theme_support('post-thumbnails');

function wolfgang_add_widgets(){
 register_sidebar(
 array(
 'name' => 'accueil social',
 'id' => 'sidebar-home',
 'class' => '',
 'description' => 'widgets de la page accueil',
 'before_widget' => '<aside>',
 'afer_widget' => '</aside>',
 'before_title' => '<h3 class="widget-title">',
 'afer_title' => '</h3>'
 )
 );
 register_sidebar(
 array(
 'name' => 'accueil video',
 'id' => 'sidebar-video',
 'class' => '',
 'description' => 'widgets de la page accueil',
 'before_widget' => '<aside>',
 'afer_widget' => '</aside>',
 'before_title' => '<h3 class="widget-title">',
 'afer_title' => '</h3>'
 )
 );



}
add_action('widgets_init', 'wolfgang_add_widgets');


function exemple_ajout_custom_post_type(){
// $labels: on va nomme tous les champs du back ofce pour le pinceau, puis les injecter dans $args
 $labels = array(
 'name' => 'moto',
 'singular_name' => 'moto',
 'add_new' => 'nouveau moto',
 'all_items' => 'tous les moto',
 'add_new_item' => 'ajouter un moto',
 'edit_item' => 'modifer moto',
 'new_item' => 'nouveau moto',
 'view_item' => 'voir le moto',
 'search_item' => 'chercher un moto',
 'not_found' => 'pas de moto trouvé',
 'not_found_in_trash' => 'pas de moto dans la poubelle',
 'parent_item_colon' => 'moto parent'
 );
 $args = array(
 'labels' => $labels,
 'public' => true,
 'has_archive' => true,
 'publicly_queryable' => true,
 'query_var' => true,
 'rewrite' => true,
 'capability_type' => 'post',
 'hierarchical' => false,
// // ici on indique quels champs sont utilisables par les pinceaux lors de l'édition
// d'un pinceau, dans ce cas on autorise un titre (la base!) ainsi que l'éditeur de texte, l'extrait, image à
// la une et les révisions.
 'supports' => array('title', 'editor', 'excerpt', 'thumbnail', 'revisions'),
// taxonomies: ici on utiliserait taxonomies nommées category et post_tag, mais on ne veut pas de ça,
// on veut nos taxonomies pour les posts de type pinceau
 //'taxonomies' => array('category', 'post_tag'),
// on va donc interdire aux pinceau les taxonomies de 'base' utilisés par les post de type post
 'taxonomies' => array('category','post_tag'),
 'menu_position' => 5,
 'exclude_from_search' => false
 );
 register_post_type('moto', $args);
}
add_action('init', 'exemple_ajout_custom_post_type');

function exemple_custom_taxonomy(){
 $labels = array(
 'name' => 'taxo moto',
 'singular_name' => 'taxo moto',
 'search_items' => 'chercher une taxo moto',
 'all_items' => 'toutes les taxo moto',
 'parent_item' => 'taxo moto parente',
 'parent_item_colon' => 'taxo moto parent',
 'edit_item' => 'modifer taxo moto',
 'update_item' => 'Mettre à jour taxo moto',
 'add_new_item' => 'ajouter une taxo moto',
 'new_item_name' => 'nouveau nom taxo moto',
 'menu_name' => 'Taxo moto'
 );
 $args = array(
 'labels' => $labels,
 'hierarchical' => true,
 'show_ui' => true,
 'show_admin_column' => true,
 'query_var' => true,
 'rewrite' => array('slug' => 'taxo-moto')
 );
// Le array est très important, il indique qui peut utiliser cette taxo, ici, le type pinceau uniquement
 register_taxonomy('taxo-moto', array('moto') ,$args);
}
add_action('init', 'exemple_custom_taxonomy');
