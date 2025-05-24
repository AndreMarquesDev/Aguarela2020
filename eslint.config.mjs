import antfu from '@antfu/eslint-config';

export default antfu({
    type: 'app',
    typescript: true,
    formatters: true,
    // css: true,
    // html: true,
    // markdown: "prettier",
    react: true,
    // svelte: true,
    stylistic: {
        indent: 4,
        semi: true,
        quotes: 'single',
    },
    ignores: ['node_modules', 'node_modules/**', '.next', '.next/**', 'out', 'out/**', 'build', 'build/**', 'coverage', '**/coverage/**', 'ignore-step.sh', 'lighthouse/**/*.json', 'lighthouse/**/*.html'],
}, {
    rules: {
        'ts/consistent-type-definitions': ['error', 'type'],
        'no-console': ['warn'],
        'node/no-process-env': ['error'],
        'antfu/top-level-function': 'off',
        'unicorn/filename-case': ['error', {
            case: 'camelCase',
            ignore: ['README.md'],
        }],
        'jsonc/indent': ['error', 4, {}],
        // https://github.com/antfu/eslint-config/blob/56262ef7962ce310d29348060d8941d420f410fc/src/configs/perfectionist.ts#L19
        'perfectionist/sort-imports': ['error', {
            groups: [
                'type',
                ['parent-type', 'sibling-type', 'index-type', 'internal-type'],
                'builtin',
                'external',
                'internal',
                ['parent', 'sibling', 'index'],
                'side-effect',
                'object',
                'unknown',
            ],
            newlinesBetween: 'never',
            order: 'asc',
            tsconfigRootDir: '.',
            type: 'alphabetical',
            //   type: 'natural',
        }],
    },
}, {
    files: ['**/types/**', '**/components/**'],
    rules: {
        'unicorn/filename-case': ['error', {
            case: 'pascalCase',
        }],
    },
});
