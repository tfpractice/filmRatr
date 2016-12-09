import React from 'react';
import { render, } from 'react-dom';
import { Provider, } from 'react-redux';
import { AppContainer as HotContainer, } from 'react-hot-loader';
import { browserHistory, Router, } from 'react-router';
import { getRoutes, getStore, AppContainer as AppComponent, } from '../imports';

const applyToDOM = () => render(
  <HotContainer>
    <AppComponent store={getStore(window.__PRELOADED_STATE__)} />
  </HotContainer>, document.getElementById('root'));

applyToDOM();

if (module.hot) {
  module.hot.accept('../imports', (...args) => {
    console.log(args);
    applyToDOM();
    module.hot.accept('../imports/reducer', () => {
      getStore(window.__PRELOADED_STATE__).replaceReducer(appReducer);
    });
  });
}
