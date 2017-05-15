import React from 'react';
import { connect, } from 'react-redux';
import { withRouter, } from 'react-router';
import { formValueSelector, } from 'redux-form';
import { ClearForm, renderText, resetForm, } from 'imports/utils';
import { SearchActions, } from '../../actions';
import SearchForm from './form';

//

// const mapStateToProps = (state, { formID, }) =>
//    ({ query: formValueSelector(formID)(state, 'query'), });

const IndependentForm = ({ formID, search, history, ...props }) => {
  // console.log('IndependentForm props', props);
  // console.log('history', history);
  const b = 0;

  // query, search, router,

  return (
    <SearchForm
      form={formID} onSubmit={(q, ...args) => {
        console.log('args', q, args);

        search(q).then((r) => {
          console.log('promise res', r);
          console.log('q.query', q.query);
          history.push(`search/${q.query}`);
          return r;
        });
      }}
    />);
};

export default connect(null, SearchActions)(withRouter((IndependentForm)));
