module.exports = {
    extends: ['andremarquesdev'],
    parserOptions: {
        project: ['tsconfig.json', './e2e/tsconfig.json'],
    },
    ignorePatterns: ['!.*'],
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/*.test.ts',
                    '**/*.test.tsx',
                    '**/tests/*.js',
                    '**/*.dev.js',
                    '**/*.dev.ts',
                    '**/e2e/**',
                ],
            },
        ],
    },
    overrides: [
        {
            // specific rules for playwright tests
            files: ['**/e2e/**'],
            extends: 'plugin:playwright/recommended',
        },
    ],
};
