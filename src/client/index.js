import React from 'react';
import { render, } from 'react-dom';
import { Provider, } from 'react-redux';
import { AppContainer as HotContainer, } from 'react-hot-loader';
import { browserHistory, Router, } from 'react-router';
import { getRoutes, getStore, AppContainer as AppComponent, } from '../imports';
const store = getStore(window.__PRELOADED_STATE__);

const applyToDOM = str =>
  render(
    <HotContainer>
      <AppComponent store={str} />
    </HotContainer>, document.getElementById('root'));

applyToDOM(store);

if (module.hot) {
  module.hot.accept('../imports', () => {
    console.log('someting changed');
    applyToDOM(store);
  });
}
