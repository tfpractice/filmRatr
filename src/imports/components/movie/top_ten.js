import React from 'react';
import { connect, } from 'react-redux';
import { MovieActions, } from 'imports/actions';
import MovieList from './list';

const mapStateToProps = ({ movies: { data, }, }, own) => ({ movies: data, });

const TopTen = ({ movies, actions, }) => (
  <div className="TopTen">
    <h3>Most Frequently rated Movies</h3>
    <MovieList movies={movies} />
  </div>
  );

TopTen.fetchData = [ MovieActions.getTopFive, ];

export default connect(mapStateToProps)(TopTen);
