import React from 'react';
import { renderToString, } from 'react-dom/server';
import { Provider, } from 'react-redux';
import { createMemoryHistory, match, RouterContext, } from 'react-router';
import { AppContainer as AppComponent, fetchComponentData, getRoutes, getStore, } from '../../imports';
import { AppContainer as HotContainer, } from 'react-hot-loader';

export const renderHTML = (markup, preloadedState = {}, entrypoints = []) => `
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

           <script type="application/javascript" src=/manifest.js ></script>
           <script type="application/javascript" src=/vendor.js ></script>
           <script type="application/javascript" src=/app.js ></script>


        </body>
    </html>
    `;

{ /* minor c
  ${entrypoints.app.assets.map(path => `<script src="${path}"></script>`).join('')}

  <script type="application/javascript" src=/${chunks.manifest} ></script>
<script type="application/javascript" src=/${chunks.vendor} ></script>
<script type="application/javascript" src=/${chunks.app} ></script>

hnage */ }

export const requestHandler = (req, res) => {
  const store = getStore();
  const routes = getRoutes(store);
  const location = createMemoryHistory(req.url);
  console.log('================WITHIN REQUEST HANDLER ===================');

  match({ routes, location, }, (error, redirectLocation, props) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      // const locals = res.locals.webpackStats.toJson();
      //
      // console.log('================req.url===================', req.url);
      // console.log('================locals keys===================', Object.keys(locals));
      // console.log('================locals.assets===================', locals.assets);
      //
      // console.log('================locals.chunks===================', locals.chunks);
      //
      // console.log('================locals.children===================', locals.children);
      // console.log('================locals.entrypoints===================', locals.entrypoints);
      // const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName;
      console.log('================assetsByChunkName===================', );

      const markup = renderToString(

        <Provider store={store}>
          <RouterContext {...props} />
        </Provider>

      );

      fetchComponentData(store.dispatch, props.components, props.params)
        .then((args) => { res.send(renderHTML(markup, store.getState(), )); })
        .catch(err => res.end(err.message));
    } else {
      res.status(404).send('Not found');
    }
  });
};
