'use strict';
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

// umd build with dependencies bundled inside
const config = require('./webpack.development.config.js');
config.entry = path.resolve(__dirname, './src/client/index.js');
delete config.devtool;
delete config.output.publicPath;
delete config.watch;
config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': '"production"'
    }
  })
]);

// build components for direct imports in nodejs environment
const configIndividualComponents = require('lodash/cloneDeep')(config);
configIndividualComponents.entry = {
  Select: path.resolve(__dirname, './src/client/components/Select'),
  Async: path.resolve(__dirname, './src/client/components/Async'),
  Creatable: path.resolve(__dirname, './src/client/components/Creatable'),
  AsyncCreatable: path.resolve(__dirname, './src/client/components/AsyncCreatable'),
};
configIndividualComponents.output.filename = '[name].js';
configIndividualComponents.output.library = '[name]';
configIndividualComponents.output.libraryTarget = 'commonjs2';
configIndividualComponents.externals = [nodeExternals({ modulesFromFile: true })];

module.exports = [
  config,
  configIndividualComponents
];
