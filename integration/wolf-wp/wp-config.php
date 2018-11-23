<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'wolfgang');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'troiswa');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'f+(S7CamLp9BSm/A(cCugrk!?sG4,;Q Vi+QWD8Vjxnh(d(s|Vi#@=oUi;7Hu>JB');
define('SECURE_AUTH_KEY',  '.e2|sonocRk{T=0McWFz18Gz%h5])F69TG8Ijla$9l$Qg6N2qO30c3bv>&t[e,}l');
define('LOGGED_IN_KEY',    'DF RdiY5toD^~`nJ$>9j&&T[3_/rXRxK8!F:Ty9J)]Gw?@xZd#N[JTVjWkw!AF<q');
define('NONCE_KEY',        '3?lcUy[::oWK&06nK[w(o.5 Wnug#&5I}@H@@7#~SIm}Km>H3bg}) @X*4<}2S~O');
define('AUTH_SALT',        'SNUu+arrTC|a8K{.e?(:|7:l=vl$jyh{|]I}[guDu-A,34iyL`uYG=f6@Mx#|rE<');
define('SECURE_AUTH_SALT', 'dZzPl!Jc!&Z:($R0(]Ven1L!iP:sDzjVVyV*/U*4j+bQPJiA4k;bZ4@eK24=oLr#');
define('LOGGED_IN_SALT',   'Y5XfM+x#22?}ECeIMP*7e:{Q9ve8-H)S4[_cF1 :t2=yhc+sRy,LB/V/:tOtXynm');
define('NONCE_SALT',       'S#Wp1RpY7@g`RxDB^|jh:@,II*s~<6vV,_!5@Y/DuKLY?nSBrwp#nT`3^8!%wfl!');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');