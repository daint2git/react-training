const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const rootDir = path.resolve(process.cwd())
const staticPath = path.resolve(rootDir, 'static')
const srcPath = path.resolve(rootDir, 'src')
const buildPath = path.resolve(rootDir, 'build')

module.exports = {
  mode: 'development',
  entry: {
    app: `${srcPath}/app.js`,
  },
  output: {
    publicPath: '/',
    path: buildPath,
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
      {
        test: /\.(jpe?g|jpg|png|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    modules: [srcPath, 'node_modules'],
    extensions: ['.js', '.scss', '.sass'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${staticPath}/index.html`,
      favicon: `${staticPath}/favicon.ico`,
    }),
  ],
  devServer: {
    contentBase: buildPath,
    compress: true,
    // host: '0.0.0.0',
    port: 6969,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
}
