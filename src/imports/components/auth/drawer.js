import React, { Component, } from 'react';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Drawer from 'material-ui/Drawer';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import List, { ListItem, ListSubheader, } from 'material-ui/List';

import { SideBarActions, } from '../stateful';
import LoginForm from './login_form';
import RegisterForm from './registration_form';
import LogoutLink from './logout_link';

const mapStateToProps = ({ auth: { user, }, }) => ({ loggedIn: !!user, user, });

const styleSheet = createStyleSheet('Dash', () => ({
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
    const classes = this.context.styleManager.render(styleSheet);
    const { loggedIn, toggle, user, ...props } = this.props;

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
            onRequestClose={this.handleRequestClose}>
            <ListSubheader primary>
              { loggedIn && `Welcome, ${user.username}`}
            </ListSubheader>
            {loggedIn && <ListItem> <LogoutLink /></ListItem>}
            {!loggedIn && <ListItem><LoginForm formID={'navBarLogin'} /></ListItem>}
            {!loggedIn && <ListItem><RegisterForm formID={'navBarRegister'} /> </ListItem>}

          </List>

        </Drawer>
      </Grid>
    );
  }
}

Dash.contextTypes = { styleManager: customPropTypes.muiRequired, };

export default connect(mapStateToProps, SideBarActions)(Dash);
