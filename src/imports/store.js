import createLogger from 'redux-logger';
import reducer from './reducer';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, } from 'redux';

//
// const predicate = (getState, { type, }) =>
//   MOVIE_ACTIONS.has(type);
const collapsed = (getState, action) => action.type;
const log = createLogger({ collapsed, });

export default state => applyMiddleware(thunk, log)(createStore)(reducer, state);
