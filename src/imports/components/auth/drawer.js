import React, { Component, } from 'react';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText, } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';

import Menu, { MenuItem, } from 'material-ui/Menu';
import NavMenu from 'material-ui-icons/Navigation';
import { connect, } from 'react-redux';
import { SideBarActions, } from '../stateful';
import LoginForm from './login_form';
import RegisterForm from './registration_form';
import LogoutLink from './logout_link';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

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

    // const { currentUser, } = this.props;

    // console.log('Dashthis.props', this.props);

    return (
        
      <Grid container>
        <Grid item>
          { loggedIn && <Text secondary align="center" type="headline">
            {`Welcome, ${user.username}`}
          </Text>}
          
        </Grid>
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
    anchorEl={this.state.anchorEl}
    open={this.state.open}
    onRequestClose={this.handleRequestClose}
    >
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
