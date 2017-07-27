import React from 'react';
import Grid from 'material-ui/Grid';

import MovieCard from './single';

const MovieList = ({ movies }) =>
  (<Grid container justify="center" className="MovieList">
    {movies.map(m =>
      (<Grid item xs={6} sm={4} key={m.id}>
        <MovieCard movie={m} />
      </Grid>)
    )}
  </Grid>);

export default MovieList;
