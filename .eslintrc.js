module.exports = {
    extends: ['andremarquesdev', 'plugin:cypress/recommended'],
    plugins: ['cypress'],
    parserOptions: {
        project: ['tsconfig.json', './cypress/tsconfig.json', './e2e/tsconfig.json'],
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
                    '**/cypress/**',
                    '**/e2e/**',
                ],
            },
        ],
    },
};
