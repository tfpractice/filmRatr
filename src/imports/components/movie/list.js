import React from 'react';
import { MovieCard, } from '../movie';
import Grid from 'material-ui/Grid';

const MovieList = ({ movies, }) => (
  <Grid className="movie-list">
    { movies.map(m => <MovieCard key={m.id} movie={m} />)}
  </Grid>
  );

export default (MovieList);
