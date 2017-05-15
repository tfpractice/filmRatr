import React from 'react';
import MovieCard from './single';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

const MovieList = ({ movies, }) => (
  <Grid container gutter={24} direction="row" className="MovieList" >
    { movies.map(m => (<Grid item sm={4} key={m.id} >
      <MovieCard movie={m} />
    </Grid>))}
  </Grid>
  );

export default (MovieList);
