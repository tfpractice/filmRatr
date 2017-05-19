import React from 'react';
import { connect, } from 'react-redux';
import { ReviewActions, } from 'imports/actions';
import ReviewForm from './form_base';

const EditReviewForm = ({ editReview, review, }) => (
  <ReviewForm
  form={`editReview_${review.id}`}
  review={review}
  initialValues={review}
  onSubmit={editReview(review)}
  />
);

export default connect(null, ReviewActions)(EditReviewForm);
