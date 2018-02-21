const { publicPath, assetsPath, commonLoaders } = require('./common.config');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

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
        test: /\.css$/,
        options: {
          modules: true, 
          localIdentName: '[local]___[hash:base64:5]'
        },
        exclude: /\.module\.css$/
        loader: 'css/locals?module&localIdentName=[name]__[local]___[hash:base64:5]'
      },   
      {
        test: /\.s[ac]ss$/,
        loader: 'sass-loader',
        exclude: /\.module\.s[ac]ss$/
      },
      {
        test: /\.module\.s[ac]ss$/,
        loader: 'sass-loader',
      }
    ]),
  },
};