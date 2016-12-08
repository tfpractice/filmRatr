import React from 'react';
import { render, } from 'react-dom';
import { Provider, } from 'react-redux';
import { browserHistory, Router, } from 'react-router';
import { getRoutes, getStore, } from '../imports';

const store = getStore(window.__PRELOADED_STATE__);

// console.log('============stor frome clinet======', store);
render(
  <Provider store={store}>
    <Router children={getRoutes(store)} history={browserHistory} />
  </Provider>, document.getElementById('root'));
