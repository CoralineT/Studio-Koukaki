<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'studio-koukaki' );

/** Database username */
define( 'DB_USER', 'admin-koukaki' );

/** Database password */
define( 'DB_PASSWORD', 'admin' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '5t P|nEM829q9TdOk,lb=03%^o G4-|9w2kq,2m3j32J2fZ0x1Mr+3HDdC0XX!@Z' );
define( 'SECURE_AUTH_KEY',  'R*vAb,B]B2<p^Tixz]U`>UR;_! Fkgs6sS|e0*z[)m=:1{MrU{{tfp,Rm9b*M7Ne' );
define( 'LOGGED_IN_KEY',    'Vw[,kR686yZw[P!T9Fh@sr&7,n{Ly2&b{d=[QslZxhmYy<$@1&_GP/k;n~y6a%]B' );
define( 'NONCE_KEY',        '[ .dBvVq*}!!(w.of8)K-Q.:}.t=2,qDBg/Ngp8qiR|U-Xe$8OXfub(a+YJ~}=YL' );
define( 'AUTH_SALT',        'o=Ask1]T[YO8sWO^>PHpP|duWf+(@,qCYg*`#%OR5s6K3=wOLI~`q01qRcq_4EiD' );
define( 'SECURE_AUTH_SALT', 'w~cdwG]#s^GyT?wI)ue,fi0/ch :Yuj5jx1gTi3h*Z=c?qM>:&;J0y7)n=~g=q*~' );
define( 'LOGGED_IN_SALT',   'p {2O6LFl`7SGjb!$. v<_mKfe?A;p}:f#x=QZ(MG~m$  jD8qD@seLX%{;1wBNf' );
define( 'NONCE_SALT',       'M0<xAG{@/(Ip/-mi^[e2!`UK{y2 bpPUpt~Dk`DyMLZ0=@H0W5e0]6D`r&hsMDg:' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
