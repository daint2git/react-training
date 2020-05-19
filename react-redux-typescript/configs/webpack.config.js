const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rootDir = path.resolve(process.cwd())
const assetsPath = path.resolve(rootDir, 'assets')
const srcPath = path.resolve(rootDir, 'src')
const buildPath = path.resolve(rootDir, 'build')

module.exports = {
  mode: 'development',
  entry: {
    app: `${srcPath}/app.tsx`,
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
        test: /\.(ts|js)x?$/,
        use: 'babel-loader',
        include: srcPath,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [srcPath, 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },

  /* eslint-disable */
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`
          },
        },
      },
    },
  },
  /* eslint-enable */
  plugins: [
    new HtmlWebpackPlugin({
      template: `${assetsPath}/template.html`,
      favicon: `${assetsPath}/favicon.ico`,
    }),
  ],
  devServer: {
    contentBase: '/',
    compress: true,
    host: '0.0.0.0',
    port: 6969,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
  target: 'web',
}
