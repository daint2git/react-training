const path = require('path')

const rootDir = path.resolve(process.cwd())

module.exports = {
  publicPath: path.resolve(rootDir, 'public'),
  srcPath: path.resolve(rootDir, 'src'),
  buildPath: path.resolve(rootDir, 'build'),
}
