module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react', 'prettier'],
  rules: {
    '@typescript-eslint/semi': 0,
    semi: 0,
    '@typescript-eslint/comma-dangle': 0,
    'comma-dangle': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/indent': 0,
  },
};
