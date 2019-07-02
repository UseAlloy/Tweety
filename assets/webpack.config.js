const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';


module.exports = {
  context: __dirname,
  mode: devMode ? 'development' : 'production',

  entry: {
    // Entry files
    index: './js/index',

    // Commons Chunk
    // commons: [],

    // Development
    webpackClient: 'webpack-dev-server/client?http://0.0.0.0:3333',
    webpackDev: 'webpack/hot/only-dev-server',
  },

  output: {
    path: path.resolve('./assets/development/'),
    filename: '[name].js',
    publicPath: 'http://0.0.0.0:3333/assets/development/',
    crossOriginLoading: 'use-credentials',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
        },
      }, // to transform JSX into JS
      {
        test: /\.(sc|c)ss$/,
        use: (devMode ? ['css-hot-loader'] : []).concat([
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]),
      }, // compile scss/css to css
    ],
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
    symlinks: false,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleTracker({ path: __dirname, filename: './webpack-stats.json' }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
  ],

  devServer: {
    host: '0.0.0.0',
    publicPath: 'http://0.0.0.0:3333/assets/development/',
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: 3333,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:8000',
      'Access-Control-Allow-Credentials': 'true',
    },
    watchOptions: {
      ignored: /node_modules/,
    },
  },
};
