import React from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import ReviewCard from './item';
import MovieReviewForm from './form';

const sameID = ({ id }) => ({ movie_id }) => id == movie_id;
const mapStateToProps = ({ reviews: { data }}, { movie }) => ({ reviews: data.filter(sameID(movie)) });

const ReviewList = ({ movie, reviews }) =>
  (<Grid container justify="center" align="center" className="Review-list">
    <Grid item xs={11}>
      <Text align="center" type="headline">
        {`Create Review for ${movie.title}`}
      </Text>
    </Grid>
    <Grid item xs={8}>
      <MovieReviewForm movie={movie} formID={`newReview${movie.id}`} />
    </Grid>
    <Grid item xs={12} className="ReviewList">
      <Grid container justify="center" align="center">
        {reviews.map(r =>
          (<Grid item xs={12} sm={6} md={4} key={r.id}>
            <ReviewCard review={r} />
          </Grid>)
        )}
      </Grid>
    </Grid>
  </Grid>);

export default connect(mapStateToProps)(ReviewList);
