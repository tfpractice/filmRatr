import axios from 'axios';
import { StateUtils, } from 'imports/utils';
import { DELETE_REVIEW, EDIT_REVIEW, INSERT_REVIEW, REVIEW_URL, UPDATE_REVIEWS, } from './constants';
const { arrayUtils: { editByID, removeByID, merge, }, } = StateUtils;
const { dedupe: { getFirst, unaryMap, diff, keySet, }, } = StateUtils;
const { requestUtils: { requestCreators, getData, }, } = StateUtils;

const reviewRequestPending = requestCreators('REVIEW_REQUEST').pending;
const reviewRequestFailure = requestCreators('REVIEW_REQUEST').failure;
const reviewRequestSuccess = requestCreators('REVIEW_REQUEST').success;

const requestReview = id => axios.get(`${REVIEW_URL}/${id}`);

const updateReview = review =>
  ({ type: EDIT_REVIEW, curry: editByID(review), });

const removeReview = ({ id, }) =>
  ({ type:  DELETE_REVIEW, curry: removeByID({ id, }), });

export const mergeReviews = (...reviews) =>
({ type: UPDATE_REVIEWS, curry: merge(...reviews), });

export const getReviews = () => (dispatch) => {
  dispatch(reviewRequestPending());
  return axios.get(`${REVIEW_URL}/`)
    .then(({ data: { reviews, }, }) =>
     [ reviewRequestSuccess(),
       mergeReviews(...reviews),
     ].map(dispatch))
    .catch(reviewRequestFailure);
};

const reviewSelector = ({ reviews, }) => reviews;
const flatten = a => b => [ ...a, ...b, ];
const rflat = (a, b) => flatten(a)(b);
const reduceFlatten = a => a.reduce(rflat);

export const getMultipleReviews = (...ids) => (dispatch, getState) =>
  Promise.resolve(reviewRequestPending(ids))
    .then(dispatch)
    .then(() =>
      axios.all(ids.map(requestReview))
        .then(unaryMap(getData))
        .then(unaryMap(reviewSelector))
        .then(getFirst)
        .then(reviews =>
           Promise.all([ reviewRequestSuccess(ids), mergeReviews(...reviews), ])
             .then(unaryMap(dispatch))
             .then(() => reviews)))
    .catch(reviewRequestFailure);

// export const getMovieReviews = getMultipleReviews;

export const getReviewsFromParams = ({ movie_id, }) => getMultipleReviews(movie_id);

export const createReview = ({ id: movie_id, }) => dispatch => revProps =>
axios.post(`${REVIEW_URL}/${movie_id}`, revProps)
  .then(({ data: { review, }, }) =>
   dispatch(mergeReviews(review)))
  .catch(reviewRequestFailure);

export const editReview = ({ movie_id, id, }) => dispatch => revProps =>
 axios.patch(`${REVIEW_URL}/${movie_id}/${id}`, revProps)
   .then(({ data: { review, }, }) => dispatch(updateReview(review)))
   .catch(reviewRequestFailure);

export const deleteReview = ({ movie_id, id, }) => dispatch =>
  axios.delete(`${REVIEW_URL}/${movie_id}/${id}`)
    .then(({ data: { review, }, }) => dispatch(removeReview(review)))
    .catch(reviewRequestFailure);

export const getMovieReviews = movie_id => (dispatch) => {
  dispatch(reviewRequestPending(movie_id));
  return requestReview(movie_id)
    .then(({ data: { reviews, }, }) =>
        [ reviewRequestSuccess(),
          mergeReviews(...reviews),
        ].map(dispatch))
    .catch(reviewRequestFailure);
};
