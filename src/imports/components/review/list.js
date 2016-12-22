import React from 'react';
import { connect, } from 'react-redux';
import ReviewCard from './item';
import MovieReviewForm from './form';

const mapStateToProps = ({ reviews, }, { movie, }) =>
({ reviews: reviews.data.filter(r => r.movie_id == movie.id), });

const ReviewList = ({ movie, reviews, }) => (
  <div className="Review-list">
    <MovieReviewForm movie={movie} formID={`newReview${movie.id}`} />
    <div className="ReviewList">
      {reviews.map(r => <ReviewCard key={r.id} review={r} />)}
    </div>
  </div>
  );

export default connect(mapStateToProps)(ReviewList);
