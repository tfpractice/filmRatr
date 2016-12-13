import React from 'react';
import { render, unmountComponentAtNode, } from 'react-dom';
import { Provider, } from 'react-redux';
import { AppContainer as HotContainer, } from 'react-hot-loader';
import { browserHistory, Router, } from 'react-router';
import { AppContainer as AppComponent, getRoutes, getStore, } from 'imports';
const store = getStore(window.__PRELOADED_STATE__);

const applyToDOM = str =>
  render(
    <HotContainer>
      <AppComponent store={str} />
    </HotContainer>, document.getElementById('root'));

// applyToDOM(store);

render(
  <HotContainer>
    <AppComponent store={getStore(window.__PRELOADED_STATE__)} history={browserHistory} />
  </HotContainer>, document.getElementById('root'));
if (module.hot) {
  module.hot.accept('../imports', () => {
    console.log('someting changed');
    const AppComponent = require('imports').AppContainer;

    // applyToDOM(store);
    render(
      <HotContainer>
        <AppComponent store={store} history={browserHistory} />
      </HotContainer>, document.getElementById('root'));
  });
}
