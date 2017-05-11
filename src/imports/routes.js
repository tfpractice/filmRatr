import React from 'react';
import { IndexRoute, Route, } from 'react-router';
import { Home, Main, MovieView, SearchResults, } from './components';

const getRoutes = store => (
  <Route name="app" path="/" component={Main}>
    <Route path="movies/:movie_id" component={MovieView} />
    <Route path="search(*:query)" component={SearchResults} />
    <IndexRoute component={Home} />
  </Route>);

export default getRoutes;
