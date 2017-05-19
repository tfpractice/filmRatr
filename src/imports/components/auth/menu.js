import React from 'react';
import IconButton from 'material-ui/IconButton';
import NavMenu from 'material-ui-icons/Navigation';
import Menu, { MenuItem, } from 'material-ui/Menu';
import { connect, } from 'react-redux';
import { SideBarActions, } from '../stateful';

const mapStateToProps = ({ auth: { user, }, }) => ({ loggedIn: !!user, });

const AuthMenu = ({ loggedIn, toggle, ...props }) => {
  const a = 0;
  
  // console.log('AuthMenu props', props, loggedIn, toggle);
  
  return (
    <Menu {...props} >
      <IconButton><NavMenu /></IconButton>
      <NavMenu />
      <h1>IA M THE AUTH MEU</h1>
      <MenuItem onClick={toggle}>Login</MenuItem>
      <MenuItem onClick={toggle}>Register</MenuItem>
      {loggedIn && <MenuItem onClick={toggle}>Logout</MenuItem> }
      {!loggedIn && <MenuItem onClick={toggle}>Login</MenuItem> }
      {!loggedIn && <MenuItem onClick={toggle}>Register</MenuItem> }
    </Menu>
  );
};

export default connect(mapStateToProps, SideBarActions)(AuthMenu);
