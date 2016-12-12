import axios from 'axios';
import * as constants from './constants';
const { GET_MOVIE, SET_CURRENT_MOVIE, GET_MOVIES, } = constants;

// const { MOVIE_REQUEST_PENDING, MOVIE_REQUEST_SUCCESS, 'MOVIE_REQUEST_FAILURE', } = constants;
import { MovieUtils, } from '../../utils';
const { getMovieUrl, } = MovieUtils;

const pending = movieID => state =>
 ({ ...state, status: 'pending', updatedAt: Date.now(), movieID, });

const success = message => state =>
 ({ ...state, status: 'suceeded', updatedAt: Date.now(), message, });

const failure = message => state =>
 ({ ...state, status: 'failed', updatedAt: Date.now(), message, });

const set = newMovie => movie => newMovie;
const update = newMovies => movies => newMovies;
const insert = movie => movies => movies.concat(movie);
const remove = ({ id, }) => movies => movies.filter(t => t.id !== id);
const edit = movie => movies =>
   movies.map(t => t.id === movie.id ? { ...t, ...movie, } : t);

const setCurrentMovie = movie =>
  ({ type: SET_CURRENT_MOVIE, curry: set(movie), });
const insertMovie = movie =>
  ({ type: INSERT_MOVIE, curry: insert(movie), });

const updateMovies = movies =>
 ({ type: UPDATE_MOVIES, curry: update(movies), });

const updateMovie = movie =>
 ({ type: EDIT_MOVIE, curry: edit(movie), });

const movieRequestPending = id =>
   ({ type: 'MOVIE_REQUEST_PENDING', curry: pending(id), });
const movieRequestSucess = () =>
    ({ type: 'MOVIE_REQUEST_SUCCESS', curry: success, });

const movieRequestFailure = err =>
  ({ type: 'MOVIE_REQUEST_FAILURE', curry: failure, });

const removeMovie = ({ id, }) =>
 ({ type:  DELETE_MOVIE, curry: remove({ id, }), });

export const getMovie = id => (dispatch) => {
  dispatch(movieRequestPending(id));
  return axios.get(getMovieUrl(id))
    .then(({ data: movie, }) =>
       dispatch(movieRequestSucess()) && dispatch(setCurrentMovie(movie)))
    .catch(movieRequestFailure);
};

export const getMovies = () => (dispatch) => {
  dispatch({ type: 'MOVIE_REQUEST_PENDING', curry: pending, });
  return axios.get(`${API_URL}/movies`)
    .then(({ data: { movies, }, }) =>
       dispatch(movieRequestSucess()) && dispatch(updateMovies(movies)))
    .catch(movieRequestFailure);
};

export const createMovie = movieProps => (dispatch) => {
  console.log('========moviesprops======', movieProps);
  return axios.post(`${API_URL}/movies`, movieProps)
    .then(({ data: { movie, }, }) => dispatch(insertMovie(movie)))
    .catch(err => console.error('there was an error in creation', err));
};

export const editMovie = ({ id, }) => dispatch => movieProps =>
 axios.patch(`${API_URL}/movies/${id}`, movieProps)
   .then(({ data: { movie, }, }) => dispatch(updateMovie(movie)))
   .catch(err => console.error('there was an error in update', err));

export const deleteMovie = ({ id, }) => dispatch =>
  axios.delete(`${API_URL}/movies/${id}`)
    .then(({ data: { movie, }, }) => dispatch(removeMovie(movie)))
    .catch(err => console.error('there was an error in delete', err));
