const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  mode: nodeEnv,
  devtool: 'source-map',
  entry: './app.js',
  output: {
    filename: 'bundle.js',
  },
};


