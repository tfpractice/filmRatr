import React, { PropTypes, } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Field, reduxForm, } from 'redux-form';
import { connect, } from 'react-redux';
import { TextField, } from 'redux-form-material-ui';

const ReviewForm = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit} >
    <Field name="text" component={TextField} hintText="Movie Title" id="text" type="text" />
    <FlatButton label="Submit" primary type="submit" />
  </form>
  );

export default connect()(reduxForm()(ReviewForm));
