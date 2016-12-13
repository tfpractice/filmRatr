import React, { Component, PropTypes, } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Nav from './nav';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class Main extends Component {
  render() {
    const { children, } = this.props;

    console.log('================movie===================',);

    console.log('================props===================', Object.keys(this.props));
    console.log('================location===================', Object.keys(this.props.location));
    console.log('================location===================', this.props.location);
    console.log('================route===================', Object.keys(this.props.route));
    console.log('================children===================', Object.keys(this.props.children));
    return (
      <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: false, })}>
        <div id="main-view" className="container">
          <Nav />
          {children}
        </div>
      </MuiThemeProvider>

    );
  }
}

export default Main;
