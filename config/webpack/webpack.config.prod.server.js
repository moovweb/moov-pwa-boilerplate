const { publicPath, assetsPath, commonLoaders, commonServer } = require('./common.config');
const path = require('path');
const webpack = require('webpack');

commonLoaders[0].use.find(loader => loader.loader === 'babel-loader').options.presets[0].modules = 'commonjs'

module.exports = Object.assign(commonServer, {
  module: {
    rules: commonLoaders()
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ] 
});