import React, { Component, PropTypes, } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Nav from './nav';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class Main extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme, { userAgent: false, })}>
        <div id="main-view" >
          <Nav />
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
