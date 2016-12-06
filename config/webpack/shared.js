import webpack from 'webpack';
import path from 'path';
import validate from 'webpack-validator';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { PATHS, ROOT_PATH, } from './constants';

const Joi = require('webpack-validator').Joi;
const schemaExtension = Joi.object({ sassLoader: Joi.any(), });

export default (env, ...args) => {
  // console.log(process.env)
  console.log(args);
  return validate({
    context: ROOT_PATH,
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
    devtool: env.prod ? 'source-map' : 'eval',
    node: {
      fs:  'empty',
      net: 'mock',
      tls: 'mock',
      dns: 'mock',
      net: 'mock',
    },
  })
};
