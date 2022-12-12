module.exports = {
    extends: ['andremarquesdev', 'plugin:cypress/recommended'],
    plugins: ['cypress'],
    parserOptions: {
        project: ['tsconfig.json', './cypress/tsconfig.json'],
    },
    ignorePatterns: ['!.*'],
};
