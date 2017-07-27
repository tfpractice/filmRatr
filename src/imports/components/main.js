import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import Nav from './nav';

const styles = { paddingTop: '5rem' };

const Main = ({ route: { routes }}) =>
  (<Grid container justify="center" align="center" style={styles}>
    <Nav />

    <Grid item xs={12}>
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </Grid>
  </Grid>);

export default Main;
