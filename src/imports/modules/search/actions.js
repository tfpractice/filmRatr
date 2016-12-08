import axios from 'axios';
import { UPDATE_SEARCH_RESULTS, SEARCH_URL, } from './constants';
import { MovieUtils, } from '../../utils';

const { MOVIE_DB_SEARCH_URL: API_URL, } = MovieUtils;

const update = newResults => results => newResults;
const updateResults = results =>
 ({ type: UPDATE_SEARCH_RESULTS, curry: update(results), });

const pending = query => () =>
 ({ status: 'pending', updatedAt: Date.now(), message: query, });

const success = message => () =>
 ({ status: 'suceeded', updatedAt: Date.now(), message, });

const failure = message => () =>
 ({ status: 'failed', updatedAt: Date.now(), message, });

const searchRequestPending = query =>
    ({ type: 'SEARCH_REQUEST_PENDING', curry: pending(query), });

const searchRequestSucess = () =>
    ({ type: 'SEARCH_REQUEST_SUCCESS', curry: success, });

const searchRequestFailure = err =>
    ({ type: 'SEARCH_REQUEST_FAILURE', curry: failure(err.message), });

export const search = query => (dispatch) => {
  dispatch(searchRequestPending(query));
  return axios.get(SEARCH_URL, { params: { ...query, }, })
    .then(({ data: { results, }, }) =>
      dispatch(searchRequestSucess()) && dispatch(updateResults(results)))
    .catch(searchRequestFailure);
};
