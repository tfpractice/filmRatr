import React from 'react';
import AppBar from 'material-ui/AppBar';
import { IndependentSearch, } from './search';

const Nav = () => (
  <AppBar
    title="FilmRatr"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  >
    <IndependentSearch formID={'navSearchForm'} />
  </AppBar>
);

export default Nav;
