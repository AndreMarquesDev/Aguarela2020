// diff results at https://googlechrome.github.io/lighthouse-ci/viewer/

module.exports = {
    ci: {
        collect: {
            startServerCommand: 'yarn start',
            numberOfRuns: 3,
        },
        upload: {
            // eslint-disable-next-line node/no-process-env
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
                'errors-in-console': 'warn', // because of Vercel Analytics and Speed Insights packages
                'total-byte-weight': 'warn', // it's throwing an error even though the limit is 5000 KiB but the report only shows 273 KiB
                'prioritize-lcp-image': 'warn',
            },
        },
    },
};
