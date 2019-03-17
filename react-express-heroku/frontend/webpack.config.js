const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const rootDir = path.resolve(process.cwd())
const buildPath = path.resolve(rootDir, 'build')

const webpack = require('webpack')

module.exports = (_, argv = {}) => {
  const mode = argv.mode || 'development'
  const isDevelopment = mode === 'development'
  return {
    mode,
    entry: './index.js',
    output: {
      path: buildPath,
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        DEVELOPMENT: JSON.stringify(isDevelopment),
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
        favicon: './favicon.ico',
      }),
    ],
    devServer: isDevelopment
      ? {
          port: 9999,
          historyApiFallback: true,
        }
      : {},
  }
}
