const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StatsWriterPlugin = require("webpack-stats-plugin").StatsWriterPlugin
const webpack = require('webpack')
const context = path.join(__dirname, '..', '..', 'src')
const workboxConfig = require('./workbox.config.js')
const WorkboxPlugin = require('workbox-webpack-plugin')
const dest = path.join(__dirname, '..', '..', 'build', 'assets', 'pwa')
const packages = path.join(__dirname, '..', '..', 'packages')
const { readFileSync } = require('fs')
const moovConfig = JSON.parse(readFileSync(path.join(__dirname, '..', '..', 'moov_config-local.json'), 'utf8'))

const url = 'http://' + moovConfig.host_map[0]
  .split(' => ')[0]
  .replace(/\$/, 'mlocal')

const alias = {
  "mobx": path.join(__dirname, '..', '..', 'node_modules', 'mobx'),
  "material-ui": path.join(__dirname, '..', '..', 'node_modules', 'material-ui'),
  "moov-pwa": path.join(__dirname, '..', '..', 'node_modules', 'moov-pwa', 'src'),
  "react-universal-component": path.join(__dirname, '..', '..', 'node_modules', 'react-universal-component')
}

module.exports = {
  url,
  context,
  dest,
  publicPath: '/assets/',
  commonClient: (entries = []) => ({
    name: 'client',
    target: 'web',
    context,
    entry: [
      './client.js',
      ...entries
    ],
    resolve: {
      alias: Object.assign({}, alias, {
        fetch: 'isomorphic-unfetch'
      })
    },
    devtool: 'inline-cheap-module-source-map',
    output: {
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js',
      path: dest,
      publicPath: '/pwa/'
    },
  }),
  commonServer: {
    name: 'server',
    target: 'web',
    context,
    entry: './server.js',  
    resolve: {
      alias: Object.assign({}, alias, {
        fetch: path.join(__dirname, '..', '..', 'node_modules', 'moov-pwa', 'src', 'fetch')
      })
    },
    output: {
      path: path.join(__dirname, '..', '..', 'scripts', 'build'),
      filename: 'index.js',
      libraryTarget: 'commonjs2',
    }
  },
  commonLoaders: (modules=false, plugins=[]) => [
    {
      test: /\.js$/,
      include: /(src|node_modules\/moov-pwa\/src)/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              ["env", {
                targets: {
                  browsers: "> 1%",
                  uglify: true
                },
                useBuiltIns: true,
                modules
              }],
              "react"
            ],
            plugins: [
              ...plugins,
              "react-hot-loader/babel",
              ["transform-runtime", {
                "polyfill": false,
                "regenerator": true
              }],
              "transform-async-to-generator",
              "transform-decorators-legacy",
              "syntax-dynamic-import",
              "transform-object-rest-spread",
              "transform-class-properties",
              "universal-import"
            ]
          }
        }
      ]
    },
    {
      test: /\.(png|jpg|gif|otf|woff)$/,
      use: [
        {
          loader: 'url-loader'
        }
      ]
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: "babel-loader"
        },
        {
          loader: "react-svg-loader"
        }
      ]
    },
    {
      test: /\.md$/,
      use: 'raw-loader'
    }
  ],
  commonPlugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['bootstrap'], // needed to put webpack bootstrap code before chunks
      filename: '[name].[hash].js',
      minChunks: Infinity
    })
  ]
}

