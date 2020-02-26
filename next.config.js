require('dotenv').config();
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
    env: {
        PRISMIC_API_ENDPOINT: process.env.PRISMIC_API_ENDPOINT,
        PRISMIC_TOKEN: process.env.PRISMIC_TOKEN,
    },
    // async exportPathMap(
    //     defaultPathMap,
    //     {
    //         dev, dir, outDir, distDir, buildId,
    //     },
    // ) {
    //     return {
    //         '/': {
    //             page: '/'
    //         },
    //         '/about': {
    //             page: '/about'
    //         },
    //         '/p/hello-nextjs': {
    //             page: '/post',
    //             query: {
    //                 title: 'hello-nextjs'
    //             }
    //         },
    //     };
    // },
};

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

], nextConfig);
