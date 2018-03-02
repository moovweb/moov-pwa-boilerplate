const { publicPath, assetsPath, commonLoaders } = require('./common.config');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
  name: 'SSR',
  context: path.join(__dirname, '..', 'src'),
  entry: './ssr/SSR.js',  
  output: {
    path: assetsPath,
    filename: 'SSR.js',
    libraryTarget: 'commonjs2',
  },
  target: 'web',
  externals: nodeExternals(),  
  module: {
    loaders: commonLoaders
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].[contenthash].css", 
      ignoreOrder: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};