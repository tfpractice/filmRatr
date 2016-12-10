import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { PATHS, ROOT_PATH, } from './constants';

export default env => ({
  context: ROOT_PATH,
  entry: { app: PATHS.app, },
  resolve: {
    modules: [ 'node_modules', ],
    extensions: [ '.js', '.jsx', '.json', ],
  },
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
      { test: /\.json$/, loader: 'json-loader', },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [ 'css-loader', 'sass-loader?outputStyle=compressed', ],
        }),
      },

    ],
  },

  devtool: env.prod ? 'source-map' : 'eval',
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"', }, }),

 // new webpack.optimize.UglifyJsPlugin({
 //   compress: { warnings: false, },
 //   mangle: { except: [ 'webpackJsonp', ], },
 // }),
    new ExtractTextPlugin('[name].styles.css'),
    new webpack.LoaderOptionsPlugin(
      {
        options: {
          sassLoader:
        { includePaths: [ './node_modules', ], },
        },
      }),
  ],
  node: {
    fs:  'empty',
    net: 'mock',
    tls: 'mock',
    dns: 'mock',
  },

});
