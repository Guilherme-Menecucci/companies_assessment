/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { WebpackBundleSizeAnalyzerPlugin } = require('webpack-bundle-size-analyzer');
const common = require('./webpack.common.js');

const config = {
  mode: 'production',
  devtool: false,
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: true,
      reportFilename: '../analysis/bundle-analyzer.html',
    }),
    new WebpackBundleSizeAnalyzerPlugin('../analysis/bundle-size-analyzer.log'),
  ],
};

module.exports = merge(common, config);
