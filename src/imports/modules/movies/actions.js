import axios from 'axios';
import { MovieUtils, StateUtils, } from 'imports/utils';
import { GET_MOVIE, GET_MOVIES, SET_CURRENT_MOVIE, } from './constants';

const { getMovieUrl, } = MovieUtils;
const { arrayUtils: { editByID, insert, removeByID, update, }, } = StateUtils;

const pending = movieID => state =>
 ({ ...state, status: 'pending', updatedAt: Date.now(), movieID, });

const success = message => state =>
 ({ ...state, status: 'suceeded', updatedAt: Date.now(), message, });

const failure = message => state =>
 ({ ...state, status: 'failed', updatedAt: Date.now(), message, });

const set = newMovie => movie => newMovie;

const setCurrentMovie = movie =>
  ({ type: SET_CURRENT_MOVIE, curry: set(movie), });

const insertMovie = movie =>
  ({ type: INSERT_MOVIE, curry: insert(movie), });

const updateMovies = movies =>
 ({ type: UPDATE_MOVIES, curry: update(movies), });

const updateMovie = movie =>
 ({ type: EDIT_MOVIE, curry: editByID(movie), });

const movieRequestPending = id =>
   ({ type: 'MOVIE_REQUEST_PENDING', curry: pending(id), });

const movieRequestSucess = () =>
    ({ type: 'MOVIE_REQUEST_SUCCESS', curry: success, });

const movieRequestFailure = err =>
  ({ type: 'MOVIE_REQUEST_FAILURE', curry: failure, });

const removeMovie = ({ id, }) =>
 ({ type:  DELETE_MOVIE, curry: removeByID({ id, }), });

export const getMovie = id => (dispatch) => {
  dispatch(movieRequestPending(id));
  return axios.get(getMovieUrl(id))
    .then(({ data: movie, }) =>
       dispatch(movieRequestSucess()) && dispatch(setCurrentMovie(movie)))
    .catch(movieRequestFailure);
};

export const getMovieFromParams = ({ movie_id, }) => getMovie(movie_id);

export const getMovies = () => (dispatch) => {
  dispatch({ type: 'MOVIE_REQUEST_PENDING', curry: pending, });
  return axios.get(`${API_URL}/movies`)
    .then(({ data: { movies, }, }) =>
       dispatch(movieRequestSucess()) && dispatch(updateMovies(movies)))
    .catch(movieRequestFailure);
};

export const createMovie = movieProps => dispatch =>
axios.post(`${API_URL}/movies`, movieProps)
  .then(({ data: { movie, }, }) => dispatch(insertMovie(movie)))
  .catch(err => console.error('there was an error in creation', err));

export const editMovie = ({ id, }) => dispatch => movieProps =>
 axios.patch(`${API_URL}/movies/${id}`, movieProps)
   .then(({ data: { movie, }, }) => dispatch(updateMovie(movie)))
   .catch(err => console.error('there was an error in update', err));

export const deleteMovie = ({ id, }) => dispatch =>
  axios.delete(`${API_URL}/movies/${id}`)
    .then(({ data: { movie, }, }) => dispatch(removeMovie(movie)))
    .catch(err => console.error('there was an error in delete', err));
