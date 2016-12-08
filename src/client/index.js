import React from 'react';
import { render, } from 'react-dom';
import { Provider, } from 'react-redux';
import { browserHistory, Router, } from 'react-router';
import { getRoutes, getStore, } from '../imports';

const store = getStore(window.__PRELOADED_STATE__);

render(
  <Provider store={store}>
    <Router children={getRoutes(store)} history={browserHistory} />
  </Provider>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('../imports', () => {
      // If you use Webpack 2 in ES modules mode, you can
      // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('../imports').getRoutes(store);
    render(<Provider store={store}>
      <Router children={getRoutes(store)} history={browserHistory} />
    </Provider>, document.getElementById('root')
      );
  });
}
