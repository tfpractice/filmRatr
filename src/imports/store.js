import { createStore, applyMiddleware, } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { getRoutes, } from './routes';
import reducer from './reducer';
import { SearchActions, } from './actions';
import * as SEACH_REQUEST_ACTIONS from './modules/search/constants';
const { search, } = SearchActions;

console.log('SEACH_REQUEST_ACTIONS', SEACH_REQUEST_ACTIONS.SEARCH_REQUEST_ACTIONS);
const predicate = (getState, { type, }) => SEACH_REQUEST_ACTIONS.SEARCH_REQUEST_ACTIONS.has(type);
const collapsed = (getState, action) => action.type;
const log = createLogger({ collapsed, predicate, });

export default (state) => {
  const store = applyMiddleware(thunk, log)(createStore)(reducer, state);
  console.log('============stor frome function======', store);

  // store.dispatch(search('the matrix'));
  return store;
};
