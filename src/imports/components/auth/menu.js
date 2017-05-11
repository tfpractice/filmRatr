import React from 'react';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem, } from 'material-ui/Menu';
import NavMenu from 'material-ui-icons/Navigation';
import { connect, } from 'react-redux';
import { SideBarActions, } from '../stateful';
const mapStateToProps = ({ auth: { user, }, }) => ({ loggedIn: !!user, });

const AuthMenu = ({ loggedIn, toggle, ...props }) => {
  console.log('AuthMenu props', props);
  return (
    <Menu {...props} >
      <IconButton><NavMenu /></IconButton>
      <NavMenu />
      {loggedIn && <MenuItem onClick={toggle}>Logout</MenuItem> }
      {!loggedIn && <MenuItem onClick={toggle}>Login</MenuItem> }
      {!loggedIn && <MenuItem onClick={toggle}>Register</MenuItem> }
    </Menu>
  );
};

export default connect(mapStateToProps, SideBarActions)(AuthMenu);
