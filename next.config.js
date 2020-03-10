require('dotenv').config();
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
    env: {
        PRISMIC_API_ENDPOINT: process.env.PRISMIC_API_ENDPOINT,
        PRISMIC_TOKEN: process.env.PRISMIC_TOKEN,
    },
};

module.exports = withPlugins([
    [optimizedImages, {
        inlineImageLimit: 81920,
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

], nextConfig);
