const path = require('path')
const rootDir = path.resolve(process.cwd())
const srcPath = path.resolve(rootDir, 'src')

module.exports = {
  mode: 'development',
  entry: `${srcPath}/index.js`,
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: srcPath,
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: 6969,
  },
  devtool: 'eval-source-map',
}
