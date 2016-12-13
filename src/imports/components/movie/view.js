import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { MovieActions, } from 'imports/actions';
import MovieCard from './single';

const MapStateToProps = ({ currentMovie, }) => ({ movie: currentMovie, });

const MovieView = ({ movie, ...alt }, params) => {
  // console.log(alt);
  console.log('================movie===================');

  console.log(movie);

  // console.log('================params===================');
  // console.log(params);
  return (<MovieCard movie={movie} />);
};

MovieView.fetchData = [ MovieActions.getMovie, (paramsF) => {
  console.log('================ MovieView.fetchData paramsF===================');
  console.log(paramsF);

  return MovieActions.getMovie(550);
}, ];

export default connect(MapStateToProps)(MovieView);
