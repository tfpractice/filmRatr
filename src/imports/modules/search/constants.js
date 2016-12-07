export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test')
    ? process.env.BASE_URL || (`http://localhost:${process.env.PORT || 3000}/api`)
    : '/api';
export const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.MOVIE_DB_API_URL}`

import { MovieUtils, asyncActions, } from '../../utils'

export const SEARCH_REQUEST_ACTIONS = asyncActions('SEARCH_REQUEST');

export const SEARCH = 'SEARCH';
export const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS';

export const SEARCH_ACTIONS = new Set([
  SEARCH,
  UPDATE_SEARCH_RESULTS,
]);
