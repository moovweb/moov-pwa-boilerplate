const { publicPath, assetsPath, commonLoaders, commonServer } = require('./common.config');
const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

module.exports = Object.assign(commonServer, {
  module: {
    rules: commonLoaders('commonjs', [ 'moov' ])
  },
  plugins: [
    new HardSourceWebpackPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new WriteFilePlugin()
  ]
});