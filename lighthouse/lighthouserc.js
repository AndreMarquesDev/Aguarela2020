// diff results at https://googlechrome.github.io/lighthouse-ci/viewer/

module.exports = {
    ci: {
        collect: {
            startServerCommand: 'yarn start',
            numberOfRuns: 3,
        },
        upload: {
            target: process.env.CI === 'true' ? 'temporary-public-storage' : 'filesystem',
            // reportFilenamePattern: '%%HOSTNAME%%-%%PATHNAME%%-%%DATETIME%%.report.%%EXTENSION%%',
            reportFilenamePattern: '%%HOSTNAME%%-%%PATHNAME%%.report.%%EXTENSION%%',
        },
        assert: {
            preset: 'lighthouse:no-pwa',
            assertions: {
                'color-contrast': 'warn', // cause: contrast between purple background and white text
                'non-composited-animations': 'warn', // cause: menu icon animations, should be 'transforms' and not 'top'/'bottom'
                'bf-cache': 'warn', // not sure it can be solved since next router is being used
            },
        },
    },
};
