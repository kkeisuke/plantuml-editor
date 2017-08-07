// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'flowtype',
    'flowtype-errors',
    'html'
  ],
  // add your custom rules here
  'rules': {
    'flowtype/boolean-style': 2,
    'flowtype/define-flow-type': 2,
    'flowtype/no-dupe-keys': 2,
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/require-parameter-type': 2,
    'flowtype/require-return-type': 2,
    'flowtype/require-valid-file-annotation': 2,
    'flowtype/require-variable-type': 2,
    'flowtype/use-flow-type': 2,
    'flowtype-errors/show-errors': 2,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
