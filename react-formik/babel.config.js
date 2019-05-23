const loose = true

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        loose: loose,
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
        loose: loose,
      },
    ],
    [
      '@babel/plugin-proposal-object-rest-spread',
      {
        loose: loose,
      },
    ],
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 2,
      },
    ],
  ],
}
