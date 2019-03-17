const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')
const rootDir = path.resolve(process.cwd())
const srcPath = path.resolve(rootDir, 'src')
const buildPath = path.resolve(rootDir, 'build')

module.exports = {
  entry: `${srcPath}/index.js`,
  output: {
    path: buildPath,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcPath}/index.html`
    })
  ],
  devServer: {
    port: 9999,
    open: true,
    historyApiFallback: true,
  }
}