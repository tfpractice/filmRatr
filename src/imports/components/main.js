import React, { Component, } from 'react';
import Grid from 'material-ui/Grid';
import Nav from './nav';

const styles = { paddingTop: '3rem', };

export default class Main extends Component {

  render() {
    return (
      <Grid container direction="column" align="stretch">
        <Grid item xs={12}>
          <Nav />
        </Grid>
        <Grid item xs={12} style={styles} >
          {this.props.children}
        </Grid>
      </Grid>
    );
  }
}
