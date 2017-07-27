import React from 'react';
import Drawer from 'material-ui/Drawer';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { connect } from 'react-redux';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import List, { ListItem, ListSubheader } from 'material-ui/List';
import { compose, withHandlers, withState } from 'recompose';

import LoginForm from './login_form';
import LogoutLink from './logout_link';
import RegisterForm from './registration_form';

const mapStateToProps = ({ auth: { user }}) => ({ loggedIn: !!user, user });

const withSwitch = compose(
  withState('open', 'turn', ({ open }) => !!open),
  withHandlers({ flip: ({ turn }) => () => turn(x => !x) })
);
const sheet = createStyleSheet('Dash', () => ({
  list: {
    width: 250,
    flex: 'initial',
  },
}));

const DDash = ({ loggedIn, flip, open, user, classes, ...props }) =>
  (<Grid container justify="center" align="center">
    <Grid item xs>
      <IconButton color="contrast" onClick={flip}>
        <MenuIcon />
      </IconButton>
    </Grid>
    <Grid item xs={11}>
      <Drawer anchor="right" open={open} onRequestClose={flip}>
        <List className={classes.list}>
          <ListSubheader primary>
            {loggedIn && `Welcome, ${user.username}`}
          </ListSubheader>
          {loggedIn &&
            <ListItem>
              <LogoutLink />
            </ListItem>}
          {!loggedIn &&
            <ListItem>
              <LoginForm formID={'navBarLogin'} />
            </ListItem>}
          {!loggedIn &&
            <ListItem>
              <RegisterForm formID={'navBarRegister'} />
            </ListItem>}
        </List>
      </Drawer>
    </Grid>
  </Grid>);

const pipeline = compose(
  connect(mapStateToProps),
  withSwitch,
  withStyles(sheet)
);

export default pipeline(DDash);
