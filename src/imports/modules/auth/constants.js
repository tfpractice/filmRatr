import { asyncActions, MovieUtils, StateUtils, } from 'imports/utils';

export { API_URL, } from 'imports/utils';

const { getMovieUrl, } = MovieUtils;
const { requestUtils: { requestConstants, }, } = StateUtils;

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTRATION = 'REGISTRATION';

export const REGISTRATION_ACTIONS = requestConstants(REGISTRATION);
export const LOGIN_ACTIONS = requestConstants(LOGIN);
export const LOGOUT_ACTIONS = requestConstants(LOGOUT);

export const SET_USER = 'SET_USER';
export const USER_ACTIONS = new Set([ SET_USER, ]);

export const AUTH_ACTIONS = new Set([
  ...REGISTRATION_ACTIONS,
  ...LOGIN_ACTIONS,
  ...LOGOUT_ACTIONS,
  ...USER_ACTIONS,
]);
