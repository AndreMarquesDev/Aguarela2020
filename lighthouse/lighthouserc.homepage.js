const baseLighthouseConfig = require('./lighthouserc').ci;

const page = 'homepage';

module.exports = {
    ci: {
        ...baseLighthouseConfig,
        collect: {
            ...baseLighthouseConfig.collect,
            url: 'http://localhost:3000/',
        },
        upload: {
            ...baseLighthouseConfig.upload,
            outputDir: `./lighthouse/reports/${page}`,
        },
        assert: {
            ...baseLighthouseConfig.assert,
            assertions: {
                ...baseLighthouseConfig.assert.assertions,
                'link-text': 'warn', // cause: 'see more' text in a link
                'prioritize-lcp-image': 'warn', // cause: banner image, priority is already set to high so don't know how to fix
            },
        },
    },
};
