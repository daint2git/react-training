const isLooseMode = true

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        loose: isLooseMode,
      },
    ],
    [
      '@babel/react',
      {
        development: true,
      },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
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
