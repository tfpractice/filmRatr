import React, { Component, } from 'react';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';

import Menu, { MenuItem, } from 'material-ui/Menu';
import NavMenu from 'material-ui-icons/Navigation';
import { connect, } from 'react-redux';
import { SideBarActions, } from '../stateful';

const mapStateToProps = ({ auth: { user, }, }) => ({ loggedIn: !!user, });

class AuthMenu extends Component {
  state = {
    anchorEl: undefined,
    open: false,
  };

  button = undefined;

  handleClick = (event) => {
    this.setState({ open: true, anchorEl: event.currentTarget, });
  };

  handleRequestClose = () => {
    this.setState({ open: false, });
  };

  render() {
    const { loggedIn, toggle, ...props } = this.props;

    console.log('props', props);
    return (
      <div>
        <Button
          aria-owns="simple-menu"
          aria-haspopup="true"
          onClick={toggle}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >

          {loggedIn && <MenuItem onClick={toggle}>Logout</MenuItem> }
          {!loggedIn && <MenuItem onClick={toggle}>Login</MenuItem> }
          {!loggedIn && <MenuItem onClick={toggle}>Register</MenuItem> }
        </Menu>
      </div>
    );
  }
}

export default connect(mapStateToProps, SideBarActions)(AuthMenu);
