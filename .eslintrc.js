// Copy pasted from https://github.com/TaitoUnited/full-stack-template/blob/dev/client/.eslintrc.js
// The `recommended` configs that are already added should suffice

module.exports = {
  parser: '@typescript-eslint/parser',

  plugins: ['styled-components-a11y'],

  // NOTE: using `plugin:` prefix makes it so that the corresponding
  // eslint plugin is automatically enabled and the rules are turned on
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:styled-components-a11y/recommended',

    // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
    // Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',

    // Uses eslint-config-prettier to disable ESLint rules from various plugins
    // that would conflict with prettier
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/standard',
  ],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    browser: true,
    jest: true,
  },

  rules: {
    // Turn of stupid TS specific rules
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',

    // Enforce absolute imports to be first
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external', 'internal'],
          ['parent', 'sibling', 'index'],
        ],
      },
    ],

    'no-var': 'error', // No `var` plz - we are not savages anymore
    'react/prop-types': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'styled-components-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: [],
        labelAttributes: ['label'],
        controlComponents: ['Input'],
        depth: 3,
      },
    ],

    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        trailingComma: 'none',
      },
    ],
  },

  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use
      version: 'detect',
    },
  },
};
