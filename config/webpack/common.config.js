const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StatsWriterPlugin = require("webpack-stats-plugin").StatsWriterPlugin;
const webpack = require('webpack');
const context = path.join(__dirname, '..', '..', 'pwa', 'src');
const workboxConfig = require('./workbox.config.js');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const dest = path.join(__dirname, '..', '..', 'build', 'assets', 'pwa');
const packages = path.join(__dirname, '..', '..', 'packages')

const resolve = {
  alias: {
    'moov-pwa-components': path.join(packages, 'moov-pwa-components', 'src'),
    'moov_router': path.join(packages, 'moov_router')
  }
}

module.exports = {
  url: 'http://mlocal.www.mockaroo.com',
  dest,
  publicPath: '/assets/',
  commonClient: {
    name: 'client',
    target: 'web',
    context,
    entry: './index.js',
    resolve,
    devtool: 'inline-cheap-module-source-map',
    output: {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      path: dest,
      publicPath: '/pwa/'
    },
  },
  commonServer: {
    name: 'server',
    target: 'web',
    context,
    entry: './server.js',  
    resolve,
    output: {
      path: path.join(__dirname, '..', '..', 'build', 'server'),
      filename: 'index.js',
      libraryTarget: 'commonjs2',
    }
  },
  commonLoaders: (modules=false, plugins=[]) => [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            "presets": [
              ["env", {
                "targets": {
                  "browsers": "> 1%",
                  "uglify": true
                },
                "useBuiltIns": true,
                modules
              }],
              "react"
            ],
            "plugins": [
              ...plugins,
              ["transform-runtime", {
                "polyfill": false,
                "regenerator": true
              }],
              "transform-async-generator-functions",
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
    }
  ],
  commonPlugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['bootstrap'], // needed to put webpack bootstrap code before chunks
      filename: '[name].[chunkhash].js',
      minChunks: Infinity
    }),
    new StatsWriterPlugin({
      filename: path.join(__dirname, '..', '..', 'build', 'server', 'stats.json')
    }),
    new WriteFilePlugin()
  ]
};

