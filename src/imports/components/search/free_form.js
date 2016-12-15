import React from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { resetForm, } from 'imports/utils';
import SearchForm from './form';
import { SearchActions, } from '../../actions';

const mapDispatchToProps = dispatch =>
  ({ submitSearch: bindActionCreators(SearchActions.search, dispatch), });

const IndependentForm = ({ submitSearch, formID, }) => (
  <SearchForm
    form={formID}
    onSubmit={submitSearch}
    onSubmitSuccess={resetForm(formID)}
  />);

export default connect(() => ({}), mapDispatchToProps)(IndependentForm);
