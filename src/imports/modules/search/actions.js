import axios from 'axios';
import { StateUtils, } from 'imports/utils';
import { insertMovies, } from '../movies/actions';
import { getMovieReviews, } from '../reviews/actions';
import { SEARCH_URL, UPDATE_SEARCH_RESULTS, } from './constants';

const { requestUtils: { requestCreators, getData, }, } = StateUtils;
const { dedupe: { keySet, }, } = StateUtils;
const { arrayUtils: { merge, }, } = StateUtils;

const searchRequestPending = requestCreators('SEARCH_REQUEST').pending;
const searchRequestFailure = requestCreators('SEARCH_REQUEST').failure;
const searchRequestSuccess = requestCreators('SEARCH_REQUEST').success;

const tapResults = ({ results, }) => results;
const updateResults = (...results) =>
  ({ type: UPDATE_SEARCH_RESULTS, curry: merge(...results), });

export const search = ({ query, }) => dispatch =>
  Promise.resolve(dispatch(searchRequestPending(query)))
    .then(() =>
      axios.get(SEARCH_URL, { params: { query, append_to_response: 'images', }, })
        .then(getData)
        .then(tapResults)
        .then(results => Promise.all(
      [ searchRequestSuccess(query),
        updateResults(...results),
        insertMovies(...results),
        getMovieReviews(...keySet(results)), ].map(dispatch))
          .then(() => results)))
    .catch(e => dispatch(searchRequestFailure(e.message)))

;
