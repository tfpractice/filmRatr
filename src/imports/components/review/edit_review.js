import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect, } from 'react-redux';
import { resetForm, } from 'imports/utils';
import { ReviewActions, } from 'imports/actions';
import ReviewForm from './form_base';

const formStyles = { display: 'flex', 'align-items': 'baseline', };

const EditReviewForm = ({ editReview, review, deleteReview, }) => (
  <div style={formStyles}>
    <ReviewForm
      form={`editReview_${review.id}`}
      review={review}
      oprop="oprop"
      initialValues={review}
      enableReinitialize
      onSubmit={editReview(review)}
      onSubmitSuccess={resetForm(`editReview_${review.id}`)}
    />
    <FlatButton secondary label="Delete" onClick={() => deleteReview(review)} />
  </div>);

export default connect(null, ReviewActions)(EditReviewForm);
