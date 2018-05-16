const { url, context, publicPath, assetsPath, commonLoaders, commonClient, commonPlugins } = require('./common.config')
const webpack = require('webpack')
const path = require('path')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const eslintFormatter = require('react-dev-utils/eslintFormatter')

module.exports = Object.assign(
  commonClient(['webpack-hot-middleware/client?path=http://localhost:9000/__webpack_hmr']), 
  {
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          include: context,
          use: [
            {
              loader: 'eslint-loader',
              options: {
                formatter: eslintFormatter,
                eslintPath: require.resolve('eslint')
              }
            }
          ]
        },
        ...commonLoaders(false)
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      ...commonPlugins,
      new OpenBrowserPlugin({ url }),
      new WriteFilePlugin()
    ]
  }
)
