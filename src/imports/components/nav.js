import React from 'react';
import AppBar from 'material-ui/AppBar';
import SearchForm from './search/form';
const Nav = () => (
  <AppBar
    title="FilmRatr"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  >
    <SearchForm />
  </AppBar>
);

export default Nav;
