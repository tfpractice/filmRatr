import React from 'react';
import { MovieCard, } from '../movie';

const MovieList = ({ movies, }) => (
  <div className="movie-list hot">

    { movies.map(m => <MovieCard key={m.id} movie={m} />)}
  </div>
  );

export default (MovieList);
