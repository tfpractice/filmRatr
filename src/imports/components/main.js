import React, { Component, PropTypes, } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Nav from './nav';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class Main extends Component {
  render() {
    const { children, } = this.props;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: false, })}>
        <div id="main-view" >
          <Nav />
          <div className="container">
            {children}
          </div>
        </div>
      </MuiThemeProvider>

    );
  }
}

export default Main;
