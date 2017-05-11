import React from 'react';
import { connect, } from 'react-redux';
import Card, { CardActions, CardContent, CardHeader, CardMedia, CardTitle, } from 'material-ui/Card';
import { MovieActions, } from 'imports/actions';
import MovieLink from './movie_link';
import Collapse from 'material-ui/transitions/Collapse';
const MovieCard = ({ movie, setCurrentMovie, }) => (
  <Card raised >
    <CardHeader
      title={movie.title}
      subtitle={<p>{movie.release_date} <em>{movie.id}</em> </p>}
    />
    {movie.backdrop_path ?
      <CardMedia >

        <MovieLink movie={movie}>
          {/* <CardTitle
            title={movie.title}
            subtitle={<p></p>}
          /> */}
          <img src={`http://image.tmdb.org/t/p/w300/${movie.backdrop_path}`} />

        </MovieLink>
      </CardMedia>
      : <CardContent >
        <MovieLink movie={movie} >
          {movie.overview}
        </MovieLink>
      </CardContent>
    }
  </Card>
);

export default connect(null, MovieActions)(MovieCard);
