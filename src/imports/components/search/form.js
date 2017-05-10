import React from 'react';
import Button from 'material-ui/Button';
import { Field, reduxForm, } from 'redux-form';
import { connect, } from 'react-redux';
import { TextField, } from 'redux-form-material-ui';
import { ClearForm, renderText, } from 'imports/utils';

const SearchForm = ({ handleSubmit, }, context) => (
  <form onSubmit={handleSubmit} >
    <Field name="query" component={renderText} hintText="Title" />
    <Button primary label="Submit" type="submit" />
  </form>
  );

export default connect()(ClearForm(SearchForm));
