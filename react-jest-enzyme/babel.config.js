module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        loose: true,
      },
    ],
    [
      '@babel/preset-react',
      {
        development: true,
      },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    [
      '@babel/plugin-proposal-object-rest-spread',
      {
        loose: true,
      },
    ],
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 2,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components',
        },
      },
    ],
    'react-hot-loader/babel',
  ],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs', 'dynamic-import-node'],
    },
  },
}
