import axios from 'axios';
import { StateUtils, } from 'imports/utils';
import { insertMovies, } from '../movies/actions';
import { getMovieReviews, } from '../reviews/actions';
import { SEARCH_URL, UPDATE_SEARCH_RESULTS, } from './constants';

const { requestUtils: { requestCreators, getData, }, } = StateUtils;
const { dedupe: { keySet, }, } = StateUtils;
const { arrayUtils: { merge, replace, }, } = StateUtils;

const searchRequestPending = requestCreators('SEARCH_REQUEST').pending;
const searchRequestFailure = requestCreators('SEARCH_REQUEST').failure;
const searchRequestSuccess = requestCreators('SEARCH_REQUEST').success;

const tapResults = ({ results, }) => results;
const updateResults = (...results) =>
  ({ type: UPDATE_SEARCH_RESULTS, curry: replace(results), });

export const search = ({ title: query, } = { title: 'matrix', }) => (dispatch) => {
  console.log('query', query);
  return Promise.resolve(dispatch(searchRequestPending(query)))
    .then(() =>
      axios.get(SEARCH_URL, { params: { query, append_to_response: 'images', }, })
        .then(getData)
        .then(tapResults)
        .then(r => console.log('SEARCH_URL res success\n', r.length, '\n') || r)
        .then(results => Promise.all(
          [ searchRequestSuccess(query),
            updateResults(...results),
            getMovieReviews(...keySet(results)), ].map(dispatch))
          .then(() => results)))
    .catch(e => dispatch(searchRequestFailure(e.message)));
};

// export const
