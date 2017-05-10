import React from 'react';
import ReviewForm from './form_base';
import { connect, } from 'react-redux';
import { resetForm, } from 'imports/utils';
import { ReviewActions, } from 'imports/actions';

const MovieReviewForm = ({ createReview, formID, movie, }) => (
  <div>
    <p>{`Create Review for ${movie.title}`} </p>
    <ReviewForm
      form={formID}
      enableReinitialize
      onSubmit={createReview(movie)}
    />
  </div>);

export default connect(null, ReviewActions)(MovieReviewForm);
