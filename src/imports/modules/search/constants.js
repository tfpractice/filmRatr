import { asyncActions, MovieUtils, StateUtils, } from '../../utils';
const { requestUtils: { requestConstants, }, } = StateUtils;

export const { MOVIE_DB_SEARCH_URL: SEARCH_URL, } = MovieUtils;
export const SEARCH = 'SEARCH';
export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS';
export const SEARCH_REQUEST_ACTIONS = requestConstants(SEARCH_REQUEST);

export const SEARCH_ACTIONS = new Set([
  SEARCH,
  UPDATE_SEARCH_RESULTS,
]);
