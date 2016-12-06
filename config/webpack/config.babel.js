const validate = require('webpack-validator');
const { resolve, }= require('path');
const ROOT_PATH = resolve('./');
const SRC_DIR = resolve(ROOT_PATH, 'src');
const APP_PATH = resolve(SRC_DIR, 'client/index');
const PATHS = {
  app:  resolve(SRC_DIR, 'client/index'),
  dist: resolve(ROOT_PATH, 'dist'),
};
console.log(resolve('src'))

module.exports = () => validate({
  context: resolve('src'),
  entry: { app: PATHS.app, },
  output: {
    path:      PATHS.dist,
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
