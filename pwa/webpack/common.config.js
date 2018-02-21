const path = require('path');

module.exports = {
  publicPath: '/assets/',
  assetsPath: path.join(__dirname, '..', '..', 'build', 'assets', 'pwa'),
  commonLoaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.join(__dirname, '..', 'src'),
      exclude: path.join(__dirname, '..', 'node_modules')
    },
  ],
};

