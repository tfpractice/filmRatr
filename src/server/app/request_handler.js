import React from 'react';
import { flattenBin, } from 'fenugreek-collections';
import { Provider, } from 'react-redux';
import { StaticRouter, } from 'react-router';
import { JssProvider, SheetsRegistry, } from 'react-jss';
import { create as jCreate, } from 'jss';
import preset from 'jss-preset-default';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';

import { matchRoutes, renderRoutes, } from 'react-router-config';
import { renderToString, } from 'react-dom/server';
import { MuiThemeProvider, } from 'material-ui/styles';
import { theme, } from 'imports/utils';
import { AppContainer, getRoutes, getStore, } from 'imports';

const makeSrc = path =>
  `<script type="application/javascript" src=/${path}></script>`;

export const renderHTML = (markup, state, css, chunks = {}) => `
    <!doctype html>
    <html>
      <head>
        <title>FilmRatr</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(state)}
        </script>
        <style id="jss-server-side">${css}</style>
  </head>
      <body style="background-color:#242024;">
        <div id="root">${markup}</div>
            ${[].concat(chunks.manifest).map(makeSrc)}
            ${[].concat(chunks.vendor).map(makeSrc)}
            ${[].concat(chunks.app).map(makeSrc)}
        </body>
    </html>
    `;

export const requestHandler = (req, res) => {
  const store = getStore();
  const routes = getRoutes;

  const loadBranchData = r => (location) => {
    console.log('req.url', req.url, '\n');

    const branch = matchRoutes(r, location);
    const rFilt = branch.filter(r => r.route.loadData);
    const exFilt = rFilt.filter(r => r.match.isExact);
    const mapped = exFilt.map(({ route, match, }) => {
      console.log(' Object.keys(route)', Object.keys(route), '\n');

      console.log(
        'route.loadData.map(f => f(match))',
        route.loadData.map(f => f(match))
      );

      console.log('match', match, '\n');
      return route.loadData.map(f => f(match));
    });
    const promises = mapped.reduce(flattenBin, []);

    return Promise.all(promises.map(action => store.dispatch(action)));
  };

  const context = {};

  if (context.url) {
    console.log('context', context);
    res.redirect(302);
  } else {
    loadBranchData(routes)(req.url)
      .then((data) => {
        const chunks = res.locals.webpackStats.toJson().assetsByChunkName;
        const sheetsRegistry = new SheetsRegistry();

        const css = sheetsRegistry.toString();
        const jss = jCreate(preset);

        jss.options.createGenerateClassName = createGenerateClassName;

        const markup = renderToString(
          <Provider store={store}>
            <JssProvider registry={sheetsRegistry} jss={jss}>
              <MuiThemeProvider theme={theme} sheetsManager={new WeakMap()}>
                <StaticRouter location={req.url} context={context}>
                  {renderRoutes(routes)}
                </StaticRouter>
              </MuiThemeProvider>
            </JssProvider>
          </Provider>
        );

        return res.send(renderHTML(markup, store.getState(), css, chunks));
      })
      .catch(err => res.end(err.message));
  }
};
