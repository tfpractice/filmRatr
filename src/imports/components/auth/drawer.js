import React, { Component, } from 'react';
import Drawer from 'material-ui/Drawer';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { connect, } from 'react-redux';

import List, { ListItem, ListSubheader, } from 'material-ui/List';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import { SideBarActions, } from '../stateful';
import LoginForm from './login_form';
import RegisterForm from './registration_form';
import LogoutLink from './logout_link';

const mapStateToProps = ({ auth: { user, }, }) => ({ loggedIn: !!user, user, });

const sheet = createStyleSheet('Dash', () => ({
  list: {
    width: 250,
    flex: 'initial',
  },
  listFull: {
    width: 'auto',
    flex: 'initial',
  },
}));

class Dash extends Component {
  state = {
    open: {
      top: false,
      left: false,
      bottom: false,
      right: false,
    },
  };

  toggleDrawer = (side, open) => {
    const drawerState = {};

    drawerState[side] = open;
    this.setState({ open: drawerState, });
  };

  handleRightOpen = () => this.toggleDrawer('right', true);
  handleRightClose = () => this.toggleDrawer('right', false);

  render() {
    const { loggedIn, toggle, user, classes, ...props } = this.props;

    console.log(' DRAWER this.props', this.props);
    return (
      <Grid container>
        <Grid item>
          <IconButton contrast onClick={this.handleRightOpen}>
            <MenuIcon />
          </IconButton>
        </Grid>

        <Drawer
          anchor="right"
          open={this.state.open.right}
          onRequestClose={this.handleRightClose}
        >
          <List
            id="simple-List"
            open={this.state.open}
            onRequestClose={this.handleRequestClose}
          >
            <ListSubheader primary>
              {loggedIn && `Welcome, ${user.username}`}
            </ListSubheader>
            {loggedIn &&
              <ListItem>
                {' '}<LogoutLink />
              </ListItem>}
            {!loggedIn &&
              <ListItem>
                <LoginForm formID={'navBarLogin'} />
              </ListItem>}
            {!loggedIn &&
              <ListItem>
                <RegisterForm formID={'navBarRegister'} />{' '}
              </ListItem>}
          </List>
        </Drawer>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, SideBarActions)(
  withStyles(sheet)(Dash)
);
