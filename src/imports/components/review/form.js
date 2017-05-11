import React from 'react';
import ReviewForm from './form_base';
import { connect, } from 'react-redux';
import { resetForm, } from 'imports/utils';
import { ReviewActions, } from 'imports/actions';
import Text from 'material-ui/Typography';

const MovieReviewForm = ({ createReview, formID, movie, }) => (
  <ReviewForm form={formID} onSubmit={createReview(movie)} />
);

export default connect(null, ReviewActions)(MovieReviewForm);
