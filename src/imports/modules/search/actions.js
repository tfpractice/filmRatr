import axios from 'axios';
import { StateUtils, } from 'imports/utils';
import { insertMovies, } from '../movies/actions';
import { SEARCH_URL, UPDATE_SEARCH_RESULTS, } from './constants';

const { requestUtils: { requestCreators, }, } = StateUtils;
const { arrayUtils: { update, merge, }, } = StateUtils;

const searchRequestPending = requestCreators('SEARCH_REQUEST').pending;
const searchRequestFailure = requestCreators('SEARCH_REQUEST').failure;
const searchRequestSuccess = requestCreators('SEARCH_REQUEST').success;

const updateResults = (...results) =>
 ({ type: UPDATE_SEARCH_RESULTS, curry: merge(...results), });

export const search = ({ query, }) => (dispatch) => {
  dispatch(searchRequestPending(query));
  return axios.get(SEARCH_URL, { params: { query, append_to_response: 'images', }, })
    .then(({ data: { results, }, }) =>
    [ searchRequestSuccess(),
      updateResults(...results),
      insertMovies(...results), ].map(dispatch)
    )
    .catch(searchRequestFailure);
};
