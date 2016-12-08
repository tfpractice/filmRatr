import { MovieUtils, asyncActions, } from '../../utils';

export const { MOVIE_DB_SEARCH_URL: SEARCH_URL, } = MovieUtils;

export const SEARCH_REQUEST_ACTIONS = asyncActions('SEARCH_REQUEST');

export const SEARCH = 'SEARCH';
export const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS';

export const SEARCH_ACTIONS = new Set([
  SEARCH,
  UPDATE_SEARCH_RESULTS,
]);
