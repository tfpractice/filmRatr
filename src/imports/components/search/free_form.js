import React from 'react';
import { connect, } from 'react-redux';
import { withRouter, } from 'react-router';
import { formValueSelector, } from 'redux-form';
import { resetForm, } from 'imports/utils';
import { SearchActions, } from '../../actions';
import SearchForm from './form';

const mapStateToProps = (state, { formID, }) =>
   ({ query: formValueSelector(formID)(state, 'query'), });

const IndependentForm = ({ query, search, formID, router, }) => (
  <SearchForm
    form={formID}
    onSubmit={search}
    onSubmitSuccess={(action, dispatch) => {
      dispatch(resetForm(formID));
      router.replace(`/search/${query}`);
    }}

  />);

export default connect(mapStateToProps, SearchActions)(withRouter(IndependentForm));
