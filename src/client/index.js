import React from 'react';
import { render, } from 'react-dom';
import { Provider, } from 'react-redux';
import { AppContainer as HotContainer, } from 'react-hot-loader';
import { browserHistory, Router, } from 'react-router';
import { getRoutes, getStore, AppContainer as AppComponent, } from '../imports';

const applyToDOM = (Component) => {
  console.log('applying Component to dom');
  render(
    <HotContainer>
      {Component}
    </HotContainer>, document.getElementById('root'));
};

applyToDOM(<AppComponent store={getStore(window.__PRELOADED_STATE__)} />);

if (module.hot) {
  module.hot.accept('../imports', () => {
    applyToDOM(<AppComponent store={getStore(window.__PRELOADED_STATE__)} />);
  });
}
