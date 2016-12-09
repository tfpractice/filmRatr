import React from 'react';
import { renderToString, } from 'react-dom/server';
import { Provider, } from 'react-redux';
import { createMemoryHistory, match, RouterContext, } from 'react-router';
import { getRoutes, fetchComponentData, getStore, AppContainer as AppComponent, } from '../../imports';
import { AppContainer as HotContainer, } from 'react-hot-loader';

export const renderHTML = (markup, preloadedState = {}) => `
    <!doctype html>
    <html>
      <head>
        <title>HomeMakr App RRRKSJDDJJD</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

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
{ /* <link rel="stylesheet" href="app.styles.css"> */ }

export const requestHandler = (req, res) => {
  const store = getStore();
  const routes = getRoutes(store);
  const location = createMemoryHistory(req.url);

  match({ routes, location, }, (error, redirectLocation, props) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      const markup = renderToString(
        <HotContainer>
          <Provider store={store}>
            <RouterContext {...props} />
          </Provider>
        </HotContainer>);

      fetchComponentData(store.dispatch, props.components, props.params)
        .then((args) => { res.send(renderHTML(markup, store.getState())); })
        .catch(err => res.end(err.message));
    } else {
      res.status(404).send('Not found');
    }
  });
};
if (module.hot) {
  module.hot.accept();
}
