const { srcPath } = require('./path')

module.exports = {
  entry: {
    app: `${srcPath}/app.js`,
  },
  resolve: {
    modules: [srcPath, 'node_modules'],
    extensions: ['.js', '.scss', '.css'],
  },
  target: 'web',
}
