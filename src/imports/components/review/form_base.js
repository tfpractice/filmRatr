import React from 'react';
import Button from 'material-ui/Button';
import { connect, } from 'react-redux';
import { Slider, TextField, } from 'redux-form-material-ui';
import { Field, reduxForm, } from 'redux-form';
import { ReviewActions, } from 'imports/actions';

const renderDelete = handler => rev =>
  rev && <Button secondary label="Delete" onClick={() => handler(rev)} />;

const ReviewForm = ({ review, handleSubmit, deleteReview, }) => (
  <form onSubmit={handleSubmit} >
    <Field
      format={null}
      name="rating"
      component={Slider} min={1} max={5} step={1}
    />
    <Field name="text" component={TextField} hintText="content" />
    <Button primary label="Submit" type="submit" />
    {renderDelete(deleteReview)(review) }
  </form>
  );

// onSubmitSuccess={resetForm('nodeCount')}
export default connect(null, ReviewActions)(reduxForm()(ReviewForm));
