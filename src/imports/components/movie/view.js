import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { MovieActions, ReviewActions, } from 'imports/actions';
import { MovieReviewForm, ReviewList, } from '../review';
import MovieCard from './single';

const MapStateToProps = ({ currentMovie, }, { params: { movie_id, }, }) =>
 ({ movie: currentMovie, });

const MovieView = ({ movie, }, params) =>
(<div>
  <MovieCard movie={movie} />
  <MovieReviewForm movie={movie} formID={`newReview${movie.id}`} />
  <ReviewList movie={movie} />
</div>);

MovieView.fetchData = [ MovieActions.getMovieFromParams, ReviewActions.getReviewsFromParams, ];

export default connect(MapStateToProps)(MovieView);
