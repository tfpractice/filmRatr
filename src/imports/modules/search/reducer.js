import { combineReducers, } from 'redux';
import { SEARCH_ACTIONS, SEARCH_REQUEST_ACTIONS, } from './constants';

const reqInit = {};
const resultsInit = [];

const request = (req = reqInit, { type, curry, }) =>
  SEARCH_REQUEST_ACTIONS.has(type) ? curry(req) : req;

const results = (res = resultsInit, { type, curry, }) =>
  SEARCH_ACTIONS.has(type) ? curry(res) : res;

export default combineReducers({ request, results, });
