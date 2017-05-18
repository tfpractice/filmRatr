import React from 'react';

import { BrowserRouter, Link, Route, Switch, } from 'react-router-dom';

import { Home, Main, MovieRoute, MovieView, SearchResults, TopTen, } from './components';
import { MovieActions, } from './actions';
const search = { path: '/search/:query', component: SearchResults, };

const moviepage = {
  path: '/movies/:movie_id',
  component: MovieView,
  loadData: [ MovieActions.setMovieFromParams, ],
};

const topMovies = {
  path: '/movies/top',
  component: TopTen,
  loadData: MovieRoute.fetchData,
};
 
const movies = {
  path: '/movies',
  component: MovieRoute,
  loadData: MovieRoute.fetchData,
  routes: [ moviepage, topMovies, ],
};

const home = {
  path: '/',
  component: Home,
};

const rootRoute = {
  component: Main,
  routes: [ movies, search, home, ],
};

const routes = [ rootRoute, ];

export default routes;
