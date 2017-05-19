import React from 'react';
import { connect, } from 'react-redux';
import { renderRoutes, } from 'react-router-config';

import { MovieActions, } from 'imports/actions';
import { TopTen, } from './movie';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';

const Home = ({ children, dispatch, route, ...rest }) => {
  // console.log('HOME children', children, rest);
  const a = 0;
  
  return (
    <Grid container direction="column" align="center" className="homeDiv" id="home">
      <Grid item>
        <Text type="display1">I am the Home route
        THIS IS GENERAL hotINFO ON THE SITE</Text>
      </Grid>
      {renderRoutes(route.routes)}

    </Grid>
  );
};

Home.fetchData = [ MovieActions.getByFreq, ];

export default connect()(Home);
