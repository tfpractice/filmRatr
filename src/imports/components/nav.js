import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { AuthMenu, } from './auth';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { Link, } from 'react-router';
import { LoginForm, LogoutLink, RegisterForm, } from './auth';
import { IndependentSearch, } from './search';
import { SideBar, SideBarActions, } from './stateful';

const { toggle, } = SideBarActions;
const mapStateToProps = ({ auth: { user, }, }) => ({ loggedIn: !!user, });
const mapDispatchToProps = dispatch => ({ toggle: bindActionCreators(toggle, dispatch), });

const Nav = ({ loggedIn, toggle, }) => (
  <AppBar>
    <Toolbar>
      <Grid container justify={'space-between'}>
        <AuthMenu />
        <Text type="headline" colorInherit>
          <Link to="/" >FilmRatr</Link>
        </Text>
        <SideBar>
          {loggedIn && <LogoutLink />}
          {!loggedIn && <LoginForm formID={'navBarLogin'} />}
          {!loggedIn && <RegisterForm formID={'navBarRegister'} />}
        </SideBar>
        <IndependentSearch formID={'navSearchForm'} />
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
