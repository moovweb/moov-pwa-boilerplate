const { publicPath, assetsPath, commonLoaders } = require('./common.config');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');

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
    loaders: commonLoaders.concat([
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader', 
          use: [
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
                localIdentName: '[local]___[hash:base64:5]',
                modules: true,
                minimize: true,
                sourceMap: false,
              },
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebookincubator/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                  require('postcss-flexbugs-fixes'),
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                  }),
                ],
              },
            },
            { 
              loader: "sass-loader" 
            }
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