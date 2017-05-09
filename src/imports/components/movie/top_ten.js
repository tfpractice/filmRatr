import React from 'react';
import { connect, } from 'react-redux';
import MovieList from './list';

const mapStateToProps = ({ movies: { data, }, }, own) => ({ movies: data, });

const TopTen = ({ movies, }) => (
  <div className="TopTen">
    <h3>Most Frequently rated Movies</h3>
    <MovieList movies={movies} />
  </div>
  );

export default connect(mapStateToProps)(TopTen);
