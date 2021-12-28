module.exports = {
    extends: ['andremarquesdev', 'plugin:testing-library/react', 'plugin:cypress/recommended'],
    plugins: ['testing-library', 'cypress'],
    overrides: [
        {
            files: ['*test.js', '*test.ts', '*test.tsx'],
            extends: ['plugin:jest/recommended'],
            plugins: ['jest'],
        },
    ],
};
