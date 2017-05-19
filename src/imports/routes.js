import React from 'react';
import { routes as search, } from './components/search';

import { Home, Main, MovieList, MovieRoute, MovieView, SearchResults, TopTen, } from './components';
import { MovieActions, } from './actions';

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

//
// const search = {
//   path: '/search(.?):query?',
//   component: SearchResults,
//   loadData: SearchResults.fetchData,
// };
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
