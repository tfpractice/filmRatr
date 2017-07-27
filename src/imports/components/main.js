import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import Nav from './nav';

const styles = { paddingTop: '5rem' };

export default class Main extends Component {
  render() {
    const { route: { routes }} = this.props;

    return (
      <Grid container justify="center" align="center" style={styles}>
        <Nav />
        <Grid item xs={11}>
          <Switch>
            {renderRoutes(routes)}
          </Switch>
        </Grid>
      </Grid>
    );
  }
}
