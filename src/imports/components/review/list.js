import ReviewForm from './form_base';
import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { reset, } from 'redux-form';
import { ReviewActions, } from 'imports/actions';

// import { MovieCard, } from '../movie';

// import FreeForm from './free_form';

const mapStateToProps = ({ reviews, }, { movie, }) => ({ reviews, });

 // ({ reviews: reviews.filter(({ movie_id, }) => movie_id === movie.id, ), });

const mapDispatchToProps = dispatch =>
 ({ actions: bindActionCreators(ReviewActions, dispatch), });

const ReviewList = ({ movie, reviews, actions, }) => (
  <div className="Review-list">
    <h1>{`Showing  Reviews for ${movie.title}` }</h1>
    <ReviewForm movie={movie} form="newReviewForm" onSubmit={(...args) => { console.log(ars); }} />
    <div className="ReviewList">
      {reviews.length}
      {/* {reviews.map(r => <p> {r.text}</p>)} */}
    </div>
  </div>
 );

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
