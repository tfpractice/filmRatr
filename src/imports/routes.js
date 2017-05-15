import React from 'react';

import { BrowserRouter, Link, Route, Switch, } from 'react-router-dom';

import { Home, Main, MovieView, SearchResults, } from './components';

const getRoutes = store => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/movies/:movie_id" component={MovieView} />
    <Route path="/search(*:query)" component={SearchResults} />
  </Switch>
  );

export default getRoutes;
