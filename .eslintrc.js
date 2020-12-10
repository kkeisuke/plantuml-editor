module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended', '@vue/prettier'],
  plugins: ['flowtype', 'flowtype-errors'],
  rules: {
    'flowtype-errors/show-errors': 'error',
    'flowtype-errors/show-warnings': 'warn',
    'flowtype/boolean-style': 'error',
    'flowtype/define-flow-type': 'error',
    'flowtype/no-dupe-keys': 'error',
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/require-parameter-type': 'error',
    'flowtype/require-return-type': 'error',
    'flowtype/require-valid-file-annotation': 'error',
    'flowtype/require-variable-type': 'error',
    'flowtype/use-flow-type': 'error',
    'vue/attributes-order': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-v-html': 'off', // 仕方なく
    'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error', // ローカル環境のみ off
    'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'error', // ローカル環境のみ off
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
