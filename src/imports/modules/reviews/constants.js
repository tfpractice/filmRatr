import { API_URL, MovieUtils, asyncActions, } from '../../utils';
export const { MOVIE_DB_REVIEW_URL: MOVIE_URL, } = MovieUtils;

export const REVIEW_URL = `${API_URL}/reviews`;
export const REVIEW_REQUEST_ACTIONS = asyncActions('REVIEW_REQUEST');

export const GET_REVIEWS = 'GET_REVIEWS';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const INSERT_REVIEW = 'INSERT_REVIEW';
export const UPDATE_REVIEWS = 'UPDATE_REVIEWS';
export const EDIT_REVIEW = 'EDIT_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';

export const REVIEW_ACTIONS = new Set(
  [ GET_REVIEWS, UPDATE_REVIEWS, INSERT_REVIEW,
    CREATE_REVIEW, EDIT_REVIEW, DELETE_REVIEW,
  ]);
