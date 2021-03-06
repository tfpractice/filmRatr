import React from 'react';
import Avatar from 'material-ui/Avatar';
import Text from 'material-ui/Typography';
import Card, { CardContent, CardHeader, CardMedia } from 'material-ui/Card';
import { connect } from 'react-redux';

import { MovieActions } from 'imports/actions';
import MovieLink from './movie_link';

const imgBase = 'http://image.tmdb.org/t/p/w300/';
const hasImage = movie => movie.backdrop_path || movie.poster_path;
const movieImg = movie =>
  movie.backdrop_path ? movie.backdrop_path : movie.poster_path;
const imgUrl = movie =>
  hasImage(movie)
    ? `${imgBase}${movieImg(movie)}`
    : `http://placehold.it/300x200?text=${movie.title}`;

const divStyle = { width: '300px', height: '200px' };
const makeStyle = movie => ({
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${imgUrl(movie)})`,
});

const MovieCard = ({ movie }) =>
  (<Card raised>
    <CardHeader
      avatar={<Avatar src={`${imgUrl(movie)}`} />}
      title={movie.title}
      subheader={<em>{`${movie.release_date} || ${movie.id}`}</em>}
    />
    <CardMedia style={makeStyle(movie)}>
      <MovieLink movie={movie}>
        <div style={divStyle} />
      </MovieLink>
    </CardMedia>
    <CardContent>
      <Text noWrap type="subheading" paragraph>
        {movie.overview && movie.overview.slice(0, 255)}
      </Text>
    </CardContent>
  </Card>);

export default connect(null, MovieActions)(MovieCard);
