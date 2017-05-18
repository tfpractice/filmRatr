import React from 'react';

import { BrowserRouter, Link, Route, Switch, } from 'react-router-dom';

import { Home, Main, MovieRoute, MovieView, SearchResults, TopTen, } from './components';

const search = { path: '/search/:query', component: SearchResults, };
const movies = {
  path: '/movies',
  component: MovieRoute,
  routes: [
    { path: '/movies/:movie_id', component: MovieView, loadData: MovieView.fetchData, },
    { path: '/movies/top', component: TopTen, loadData: MovieRoute.fetchData, },
  ],
  loadData: MovieRoute.fetchData,
};

const home = {
  path: '/',
  exact: true,
  component: Home,

};

const rootRoute = {
  component: Main,
  exact: true,
  routes: [
    movies, search, home,
  ],
};

// const routes = [ rootRoute, movies, search, home, ];
const routes = [ rootRoute, ];

export default routes;
