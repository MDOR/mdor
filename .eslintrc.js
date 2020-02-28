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
  ecmaFeatures: {
    arrowFunctions: true,
    binaryLiterals: true,
    blockBindings: true,
    classes: true,
    defaultParams: true,
    destructuring: true,
    forOf: true,
    generators: true,
    modules: true,
    objectLiteralComputedProperties: true,
    objectLiteralDuplicateProperties: true,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    octalLiterals: true,
    regexUFlag: true,
    regexYFlag: true,
    spread: true,
    superInFunctions: true,
    templateStrings: true,
    unicodeCodePointEscapes: true,
    globalReturn: true,
    jsx: true
  },
  rules: {
    'padded-blocks': 0
  }
};
