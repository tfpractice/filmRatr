import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavMenu from 'material-ui/svg-icons/navigation/menu';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { Link, } from 'react-router';
import { SideBarActions, } from '../stateful';

const { toggle, } = SideBarActions;

const mapStateToProps = ({ auth: { user, }, }) => {
  console.log('user', user);
  console.log('loggedIn', !!user);
  return ({ loggedIn: !!user, });
};

const mapDispatchToProps = dispatch => ({ toggle: bindActionCreators(toggle, dispatch), });

const AuthMenu = ({ loggedIn, toggle, ...props }) => (
  <IconMenu
    {...props}
    iconButtonElement={<IconButton><NavMenu /></IconButton>}
    targetOrigin={{ horizontal: 'right', vertical: 'top', }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top', }}
  >
    {loggedIn && <MenuItem primaryText="Logout" onClick={toggle} />}
    {!loggedIn && <MenuItem primaryText="Login" onClick={toggle} />}
    {!loggedIn && <MenuItem primaryText="Register" onClick={toggle} />}

  </IconMenu>
);

export default connect(mapStateToProps, mapDispatchToProps)(AuthMenu);
