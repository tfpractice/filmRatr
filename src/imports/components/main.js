import React, { Component, PropTypes, } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Nav from './nav';

class Main extends Component {
  render() {
    const { children, } = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: false, })}>
        <div id="main-view" className="container">
          <Nav />
          <p>HELLO</p>
          {children}
        </div>
      </MuiThemeProvider>

    );
  }
}

export default Main;
