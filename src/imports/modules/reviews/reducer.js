import { combineReducers, } from 'redux';
import { REVIEW_ACTIONS, REVIEW_REQUEST_ACTIONS, } from './constants';

const defaultState = [];
const initStatus = '';

const status = (rqState = initStatus, { type, curry, }) =>
 REVIEW_REQUEST_ACTIONS.has(type) ? curry(rqState) : rqState;

export const data = (state = defaultState, { type, curry, }) =>
   REVIEW_ACTIONS.has(type) ? curry(state) : state;

export default combineReducers({ data, status, });
