import React from 'react';
import { connect, } from 'react-redux';
import Divider from 'material-ui/Divider';
import ReviewCard from './item';
import MovieReviewForm from './form';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemIcon, ListItemText, } from 'material-ui/List';

const mapStateToProps = ({ reviews, }, { movie, }) =>
({ reviews: reviews.data.filter(r => r.movie_id == movie.id), });

const ReviewList = ({ movie, reviews, }) => (
  <Grid container className="Review-list">
    <MovieReviewForm movie={movie} formID={`newReview${movie.id}`} />
    <Grid className="ReviewList">
      {reviews.map(r => (<div>
        <ReviewCard key={r.id} review={r} />
        <Divider />
      </div>))}
    </Grid>
  </Grid>
  );

export default connect(mapStateToProps)(ReviewList);
