import About from './about';
import Home from './main';

const about = {
  path: '/',
  component: About,
};

const home = {
  path: '/',
  component: Home,
  routes: [ about ],
};

export default home;
