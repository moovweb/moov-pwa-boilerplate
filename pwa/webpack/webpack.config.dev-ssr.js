const { publicPath, assetsPath, commonLoaders } = require('./common.config');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  name: 'SSR',
  context: path.join(__dirname, '..', 'src'),
  entry: './ssr/SSR.js',  
  output: {
    path: assetsPath,
    filename: 'SSR.js',
    libraryTarget: 'commonjs2',
    publicPath,
  },
  target: 'node',
  externals: nodeExternals(),  
  module: {
    loaders: commonLoaders.concat([
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader', 
          use: [
            { 
              loader: "css-loader" ,
              query: {
                localIdentName: '[local]___[hash:base64:5]',
                modules: true
              }
            }, 
            { loader: "sass-loader" }
          ]
        })
      }
    ]),
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].[contenthash].css", 
      ignoreOrder: true
    })
  ]
};