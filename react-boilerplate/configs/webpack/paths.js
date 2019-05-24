const path = require('path')

const rootDir = path.resolve(process.cwd())
const publicPath = path.resolve(rootDir, 'public')

module.exports = {
  publicPath,
  srcPath: path.resolve(rootDir, 'src'),
  buildPath: path.resolve(rootDir, 'build'),
  templatePath: `${publicPath}/template.html`,
  faviconPath: `${publicPath}/favicon.ico`,
}
