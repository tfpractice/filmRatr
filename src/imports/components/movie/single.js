import React from 'react';
import { connect, } from 'react-redux';
import { Card, CardActions, CardHeader, CardMedia, CardText, CardTitle, } from 'material-ui/Card';
import { MovieActions, } from 'imports/actions';
import MovieLink from './movie_link';

const MovieCard = ({ movie, setCurrentMovie, }) => (
  <Card initiallyExpanded >
    <CardHeader
      title={movie.title}
      subtitle={<p>{movie.release_date} <em>{movie.id}</em> </p>}
      actAsExpander
      showExpandableButton
    />
    {movie.backdrop_path ?
      <CardMedia
        expandable
        overlay={
          <MovieLink movie={movie}>
            <CardTitle
              title={movie.title}
              subtitle={<p>{movie.overview}</p>}
            />
          </MovieLink>
        }
      >
        <img src={`http://image.tmdb.org/t/p/w300/${movie.backdrop_path}`} />
      </CardMedia>
      : <CardText expandable >
        <MovieLink movie={movie} >
          {movie.overview}
        </MovieLink>
      </CardText>
    }
  </Card>
);

export default connect(null, MovieActions)(MovieCard);
