/* eslint-disable global-require */

module.exports = {
    ci: {
        ...require('./lighthouserc').ci,
        upload: {
            target: 'temporary-public-storage',
        },
    },
};
