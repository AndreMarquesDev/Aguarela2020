const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');

module.exports = withPlugins([
    [optimizedImages, {
        inlineImageLimit: 819200,
        optimizeImagesInDev: true,
        mozjpeg: {
            quality: 60,
        },
        optipng: {
            optimizationLevel: 5,
        },
        webp: {
            preset: 'default',
            quality: 60,
        },
    }],

    [withFonts, {}],
]);
