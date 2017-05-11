import React from 'react';
import { connect, } from 'react-redux';
import Card, { CardActions, CardContent, CardHeader, CardMedia, CardTitle, } from 'material-ui/Card';
import { MovieActions, } from 'imports/actions';
import MovieLink from './movie_link';
import Collapse from 'material-ui/transitions/Collapse';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';

const imgBase = 'http://image.tmdb.org/t/p/w300/';
const hasImage = movie => movie.backdrop_path || movie.poster_path;
const movieImg = movie => movie.backdrop_path ? movie.backdrop_path : movie.poster_path;
const imgUrl = movie => hasImage(movie) ? `${imgBase}${movieImg(movie)}` : `http://placehold.it/300x200?text=${movie.title}`;

const MovieCard = ({ movie, setCurrentMovie, }) => (
  <Card >
    <CardHeader
      title={movie.title}
      subheader={<em>{`${movie.release_date} || ${movie.id}`}</em>}
    />
    <CardMedia >
      <MovieLink movie={movie}>
        {<img src={`${imgUrl(movie)}`} />}
      </MovieLink>
    </CardMedia>
    <CardContent>
      <Text type="subheading" paragraph>
        {movie.overview}
      </Text>
    </CardContent>
  </Card>
);

export default connect(null, MovieActions)(MovieCard);
