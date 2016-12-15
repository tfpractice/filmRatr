import React from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { SearchActions, } from 'imports/actions';
import { MovieCard, } from '../movie';

const MovieList = ({ movies, actions, }) => {
  console.log(movies);
  return (
    <div className="movie-list">
      <h1>Showing Movies</h1>
      <div className="movie-cards" />
    </div>
  );
};

export default connect()(MovieList);
