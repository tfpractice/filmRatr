import React, { Component, PropTypes, } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Nav from './nav';
import SideBar from './sidebar';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class Main extends Component {
  render() {
    const { children, } = this.props;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: false, })}>
        <div id="main-view" className="container">
          <Nav />
          <SideBar />
          {children}
        </div>
      </MuiThemeProvider>

    );
  }
}

export default Main;
