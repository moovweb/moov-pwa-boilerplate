const { url, publicPath, assetsPath, commonLoaders, commonClient, commonPlugins } = require('./common.config');
const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = Object.assign(commonClient, {
  devtool: 'eval',
  module: {
    rules: commonLoaders('commonjs', [])
  },
  plugins: [
    ...commonPlugins,
    new OpenBrowserPlugin({ url })
  ]
});
