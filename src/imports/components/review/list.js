import React from 'react';
import { connect, } from 'react-redux';
import Divider from 'material-ui/Divider';
import ReviewCard from './item';
import MovieReviewForm from './form';

const mapStateToProps = ({ reviews, }, { movie, }) =>
({ reviews: reviews.data.filter(r => r.movie_id == movie.id), });

const ReviewList = ({ movie, reviews, }) => (
  <div className="Review-list">
    <MovieReviewForm movie={movie} formID={`newReview${movie.id}`} />
    <div className="ReviewList">
      {reviews.map(r => <div>
        <ReviewCard key={r.id} review={r} />
        <Divider />
      </div>)}
    </div>
  </div>
  );

export default connect(mapStateToProps)(ReviewList);
