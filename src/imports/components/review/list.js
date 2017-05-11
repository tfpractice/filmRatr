import React from 'react';
import { connect, } from 'react-redux';
import Divider from 'material-ui/Divider';
import ReviewCard from './item';
import MovieReviewForm from './form';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemIcon, ListItemText, } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
const mapStateToProps = ({ reviews, }, { movie, }) =>
({ reviews: reviews.data.filter(r => r.movie_id == movie.id), });

const ReviewList = ({ movie, reviews, }) => (
  <Grid container justify="center" direction="column" className="Review-list">
    <Grid item xs={6}>
      <Text type="headline">{`Create Review for ${movie.title}`} </Text>
      <MovieReviewForm movie={movie} formID={`newReview${movie.id}`} />
    </Grid>
    <Grid item xs={12} className="ReviewList">
      {reviews.map(r => (<Paper key={r.id}>
        <ReviewCard review={r} />
        <Divider />
      </Paper>))}
    </Grid>
  </Grid>
  );

export default connect(mapStateToProps)(ReviewList);
