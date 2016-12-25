import React from 'react';
import { IndexRoute, Route, } from 'react-router';
import { Home, Main, MovieView, SearchResults, } from './components';

// const getMovieHook = (store)=()
const getRoutes = store => (
  <Route name="app" component={Main} path="/">
    <IndexRoute component={Home} />
    <Route path="/movies/:movie_id" component={MovieView} />
    <Route path="/search/(:title)" component={SearchResults} />

  </Route>);

// import injectTapEventPlugin from 'react-tap-event-plugin';
    // <Route component={MovieView} path="movies/:movie_id" />
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

export default getRoutes;
