import React from 'react';
import IconButton from 'material-ui/IconButton';

// import IconMenu from 'material-ui/IconMenu';
import Menu, { MenuItem, } from 'material-ui/Menu';

import { NavMenu, } from 'material-ui-icons';

// import MenuItem from 'material-ui/MenuItem';
// import NavMenu from 'material-ui/svg-icons/navigation/menu';
import { connect, } from 'react-redux';
import { SideBarActions, } from '../stateful';

const mapStateToProps = ({ auth: { user, }, }) => ({ loggedIn: !!user, });

const AuthMenu = ({ loggedIn, toggle, ...props }) => (
  <Menu
    {...props}
    iconButtonElement={<IconButton><NavMenu /></IconButton>}
    targetOrigin={{ horizontal: 'right', vertical: 'top', }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top', }}
  >
    {loggedIn && <MenuItem primaryText="Logout" onClick={toggle} />}
    {!loggedIn && <MenuItem primaryText="Login" onClick={toggle} />}
    {!loggedIn && <MenuItem primaryText="Register" onClick={toggle} />}

  </Menu>
);

export default connect(mapStateToProps, SideBarActions)(AuthMenu);
