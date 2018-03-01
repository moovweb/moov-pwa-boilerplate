const path = require('path');

module.exports = {
  publicPath: '/assets/',
  commonLoaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        'babel-loader'
      ]
    },
  ],
};

