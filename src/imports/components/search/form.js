import React from 'react';
import Button from 'material-ui/Button';
import { Field, } from 'redux-form';
import { FormGroup, } from 'material-ui/Form';
import { connect, } from 'react-redux';
import { ClearForm, renderText, } from 'imports/utils';

const SearchForm = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit} >
    <FormGroup row>
      <Field label="title" name="title" component={renderText} />
      <Button accent type="submit"> Searchable</Button>
    </FormGroup>
  </form>
);

export default connect()(ClearForm(SearchForm));
