const webpack = require('webpack')

const { srcPath } = require('./paths')

module.exports = {
  entry: {
    app: `${srcPath}/app.js`,
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
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.(jpe?g|jpg|png|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '[name].[ext]',
            },
          },
          'img-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
  ],
  resolve: {
    modules: [srcPath, 'node_modules'],
    extensions: ['.js', '.scss', '.css'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  target: 'web',
}
