import axios from 'axios';
import * as constants from './constants';
// const { API_URL, UPDATE_MOVIES, EDIT_MOVIE, INSERT_MOVIE, DELETE_MOVIE, } = constants;
// const { MOVIE_REQUEST_PENDING, MOVIE_REQUEST_SUCCESS, MOVIE_REQUEST_FAILURE, } = constants;

import { MovieUtils, asyncActions, } from '../../utils'
const { MOVIE_DB_SEARCH_URL as API_URL, } = constants;

const pending = () => () =>
 ({ status: 'pending', updatedAt: Date.now(), message: null, });

const success = message => () =>
 ({ status: 'suceeded', updatedAt: Date.now(), message, });

const failure = message => () =>
 ({ status: 'failed', updatedAt: Date.now(), message, });

 const update = newMovies => movies => newMovies;
 const updateResults = results =>
  ({ type: UPDATE_SEARCH_RESULTS, curry: update(results), });


  const searchRequestSucess = () =>
    ({ type: 'SEARCH_REQUEST_SUCCESS', curry: success, });

  const searchRequestFailure = err =>
    ({ type: 'SEARCH_REQUEST_FAILURE', curry: failure, });

    export const searchMovies = (query) => (dispatch) => {
      dispatch({ type: SEARCH_REQUEST_PENDING, curry: pending, });
      return axios.get(`${API_URL}/`, {query})
        .then(({ data: { movies, }, }) =>
          dispatch(movieRequestSucess()) && dispatch(updateMovies(movies)))
        .catch(movieRequestFailure);
    };
