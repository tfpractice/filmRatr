import React from 'react';
import { connect, } from 'react-redux';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import ReviewCard from './item';
import MovieReviewForm from './form';

const mapStateToProps = ({ reviews, }, { movie, }) =>
  ({ reviews: reviews.data.filter(r => r.movie_id == movie.id), });

const ReviewList = ({ movie, reviews, }) => (
  <Grid container justify="center" direction="column" className="Review-list">
    <Grid item xs={6}>
      <Text type="headline">{`Create Review for ${movie.title}`} </Text>
      <MovieReviewForm movie={movie} formID={`newReview${movie.id}`} />
    </Grid>
    <Grid item xs={12} className="ReviewList">
      <Grid container>
        {reviews.map(r => (<Grid item key={r.id} >
          <ReviewCard review={r} />
        </Grid>))}
      </Grid>
    </Grid>

  </Grid>
);

export default connect(mapStateToProps)(ReviewList);
