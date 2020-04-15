require('dotenv').config();
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
    env: {
        PRISMIC_API_ENDPOINT: process.env.PRISMIC_API_ENDPOINT,
        PRISMIC_TOKEN: process.env.PRISMIC_TOKEN,
        INSTAGRAM_URL: process.env.INSTAGRAM_URL,
    },
};

module.exports = withPlugins([
    withImages,
], nextConfig);
