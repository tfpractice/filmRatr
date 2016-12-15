import React from 'react';
import AppBar from 'material-ui/AppBar';
import { IndependentSearch, } from './search';
import { Link, } from 'react-router';

const Nav = () => (
  <AppBar
    title={<Link to="/" >FilmRatr</Link>}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  >
    <IndependentSearch formID={'navSearchForm'} />
  </AppBar>
);

export default Nav;
