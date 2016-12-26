import React from 'react';
import { connect, } from 'react-redux';
import { withRouter, } from 'react-router';
import { resetForm, } from 'imports/utils';
import { Field, formValueSelector, reduxForm, } from 'redux-form';

import { SearchActions, } from '../../actions';
import SearchForm from './form';

const mapStateToProps = (state, { formID, }) =>
   ({ query: formValueSelector(formID)(state, 'query'), });

const IndependentForm = ({ query, search, formID, dispatch, router, }) => (
  <SearchForm
    form={formID}
    onSubmit={search}
    onSubmitSuccess={(action, dispatch) => {
      dispatch(resetForm(formID));
      console.log(typeof query, `search?${query}`);

      router.replace(`/search/${query}`);

      // router.push({ pathname: 'search?', query, });
    }}

  />);

export default connect(mapStateToProps, SearchActions)(withRouter(IndependentForm));
