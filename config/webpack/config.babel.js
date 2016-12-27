import shared from './shared';
import * as actions from './actions';
import { CONFIG_EVENTS, } from './constants';

const config = (common = shared(), event) => {
  console.log(process.env.MOVIE_DB_API_KEY);
  console.log(process.env);

  return CONFIG_EVENTS.has(event) ? actions[event](common) : common;
};

export default env => (config(shared(env), process.env.npm_lifecycle_event));
