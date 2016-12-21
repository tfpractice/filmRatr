import { asyncActions, MovieUtils, StateUtils, API_URL as url, } from 'imports/utils';
const { getMovieUrl, } = MovieUtils;
const { requestUtils: { requestConstants, }, } = StateUtils;

export const API_URL = url;

// export const MOVIE_REQUEST_ACTIONS = requestConstants('MOVIE_REQUEST');

//
// export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test')
//     ? process.env.BASE_URL || (`http://localhost:${process.env.PORT || 3000}/api`)
//     : '/api';

export const REGISTRATION_ACTIONS = requestConstants('REGISTRATION');
export const LOGIN_ACTIONS = requestConstants('LOGIN');
export const LOGOUT_ACTIONS = requestConstants('LOGOUT');

export const SET_USER = 'SET_USER';
export const USER_ACTIONS = new Set([ SET_USER, ]);

export const AUTH_ACTIONS = new Set([
  ...REGISTRATION_ACTIONS,
  ...LOGIN_ACTIONS,
  ...LOGOUT_ACTIONS,
  ...USER_ACTIONS,
]);
