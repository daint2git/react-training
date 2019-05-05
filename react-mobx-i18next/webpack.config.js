const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const rootDir = path.resolve(process.cwd())
const assetsPath = path.resolve(rootDir, 'assets')
const srcPath = path.resolve(rootDir, 'src')

module.exports = {
  mode: 'development',
  entry: `${srcPath}/app.js`,
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
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
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${assetsPath}/template.html`,
    }),
  ],
  devServer: {
    port: 6969,
    open: true,
  },
  devtool: 'eval-source-map',
}
