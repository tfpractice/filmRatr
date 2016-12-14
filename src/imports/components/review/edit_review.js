import React from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { ReviewActions, } from 'imports/actions';
import { resetForm, } from 'imports/utils';
import ReviewForm from './form_base';

const mapStateToProps = (state, { review, }) =>
  ({ formID: `editReview_${review.id}`, });

const mapDispatchToProps = dispatch =>
  ({ editReview: bindActionCreators(ReviewActions.editReview, dispatch), });

const EditReviewForm = ({ editReview, formID, review, }) => (
  <ReviewForm
    form={formID}
    initialValues={review}
    onSubmit={editReview(review)}
    onSubmitSuccess={resetForm(formID)}
  />);

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm);
