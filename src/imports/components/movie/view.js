import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { MovieActions, } from 'imports/actions';
import { MovieReviewForm, ReviewList, } from '../review';
import MovieCard from './single';

const MapStateToProps = ({ currentMovie, }) => ({ movie: currentMovie, });

const MovieView = ({ movie, ...alt }, params) =>
(<div>
  <MovieCard movie={movie} />
  <MovieReviewForm movie={movie} formID={`newReview${movie.id}`} />
  <ReviewList movie={movie} />
</div>);

MovieView.fetchData = [ MovieActions.getMovieFromParams, ];

export default connect(MapStateToProps)(MovieView);
