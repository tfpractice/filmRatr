import axios from 'axios';
import { MovieUtils, StateUtils, } from 'imports/utils';
import { API_URL, GET_MOVIE, GET_MOVIES, INSERT_MOVIE, SET_CURRENT_MOVIE, } from './constants';
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
const dedupeMovieIDs = getState => ids =>
  diff(keySet(getData(getState().movies)))(ids);

export const setCurrentMovie = (movie, ...rest) =>
  ({ type: SET_CURRENT_MOVIE, curry: set(movie), });

export const insertMovies = (...movies) =>
   ({ type: INSERT_MOVIE, curry: merge(...movies), });

export const getMovies = (...ids) => (dispatch, getState, ...args) => {
  // console.log('**************getMovies ,ids)**************');
  // console.log('==============getMovies ,ids)==============', ids);
  const x = null;

  console.log('==============dedupeMovieIDs(getState)(ids)==============',
   dedupeMovieIDs(getState)(ids));

  return Promise.resolve(dedupeMovieIDs(getState)(ids))
    .then(distinctIDs =>
      Promise.all(distinctIDs.map(movieRequestPending).map(dispatch))
        .then(() =>
          axios.all(distinctIDs.map(requestMovieByID))
            .then(unaryMap(getData))
            .then((movies) => {
              console.log('==============should not run==============', distinctIDs, movies);

              return Promise.all([
                movieRequestSuccess(distinctIDs),
                insertMovies(...movies),
                getMovieReviews(...distinctIDs),
              ].map(dispatch))
                .then(() => movies);
            })))
    .catch(e => dispatch(movieRequestFailure(e)));
};

export const setMovieFromParams = ({ movie_id, }) => (dispatch, getState) => {
  // console.log('==============setMovieFromParams ,movie_id==============');
  const x = null;

  return (dispatch(getMovies(movie_id)))

    // .then(dispatch)

    // .then(movies => (((movies))))
    .then(getFirst)
    .then(setCurrentMovie)
    .then(dispatch)

// z67
    // .then((value) => {
    //   console.log('==============setMovieFromParams ,value==============', value);
    //
    //   console.log('==============setMovieFromParams , getState().reviews.data.length==============', getState().reviews.data.length);
    //
    //   return dispatch(getMovies(movie_id));
    // })
    .catch(movieRequestFailure);
};

export const getTopFive = () => dispatch =>
  axios.get(`${API_URL}/reviews/top`)
    .then(({ data: { topFive, }, }) => dispatch(getMovies(...topFive)))
    .catch(movieRequestFailure);
