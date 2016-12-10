import React from 'react';
import { Card, CardActions, CardHeader, CardText, } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const MovieCard = ({ movie, }) => (
  <Card>
    <CardHeader
      title={movie.title}
      subtitle={<p>{movie.release_date}</p>}
      actAsExpander
      showExpandableButton
    />
    <CardActions>
      <FlatButton label="Review this movie" />
      <FlatButton label="Show Reviews" />
    </CardActions>
    <CardText expandable>
      {movie.overview}
    </CardText>
  </Card>
);

export default MovieCard;

// { adult:false,
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
