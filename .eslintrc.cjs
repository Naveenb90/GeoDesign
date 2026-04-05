module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off', // Using TypeScript would be better, but keeping simple for now
    // React 17+ JSX transform — `import React` is optional
    'no-unused-vars': ['error', { varsIgnorePattern: '^React$' }],
    'react/no-unknown-property': [
      'error',
      { ignore: ['netlify-honeypot', 'data-netlify'] },
    ],
  },
}


