import React from 'react';
import qs from 'qs';
import { connect, } from 'react-redux';
import { withRouter, } from 'react-router';
import { SearchActions, } from '../../actions';
import SearchForm from './form';

const searchAndPush = history => query => results =>
  Promise.resolve(history.push({
    pathname: '/search',
    search: qs.stringify({ '': query, }, { encode: false, }),
  })).then(x => results);

const IndependentForm = ({ formID, search, history, ...props }, context) => {
  const b = 0;
  
  return (
    <SearchForm form={formID} onSubmit={ query => search(query)
    .then(searchAndPush(history)(query)) }

  />);
};

export default connect(null, SearchActions)(withRouter((IndependentForm)));
