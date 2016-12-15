import axios from 'axios';
import { StateUtils, } from 'imports/utils';
import { DELETE_REVIEW, EDIT_REVIEW, INSERT_REVIEW, REVIEW_URL, UPDATE_REVIEWS, } from './constants';
const { arrayUtils: { editByID, insert, removeByID, update, }, } = StateUtils;
const { requestUtils: { requestCreators, }, } = StateUtils;

const reviewRequestPending = requestCreators('REVIEW_REQUEST').pending;
const reviewRequestFailure = requestCreators('REVIEW_REQUEST').failure;
const reviewRequestSuccess = requestCreators('REVIEW_REQUEST').success;

//
// const pending = query => state =>
//  ({ ...state, status: 'pending', updatedAt: Date.now(), query, });
//
// const success = message => state =>
//  ({ ...state, status: 'suceeded', updatedAt: Date.now(), message, });
//
// const failure = message => state =>
//  ({ ...state, status: 'failed', updatedAt: Date.now(), message, });
//
// const reviewRequestPending = query =>
//   ({ type: 'REVIEW_REQUEST_PENDING', curry: pending(query), });
//
// const reviewRequestSuccess = () =>
//   ({ type: 'REVIEW_REQUEST_SUCCESS', curry: success(), });
//
// const reviewRequestFailure = err =>
//   ({ type: 'REVIEW_REQUEST_FAILURE', curry: failure(err.message), });

const insertReview = review =>
  ({ type: INSERT_REVIEW, curry: insert(review), });

const updateReviews = reviews =>
  ({ type: UPDATE_REVIEWS, curry: update(reviews), });

const updateReview = review =>
  ({ type: EDIT_REVIEW, curry: editByID(review), });

const removeReview = ({ id, }) =>
    ({ type:  DELETE_REVIEW, curry: removeByID({ id, }), });

export const getReviews = () => (dispatch) => {
  dispatch(reviewRequestPending());
  return axios.get(`${REVIEW_URL}/`)
    .then(({ data: { reviews, }, }) =>
      dispatch(reviewRequestSuccess()) && dispatch(updateReviews(reviews)))
    .catch(reviewRequestFailure);
};

export const getMovieReviews = movie_id => (dispatch) => {
  dispatch(reviewRequestPending(movie_id));
  return axios.get(`${REVIEW_URL}/${movie_id}`)
    .then(({ data: { reviews, }, }) =>
      dispatch(reviewRequestSuccess()) && dispatch(updateReviews(reviews)))
    .catch(reviewRequestFailure);
};

export const getReviewsFromParams = ({ movie_id, }) => getMovieReviews(movie_id);

export const createReview = ({ id: movie_id, }) => dispatch => revProps => axios.post(`${REVIEW_URL}/${movie_id}`, revProps)
  .then(({ data: { review, }, }) => {
    console.log('NEW REVIEW RECEIVED', review); return dispatch(insertReview(review));
  })
  .catch(err => console.error('there was an error in creation', err));

export const editReview = ({ movie_id, id, }) => dispatch => revProps =>
 axios.patch(`${REVIEW_URL}/${movie_id}/${id}`, revProps)
   .then(({ data: { review, }, }) => dispatch(updateReview(review)))
   .catch(err => console.error('there was an error in update', err));

export const deleteReview = ({ movie_id, id, }) => dispatch =>
  axios.delete(`${REVIEW_URL}/${movie_id}/${id}`)
    .then(({ data: { review, }, }) => dispatch(removeReview(review)))
    .catch(err => console.error('there was an error in delete', err));
