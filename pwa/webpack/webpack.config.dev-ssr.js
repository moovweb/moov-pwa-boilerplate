const { publicPath, assetsPath, commonLoaders } = require('./common.config');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

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
        use: extractSass.extract({
          fallback: 'style-loader', 
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }]
        })
      }
    ]),
  },
  plugins: [
    extractSass
  ]
};