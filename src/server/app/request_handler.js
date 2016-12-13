import React from 'react';
import { Provider, } from 'react-redux';
import { renderToString, } from 'react-dom/server';
import { createMemoryHistory, match, RouterContext, } from 'react-router';
import { fetchComponentData, getRoutes, getStore, } from '../../imports';

export const renderHTML = (markup, preloadedState = {}) => `
    <!doctype html>
    <html>
      <head>
        <title>HomeMakr App RRRKSJDDJJD</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
  </head>
      <body>
        <div id="root">${markup}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
           <script type="application/javascript" src=/manifest.js ></script>
           <script type="application/javascript" src=/vendor.js ></script>
           <script type="application/javascript" src=/app.js ></script>
        </body>
    </html>
    `;

    //           <link rel="stylesheet" href="/app.styles.css">

export const requestHandler = (req, res) => {
  const store = getStore();
  const routes = getRoutes(store);
  const history = createMemoryHistory(req.url);
  const location = history.createLocation(req.url);

  match({ routes, history, location, }, (error, redirectLocation, props) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      const markup = renderToString(
        <Provider store={store}>
          <RouterContext {...props} />
        </Provider>
      );

      fetchComponentData(store.dispatch, props.components, props.params)
        .then(() => res.send(renderHTML(markup, store.getState())))
        .catch(err => res.end(err.message));
    } else {
      res.status(404).send('Not found');
    }
  });
};
