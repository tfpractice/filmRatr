import { MovieActions } from 'imports/actions';
import MovieRoute from './main';
import MovieView from './view';
import TopTen from './top_ten';

const moviepage = {
  path: '/movies/:movie_id',
  component: MovieView,
  loadData: [ MovieActions.setMovieFromParams ],
};

const topMovies = {
  path: '/movies/top',
  component: TopTen,
  loadData: [ MovieActions.getByFreq ],
};

const popMovies = {
  path: '/movies/pop',
  component: TopTen,
  loadData: [ MovieActions.getByAvg ],
};

const routes = {
  path: '/movies',
  component: MovieRoute,
  routes: [ moviepage, topMovies ],
  loadData: [ MovieActions.getByFreq ],
};

export default routes;
