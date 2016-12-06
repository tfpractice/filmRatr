const validate = require('webpack-validator');
const { resolve, }= require('path');

console.log(resolve('src'))

module.exports = () => validate({
  context: resolve('src'),
  entry: { app: './client/index', },
  output: {
    path:      resolve('dist'),
    filename:   '[name].bundle.js',
    publicPath: '/',

  },
  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [ 'babel-loader', ],
      },
    ],
  },
});
