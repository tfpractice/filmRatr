import axios from 'axios';
import * as constants from './constants';
const { API_URL, UPDATE_MOVIES, EDIT_MOVIE, INSERT_MOVIE, DELETE_MOVIE, } = constants;
const { MOVIE_REQUEST_PENDING, MOVIE_REQUEST_SUCCESS, MOVIE_REQUEST_FAILURE, } = constants;

const pending = () => () =>
 ({ status: 'pending', updatedAt: Date.now(), message: null, });

const success = message => () =>
 ({ status: 'suceeded', updatedAt: Date.now(), message, });

const failure = message => () =>
 ({ status: 'failed', updatedAt: Date.now(), message, });

const update = newMovies => movies => newMovies;
const insert = movie => movies => movies.concat(movie);
const remove = ({ id, }) => movies => movies.filter(t => t.id !== id);
const edit = movie => movies =>
   movies.map(t => t.id === movie.id ? { ...t, ...movie, } : t);

const insertMovie = movie =>
({ type: INSERT_MOVIE, curry: insert(movie), });

const updateMovies = movies =>
 ({ type: UPDATE_MOVIES, curry: update(movies), });

const updateMovie = movie =>
 ({ type: EDIT_MOVIE, curry: edit(movie), });

const movieRequestSucess = () =>
  ({ type: MOVIE_REQUEST_SUCCESS, curry: success, });

const movieRequestFailure = err =>
  ({ type: MOVIE_REQUEST_FAILURE, curry: failure, });

const removeMovie = ({ id, }) =>
 ({ type:  DELETE_MOVIE, curry: remove({ id, }), });

export const getMovies = () => (dispatch) => {
  dispatch({ type: MOVIE_REQUEST_PENDING, curry: pending, });
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
