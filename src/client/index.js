import React from 'react';
import { render, } from 'react-dom';
import { browserHistory, Router, } from 'react-router';
import { getRoutes, reducer, } from '../imports';
import { Provider, } from 'react-redux';
import { createStore, applyMiddleware, } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const preloadedState = (window.__PRELOADED_STATE__);

// const predicate = (getState, { type, }) => AUTH_ACTIONS.has(type);
const collapsed = (getState, action) => action.type;
const logger = createLogger({ collapsed, });

const store = applyMiddleware(thunk, logger)(createStore)(reducer, preloadedState);
render(
  <Provider store={store}>
    <Router children={getRoutes(store)} history={history} />
  </Provider>, document.getElementById('root'));
