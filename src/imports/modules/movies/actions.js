import axios from 'axios';
import { MovieUtils, StateUtils, } from 'imports/utils';
import { API_URL, GET_MOVIE, GET_MOVIES, INSERT_MOVIE, SET_CURRENT_MOVIE, } from './constants';
import { getMovieReviews, } from '../reviews/actions';
const { getMovieUrl, } = MovieUtils;
const { arrayUtils: { merge, }, } = StateUtils;
const { dedupe: { getFirst, unaryMap, }, } = StateUtils;
const { requestUtils: { requestCreators, getResponseData, }, } = StateUtils;

const movieRequestPending = requestCreators('MOVIE_REQUEST').pending;
const movieRequestFailure = requestCreators('MOVIE_REQUEST').failure;
const movieRequestSuccess = requestCreators('MOVIE_REQUEST').success;

const set = newMovie => movie => newMovie;
const requestMovieByID = id => axios.get(getMovieUrl(id));

export const setCurrentMovie = (movie, ...rest) =>
  ({ type: SET_CURRENT_MOVIE, curry: set(movie), });

export const insertMovies = (...movies) =>
   ({ type: INSERT_MOVIE, curry: merge(...movies), });

export const getMovies = (...ids) => dispatch =>
 axios.all(ids.map(requestMovieByID))
   .then(unaryMap(getResponseData))
   .then(movies =>
     Promise.all([
       movieRequestSuccess(ids),
       insertMovies(...movies),
       ...ids.map(getMovieReviews),
     ]).then(unaryMap(dispatch))
       .then(() => movies))
   .catch(movieRequestFailure);

export const setMovieFromParams = ({ movie_id, }) => dispatch =>
       dispatch(getMovies(movie_id))
         .then(getFirst)
         .then(setCurrentMovie)
         .then(dispatch)
         .catch(movieRequestFailure);

export const getTopFive = () => dispatch =>
  axios.get(`${API_URL}/reviews/top`)
    .then(({ data: { topFive, }, }) => dispatch(getMovies(...topFive)))
    .catch(movieRequestFailure);
