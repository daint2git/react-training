const webpackDev = require('./configs/webpack/webpack.dev')

export default {
  title: 'Docz examples',
  description: 'quay len nao',
  port: 6969,
  codeSandbox: false,
  files: 'src/**/*.mdx',
  modifyBundlerConfig: config => {
    // const newRules = config.module.rules.filter(
    //   a =>
    //     ![/\.(svg)(\?.*)?$/.toString(), /\.(png|jpe?g|gif)(\?.*)?$/.toString()].includes(
    //       a.test.toString(),
    //     ),
    // )

    const idx = config.module.rules.findIndex(r => r.test.toString() === '/\\.(svg)(\\?.*)?$/')

    config.module.rules.splice(idx, 1)

    config.module.rules = [...config.module.rules, ...webpackDev.module.rules]
    config.resolve.extensions.push(...webpackDev.resolve.extensions)
    config.resolve.modules.push(...webpackDev.resolve.modules)
    console.log(config.module.rules)
    // Object.assign(config.resolve.alias, webpackDev.resolve.alias)
    return config
  },
}
