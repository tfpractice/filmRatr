import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { MovieActions, } from 'imports/actions';
import MovieCard from './single';

const MapStateToProps = ({ currentMovie, }) => ({ movie: currentMovie, });

const MovieView = ({ movie, ...alt }, params) =>
(<MovieCard movie={movie} />);

MovieView.fetchData = [ MovieActions.getMovieFromParams, ];

export default connect(MapStateToProps)(MovieView);
