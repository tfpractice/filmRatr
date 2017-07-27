import React from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';

import { MovieActions } from 'imports/actions';

const Home = ({ route }) => {
  const a = 0;

  return (
    <Grid container justify="center" align="center" className="homeDiv">
      <Grid item xs={11}>
        {renderRoutes(route.routes)}
      </Grid>
    </Grid>
  );
};

Home.fetchData = [ MovieActions.getByFreq ];

export default Home;
