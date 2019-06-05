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
        test: /\.(jpe?g|png|gif)$/i,
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

      // {
      //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      //   issuer: {
      //     test: /\.js?$/,
      //   },
      //   use: [
      //     'babel-loader',
      //     {
      //       loader: '@svgr/webpack',
      //       options: { babel: false },
      //     },
      //     // 'url-loader',
      //   ],
      // },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: ['@svgr/webpack', 'url-loader'],
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
