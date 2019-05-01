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
    port: 6969,
    open: true,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
}
