import React from 'react';
import Button from 'material-ui/Button';
import { connect, } from 'react-redux';
import { Field, reduxForm, } from 'redux-form';
import { ReviewActions, } from 'imports/actions';
import { ClearForm, renderText, } from 'imports/utils';

const renderDelete = handler => rev =>
  rev && <Button secondary onClick={() => handler(rev)} >Delete</Button>;

const ReviewForm = ({ review, handleSubmit, deleteReview, }) => (
  <form onSubmit={handleSubmit} >
    <Field
      name="rating"
      label="rating"
      type="range"
      component="input" min={1} max={5} step={1}
    />
    <Field name="text" label="content" component={renderText} />
    <Button primary type="submit" > Submit Review </Button>
    {renderDelete(deleteReview)(review) }
  </form>
  );

export default connect(null, ReviewActions)(ClearForm(ReviewForm));
