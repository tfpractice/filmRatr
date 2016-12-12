import React from 'react';
import { renderToString, } from 'react-dom/server';
import { Provider, } from 'react-redux';
import { createMemoryHistory, match, RouterContext, } from 'react-router';
import { AppContainer as AppComponent, fetchComponentData, getRoutes, getStore, } from '../../imports';
import { AppContainer as HotContainer, } from 'react-hot-loader';

export const renderHTML = (markup, preloadedState = {}, chunks = {}) => `
    <!doctype html>
    <html>
      <head>
        <title>HomeMakr App RRRKSJDDJJD</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
          <link rel="stylesheet" href="/app.styles.css">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">

  </head>
      <body>
        <div id="root">${markup}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>

        <script type="application/javascript" src=/${chunks.manifest} ></script>
        <script type="application/javascript" src=/${chunks.vendor} ></script>
        <script type="application/javascript" src=/${chunks.app} ></script>
        </body>
    </html>
    `;

{ /* minor c

hnage */ }

export const requestHandler = (req, res) => {
  const store = getStore();
  const routes = getRoutes(store);
  const location = createMemoryHistory(req.url);
  console.log('================WITHIN REQUEST HANDLER ===================');
  const locals = res.locals.webpackStats.toJson();
  console.log('================req.url===================', req.url);

  match({ routes, location, }, (error, redirectLocation, props) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName;
      console.log('================assetsByChunkName===================', assetsByChunkName);

      const markup = renderToString(

        <Provider store={store}>
          <RouterContext {...props} />
        </Provider>

      );

      fetchComponentData(store.dispatch, props.components, props.params)
        .then((args) => { res.send(renderHTML(markup, store.getState(), assetsByChunkName)); })
        .catch(err => res.end(err.message));
    } else {
      res.status(404).send('Not found');
    }
  });
};
