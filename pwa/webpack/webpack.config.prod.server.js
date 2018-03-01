const { publicPath, assetsPath, commonLoaders } = require('./common.config');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
  name: 'server',
  context: path.join(__dirname, '..', 'src'),
  entry: './server.js',  
  output: {
    path: path.join(__dirname, '..', '..', 'scripts', 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  target: 'web',
  module: {
    loaders: commonLoaders
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
};