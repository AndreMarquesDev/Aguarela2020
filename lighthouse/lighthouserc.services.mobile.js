const baseLighthouseConfig = require('./lighthouserc').ci;

const page = 'services';

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
    },
};
