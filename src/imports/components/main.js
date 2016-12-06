import React, { Component, PropTypes, } from 'react';

class Main extends Component {
  render() {
    const { children, }= this.props
    return (
        <div id="main-view" className="container">
          <p>HELLO</p>
          {children}
        </div>
    );
  }
}

export default Main;
