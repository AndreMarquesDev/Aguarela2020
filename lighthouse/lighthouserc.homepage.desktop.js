const baseLighthouseConfig = require('./lighthouserc').ci;

const page = 'homepage';

module.exports = {
    ci: {
        ...baseLighthouseConfig,
        collect: {
            ...baseLighthouseConfig.collect,
            url: 'http://localhost:3000/',
            settings: {
                preset: 'desktop',
            },
        },
        upload: {
            ...baseLighthouseConfig.upload,
            outputDir: `./lighthouse/reports/${page}/desktop`,
        },
        assert: {
            ...baseLighthouseConfig.assert,
            assertions: {
                ...baseLighthouseConfig.assert.assertions,
                'link-text': 'warn', // cause: 'see more' text in a link
                'uses-responsive-images': 'warn',
            },
        },
    },
};
