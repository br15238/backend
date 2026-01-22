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
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '_' }],
      '@typescript-eslint/ban-ts-comment': 'off',
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
                '{react,react-dom,react-dom/*,next,next/*,vue-router,vue-router/**,#imports}',
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
      'no-unused-vars': 'off',
      'no-redeclare': 'off',
      'no-dupe-args': 'off',
      'no-dupe-keys': 'off',
      'no-dupe-class-members': 'off',
    },
  },
]

export default eslintConfig
