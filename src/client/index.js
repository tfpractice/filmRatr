import React from 'react';
import { render, } from 'react-dom';
import { browserHistory, Router, } from 'react-router';
import { getRoutes, getStore, } from '../imports';
import { Provider, } from 'react-redux';

const store = getStore(window.__PRELOADED_STATE__);

render(
  <Provider store={store}>
    <Router children={getRoutes(store)} history={browserHistory} />
  </Provider>, document.getElementById('root'));
