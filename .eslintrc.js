module.exports = {
    extends: ['andremarquesdev', 'plugin:cypress/recommended'],
    plugins: ['cypress'],
    overrides: [
        {
            files: ['*test.js', '*test.ts', '*test.tsx'],
            extends: ['plugin:jest/recommended', 'plugin:testing-library/react'],
            plugins: ['jest', 'testing-library'],
        },
    ],
};
