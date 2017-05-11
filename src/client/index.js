import 'react-hot-loader/patch';
import React from 'react';
import { render, unmountComponentAtNode, } from 'react-dom';
import { AppContainer as HotContainer, } from 'react-hot-loader';
import { browserHistory, Router, } from 'react-router';
import { AppContainer as AppComponent, getRoutes, getStore, } from 'imports';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const store = getStore(window.__PRELOADED_STATE__);
const rootElem = document.getElementById('root');
const applyToDOM = (rStore, history) => Component =>
    render(
      <HotContainer>
        <Component store={rStore} history={history} />
      </HotContainer>, rootElem, (...args) => { console.log('args', args); });

const display = applyToDOM(store, browserHistory);

const d1 = display(AppComponent);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('imports', (...args2) => {
    console.log('accept');
    console.log('accept');
    console.log('accept');
    console.log('accept');
    console.log('accepted imports', args2);
    
    // const NextApp = require('imports').AppContainer;
    
    // console.log('NextApp', NextApp);
    display(AppComponent);
    
    // d1.forceUpdate();
    // console.log('d1.forceUpdate', d1.forceUpdate);
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
