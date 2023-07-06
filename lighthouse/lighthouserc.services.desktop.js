const baseLighthouseConfig = require('./lighthouserc').ci;

const page = 'services';

module.exports = {
    ci: {
        ...baseLighthouseConfig,
        collect: {
            ...baseLighthouseConfig.collect,
            url: `http://localhost:3000/pt/${page}`,
            settings: {
                preset: 'desktop',
            },
        },
        upload: {
            ...baseLighthouseConfig.upload,
            outputDir: `./lighthouse/reports/${page}/desktop`,
        },
    },
};
