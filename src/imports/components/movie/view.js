import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { MovieActions, ReviewActions, } from 'imports/actions';
import { MovieReviewForm, ReviewList, } from '../review';
import MovieCard from './single';

const MapStateToProps = ({ currentMovie, movies: { data, }, }, { params: { movie_id, }, }) => {
  // console.log(data);
  console.log('\n===================state.movies.data===================\n', data);
  console.log('\n===================currentMovie===================\n', currentMovie);

  return ({ movie: currentMovie, });
};
const mapDispatchToProps = (dispatch, { params: { movie_id, }, }) =>
  // const movie = dispatch(MovieActions.setMovieFromParams({ movie_id, }));

  // console.log('\n===================dispatchMovie===================\n', movie);

   ({});
const MovieView = ({ movie, }, params) =>
(<div>
  <MovieCard movie={movie} />
  <MovieReviewForm movie={movie} formID={`newReview${movie.id}`} />
  <ReviewList movie={movie} />
</div>);

MovieView.fetchData = [
  MovieActions.getMovieFromParams,
  MovieActions.setMovieFromParams, ReviewActions.getReviewsFromParams, ];

export default connect(MapStateToProps, mapDispatchToProps)(MovieView);
