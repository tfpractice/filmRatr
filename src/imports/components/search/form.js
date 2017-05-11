import React from 'react';
import Button from 'material-ui/Button';
import { Field, reduxForm, } from 'redux-form';
import { connect, } from 'react-redux';
import { TextField, } from 'redux-form-material-ui';
import { ClearForm, renderText, } from 'imports/utils';

const SearchForm = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit} >
    <Field name="query" component={renderText} />
    <Button primary type="submit" > REALLY REALLY!!! HOT</Button>
  </form>
  );

export default connect()(ClearForm(SearchForm));
