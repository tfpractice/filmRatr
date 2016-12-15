import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { MovieActions, ReviewActions, } from 'imports/actions';
import { MovieReviewForm, ReviewList, } from '../review';
import MovieCard from './single';

const MapStateToProps = ({ currentMovie, movies, }, { params: { movie_id, }, }) => {
  console.log('=================own======================', movie_id);
  console.log(movies.data.filter(({ id, }) => id == movie_id));
  return ({ movie: movies.data.find(({ id, }) => id == movie_id), });
};

const MovieView = ({ movie, ...alt }, params) =>
(<div>
  <MovieCard movie={movie} />
  {/* <MovieReviewForm movie={movie} formID={`newReview${movie.id}`} /> */}
  <ReviewList movie={movie} />
</div>);

MovieView.fetchData = [ MovieActions.getMovieFromParams, ReviewActions.getReviewsFromParams, ];

export default connect(MapStateToProps)(MovieView);
