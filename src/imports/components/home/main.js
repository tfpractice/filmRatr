import React from 'react';
import { connect, } from 'react-redux';
import { renderRoutes, } from 'react-router-config';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';

import { MovieActions, } from 'imports/actions';

const Home = ({ children, dispatch, route, ...rest }) => {
  const a = 0;
  
  return (
    <Grid container direction="column" align="center" className="homeDiv" id="home">
      <Grid item >
        {renderRoutes(route.routes)}
      </Grid>
    </Grid>
  );
};

Home.fetchData = [ MovieActions.getByFreq, ];

export default connect()(Home);
