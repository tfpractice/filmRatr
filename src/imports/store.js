import { createStore, applyMiddleware, } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { getRoutes, } from './routes';
import reducer from './reducer';
import { SearchActions, } from './actions';
import { SEARCH_REQUEST_ACTIONS, } from './modules/search/constants';

const predicate = (getState, { type, }) => SEARCH_REQUEST_ACTIONS.has(type);
const collapsed = (getState, action) => action.type;
const log = createLogger({ collapsed, });

export default state => applyMiddleware(thunk, log)(createStore)(reducer, state);
