import React from 'react';
import { Route, IndexRoute, } from 'react-router';

// import injectTapEventPlugin from 'react-tap-event-plugin';
import { Home, Main, } from './components';

// import { Login, Register, } from './components/auth';
//
// injectTapEventPlugin();
//
// const logChange = (prevState, nextState, replace,) => {
//   console.log('now changing Route from');
//   console.log(nextState);
//   console.log('to');
//   console.log(nextState);
// };
//
// const requireLogin = store => (nextState, replace, cb) => {
//   const { auth: { user, }, } = store.getState();
//   if (!user) {
//     replace('/');
//   }
//   cb();
// };

const getRoutes = store => (
  <Route name="app" component={Main} path="/">
    <IndexRoute component={Home} />
  </Route>);
if (module.hot) {
  module.hot.accept();
}

export default getRoutes;
