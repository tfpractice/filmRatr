import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render, } from 'react-dom';
import { Provider, } from 'react-redux';
import { AppContainer as HotContainer, } from 'react-hot-loader';
import { browserHistory, Router, } from 'react-router';
import { AppContainer as AppComponent, getRoutes, getStore, } from 'imports';

injectTapEventPlugin();

const store = getStore(window.__PRELOADED_STATE__);

const applyToDOM = (store, history) =>
  render(
    <HotContainer>
      <AppComponent store={store} history={history} />
    </HotContainer>, document.getElementById('root'));

applyToDOM(store, browserHistory);

// render(
//   <HotContainer>
//     <AppComponent store={getStore(window.__PRELOADED_STATE__)} history={browserHistory} />
//   </HotContainer>, document.getElementById('root'));
if (module.hot) {
  module.hot.accept('imports', () => {
    const AppComponent = require('imports').AppContainer;

    // applyToDOM(store, browserHistory);
    // applyToDOM(store);
    render(
      <HotContainer>
        <AppComponent store={store} history={browserHistory} />
      </HotContainer>, document.getElementById('root'));
  });
}
