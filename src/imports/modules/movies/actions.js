import axios from 'axios';
import { MovieUtils, StateUtils, } from 'imports/utils';
import { API_URL, GET_MOVIE, GET_MOVIES, INSERT_MOVIE, SET_CURRENT_MOVIE, } from './constants';

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

const insertMovies = movies =>
({ type: INSERT_MOVIE, curry: insert(movies), });

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
    [ movieRequestSucess(),
      insertMovies(movie),
      setCurrentMovie(movie), ].map(dispatch)
    )
    .catch(movieRequestFailure);
};

export const getMovieFromParams = ({ movie_id, }) => getMovie(movie_id);

export const getMovies = (...ids) => (dispatch) => {
  dispatch({ type: 'MOVIE_REQUEST_PENDING', curry: pending, });
  return axios.all(ids.map(getMovieUrl).map(axios.get))

  // return axios.get(`${API_URL}/movies`)
    .then(axios.spread(({ data: { movies, }, }) =>
    [ movieRequestSucess(), insertMovies(movie),
    ].map(dispatch)))
    .catch(movieRequestFailure);
};

export const getTopFive = () => (dispatch) => {
  console.log('retriebeing top five');
  return axios.get(`${API_URL}/reviews/top`)

    // .then((r) => {
    .then(({ data: { topFive, }, }) => {
      console.log('======================reyrun db=============', topFive);

      // return dispatch(getMovies(...topFive));

      return topFive.map(getMovie).map(dispatch);

      // return Promise.all(movies.map(getMovie).map(dispatch))
      //   .then((r) => {
      //     console.log(' top five results ');
      //     console.log(r);
      //     return r;
      //   });
    }

      //  dispatch(movieRequestSucess()) && dispatch(insertMovies(movies))
    )
    .catch(movieRequestFailure);
};

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
