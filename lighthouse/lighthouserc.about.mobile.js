const baseLighthouseConfig = require('./lighthouserc').ci;

const page = 'about';

module.exports = {
    ci: {
        ...baseLighthouseConfig,
        collect: {
            ...baseLighthouseConfig.collect,
            url: `http://localhost:3000/pt/${page}`,
        },
        upload: {
            ...baseLighthouseConfig.upload,
            outputDir: `./lighthouse/reports/${page}/mobile`,
        },
        assert: {
            ...baseLighthouseConfig.assert,
            assertions: {
                ...baseLighthouseConfig.assert.assertions,
                'image-size-responsive': 'warn',
            },
        },
    },
};
