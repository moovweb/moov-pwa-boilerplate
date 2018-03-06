const { publicPath, assetsPath, commonLoaders } = require('./common.config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StatsWriterPlugin = require("webpack-stats-plugin").StatsWriterPlugin;
const WorkboxPlugin = require('workbox-webpack-plugin');
const workboxConfig = require('./workbox.config.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const dest = path.join(__dirname, '..', '..', 'build', 'assets', 'pwa')

module.exports = {
  name: 'server',
  target: 'web',
  devtool: 'source-map',
  context: path.join(__dirname, '..', 'src'),
  entry: './index.js',  
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: dest,
    publicPath: '/pwa/'
  },
  module: {
    loaders: commonLoaders
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['bootstrap'], // needed to put webpack bootstrap code before chunks
      filename: '[name].[chunkhash].js',
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.PUBLIC_URL': JSON.stringify('') // needed for registerServiceWorker.js
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        screw_ie8: true,
        comments: false
      },
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      template: '../public/index.html'
    }),
    new StatsWriterPlugin({
      filename: '../../../scripts/build/stats.json'
    }),
    new CopyWebpackPlugin([
      { from: '../public', to: '..', ignore: 'index.html' }
    ]),
    new WorkboxPlugin(
      Object.assign({
        swDest: path.join(dest, '..', 'service-worker.js'),
        clientsClaim: true,
        skipWaiting: true,
      }, workboxConfig)
    )
  ]
};