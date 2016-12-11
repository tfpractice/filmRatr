import axios from 'axios';
import { SEARCH_URL, UPDATE_SEARCH_RESULTS, } from './constants';

const update = newResults => results => newResults;
const updateResults = results =>
 ({ type: UPDATE_SEARCH_RESULTS, curry: update(results), });

const pending = query => state =>
 ({ ...state, status: 'pending', updatedAt: Date.now(), query, });

const success = message => state =>
 ({ ...state, status: 'suceeded', updatedAt: Date.now(), message, });

const failure = message => state =>
 ({ ...state, status: 'failed', updatedAt: Date.now(), message, });

const searchRequestPending = query =>
    ({ type: 'SEARCH_REQUEST_PENDING', curry: pending(query), });

const searchRequestSucess = () =>
    ({ type: 'SEARCH_REQUEST_SUCCESS', curry: success(), });

const searchRequestFailure = err =>
    ({ type: 'SEARCH_REQUEST_FAILURE', curry: failure(err.message), });

export const search = ({ query, }) => (dispatch) => {
  dispatch(searchRequestPending(query));
  return axios.get(SEARCH_URL, { params: { query, append_to_response: 'images', }, })
    .then(({ data: { results, }, }) =>
      dispatch(searchRequestSucess()) && dispatch(updateResults(results)))
    .catch(searchRequestFailure);
};
