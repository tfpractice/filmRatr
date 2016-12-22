import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavMenu from 'material-ui/svg-icons/navigation/menu';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { Link, } from 'react-router';
import { IndependentSearch, } from './search';
import { SideBar, SideBarActions, } from './stateful';

const { toggle, } = SideBarActions;

const mapDispatchToProps = dispatch => ({ toggle: bindActionCreators(toggle, dispatch), });

const AuthMenu = ({ toggle, ...props }) => (
  <IconMenu
    {...props}
    iconButtonElement={<IconButton><NavMenu /></IconButton>}
    targetOrigin={{ horizontal: 'right', vertical: 'top', }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top', }}
  >

    <MenuItem primaryText="Login" onClick={toggle} />
    <MenuItem primaryText="Logout" onClick={toggle} />
    <MenuItem primaryText="Register" onClick={toggle} />

  </IconMenu>
);
const Nav = ({ toggle, }) => (
  <AppBar
    title={<Link to="/" >FilmRatr</Link>}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    iconElementLeft={<AuthMenu toggle={toggle} />}
  >
    <SideBar />
    <IndependentSearch formID={'navSearchForm'} />
  </AppBar>
);

export default connect(null, mapDispatchToProps)(Nav);
