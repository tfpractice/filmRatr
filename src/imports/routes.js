import { routes as search, } from './components/search';
import { routes as movies, } from './components/movie';

import { Home, Main, } from './components';
import { MovieActions, } from './actions';

const home = {
  path: '/',
  component: Home,
  loadData: [ MovieActions.getByFreq, ],
};

const rootRoute = {
  component: Main,
  routes: [ movies, search, home, ],
};

const routes = [ rootRoute, ];

export default routes;
