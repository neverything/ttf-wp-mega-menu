<?php

namespace TTF_WP_Mega_Menu;

function setup(): void {
    // Stylesheet in the editor.
    add_editor_style( 'style.css' );
}
add_action( 'after_setup_theme', __NAMESPACE__ . '\setup' );

function enqueue_style_sheet(): void {
    // style.css
    wp_enqueue_style(
        sanitize_title( __NAMESPACE__ ),
        get_stylesheet_directory_uri() . '/style.css',
        [],
        wp_get_theme()->get( 'Version' )
    );

    // functions.js
    wp_enqueue_script(
        sanitize_title( __NAMESPACE__ ),
        get_stylesheet_directory_uri() . '/functions.js',
        [],
        wp_get_theme()->get( 'Version' ),
        ['strategy'  => 'defer'],
    );
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_style_sheet' );