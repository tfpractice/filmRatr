import React from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import MovieList from './list';

const mapStateToProps = ({ movies: { data }}) => ({ movies: data });

const TopTen = ({ movies }) =>
  (<Grid container justify="center" align="center" className="TopTen">
    <Grid item xs={11}>
      <Text align="center" type="display1">
        Most Frequently Viewed Movies
      </Text>
    </Grid>
    <Grid item xs={11}>
      <MovieList movies={movies} />
    </Grid>
  </Grid>);

export default connect(mapStateToProps)(TopTen);
