import React from 'react';
import { connect, } from 'react-redux';
import { MovieActions, } from 'imports/actions';
import { ReviewList, } from '../review';
import MovieCard from './single';

const MapStateToProps = ({ currentMovie: movie, }) => ({ movie, });

const MovieView = ({ movie, }) => (
  <div>
    <MovieCard movie={movie} />
    <ReviewList movie={movie} />
  </div>);

MovieView.fetchData = [ MovieActions.setMovieFromParams, ];

export default connect(MapStateToProps)(MovieView);
