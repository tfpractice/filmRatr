import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { reset, } from 'redux-form';
import SearchForm from './form';

const resetForm = name => (action, dispatch) => dispatch(reset(name));

const mapStateToProps = ({ search: { results, query, }, actions, }) =>
 ({ results, query, actions, });

const SearchResults = ({ results, query, actions, }) => (
  <div className="search-list">
    <h1>
      SearchResults
    </h1>
    <SearchForm
      form={'newSearchForm'}
      onSubmit={actions.search}
      onSubmitSuccess={resetForm('newSearchForm')}
    />
    {results.map(r=>
      <div>{r.toString()}</div>)}

  </div>
);

export default connect(mapStateToProps)(SearchResults);
