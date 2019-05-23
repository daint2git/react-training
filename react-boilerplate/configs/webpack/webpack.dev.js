const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

const common = require('./webpack.common')
const { publicPath, buildPath } = require('./path')

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: '/',
    path: buildPath,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  devtool: 'eval-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    contentBase: buildPath,
    port: 6969,
    compress: true,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${publicPath}/template.html`,
      favicon: `${publicPath}/favicon.ico`,
    }),
  ],
})
