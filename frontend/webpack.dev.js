const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

const config = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    static: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    compress: true,
    open: true,
    hot: true,
  },
};

module.exports = merge(common, config);
