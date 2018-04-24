const { publicPath, assetsPath, commonLoaders, commonServer } = require('./common.config');
const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const built = path.join(__dirname, '..', '..', 'build', 'server', 'index.built')

module.exports = Object.assign(commonServer, {
  module: {
    rules: commonLoaders('commonjs', [ 'moov' ])
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new WriteFilePlugin(),

    // copy stats.json to scripts/build if it and index.js (the server build) are ready
    new WebpackShellPlugin({
      dev: false,
      onBuildStart: [
        `rm -f ${built}`
      ],
      onBuildEnd: [
        `touch ${built}`,
        `node ${path.join(__dirname, '..', '..', 'tasks', 'buildServer.js')}`
      ]
    })
  ]
});