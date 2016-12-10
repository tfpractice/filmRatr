import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { reset, } from 'redux-form';
import SearchForm from './form';
import SearchResult from './result';
import { SearchActions, } from '../../actions';

const resetForm = name => (action, dispatch) => dispatch(reset(name));
const mapStateToProps = ({ search: { results, query, }, }) =>
  ({ results, query, });

const mapDispatchToProps = dispatch =>
  ({ actions: bindActionCreators(SearchActions, dispatch), });

const SearchResults = ({ results, query, actions, }) => {
  console.log('============actions============', actions);
  console.log('============results============', results);

  return (
    <div className="search-list">
      <h1>
        SearchResults
      </h1>
      <SearchForm
        form={'newSearchForm'}
        onSubmit={actions.search}
        onSubmitSuccess={resetForm('newSearchForm')}
      />

      <div className="mysearch">
        {results.map((r) => {
          console.log('============r============', r);

          console.log('result', r);
          return (<div><p>div return</p> {r.toString()}</div>);
        })}
      </div>
      {results.map(r => <div><SearchResult movie={r} /></div>)}

    </div>
  );
};

// {results.map(r => <div><SearchResult movie={r} /></div>)}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
