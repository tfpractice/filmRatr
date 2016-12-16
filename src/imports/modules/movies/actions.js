import axios from 'axios';
import { MovieUtils, StateUtils, } from 'imports/utils';
import { API_URL, GET_MOVIE, GET_MOVIES, INSERT_MOVIE, SET_CURRENT_MOVIE, } from './constants';
import { getMovieReviews, } from '../reviews/actions';
const { getMovieUrl, } = MovieUtils;
const { arrayUtils: { editByID, insert, removeByID, update, }, } = StateUtils;
const { requestUtils: { requestCreators, }, } = StateUtils;

const movieRequestPending = requestCreators('MOVIE_REQUEST').pending;
const movieRequestFailure = requestCreators('MOVIE_REQUEST').failure;
const movieRequestSuccess = requestCreators('MOVIE_REQUEST').success;

const set = newMovie => movie => newMovie;

export const setCurrentMovie = movie =>
  ({ type: SET_CURRENT_MOVIE, curry: set(movie), });

export const insertMovies = movies =>
 ({ type: INSERT_MOVIE, curry: insert(movies), });

export const updateMovies = movies =>
 ({ type: UPDATE_MOVIES, curry: update(movies), });

export const getMovie = id => (dispatch, getState) => {
  console.log('getting movie');
  dispatch(movieRequestPending(id));
  return axios.get(getMovieUrl(id))
    .then(({ data: movie, }) => {
      [ movieRequestSuccess(),
        insertMovies(movie),
        getMovieReviews(movie.id), ].map(dispatch);
      return movie;
    })
    .catch(movieRequestFailure);
};

export const getMovieFromParams = ({ movie_id, }) => getMovie(movie_id);

export const setMovieFromParams = ({ movie_id, }) => (dispatch) => {
  dispatch(movieRequestPending(movie_id));
  return axios.get(getMovieUrl(movie_id))
    .then(({ data: movie, }) => {
      dispatch(getMovie(movie_id)).then((movie) => {
        console.log('===========retrieved movie return val===========', movie.title);
        dispatch(setCurrentMovie(movie));
      });
      dispatch(setCurrentMovie(movie));
    })
    .catch(movieRequestFailure);
};

export const getMovies = (...ids) => (dispatch) => {
  dispatch(movieRequestPending(ids));
  return axios.all(ids.map(getMovieUrl).map(axios.get))
    .then(axios.spread(({ data: { movies, }, }) =>
     [ movieRequestSuccess(), insertMovies(movie), getMovieReviews(movie.id),
     ].map(dispatch)))
    .catch(movieRequestFailure);
};

export const getTopFive = () => dispatch =>
axios.get(`${API_URL}/reviews/top`)
  .then(({ data: { topFive, }, }) =>
     Promise.all(topFive.map(id => getMovie(id)(dispatch))))
  .catch(movieRequestFailure);
