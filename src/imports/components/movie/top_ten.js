import React from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { MovieActions, } from 'imports/actions';
import { MovieCard, } from '../movie';
import MovieList from './list';

const mapStateToProps = (state, own) => {
  const movies = state.movies.data;

  // console.log('\n===================state.movies.data===================\n', movies);

  return { movies, };
};

const TopTen = ({ movies, actions, }) => (
  <MovieList movies={movies} />
  );

TopTen.fetchData = [ MovieActions.getTopFive, ];

export default connect(mapStateToProps)(TopTen);
