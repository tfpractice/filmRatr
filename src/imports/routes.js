import { routes as search, } from './components/search';
import { routes as movies, } from './components/movie';
import { routes as home, } from './components/home';

import { Main, } from './components';

const rootRoute = {
  component: Main,
  routes: [ movies, search, home, ],
};

const routes = [ rootRoute, ];

export default routes;
