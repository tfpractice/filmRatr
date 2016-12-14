import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { reset, } from 'redux-form';
import { ReviewActions, } from 'imports/actions';
import ReviewForm from './form_base';
import MovieReviewForm from './form';
import ReviewCard from './item';

const resetForm = name => (action, dispatch) => dispatch(reset(name));

const mapStateToProps = ({ reviews, }, { movie, }) =>
   ({ reviews: reviews.data.filter(({ movie_id, }) => movie_id == movie.id, ), });

const mapDispatchToProps = dispatch =>
 ({ actions: bindActionCreators(ReviewActions, dispatch), });

const ReviewList = ({ movie, reviews, actions, }) => (
  <div className="Review-list">
    <h2>{`Showing  Reviews for ${movie.title}` }</h2>
    <MovieReviewForm movie={movie} formID={`newReview${movie.id}`} />
    <div className="ReviewList">
      {reviews.map(r => <ReviewCard review={r} />)}
    </div>
  </div>
 );

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
