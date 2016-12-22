import React from 'react';
import { MovieCard, } from '../movie';

const MovieList = ({ movies, }) => (
  <div className="movie-list">
    <h1>Showing Movies</h1>
    <div className="movie-cards" />
    { movies.map(m => <MovieCard key={m.id} movie={m} />)}
  </div>
  );

export default (MovieList);
