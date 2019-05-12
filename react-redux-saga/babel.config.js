const isLooseMode = true

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        loose: isLooseMode,
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
        loose: isLooseMode,
      },
    ],
    [
      '@babel/plugin-proposal-object-rest-spread',
      {
        loose: isLooseMode,
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
