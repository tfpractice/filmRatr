import React from 'react';
import qs from 'qs';
import { connect, } from 'react-redux';
import { withRouter, } from 'react-router';
import { formValueSelector, } from 'redux-form';
import { ClearForm, renderText, resetForm, } from 'imports/utils';
import { SearchActions, } from '../../actions';
import SearchForm from './form';

//

// const mapStateToProps = (state, { formID, }) =>
//    ({ query: formValueSelector(formID)(state, 'query'), });

const IndependentForm = ({ formID, search, ...props }) => {
  console.log('IndependentForm props', props);
  const b = 0;
  
  // query, search, router,
  
  return (
    <SearchForm
  form={formID} onSubmit={(q, ...args) => {
    console.log('args', q, args);

    // console.log('q.query', q.query);

    search(q).then((r) => {
      console.log('promise res', r);
      console.log('q', q);
      console.log('qs.parse(`?[title]=${q.title}`)', qs.parse(`[title]=${q.title}`));

      history.push({ pathname: '/search', search: `[title]=${q.title}`, state: { query: q, }, });

      // history.push(`/search/${q.title}`);
      return r;
    });
  }}

  />);
};

export default connect(null, SearchActions)(withRouter((IndependentForm)));
