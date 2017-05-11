import React from 'react';
import { connect, } from 'react-redux';
import MovieList from './list';
import Grid from 'material-ui/Grid';
const mapStateToProps = ({ movies: { data, }, }, own) => ({ movies: data, });

const TopTen = ({ movies, }) => (
  <Grid container className="TopTen">
    <h3>Most Frequently rated Movies</h3>
    <MovieList movies={movies} />
  </Grid>
  );

export default connect(mapStateToProps)(TopTen);
