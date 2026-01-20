import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
  {
    rules: {
      // TypeScript & Basics
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '_' }],
      '@typescript-eslint/ban-ts-comment': 'off',
      // 'vue/multi-word-component-names': 'off', // Removed for React
      // 'vue/require-default-prop': 'off', // Removed for React
      'no-var': 'error',
      'prefer-const': 'error',
      semi: [1, 'never'],
      'no-useless-escape': 0,
      'no-non-null-assertion': 0,
      'comma-spacing': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-extra-semi': 'off',
      'jsx-quotes': ['error', 'prefer-single'],

      // Spacing & Formatting
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'space-before-function-paren': ['error', 'always'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'space-unary-ops': ['error', { words: true, nonwords: false }],
      'space-before-blocks': 'error',
      'eol-last': ['error', 'always'],
      indent: ['error', 2, { SwitchCase: 1 }],

      // Imports
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern:
                '{react,react-dom,react-dom/*,next,next/*,vue-router,vue-router/**,#imports}', // Adjusted for React
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: [],
          'newlines-between': 'always-and-inside-groups',
          distinctGroup: false,
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      // Vue specific rules REMOVED for Next.js project
      /*
      'vue/html-quotes': ['error', 'double'],
      'vue/max-attributes-per-line': ...,
      'vue/first-attribute-linebreak': ...,
      'vue/html-closing-bracket-newline': ...,
      'vue/html-indent': ['error', 2],
      */

      // Avoid duplicates
      'no-unused-vars': 'off', // Handled by @typescript-eslint/no-unused-vars
      'no-redeclare': 'off',
      'no-dupe-args': 'off',
      'no-dupe-keys': 'off',
      'no-dupe-class-members': 'off',
    },
  },
]

export default eslintConfig
