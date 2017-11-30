const {resolve} = require('path');
const webpack = require('webpack');

module.exports = ({config, stage}) => {
  config.merge({
    resolve: {
      root: resolve(__dirname, '../src'),
      extensions: ['', '.js', '.jsx', '.json'],
    },
  });
  return config;
};
