const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const rootDir = path.resolve(process.cwd())
const srcPath = path.resolve(rootDir, 'src')
const assetsPath = path.resolve(rootDir, 'assets')
const buildPath = path.resolve(rootDir, 'build')

module.exports = (_, argv = {}) => {
  const mode = argv.mode || 'development'
  const isDevelopment = mode === 'development'
  return {
    mode,
    entry: {
      app: `${srcPath}/app.js`,
    },
    output: {
      path: buildPath,
      filename: isDevelopment ? '[name].js' : '[name].[hash].js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          include: srcPath,
          exclude: /node_modules/,
        },
        {
          test: /\.(c|sc)ss$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
            'postcss-loader',
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: isDevelopment ? '[name].[ext]' : '[name].[hash].[ext]',
            },
          },
        },
      ],
    },
    optimization: {
      splitChunks: {
        name: 'vendor',
        chunks: 'all',
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        DEVELOPMENT: JSON.stringify(isDevelopment),
      }),
      new webpack.ProvidePlugin({
        React: 'react',
      }),
      new HtmlWebpackPlugin({
        template: `${assetsPath}/template.html`,
        favicon: `${assetsPath}/favicon.ico`,
        hash: true,
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
          keepClosingSlash: true,
        },
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
      }),
    ],
    devServer: isDevelopment
      ? {
          contentBase: buildPath,
          host: '0.0.0.0',
          port: 9999,
          historyApiFallback: true,
        }
      : {},
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  }
}
