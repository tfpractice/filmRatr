import React from 'react';
import Button from 'material-ui/Button';
import { Field, reduxForm, } from 'redux-form';
import { connect, } from 'react-redux';
import { TextField, } from 'redux-form-material-ui';

const SearchForm = ({ handleSubmit, }, context) => (
  <form onSubmit={handleSubmit} >
    <Field name="query" component={TextField} hintText="Title" />
    <Button primary label="Submit" type="submit" />
  </form>
  );

export default connect()(reduxForm()(SearchForm));
