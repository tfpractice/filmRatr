import React from 'react';
import { Provider, } from 'react-redux';
import { renderToString, } from 'react-dom/server';

// import { createMemoryHistory, match, RouterContext, } from 'react-router';
import { AppContainer, getRoutes, getStore, } from 'imports';
import { StaticRouter, } from 'react-router';

import { MuiThemeProvider, } from 'material-ui/styles';

import { styleManager, theme, } from 'imports/utils';

const makeSrc = path => `<script type="application/javascript" src=${path}></script>`;

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
      <body style="background-color:#424242;">
        <div id="root">${markup}</div>
            ${[].concat(chunks.manifest).map(makeSrc)}
            ${[].concat(chunks.vendor).map(makeSrc)}
            ${[].concat(chunks.app).map(makeSrc)}
        </body>
    </html>
    `;

export const requestHandler = (req, res) => {
  const store = getStore();
  const routes = getRoutes(store);

  // const history = cr eateMemoryHistory(req.url);
  // const location = history.createLocation(req.url);
  const context = {};
  
  // match({ routes, history, location, }, (error, redirectLocation, props) => {
  
  // if (context.url) {
  //   res.status(500).send(error.message);
  // }
  if (context.url) {
    res.redirect(302);
  } else {
    // fetchComponentData(store.dispatch, props.components, props.params)
      // .then(() => {
    const chunks = res.locals.webpackStats.toJson().assetsByChunkName;
    const css = styleManager.sheetsToString();
    
    const markup = renderToString(
      <Provider store={store}>
        <MuiThemeProvider styleManager={styleManager} theme={theme}>
          <StaticRouter location={req.url} context={context} >
            {/* <AppContainer store={store} /> */}
            {routes}
          </StaticRouter>
        </MuiThemeProvider>
      </Provider>
              );
    
    return res.send(renderHTML(markup, store.getState(), css, chunks));
    
      // })
      // .catch(err => res.end(err.message));
  }
  
  //  else {
    // res.status(404).send('Not found');
  // }
};

//
// const html = ReactDOMServer.renderToString(
//   <StaticRouter
//     location={req.url}
//     context={context}
//   >
//     <App />
//   </StaticRouter>
//      );
//
// if (context.url) {
//   res.writeHead(301, { Location: context.url, });
//   res.end();
// } else {
//   res.write(`
//          <!doctype html>
//          <div id="app">${html}</div>
//        `);
//   res.end();
// }

// export const requestHandler = (req, res) => {
//   const store = getStore();
//   const routes = getRoutes(store);
//   const history = createMemoryHistory(req.url);
//   const location = history.createLocation(req.url);
//
//   match({ routes, history, location, }, (error, redirectLocation, props) => {
//     if (error) {
//       res.status(500).send(error.message);
//     } else if (redirectLocation) {
//       res.redirect(302, redirectLocation.pathname + redirectLocation.search);
//     } else if (props) {
//       fetchComponentData(store.dispatch, props.components, props.params)
//         .then(() => {
//           const chunks = res.locals.webpackStats.toJson().assetsByChunkName;
//           const css = styleManager.sheetsToString();
//           const markup = renderToString(
//             <Provider store={store}>
//               <MuiThemeProvider styleManager={styleManager} theme={theme}>
//                 <StaticRouter
//                   location={req.url}
//                   context={context}
//                 >                      <RouterContext {...props} />
//                   <App />
//                 </StaticRouter>
//               </MuiThemeProvider>
//             </Provider>
//               );
//
//           return res.send(renderHTML(markup, store.getState(), css, chunks));
//         })
//         .catch(err => res.end(err.message));
//     } else {
//       res.status(404).send('Not found');
//     }
//   });
// };
