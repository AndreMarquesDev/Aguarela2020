// diff results at https://googlechrome.github.io/lighthouse-ci/viewer/

module.exports = {
    ci: {
        collect: {
            url: [
                'http://localhost:3000/',
                'http://localhost:3000/pt/about',
                'http://localhost:3000/pt/projects',
                'http://localhost:3000/pt/services',
                'http://localhost:3000/pt/contact',
            ],
            startServerCommand: 'yarn start',
            numberOfRuns: 3,
        },
        upload: {
            target: 'filesystem',
            outputDir: './lighthouse/reports',
            // reportFilenamePattern: '%%HOSTNAME%%-%%PATHNAME%%-%%DATETIME%%.report.%%EXTENSION%%',
            reportFilenamePattern: '%%HOSTNAME%%-%%PATHNAME%%.report.%%EXTENSION%%',
        },
        assert: {
            preset: 'lighthouse:no-pwa',
            assertions: {
                'csp-xss': 'warn',
                'color-contrast': 'warn', // cause: contrast between purple background and white text
                'link-text': 'warn', // cause: 'see more' text in a link
                'non-composited-animations': 'warn', // cause: menu icon animations, should be 'transforms' and not 'top'/'bottom'
                'no-vulnerable-libraries': 'off', // cause: Next.js
                // TODO - upgrade next/image package
                'preload-lcp-image': 'warn', // cause: homepage background image
                // TODO - upgrade next/image package
                'uses-responsive-images': 'warn', // cause: improperly sized images
                // TODO - upgrade next/image package
                'image-aspect-ratio': 'warn', // cause: about page image
            },
        },
    },
};
