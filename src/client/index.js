import React from 'react';
import { render, } from 'react-dom';
import { Provider, } from 'react-redux';
import { AppContainer as HotContainer, } from 'react-hot-loader';
import { browserHistory, Router, } from 'react-router';
import { getRoutes, getStore, AppContainer as AppComponent, } from '../imports';

const store = getStore(window.__PRELOADED_STATE__);

const applyToDOM = (str) => {
  console.log('applying Component to dom');
  render(
    <HotContainer>
      <AppComponent store={str} />
    </HotContainer>, document.getElementById('root'));
};

applyToDOM(store);

/* <Provider store={store}>
  <Router children={getRoutes(store)} history={browserHistory} />
</Provider> */

if (module.hot) {
  module.hot.accept('../imports', () => {
    applyToDOM(store);
  });
}
