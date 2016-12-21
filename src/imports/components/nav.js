import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { Link, } from 'react-router';
import SideBar from './sidebar';
import { IndependentSearch, } from './search';

const triggers = [ React.createElement(MenuItem, { primaryText: 'Login', }),
  React.createElement(MenuItem, { primaryText: 'Logout', }),
  React.createElement(MenuItem, { primaryText: 'Register', }), ];

const AuthMenu = props => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top', }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top', }}
  >
    {triggers}

  </IconMenu>
);
const Nav = () => (
  <AppBar
    title={<Link to="/" >FilmRatr</Link>}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    iconElementLeft={<AuthMenu />}
  >
    <SideBar
      triggers={triggers}
    />
    <IndependentSearch formID={'navSearchForm'} />
  </AppBar>
);

export default Nav;
