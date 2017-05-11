import React from 'react';
import MovieCard from './single';
import Grid from 'material-ui/Grid';

const MovieList = ({ movies, }) => (
  <Grid container direction="row" justify="space-between" className="movie-list">
    { movies.map(m => (<Grid item sm={4} key={m.id} >
      <MovieCard movie={m} />
    </Grid>))}
  </Grid>
  );

export default (MovieList);
