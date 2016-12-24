import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect, } from 'react-redux';
import { Slider, TextField, } from 'redux-form-material-ui';
import { Field, reduxForm, } from 'redux-form';
import { ReviewActions, } from 'imports/actions';

const renderDelete = handler => rev =>
  rev && <FlatButton secondary label="Delete" onClick={() => handler(rev)} />;

const ReviewForm = ({ review, handleSubmit, deleteReview, }) => (
  <form onSubmit={handleSubmit} >
    <Field
      format={null}
      name="rating"
      type="input"
      component={Slider} min={1} max={5} step={1}
    />
    <Field name="text" component={TextField} hintText="content" />
    <FlatButton primary label="Submit" type="submit" />
    {renderDelete(deleteReview)(review) }
  </form>
  );

export default connect(null, ReviewActions)(reduxForm()(ReviewForm));
