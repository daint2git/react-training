// Jest will set process.env.NODE_ENV to 'test' if it's not set to something else.
const isTest = process.env.NODE_ENV === 'test'

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: isTest ? 'commonjs' : false,
        loose: true,
        targets: {
          node: 'current',
        },
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
}
