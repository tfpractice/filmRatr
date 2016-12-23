import React from 'react';
import { connect, } from 'react-redux';
import { resetForm, } from 'imports/utils';
import { SearchActions, } from '../../actions';
import SearchForm from './form';

const IndependentForm = ({ search, formID, }) => (
  <SearchForm
    form={formID}
    onSubmit={search}
    onSubmitSuccess={resetForm(formID)}
  />);

export default connect(() => ({}), SearchActions)(IndependentForm);
