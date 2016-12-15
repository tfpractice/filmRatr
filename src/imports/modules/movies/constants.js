export const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.MOVIE_DB_API_URL}`;
import { asyncActions, MovieUtils, StateUtils, API_URL as url, } from 'imports/utils';
const { getMovieUrl, } = MovieUtils;
const { requestUtils: { requestConstants, }, } = StateUtils;

export const API_URL = url;
export const MOVIE_REQUEST_ACTIONS = requestConstants('MOVIE_REQUEST');

export const GET_MOVIE = 'GET_MOVIE';
export const GET_MOVIES = 'GET_MOVIES';
export const SET_CURRENT_MOVIE = 'SET_CURRENT_MOVIE';
export const CREATE_MOVIE = 'CREATE_MOVIE';
export const INSERT_MOVIE = 'INSERT_MOVIE';
export const UPDATE_MOVIES = 'UPDATE_MOVIES';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';

export const MOVIE_ACTIONS = new Set([
  GET_MOVIE, GET_MOVIES, UPDATE_MOVIES,
  INSERT_MOVIE, CREATE_MOVIE, EDIT_MOVIE, DELETE_MOVIE,
]);

export const CURRENT_MOVIE_ACTIONS = new Set([ SET_CURRENT_MOVIE, ]);
