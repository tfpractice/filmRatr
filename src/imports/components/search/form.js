import React from 'react';
import Button from 'material-ui/Button';
import { Field } from 'redux-form';
import { FormGroup } from 'material-ui/Form';

import { ClearForm, renderText } from 'imports/utils';

const SearchForm = ({ handleSubmit }) =>
  (<form onSubmit={handleSubmit}>
    <Field label="title" name="title" component={renderText} />
    <Button color="accent" type="submit" children="Search" />
  </form>);

export default ClearForm(SearchForm);
