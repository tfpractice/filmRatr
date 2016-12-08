import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { reset, } from 'redux-form';
import SearchForm from './form';
import { SearchActions, } from '../../actions';

const resetForm = name => (action, dispatch) => dispatch(reset(name));
const mapStateToProps = ({ search: { results, query, }, }) =>
  ({ results, query, });

const mapDispatchToProps = (dispatch) =>
  ({ actions: bindActionCreators(SearchActions, dispatch), });

const SearchResults = ({ results, query, actions, }) => {
  console.log(actions)

  return(
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
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
