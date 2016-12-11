import React, { PropTypes, } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Field, reduxForm, } from 'redux-form';
import { connect, } from 'react-redux';
import { TextField, } from 'redux-form-material-ui';

const SearchForm = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit} >
    <Field name="query" component={TextField} hintText="Movie Title" id="query" type="text" />
    <FlatButton label="Submit" primary type="submit" />
  </form>
  );

export default connect()(reduxForm()(SearchForm));
