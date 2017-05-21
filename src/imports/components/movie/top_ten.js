import React from 'react';
import { connect, } from 'react-redux';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import MovieList from './list';

const mapStateToProps = ({ movies: { data, }, }, own) =>
  ({ movies: data, });

const TopTen = ({ movies, }) => (
  <Grid container className="TopTen">
    <Grid item>
      <Text type="display1">Most Frequently Viewed Movies</Text>
    </Grid>
    <MovieList movies={movies} />
  </Grid>
);

export default connect(mapStateToProps)(TopTen);
