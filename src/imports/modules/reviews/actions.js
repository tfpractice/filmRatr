import axios from 'axios';
import { DELETE_REVIEW, EDIT_REVIEW, INSERT_REVIEW,
REVIEW_URL, UPDATE_REVIEWS, } from './constants';

const pending = query => state =>
 ({ ...state, status: 'pending', updatedAt: Date.now(), query, });

const success = message => state =>
 ({ ...state, status: 'suceeded', updatedAt: Date.now(), message, });

const failure = message => state =>
 ({ ...state, status: 'failed', updatedAt: Date.now(), message, });

const reviewRequestPending = query =>
  ({ type: 'REVIEW_REQUEST_PENDING', curry: pending(query), });

const reviewRequestSucess = () =>
  ({ type: 'REVIEW_REQUEST_SUCCESS', curry: success(), });

const reviewRequestFailure = err =>
  ({ type: 'REVIEW_REQUEST_FAILURE', curry: failure(err.message), });

const update = newReviews => reviews => newReviews;
const insert = review => reviews => reviews.concat(review);
const remove = ({ id, }) => reviews => reviews.filter(t => t.id !== id);
const edit = review => reviews =>
reviews.map(t => t.id === review.id ? { ...t, ...review, } : t);

const insertReview = review =>
  ({ type: INSERT_REVIEW, curry: insert(review), });

const updateReviews = reviews =>
  ({ type: UPDATE_REVIEWS, curry: update(reviews), });

const updateReview = review =>
  ({ type: EDIT_REVIEW, curry: edit(review), });
const removeReview = ({ id, }) =>
    ({ type:  DELETE_REVIEW, curry: remove({ id, }), });

export const getReviews = () => (dispatch) => {
  dispatch(reviewRequestPending());
  return axios.get(`${REVIEW_URL}/`)
    .then(({ data: { results, }, }) =>
      dispatch(reviewRequestSucess()) && dispatch(updateReviews(results)))
    .catch(reviewRequestFailure);
};

export const getMovieReviews = movieID => (dispatch) => {
  dispatch(reviewRequestPending(movieID));
  return axios.get(`${REVIEW_URL}/${movieID}`)
    .then(({ data: { results, }, }) =>
      dispatch(reviewRequestSucess()) && dispatch(updateResults(results)))
    .catch(reviewRequestFailure);
};

export const createReview = ({ id: movie_id, }) => dispatch => (reviewProps) => {
  console.log('========reviewsprops======', reviewProps);
  return axios.post(`${REVIEW_URL}/${movie_id}`, reviewProps)
    .then(({ data: { review, }, }) => {
      console.log('NEW REVIEW RECEIVED', review); return dispatch(insertReview(review));
    })
    .catch(err => console.error('there was an error in creation', err));
};

export const editReview = ({ movie_id, id, }) => dispatch => reviewProps =>
 axios.patch(`${REVIEW_URL}/${movie_id}/${id}`, reviewProps)
   .then(({ data: { review, }, }) => dispatch(updateReview(review)))
   .catch(err => console.error('there was an error in update', err));

export const deleteReview = ({ movie_id, id, }) => dispatch =>
  axios.delete(`${REVIEW_URL}/${movie_id}/${id}`)
    .then(({ data: { review, }, }) => dispatch(removeReview(review)))
    .catch(err => console.error('there was an error in delete', err));
