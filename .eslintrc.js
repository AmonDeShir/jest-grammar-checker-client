module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.d.ts'],
    },
    'import/resolver': {
      [require.resolve('eslint-import-resolver-node')]: {
        extensions: [],
      },
    },
  },
  extends: [
    'airbnb-base', 
    'airbnb-typescript/base', 
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'import/extensions': 'off',
    'import/no-named-as-default': 'off',
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-shadow': 'off',
  },
};
