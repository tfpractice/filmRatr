import React from 'react';
import { connect, } from 'react-redux';
import { resetForm, } from 'imports/utils';
import { ReviewActions, } from 'imports/actions';
import ReviewForm from './form_base';

const EditReviewForm = ({ editReview, review, }) => (
  <ReviewForm
    form={`editReview_${review.id}`}
    review={review}
    enableReinitialize
    initialValues={review}
    onSubmit={editReview(review)}
    onSubmitSuccess={resetForm(`editReview_${review.id}`)}
  />
);

export default connect(null, ReviewActions)(EditReviewForm);
