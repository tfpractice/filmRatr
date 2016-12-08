import sharedConf from './shared';
import * as actions from './actions';
import { CONFIG_EVENTS, } from './constants';

const config = (common = sharedConf, event) =>
  CONFIG_EVENTS.has(event) ? actions[event](common) : common;

export default (env, ...args) =>
(config(sharedConf(env), process.env.npm_lifecycle_event));
