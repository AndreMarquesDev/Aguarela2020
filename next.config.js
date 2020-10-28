const withPlugins = require('next-compose-plugins'); // eslint-disable-line import/no-extraneous-dependencies
const withOptimizedImages = require('next-optimized-images'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = withPlugins([
    [withOptimizedImages, {
        optimizeImagesInDev: false,
    }],
]);
