import React from 'react';
import { connect, } from 'react-redux';
import Card, { CardActions, CardContent, CardHeader, CardMedia, CardTitle, } from 'material-ui/Card';
import { MovieActions, } from 'imports/actions';
import MovieLink from './movie_link';
import Collapse from 'material-ui/transitions/Collapse';

const imgBase = 'http://image.tmdb.org/t/p/w300/';
const hasImage = movie => movie.backdrop_path || movie.poster_path;
const movieImg = movie => movie.backdrop_path ? movie.backdrop_path : movie.poster_path;
const imgUrl = movie => hasImage(movie) ? `${imgBase}${movieImg(movie)}` : `http://placehold.it/300x200?text=${movie.title}`;

const MovieCard = ({ movie, setCurrentMovie, }) => (
  <Card raised >
    <CardHeader
      title={`${movie.title} || ${movie.release_date} || ${movie.id}`}
      subheader={<em>{movie.id}</em>}
    />
    <CardMedia >
      <MovieLink movie={movie}>
        {<img src={`${imgUrl(movie)}`} />}
      </MovieLink>
    </CardMedia>
    <CardContent >
      {movie.overview}
    </CardContent>
  </Card>
);

export default connect(null, MovieActions)(MovieCard);
