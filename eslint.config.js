module.exports = {
  env: {
    browser: true, // or "node: true" if you're building a Node.js project
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'prettier', // disables formatting rules that conflict with Prettier
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'script',
  },
};
// @ts-check

const globals = require('globals');
const js = require('@eslint/js');
const eslintConfigPrettier = require('eslint-config-prettier');

module.exports = [
  // 1. Global settings for all files
  {
    languageOptions: {
      ecmaVersion: 'latest',

      // Use "commonjs" for your sourceType
      sourceType: 'commonjs',

      globals: {
        ...globals.browser, // From your original 'env: { browser: true }'
        ...globals.node, // Add Node.js globals for a CommonJS project
      },
    },
  },

  // 2. The 'eslint:recommended' ruleset
  js.configs.recommended,

  // 3. The 'prettier' config (disables conflicting rules)
  // This MUST be the last item in the array.
  eslintConfigPrettier,
];
