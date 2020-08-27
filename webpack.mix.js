const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js');

mix.sass('resources/sass/app.scss', 'public/css')
    .options({
        postCss: [
            require('postcss-sorting')({
                'properties-order': 'alphabetical'
            })
        ]
    });
    
mix.postCss('resources/postcss/postcss.css', 'public/css', [ //if we want to write css but use postcss to operate upon it 
    require('postcss-cssnext'),
    require('postcss-sorting')({
        'properties-order': 'alphabetical'
    })
]);
// mix.sass('resources/sass/app.scss', 'public/css'). //if you dont want the compiler touch the url or to generate the image in public directory
//     options({
//         processCssUrls: false
//     });
// mix.fastSass('resources/sass/app.scss', 'public/css'); //use this if you dont want to deal with webpack. Just Sass.

mix.js('resources/js/test.js', 'public/js');
mix.js('resources/js/vue.js', 'public/js');

// mix.scripts(
//     [
//         'resources/js/one.js',
//         'resources/js/two.js'
//     ], 
//     'public/js/everything.js'
// );

mix.babel(
    [
        'resources/js/one.js',
        'resources/js/two.js'
    ], 
    'public/js/everything.js'
);

mix.sass('resources/sass/browsersync.scss', 'public/css').version();
mix.browserSync({
    proxy: 'laravelmix.learning'
});

