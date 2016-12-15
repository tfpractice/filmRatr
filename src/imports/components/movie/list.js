import React from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { SearchActions, } from 'imports/actions';
import { MovieCard, } from '../movie';
import FreeForm from './free_form';

const mapStateToProps = ({ search: { results, request: { query, }, }, }) =>
 ({ results, query, });

const mapDispatchToProps = dispatch =>
 ({ actions: bindActionCreators(SearchActions, dispatch), });

const MovieList = ({ movies, actions, }) => (
  <div className="movie-list">
    <h1>'Showing Movies'</h1>
    <div className="movie-cards">
      {movies.map(m => <MovieCard movie={m} />)}
    </div>
  </div>
 );

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
