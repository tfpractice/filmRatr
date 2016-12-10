import React from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { reset, } from 'redux-form';
import SearchForm from './form';
import { SearchActions, } from '../../actions';

const resetForm = name => (action, dispatch) => dispatch(reset(name));

const mapDispatchToProps = dispatch =>
  ({ submitSearch: bindActionCreators(SearchActions.search, dispatch), });

const IndependentForm = ({ submitSearch, }) => (
  <SearchForm
    form={'IndependentSearchForm'}
    onSubmit={submitSearch}
    onSubmitSuccess={resetForm('IndependentSearchForm')}
  />);

export default connect(() => ({}), mapDispatchToProps)(IndependentForm);
