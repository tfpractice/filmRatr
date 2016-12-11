import { Movies, Reviews, Search, } from './modules';

const { actions: MoviesActions, } = Movies;
const { actions: ReviewActions, } = Reviews;
const { actions: SearchActions, } = Search;

export { MoviesActions, SearchActions, ReviewActions, };
