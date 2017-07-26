import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';

import { AuthMenu, } from './auth';
import { SearchForm, } from './search';
import { SideBarActions, } from './stateful';

const { toggle, } = SideBarActions;

const mapStateToProps = ({ auth: { user, }, }) =>
  ({ loggedIn: !!user, user, });
  
const mapDispatchToProps = dispatch =>
  ({ toggle: bindActionCreators(toggle, dispatch), });
  
const Nav = ({ loggedIn, user, }) => (
  <AppBar>
    <Toolbar>
      <Grid container justify="space-between" direction="row" align="center">
        <Grid item>
          <Grid container direction="row" align="center">
            <Grid item >
              <AuthMenu />
            </Grid>
            <Link to="/" >
              <Text type="headline" color='secondary' >
                FilmRatr
              </Text>
            </Link>
            <Grid item>
              { loggedIn && <Text color='secondary' align="center" type="title">
                {`Welcome, ${user.username}`}
              </Text>}
            </Grid>
          </Grid>

        </Grid>
        <Grid item >
          <SearchForm formID="navSearchForm" />
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
