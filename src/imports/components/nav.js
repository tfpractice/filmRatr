import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';

import { Link, } from 'react-router-dom';
import { AuthMenu, LoginForm, LogoutLink, RegisterForm, } from './auth';
import { IndependentSearch, } from './search';
import { SideBar, SideBarActions, } from './stateful';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const { toggle, } = SideBarActions;
const mapStateToProps = ({ auth: { user, }, }) => ({ loggedIn: !!user, });
const mapDispatchToProps = dispatch => ({ toggle: bindActionCreators(toggle, dispatch), });

const Nav = ({ loggedIn, toggle, }) => (
  <AppBar>
    <Toolbar>
      <Grid container justify="space-between" direction="row" align="center">
        <Grid item>
          <Grid container direction="row" align="center">
            <IconButton contrast>
              <MenuIcon />
            </IconButton>
            <Link to="/" >
              <Text type="headline" secondary >
                FilmRatr
              </Text>
            </Link>
          </Grid>
        </Grid>
        <Grid item >
          <IndependentSearch formID="navSearchForm" />
        </Grid>
        <AuthMenu />

        {/* <Grid item> */}
        <SideBar>
          {loggedIn && <LogoutLink />}
          {!loggedIn && <LoginForm formID={'navBarLogin'} />}
          {!loggedIn && <RegisterForm formID={'navBarRegister'} />}
        </SideBar>
        {/* </Grid> */}
      </Grid>

    </Toolbar>
  </AppBar>

);

// <AppBar
//   title={<Link to="/" >FilmRatr</Link>}
//   iconClassNameRight="muidocs-icon-navigation-expand-more"
//   iconElementLeft={<AuthMenu />}
// >
//   <SideBar>
//     {loggedIn && <LogoutLink />}
//     {!loggedIn && <LoginForm formID={'navBarLogin'} />}
//     {!loggedIn && <RegisterForm formID={'navBarRegister'} />}
//   </SideBar>
//   <IndependentSearch formID={'navSearchForm'} />
// </AppBar>

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
