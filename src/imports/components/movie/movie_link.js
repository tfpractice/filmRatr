import React from 'react';
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import { MovieActions, } from 'imports/actions';

const MovieLink = ({ children, movie, setCurrentMovie, }) =>
  (<Link to={`movies/${movie.id}`} onClick={() => setCurrentMovie(movie)} >
    {children}
  </Link>);

export default connect(null, MovieActions)(MovieLink);
