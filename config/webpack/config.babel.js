import validate from 'webpack-validator';
const Joi = require('webpack-validator').Joi;

const schemaExtension = Joi.object({ sassLoader: Joi.any(), });
import sharedConf from './shared';
import * as actions from './actions';
import { CONFIG_EVENTS, } from './constants';

const config = (common = sharedConf, event) =>
  CONFIG_EVENTS.has(event) ? actions[event](common) : common;

export default (env, ...args) => {
  // console.log(env, args);
  const newCon = (config(sharedConf(env), process.env.npm_lifecycle_event));
  console.log(newCon);
  return newCon;
};
