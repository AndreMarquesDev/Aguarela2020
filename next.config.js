require('dotenv').config();
const withPlugins = require('next-compose-plugins'); // eslint-disable-line import/no-extraneous-dependencies
const withOptimizedImages = require('next-optimized-images'); // eslint-disable-line import/no-extraneous-dependencies

const nextConfig = {
    env: {
        PRISMIC_API_ENDPOINT: process.env.PRISMIC_API_ENDPOINT,
        PRISMIC_TOKEN: process.env.PRISMIC_TOKEN,
        INSTAGRAM_URL: process.env.INSTAGRAM_URL,
    },
};

module.exports = withPlugins([
    [withOptimizedImages, {
        optimizeImagesInDev: false,
    }],
], nextConfig);
