import { combineReducers, } from 'redux';
import { MOVIE_ACTIONS, MOVIE_REQUEST_ACTIONS, } from './constants';

const defaultState = [];
const initStatus = 'MOVIE_REQUEST_SUCCESS';

const status = (rState = initStatus, { type, curry, }) =>
  MOVIE_REQUEST_ACTIONS.has(type) ? curry(rState) : rState;

export const data = (state = defaultState, { type, curry, }) =>
  MOVIE_ACTIONS.has(type) ? curry(state) : state;

export default combineReducers({ data, status, });
