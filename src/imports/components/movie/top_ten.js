import React from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import MovieList from './list';

// const reviewLength

const sameID = ({ id }) => ({ movie_id }) => id == movie_id;
const rCount = revs => mov => revs.filter(sameID(mov)).length;
const compareReviews = revs => (a, b) => rCount(revs)(a) - rCount(revs)(b);
const mapStateToProps = ({ movies: { data }, reviews }) => {
  const movies = [ ...data ].sort(compareReviews(reviews.data));

  return { movies };
};

const TopTen = ({ movies, ...tRest }) =>
  (<Grid container justify="center" align="center" className="TopTen">
    <Grid item xs={11}>
      <Text align="center" type="display1">
        Most Frequently Viewed Movies
      </Text>
    </Grid>
    <Grid item xs={11}>
      <MovieList movies={movies} />
    </Grid>
  </Grid>);

export default connect(mapStateToProps)(TopTen);
