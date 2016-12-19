import React from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { SearchActions, } from 'imports/actions';
import { MovieCard, } from '../movie';

const MovieList = ({ movies, actions, }) => (
  <div className="movie-list">
    <h1>Showing Movies</h1>
    <div className="movie-cards" />
    { movies.map(m => <MovieCard key={m.id} movie={m} />)}
  </div>
  );

export default connect()(MovieList);
