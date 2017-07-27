import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { AuthMenu } from './auth';
import { SearchForm } from './search';

const mapStateToProps = ({ auth: { user }}) => ({ loggedIn: !!user, user });

const Nav = ({ loggedIn, user }) =>
  (<AppBar>
    <Toolbar>
      <Grid container justify="space-between" align="center">
        <Grid item xs>
          <Grid container align="center">
            <Grid item>
              <AuthMenu />
            </Grid>
            <Link to="/">
              <Text type="headline" color="secondary">
                FilmRatr
              </Text>
            </Link>
            <Grid item>
              {loggedIn &&
                <Text color="secondary" align="center" type="title">
                  {`Welcome, ${user.username}`}
                </Text>}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          <SearchForm formID="navSearchForm" />
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>);

export default connect(mapStateToProps)(Nav);
