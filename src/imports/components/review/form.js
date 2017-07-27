import React from 'react';
import { connect } from 'react-redux';

import { resetForm } from 'imports/utils';
import { ReviewActions } from 'imports/actions';

import ReviewForm from './form_base';

const MovieReviewForm = ({ createReview, formID, movie }) =>
  <ReviewForm form={formID} onSubmit={createReview(movie)} />;

export default connect(null, ReviewActions)(MovieReviewForm);
