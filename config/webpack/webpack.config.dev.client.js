const { url, publicPath, assetsPath, commonLoaders, commonClient, commonPlugins } = require('./common.config')
const webpack = require('webpack')
const path = require('path')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = Object.assign(commonClient, {
  module: {
    rules: commonLoaders(false, [])
  },
  plugins: [
    ...commonPlugins,
    new OpenBrowserPlugin({ url }),
    new WriteFilePlugin()
  ]
})
