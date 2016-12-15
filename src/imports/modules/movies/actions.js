import axios from 'axios';
import { MovieUtils, StateUtils, } from 'imports/utils';
import { API_URL, GET_MOVIE, GET_MOVIES, INSERT_MOVIE, SET_CURRENT_MOVIE, } from './constants';

const { getMovieUrl, } = MovieUtils;
const { arrayUtils: { editByID, insert, removeByID, update, }, } = StateUtils;
const { requestUtils: { requestCreators, }, } = StateUtils;

const movieRequestPending = requestCreators('MOVIE_REQUEST').pending;
const movieRequestFailure = requestCreators('MOVIE_REQUEST').failure;
const movieRequestSuccess = requestCreators('MOVIE_REQUEST').success;

const set = newMovie => movie => newMovie;

const setCurrentMovie = movie =>
  ({ type: SET_CURRENT_MOVIE, curry: set(movie), });

const insertMovies = movies =>
 ({ type: INSERT_MOVIE, curry: insert(movies), });

const updateMovies = movies =>
 ({ type: UPDATE_MOVIES, curry: update(movies), });

const updateMovie = movie =>
 ({ type: EDIT_MOVIE, curry: editByID(movie), });

const removeMovie = ({ id, }) =>
 ({ type:  DELETE_MOVIE, curry: removeByID({ id, }), });

export const getMovie = id => (dispatch, getState) => {
  console.log('getting movie');
  dispatch(movieRequestPending(id));
  return axios.get(getMovieUrl(id))
    .then(({ data: movie, }) => {
      console.log('\n===================setCurrentMovie===================\n', movie.title);

      [ movieRequestSuccess(),
        insertMovies(movie),
        setCurrentMovie(movie), ].map(dispatch);

      // [ movieRequestSuccess(),
      //   insertMovies(movie),
      // ].map(dispatch)
    })
    .catch(movieRequestFailure);
};

export const getMovieFromParams = ({ movie_id, }) => getMovie(movie_id);

export const setMovieFromParams = ({ movie_id, }) => (dispatch) => {
  dispatch(movieRequestPending(movie_id));
  return axios.get(getMovieUrl(movie_id))
    .then(({ data: movie, }) => dispatch(setCurrentMovie(movie)))
    .catch(movieRequestFailure);
};

export const getMovies = (...ids) => (dispatch) => {
  dispatch({ type: 'MOVIE_REQUEST_PENDING', curry: pending, });
  return axios.all(ids.map(getMovieUrl).map(axios.get))
    .then(axios.spread(({ data: { movies, }, }) =>
     [ movieRequestSuccess(), insertMovies(movie),
     ].map(dispatch)))
    .catch(movieRequestFailure);
};

export const getTopFive = () => dispatch =>
axios.get(`${API_URL}/reviews/top`)
  .then(({ data: { topFive, }, }) =>
     Promise.all(topFive.map(id => getMovie(id)(dispatch))))
  .catch(movieRequestFailure);

export const createMovie = movieProps => dispatch =>
axios.post(`${API_URL}/movies`, movieProps)
  .then(({ data: { movie, }, }) => dispatch(insertMovies(movie)))
  .catch(err => console.error('there was an error in creation', err));

export const editMovie = ({ id, }) => dispatch => movieProps =>
 axios.patch(`${API_URL}/movies/${id}`, movieProps)
   .then(({ data: { movie, }, }) => dispatch(updateMovie(movie)))
   .catch(err => console.error('there was an error in update', err));

export const deleteMovie = ({ id, }) => dispatch =>
  axios.delete(`${API_URL}/movies/${id}`)
    .then(({ data: { movie, }, }) => dispatch(removeMovie(movie)))
    .catch(err => console.error('there was an error in delete', err));
