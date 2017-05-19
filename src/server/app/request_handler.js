import React from 'react';
import { flattenBin, } from 'fenugreek-collections';
import { Provider, } from 'react-redux';
import { renderRoutes, } from 'react-router-config';
import { renderToString, } from 'react-dom/server';
import { AppContainer, getRoutes, getStore, } from 'imports';
import { StaticRouter, } from 'react-router';
import { matchPath, } from 'react-router-dom';
import { MuiThemeProvider, } from 'material-ui/styles';
import { matchRoutes, } from 'react-router-config';
import { styleManager, theme, } from 'imports/utils';
import { Main, } from 'imports/components';

const makeSrc = path => `<script type="application/javascript" src=/${path}></script>`;

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
  
  const promises = [];
  
  const loadBranchData = r => (location) => {
    console.log('req.url', req.url, '\n');
    console.log('req.query', req.query, '\n');
    
    const branch = matchRoutes(r, location);
    const rFilt = branch.filter(r => r.route.loadData);
    const exFilt = rFilt.filter(r => r.match.isExact);
    const mapped = exFilt.map(({ route, match, }) => {
      console.log(' Object.keys(route)', Object.keys(route), '\n');

      // console.log('mathched route', route, '\n');
      console.log('match', match, '\n');
      return route.loadData.map(f => f(match));
    });
    const promises = mapped.reduce(flattenBin, []);
    
    // console.log('branch', branch, '\n');
    console.log('branch.length', branch.length, '\n');
    
    // console.log('rFilt', rFilt,'\n');
    
    console.log('exFilt', exFilt, '\n');
    
    //
    // console.log('mapped', mapped,'\n');
    // console.log('promises', promises,,'\n');
    
    return Promise.all(promises.map(store.dispatch));
  };
  
  const context = {};
  
  if (context.url) {
    res.redirect(302);
  } else {
    loadBranchData(routes)(req.url).then((data) => {
      console.log('data', '\n');
      const chunks = res.locals.webpackStats.toJson().assetsByChunkName;
      const css = styleManager.sheetsToString();
      
      const markup = renderToString(
        <Provider store={store}>
          <MuiThemeProvider styleManager={styleManager} theme={theme}>
            <StaticRouter location={req.url} context={context} >
              {renderRoutes(routes)}
            </StaticRouter>
          </MuiThemeProvider>
        </Provider>
      );
      
      return res.send(renderHTML(markup, store.getState(), css, chunks));
    })
      .catch(err => res.end(err.message));
  }
};
