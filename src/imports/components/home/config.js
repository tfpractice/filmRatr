import { MovieActions } from 'imports/actions';

import About from './about';
import Home from './main';

const about = {
  path: '/',
  component: About,
  loadData: [ MovieActions.getByFreq ],
};

const home = {
  path: '/',
  component: Home,
  routes: [ about ],
};

export default home;
