import thunk from 'redux-thunk';
import { createLogger, } from 'redux-logger';
import { applyMiddleware, createStore, } from 'redux';

import { MOVIE_ACTIONS, } from './modules/movies/constants';
import reducer from './reducer';

const predicate = (getState, { type, }) => MOVIE_ACTIONS.has(type);
const collapsed = (getState, action) => action.type;
const log = createLogger({ collapsed, predicate, });

export default state =>
  applyMiddleware(thunk, log)(createStore)(reducer, state);
