'use strict';
const path = require('path');
const webpack = require('webpack');
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let config = require('./webpack.development.config.js');
config.entry = path.resolve(path.join(__dirname, 'src', 'client', 'index.js'));
delete config.devtool;
delete config.output.publicPath;
delete config.watch;
config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': '"production"'
    }
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    analyzerHost: '127.0.0.1',
    analyzerPort: 8888,
    reportFilename: 'report.html',
    defaultSizes: 'parsed',
    openAnalyzer: true,
    generateStatsFile: false,
    statsFilename: 'stats.json',
    statsOptions: null,
    logLevel: 'info'
  })
]);

module.exports = config;
