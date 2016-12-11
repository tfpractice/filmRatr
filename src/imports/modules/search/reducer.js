import { combineReducers, } from 'redux';
import * as constants from './constants';

const { SEARCH_REQUEST_ACTIONS, SEARCH_ACTIONS, } = constants;

const reqInit = {};
const resultsInit = [];

const request = (req = reqInit, { type, curry, }) =>
  SEARCH_REQUEST_ACTIONS.has(type) ? curry(req) : req;

const results = (res = resultsInit, { type, curry, }) =>
  SEARCH_ACTIONS.has(type) ? curry(res) : res;

export default combineReducers({ request, results, });
