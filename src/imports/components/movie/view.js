import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { MovieActions, ReviewActions, } from 'imports/actions';
import { MovieReviewForm, ReviewList, } from '../review';
import MovieCard from './single';

const MapStateToProps = ({ currentMovie, }) =>
   ({ movie: currentMovie, });

const MovieView = ({ movie, }) =>
(<div>
  <MovieCard movie={movie} />
  <ReviewList movie={movie} />
</div>);

MovieView.fetchData = [
  MovieActions.setMovieFromParams,
  ReviewActions.getReviewsFromParams, ];

export default connect(MapStateToProps)(MovieView);
