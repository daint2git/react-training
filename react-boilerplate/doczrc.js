const webpackDev = require('./configs/webpack/webpack.dev')

export default {
  title: 'Docz examples',
  description: 'quay len nao',
  port: 6969,
  codeSandbox: false,
  files: 'src/**/*.mdx',
  modifyBundlerConfig: config => {
    config.module.rules.push(...webpackDev.module.rules)
    config.resolve.extensions.push(...webpackDev.resolve.extensions)
    config.resolve.modules.push(...webpackDev.resolve.modules)
    // Object.assign(config.resolve.alias, webpackDev.resolve.alias)
    return config
  },
}
