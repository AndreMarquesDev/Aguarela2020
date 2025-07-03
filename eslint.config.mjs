import antfu from '@antfu/eslint-config';
import playwright from 'eslint-plugin-playwright';
import testingLibrary from 'eslint-plugin-testing-library';

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
        'node/prefer-global/process': ['off'],
        'node/no-process-env': ['error', {
            allowedVariables: ['NODE_ENV'],
        }],
        'antfu/top-level-function': 'off',
        'style/quotes': ['error', 'single', { avoidEscape: true }],
        'style/brace-style': ['error', '1tbs', { allowSingleLine: false }],
        'jsonc/indent': ['error', 4, {}],
        'yml/indent': ['error', 2],
        'id-length': [
            'error',
            {
                min: 3,
                exceptions: ['id', 'of', 'en', 'pt', 'to', 'ci'],
            },
        ],
        'unicorn/filename-case': ['error', {
            case: 'camelCase',
            ignore: ['README.md', 'next-env.d.ts', 'docker-compose.yml'],
        }],
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
        }],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/*.test.js',
                    '**/*.test.ts',
                    '**/*.test.tsx',
                    '**/cypress/**',
                    '**/jest/**',
                    '**/vitest/**',
                    '**/e2e/**',
                    '**/eslint**',
                ],
            },
        ],
        // eslint-disable-next-line id-length
        'vitest/consistent-test-it': ['error', { fn: 'test' }],
        'no-nested-ternary': 'error',
        'no-param-reassign': 'error',
        'no-return-assign': 'error',
    },
}, {
    files: ['**/types/**', '**/components/**'],
    rules: {
        'unicorn/filename-case': ['error', {
            case: 'pascalCase',
        }],
    },
}, {
    files: [
        '**/*.test.js',
        '**/*.test.ts',
        '**/*.test.tsx',
    ],
    ...testingLibrary.configs['flat/react'],
    rules: {
        ...testingLibrary.configs['flat/react'].rules,
        'react/no-missing-key': 'off',
    },
}, {
    files: ['**/e2e/**'],
    ...playwright.configs['flat/recommended'],
});
