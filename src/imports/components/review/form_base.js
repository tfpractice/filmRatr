import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect, } from 'react-redux';
import { TextField, } from 'redux-form-material-ui';
import { Field, reduxForm, } from 'redux-form';
import { ReviewActions, } from 'imports/actions';

const renderDelete = handler => rev =>
  rev && <FlatButton secondary label="Delete" onClick={() => handler(rev)} />;

const ReviewForm = ({ review, handleSubmit, deleteReview, }) => (
  <form onSubmit={handleSubmit} >
    <Field name="text" component={TextField} hintText="content" />
    <FlatButton primary label="Submit" type="submit" />
    {renderDelete(deleteReview)(review) }
  </form>
  );

export default connect(null, ReviewActions)(reduxForm()(ReviewForm));
