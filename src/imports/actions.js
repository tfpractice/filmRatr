import { Movies, Reviews, Search, } from './modules';

const { actions: MovieActions, } = Movies;
const { actions: ReviewActions, } = Reviews;
const { actions: SearchActions, } = Search;

export { MovieActions, SearchActions, ReviewActions, };
