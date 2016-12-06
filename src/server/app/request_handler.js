import React from 'react';
import { renderToString, } from 'react-dom/server';
import { createMemoryHistory, match, RouterContext, } from 'react-router';
import { createStore, applyMiddleware, } from 'redux';
import { Provider, } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { root, reducer, getRoutes, fetchComponentData, } from '../../imports';

const collapsed = (getState, action) => action.type;
const logger = createLogger({ collapsed, });

export const renderFullPage = (markup, preloadedState={}) => `
    <!doctype html>
    <html>
      <head>
        <title>HomeMakr App</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="app.styles.css">
  </head>
      <body>
        <div id="root">${markup}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>

        <script type="application/javascript" src="vendor.bundle.js"></script>
        <script type="application/javascript" src="app.bundle.js"></script>
           </body>
    </html>
    `;

export const requestHandler = (req, res) => {
  const store = applyMiddleware(thunk, logger)(createStore)(reducer);
  const routes = getRoutes(store);
  const location = createMemoryHistory(req.url);

  match({ routes, location, }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {

      const markup = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>);
        
      fetchComponentData(store.dispatch, renderProps.components, renderProps.params).then((args) => {
        res.send(renderFullPage(markup, store.getState()));
      }).catch(err => res.end(err.message));
    } else {
      res.status(404).send('Not found');
    }
  });
};
