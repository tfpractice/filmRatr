import React from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { MovieActions, } from 'imports/actions';
import { MovieCard, } from '../movie';
import MovieList from './list';

const mapStateToProps = (state, own) => {
  const movies = state.movies.data;

  return { movies, };
};

const TopTen = ({ movies, actions, }) => (
  <MovieList movies={movies} />
 );

TopTen.fetchData = [ MovieActions.getTopFive, ];

export default connect(mapStateToProps)(TopTen);
