import React from 'react';

import { BrowserRouter, Link, Route, Switch, } from 'react-router-dom';

import { Home, Main, MovieRoute, MovieView, SearchResults, TopTen, } from './components';

const search = { path: '/search/:query', component: SearchResults, };
const movies = {
 path: '/movies',
 component: MovieRoute,
 routes: [
   { path: '/movies/:movie_id', component: MovieView, },
   { path: '/movies/top', component: TopTen, },
 ],
};

const home = {
 path: '/',
 exact: true,
 component: Home,

};

const rootRoute = {
 path: '/',
 component: Main,
 routes: [
   search, home, movies,
 ],
};
const routes = [ rootRoute, ];

export default routes;
