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
define('DB_NAME', 'Wolfy');

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
define('AUTH_KEY',         'OYDbf,LqU1V34z3WEr)qS!=c9]&m>MHl#W.TNn8z0;`|0M}t2JM/(m<%>mge,dBj');
define('SECURE_AUTH_KEY',  '.6?uwP$4Xz:t3sqbcTgjcMgO(@s/WUZFIQmy]-Sp^B;n67n~1TKNHWoj70v5|MOR');
define('LOGGED_IN_KEY',    'yn:6d?xm}GXPK sXmU#3ymL2DNasbS#|k(*[+1f,^WceHtPM.3X^]j}:`=x r;N}');
define('NONCE_KEY',        ']EOT{#iW7DPGE7Z,kEMCT`?Ti[(Sm}Q,WTk-Hh!K6oz~n.?d405e3n@ 3ow??X/W');
define('AUTH_SALT',        'aV}7_x9_H&aVKJ`&H8YMFe~03y_f_]V}:Roh)fhvpVO|:wvpTNlV<:+Sv~;?IO[6');
define('SECURE_AUTH_SALT', 'rT&h]6eVS]g$_&!RTd;WS&Wh;!p(^353xP)$flf>SL5Yi=d8nkRJllI-sa^#v,{#');
define('LOGGED_IN_SALT',   'j/ui/)L0Jmn1nO]`..0&{Q7j,7e?XtC>(osVCH6?5[s@uYub[dX]tc<QF.n:.=ba');
define('NONCE_SALT',       '1B*dnLeYCXYtZkziFl;2{;bQ%uZjvKi7!>,Bn`}1RF`7r#n*UBZ~,Wxj([~ {jtb');
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