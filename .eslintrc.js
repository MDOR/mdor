module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6
  },
  plugins: ['prettier', 'react-hooks'],
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'no-unused-vars': 'error',
    'padded-blocks': 'error',
    'consistent-return': 0,
    'import/prefer-default-export': 0
  }
};
