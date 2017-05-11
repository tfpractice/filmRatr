import React, { Component, } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Nav from './nav';

const styles = { paddingTop: '5rem', };

export default class Main extends Component {
  render() {
    return (
      <Grid container justify="center" style={styles} >
        <Nav />
        <Grid item >
          {this.props.children}
        </Grid>
      </Grid>
                
    );
  }
}
