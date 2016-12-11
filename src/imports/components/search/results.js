import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { reset, } from 'redux-form';
import { SearchActions, } from '../../actions';
import { MovieCard, } from '../movie';
import SearchForm from './form';
import FreeForm from './free_form';

const mapStateToProps = ({ search: { results, request: { query, }, }, }) =>
 ({ results, query, });

const mapDispatchToProps = dispatch =>
 ({ actions: bindActionCreators(SearchActions, dispatch), });

const SearchResults = ({ results, query, actions, }) => (
  <div className="search-list">
    <h1>{query ? `Showing Results for ${query}` : 'Enter Movie Title' }</h1>
    <FreeForm formID={'searchRouteForm'} />
    <div className="searchResults">
      {results.map(r => <MovieCard movie={r} />)}
    </div>
  </div>
 );

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
