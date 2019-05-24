const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

const common = require('./webpack.common')
const { buildPath, templatePath, faviconPath } = require('./paths')

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: '/',
    path: buildPath,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devtool: 'eval-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    contentBase: buildPath,
    host: '0.0.0.0',
    port: 3000,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: templatePath,
      favicon: faviconPath,
    }),
  ],
})
