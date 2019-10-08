const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'))

module.exports = {
  parser: 'babel-eslint',

  extends: ['airbnb', 'prettier', 'prettier/react'],

  plugins: ['import', 'prettier', 'react', 'jsx-a11y', 'react-hooks'],

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },

  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.config.js',
      },
    },
  },

  rules: {
    'prettier/prettier': [1, prettierOptions],

    'react/destructuring-assignment': 1,
    'react/forbid-prop-types': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-curly-brace-presence': [
      1,
      {
        props: 'ignore',
        children: 'never',
      },
    ],
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-key': 2,
    'react/no-multi-comp': [
      2,
      {
        ignoreStateless: true,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/no-string-refs': 2,
    'react/no-unknown-property': 2,
    'react/no-unsafe': 2,
    'react/no-unused-prop-types': 2,
    'react/no-unused-state': 2,
    'react/prefer-stateless-function': [
      1,
      {
        ignorePureComponents: true,
      },
    ],
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,

    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        controlComponents: ['Input'],
      },
    ],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/aria-role': [
      2,
      {
        ignoreNonDOM: true,
      },
    ],

    'import/prefer-default-export': 2,
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': 1,
    'import/no-dynamic-require': 1,
    'import/no-unresolved': 2,
    'import/first': 1,

    'prefer-arrow-callback': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'prefer-destructuring': [
      1,
      {
        object: false,
        array: true,
      },
    ],
    'prefer-rest-params': 2,
    'prefer-const': 2,

    'no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
      },
    ],
    'no-use-before-define': [2, 'nofunc'],
    'no-alert': 1,
    'no-console': 1,
    'no-param-reassign': 0,
    'no-unexpected-multiline': 2,
    'no-undef-init': 2,
    'no-underscore-dangle': 2,
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-empty-function': [
      2,
      {
        allow: ['arrowFunctions'],
      },
    ],
  },
}
