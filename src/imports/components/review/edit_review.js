import React from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { reset, } from 'redux-form';
import { ReviewActions, } from 'imports/actions';
import ReviewForm from './form_base';

const resetForm = name => (action, dispatch) => dispatch(reset(name));

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
