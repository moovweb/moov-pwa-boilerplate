const { dest, publicPath, assetsPath, commonLoaders, commonPlugins, commonClient } = require('./common.config');
const path = require('path');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin')
const workboxConfig = require('./workbox.config')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MinifyPlugin = require("babel-minify-webpack-plugin")
const StatsWriterPlugin = require("webpack-stats-plugin").StatsWriterPlugin

module.exports = Object.assign(commonClient, {
  devtool: 'none',
  module: {
    loaders: commonLoaders()
  },
  plugins: [
    new MinifyPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.PUBLIC_URL': JSON.stringify('') // needed for registerServiceWorker.js
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        },
        mangle: {
          safari10: true
        },
        output: {
          comments: false
        },
        ie8: false
      }
    }),
    new WorkboxPlugin(
      Object.assign({
        swDest: path.join(dest, '..', 'service-worker.js'),
        clientsClaim: true,
        skipWaiting: true,
      }, workboxConfig)
    ),
    new StatsWriterPlugin({
      filename: '../../../scripts/build/stats.json'
    })
  ].concat(commonPlugins)
});
