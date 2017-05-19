import React from 'react';
import Grid from 'material-ui/Grid';
import MovieCard from './single';

const MovieList = ({ movies, }) => (
  <Grid container gutter={24} direction="row" className="MovieList" >
    { movies.map(m => (<Grid item sm={4} key={m.id} >
      <MovieCard movie={m} />
    </Grid>))}
  </Grid>
);

export default (MovieList);
