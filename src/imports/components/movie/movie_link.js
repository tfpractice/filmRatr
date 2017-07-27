import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MovieActions } from 'imports/actions';

const mergeProps = (state, dis, own) => ({
  ...state,
  ...dis,
  ...own,
  setMovie: () => dis.setCurrentMovie(own.movie),
});
const MovieLink = ({ children, movie: { id }, setMovie }) =>
  (<Link to={`/movies/${id}`} onClick={setMovie}>
    {children}
  </Link>);

export default connect(null, MovieActions, mergeProps)(MovieLink);
