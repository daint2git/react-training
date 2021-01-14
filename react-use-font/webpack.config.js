const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootDir = path.resolve(process.cwd());
const srcDir = path.resolve(rootDir, 'src');
const buildDir = path.resolve(rootDir, 'build');

module.exports = (_, argv) => {
  const isProd = argv.mode === 'production';
  return {
    target: 'web',
    entry: path.resolve(srcDir, 'index.jsx'),
    output: {
      publicPath: '/',
      path: buildDir,
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].chunk.js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          include: srcDir,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        },
        {
          test: /\.css$/i,
          exclude: /node_modules/,
          include: srcDir,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.ttf$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts'
              }
            }
          ]
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/template.html',
        favicon: './public/favicon.ico',
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: {
        name: entrypoint => `runtime-${entrypoint.name}`,
      },
    },
    resolve: {
      modules: ['node_modules', srcDir],
      extensions: ['.js', '.jsx', '.json'],
    },
    devServer: {
      contentBase: buildDir,
      port: 6969,
      host: '0.0.0.0',
      hot: true,
      historyApiFallback: true,
    },
    devtool: isProd ? false : 'eval-source-map',
    performance: {
      hints: isProd ? 'warning' : false,
    },
  };
};
