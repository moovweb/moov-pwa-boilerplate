const { url, publicPath, assetsPath, commonLoaders, commonClient, commonPlugins } = require('./common.config')
const webpack = require('webpack')
const path = require('path')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin')
const built = path.join(__dirname, '..', '..', 'build', 'server', 'stats.built')

module.exports = Object.assign(commonClient, {
  module: {
    rules: commonLoaders(false, [])
  },
  plugins: [
    ...commonPlugins,
    new OpenBrowserPlugin({ url }),

    // copy index.js to scripts/build if it and stats.json are ready
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
})
