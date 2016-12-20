import axios from 'axios';
import { MovieUtils, StateUtils, } from 'imports/utils';
import { API_URL, INSERT_MOVIE, SET_CURRENT_MOVIE, } from './constants';
import { getMovieReviews, } from '../reviews/actions';
const { getMovieUrl, } = MovieUtils;

const { arrayUtils: { merge, }, } = StateUtils;
const { dedupe: { getFirst, unaryMap, diff, keySet, }, } = StateUtils;
const { requestUtils: { requestCreators, getData, }, } = StateUtils;

const movieRequestPending = requestCreators('MOVIE_REQUEST').pending;
const movieRequestFailure = requestCreators('MOVIE_REQUEST').failure;
const movieRequestSuccess = requestCreators('MOVIE_REQUEST').success;

const set = newMovie => movie => newMovie;
const requestMovieByID = id => axios.get(getMovieUrl(id));
const dedupeMovieIDs = getState => (...ids) =>
  diff(keySet(getData(getState().movies)))(ids);

export const setCurrentMovie = movie =>
  ({ type: SET_CURRENT_MOVIE, curry: set(movie), });

export const insertMovies = (...movies) =>
   ({ type: INSERT_MOVIE, curry: merge(...movies), });

export const getMovies = (...ids) => (dispatch, getState) =>
   Promise.resolve(dedupeMovieIDs(getState)(...ids))
     .then(distinctIDs =>
      Promise.all(distinctIDs.map(movieRequestPending).map(dispatch))
        .then(() =>
          axios.all(distinctIDs.map(requestMovieByID))
            .then(unaryMap(getData))
            .then(movies =>
              Promise.all([
                movieRequestSuccess(distinctIDs),
                insertMovies(...movies),
                getMovieReviews(...distinctIDs),
              ].map(dispatch))
                .then(() => movies))))
     .catch(e => dispatch(movieRequestFailure(e)));

export const setMovieFromParams = ({ movie_id, }) => (dispatch, getState) =>
  dispatch(getMovies(movie_id))
    .then(getFirst)
    .then(setCurrentMovie)
    .then(dispatch)
    .catch(movieRequestFailure);

export const getTopFive = () => dispatch =>
  axios.get(`${API_URL}/reviews/top`)
    .then(getData)
    .then(({ topFive, }) => dispatch(getMovies(...topFive)))
    .catch(e => dispatch(movieRequestFailure(e)));
