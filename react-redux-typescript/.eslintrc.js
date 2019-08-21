module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],

  plugins: ['import', 'react-hooks', 'jsx-a11y'],

  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 6,
    sourceType: 'module',
  },

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  settings: {
    'import/resolver': {
      webpack: {
        config: './configs/webpack.config.js',
      },
    },
  },

  rules: {
    'prettier/prettier': 1,

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
        extensions: ['.ts', '.tsx'],
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
    'react/no-unescaped-entities': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    'react/prop-types': 0,

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

    'import/prefer-default-export': 0,
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
    'import/no-extraneous-dependencies': 0,

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

    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/array-type': 2,
    '@typescript-eslint/explicit-function-return-type': 2,
    'no-var': 2,
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
    'no-shadow': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
  },
}
