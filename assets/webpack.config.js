const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  context: __dirname,
  mode: 'development',

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
    filename: '[name].[hash:7].js',
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
          options: {
            presets: [
              ['env', {
                include: ['es6.array.find'],
                useBuiltIns: true,
              }],
              'es2015',
              'react',
            ],
          },
        },
      }, // to transform JSX into JS
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
      }, // compile scss to css
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
      }, // compile css
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
    new ExtractTextPlugin({
      filename: '[name].[hash:7].css',
      // allChunks: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleTracker({ path: __dirname, filename: './webpack-stats.json' }),
  ],

  devServer: {
    host: '0.0.0.0',
    publicPath: 'http://0.0.0.0:3333/assets/development/',
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: 3333,
    headers: { 'Access-Control-Allow-Origin': 'http://localhost:8000' },
    watchOptions: {
      poll: 2500,
      ignored: /node_modules/,
    },
  },
};
