import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect, } from 'react-redux';
import { Link, } from 'react-router';
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

// //           getMovies(movie.id);
// <CardActions>
//   <Link to={`/movies/${movie.id}`} onClick={() => setCurrentMovie(movie)} >
//     <FlatButton label="Show Reviews" />
//   </CardActions>
// // { adult:false,
//   backdrop_path:  '/7GyIzZImsBTAH0teL1XKG6Nz3OL.jpg',
//   genre_ids:Array[5],
//   id:9620,
//   original_language:'en',
//   original_title:'Paycheck',
//   overview:'Michael Jennings is a genius who\'s hired – and paid handsomely – by high-tech firms to work on highly sensitive projects,
//  after which his short-term memory is erased so he\'s incapable of breaching security. But at the end of a three-year job,
//  he\'s told he isn\'t getting a paycheck and instead receives a mysterious envelope. In it are clues he must piece together to find out why he wasn\'t paid – and why he\'s now in hot water.',
//   popularity:1.900226,
//   poster_path:'/fvp8I0d21MMbpd0Z8HMeGZXMKGU.jpg',
//   release_date:'2003-12-25',
//   title:'Paycheck',
//   video:false,
//   vote_average:5.7,

//  }
