import React from 'react';
import qs from 'qs';
import { connect, } from 'react-redux';
import { withRouter, } from 'react-router';
import { SearchActions, } from '../../actions';
import SearchForm from './form';

const IndependentForm = ({ formID, search, ...props }) => {
  const b = 0;
  
  return (
    <SearchForm form={formID} onSubmit={(q, ...args) => {
    console.log('args', q, args);

    search(q).then((r) => {
      console.log('promise res', r);
      console.log('q', q);
      console.log('qs.parse(`?[title]=${q.title}`)', qs.parse(`[title]=${q.title}`));

      history.push({ pathname: '/search', search: `[title]=${q.title}`, state: { query: q, }, });

      return r;
    });
  }}

  />);
};

export default connect(null, SearchActions)(withRouter((IndependentForm)));
