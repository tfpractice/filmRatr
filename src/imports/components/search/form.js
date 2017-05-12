import React from 'react';
import Button from 'material-ui/Button';
import { Field, reduxForm, } from 'redux-form';
import { connect, } from 'react-redux';
import { ClearForm, renderText, } from 'imports/utils';
import { FormGroup, } from 'material-ui/Form';

const SearchForm = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit} >
    <FormGroup row>
      <Field label="movie title" name="query" component={renderText} />
      <Button accent type="submit"> Searchable</Button>
    </FormGroup>
  </form>
  );

export default connect()(ClearForm(SearchForm));
