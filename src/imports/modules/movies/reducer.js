import { combineReducers, } from 'redux';
import { CURRENT_MOVIE_ACTIONS, MOVIE_ACTIONS, MOVIE_REQUEST_ACTIONS, } from './constants';

const defaultState = [];
const initStatus = '';
const currDef = {};

const status = (rState = initStatus, { type, curry, }) =>
  MOVIE_REQUEST_ACTIONS.has(type) ? curry(rState) : rState;

export const data = (state = defaultState, { type, curry, }) => {
  if (MOVIE_ACTIONS.has(type)) {
    console.log(...MOVIE_ACTIONS);
    console.log('=================data action======================', type);
  }

  return MOVIE_ACTIONS.has(type) ? curry(state) : state;
};

export const currentMovie = (mState = currDef, { type, curry, }) => {
  if (CURRENT_MOVIE_ACTIONS.has(type)) {
    console.log(...CURRENT_MOVIE_ACTIONS);
    console.log('=================currentMovie action======================', type);
  }
  return CURRENT_MOVIE_ACTIONS.has(type) ? curry(mState) : mState;
};
export default combineReducers({ data, status, });
