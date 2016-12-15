import ReviewForm from './form_base';
import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { resetForm, } from 'imports/utils';
import { ReviewActions, } from 'imports/actions';


const mapDispatchToProps = dispatch =>
 ({ createReview: bindActionCreators(ReviewActions.createReview, dispatch), });

const MovieReviewForm = ({ createReview, formID, movie, }) => (
  <ReviewForm
    form={formID}
    onSubmit={createReview(movie)}
    onSubmitSuccess={resetForm(formID)}
  />);

export default connect(null, mapDispatchToProps)(MovieReviewForm);