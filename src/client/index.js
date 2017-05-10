import React from 'react';
import { render, } from 'react-dom';

import { AppContainer as HotContainer, } from 'react-hot-loader';
import { browserHistory, Router, } from 'react-router';
import { AppContainer as AppComponent, getRoutes, getStore, } from 'imports';

const store = getStore(window.__PRELOADED_STATE__);

const applyToDOM = (rStore, history) => Component =>
    render(
      <HotContainer>
        <Component store={rStore} history={history} />
      </HotContainer>, document.getElementById('root'));

const display = applyToDOM(store, browserHistory);

display(AppComponent);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('imports', () => {
    display(AppComponent);
  });
}

//
// if (module.hot) {
//   module.hot.accept('imports', () => {
//     const NextApp = require('imports').AppContainer;
//
//     render(
//       <HotContainer>
//         <NextApp store={store} history={browserHistory} />
//       </HotContainer>, document.getElementById('root'));
//   });
// }
