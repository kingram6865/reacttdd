module.exports = {
  extends: [
    'codingitwrong',
  ],
  parser: '@babel/eslint-parser',
  plugins: [
    'cypress',
    'jest',
    'react',
  ],
  env: {
    'browser': true,
    'jest/globals': true,
  },
  rules: {
    'linebreak-style': 0,
    'semi': 0
  },  
  globals: {
    "cy": true
  }
}