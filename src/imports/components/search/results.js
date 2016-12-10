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
     <div className="mysearch">
       {results.map(r => <div><SearchResult movie={r} /></div>)}

     </div>

   </div>
  );

 export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
