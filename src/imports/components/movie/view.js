import React from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';

import { MovieActions } from 'imports/actions';

import { ReviewList } from '../review';
import MovieCard from './single';

const MapStateToProps = ({ currentMovie: movie }) => ({ movie });

const MovieView = ({ movie }) =>
  (<Grid container direction="column" justify="center">
    <Grid item xs={11}>
      <MovieCard movie={movie} />
    </Grid>
    <Grid item xs={11}>
      <ReviewList movie={movie} />
    </Grid>
  </Grid>);

MovieView.fetchData = [ MovieActions.setMovieFromParams ];
export default connect(MapStateToProps)(MovieView);
