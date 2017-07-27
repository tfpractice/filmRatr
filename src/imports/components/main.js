import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import Nav from './nav';

const styles = { paddingTop: '5rem' };

const MainP = ({ route: { routes }}) =>
  (<Grid container justify="center" align="center" style={styles}>
    <Grid item xs={11}>
      <Nav />
    </Grid>
    <Grid item xs={12}>
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </Grid>
  </Grid>);

export default MainP;
