import React from 'react';
import { Provider, } from 'react-redux';
import { renderRoutes, } from 'react-router-config';
import { renderToString, } from 'react-dom/server';
import { AppContainer, getRoutes, getStore, } from 'imports';
import { StaticRouter, } from 'react-router';
import { matchPath, } from 'react-router-dom';
import { MuiThemeProvider, } from 'material-ui/styles';

import { styleManager, theme, } from 'imports/utils';
import { Main, } from 'imports/components';
const makeSrc = path => `<script type="application/javascript" src=${path}></script>`;

console.log('getRoutes', getRoutes);
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
  const routes = getRoutes;

  //
  const promises = [];

  // // use `some` to imitate `<Switch>` behavior of selecting only
  // // the first to match
  
  const matchedRoutes = routes.filter((route) => {
    // use `matchPath` here
    console.log('===========+++++++==========');

    // console.log('req.url', req.url);

    const match = matchPath(req.url, route);
  
    if (match && !!route.loadData) {
      console.log('===========+++++++==========');
      console.log('===========MATCHED==========');
      console.log('match', match);

      // promises = promises.concat(route.loadData);

      // // console.log('route.component', route.component);
      // console.log('route', route);
      // console.log('route.loadData', route.loadData);

      // console.log('promises modified', promises);

      // console.log('match', match);
      console.log('===========+++++++==========');

      // promises.push(route.loadData(match));
      // console.log('===========+++++++==========');
    }

    return !!match;
  });

  //
  //
  // console.log('matchedRoutes', matchedRoutes);
  // console.log('promises', promises);

  // Promise.all(promises).then(data => {
  //   // do something w/ the data so the client
  //   // can access it then render the app
  // })
  // const history = cr eateMemoryHistory(req.url);
  // const location = history.createLocation(req.url);
  const context = {};
  
  // import { unaryMap, } from './store/dedupe';
  // const fetchDef = { fetchData: [], needs: [], };
  // const isWrapped = ({ WrappedComponent = null, }) => WrappedComponent;
  //
  // const getNeeds = ({ needs, } = fetchDef) => needs;
  // const getData = ({ fetchData, } = fetchDef) => fetchData;
  // const getWrapped = c => isWrapped(c) ? c.WrappedComponent : c;
  //
  // const compData = component => isWrapped(component)
  //     ? getData(component.WrappedComponent)
  //     : getData(component);
  //
  // const flatten = (prev = [], next = []) => [ ...prev, ...next, ];
  //
  // const fetchComponentData = (dispatch, components, params) => {
  //   const needs = components.map(compData).reduce(flatten, []);
  //
  //   return Promise.all(needs.map(n => n(params)).map(dispatch));
  // };
  //
  // export default fetchComponentData;
  //
  // const mRoutes = routes.filter(route => matchPath(req.url, route))
  // .filter(r => r.loadData).map(({ loadData, }) => loadData);
  //
  // console.log('mRoutes', mRoutes);
  // console.log('promises.concat(...mRoutes)', promises.concat(...mRoutes));
  // Promise.all(promises.concat(...mRoutes).map((f) => {
  //   console.log('f', f);
  //   return store.dispatch(f());
  // }))
  //   .then(console.log);

  // match({ routes, history, location, }, (error, redirectLocation, props) => {
  // const mPath = matchPath(req.url, { path: '/movies', });

  // if (context.url) {
  //   res.status(500).send(error.message);
  // }

  if (context.url) {
    res.redirect(302);
  } else {
    // fetchComponentData(store.dispatch, props.components, props.params)
      // .then(() => {
    const mRoutes = routes.filter(route => matchPath(req.url, route))
      .filter(r => r.loadData).map(({ loadData, }) => loadData);

    console.log('mRoutes', mRoutes);
    console.log('promises.concat(...mRoutes)', promises.concat(...mRoutes));
    Promise.all(promises.concat(...mRoutes).map((f) => {
      console.log('f', f);
      return store.dispatch(f());
    }))
      .then((data) => {
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
