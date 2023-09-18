<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    
    // Fichier css thème enfant
    wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/css/style.css', array(), filemtime(get_stylesheet_directory() . '/css/style.css'));
    // Swiper style
    wp_enqueue_style('swiper-style', get_stylesheet_directory_uri() . '/js/swiper/swiper-bundle.min.css', array());

    // Swiper script
    wp_enqueue_script('swiper-script', get_stylesheet_directory_uri() . '/js/swiper/swiper-bundle.min.js', array(), '1.0', true);
    // Fichier js thème enfant
    wp_enqueue_script( 'script', get_stylesheet_directory_uri() . '/js/script.js', array(), _S_VERSION, true );

    }
    
    

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}