import { combineReducers, } from 'redux';
import { CURRENT_MOVIE_ACTIONS, MOVIE_ACTIONS, MOVIE_REQUEST_ACTIONS, } from './constants';

const defaultState = [];
const initStatus = '';
const currDef = {};

const status = (rState = initStatus, { type, curry, }) =>
  MOVIE_REQUEST_ACTIONS.has(type) ? curry(rState) : rState;

export const data = (state = defaultState, { type, curry, }) =>
  MOVIE_ACTIONS.has(type) ? curry(state) : state;

export const currentMovie = (mState = currDef, { type, curry, }) =>
  CURRENT_MOVIE_ACTIONS.has(type) ? curry(mState) : mState;
export default combineReducers({ data, status, });
