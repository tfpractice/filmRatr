import { applyMiddleware, createStore, } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { getRoutes, } from './routes';
import reducer from './reducer';
import { CURRENT_MOVIE_ACTIONS, MOVIE_ACTIONS, } from './modules/movies/constants';

const predicate = (getState, { type, }) =>
  MOVIE_ACTIONS.has(type);
const collapsed = (getState, action) => action.type;
const log = createLogger({ collapsed, });

export default state => applyMiddleware(thunk, log)(createStore)(reducer, state);
