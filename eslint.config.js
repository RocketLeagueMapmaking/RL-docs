// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import vue from 'eslint-plugin-vue';

export default tseslint.config(
    {
        ignores: [
            'docs/.vitepress/cache/**',
            'docs/.vitepress/dist/**',
        ],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            vue,
        },
        rules: {
            "array-bracket-spacing": [
                "error",
                "never"
            ],
            "brace-style": "error",
            "camelcase": [
                "warn",
                {
                    "properties": "never",
                    "ignoreDestructuring": true
                }
            ],
            "dot-notation": "warn",
            "eol-last": "warn",
            "func-call-spacing": [
                "warn",
                "never"
            ],
            "indent": [
                "warn",
                4
            ],
            "no-duplicate-imports": [
                "error",
                {
                    "includeExports": true
                }
            ],
            "no-empty-function": "warn",
            "no-trailing-spaces": "warn",
            "no-unused-vars": "warn",
            "no-var": "error",
            "prefer-const": [
                "error",
                {
                    "destructuring": "all"
                }
            ],
            "quotes": [
                "error",
                "single"
            ],
            "semi": [
                "warn",
                "never"
            ],
            "space-before-function-paren": "warn",
            "spaced-comment": "warn",
            "vue/html-indent": [
                "warn",
                4
            ],
            "vue/multi-word-component-names": "warn"
        }
    },
);
