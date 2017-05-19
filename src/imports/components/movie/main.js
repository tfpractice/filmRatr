import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { connect, } from 'react-redux';
import { renderRoutes, } from 'react-router-config';
import { MovieActions, } from 'imports/actions';
import TopTen from './top_ten';

const MovieRoute = ({ children, dispatch, match, route: { routes, }, ...rest }) => {
  const a = 0;
  
  return (
    <Grid container direction="column" align="center" className="MovieRouteDiv" id="MovieRoute">
      <Grid item>
        <Text type="display1">I am the movie route</Text>
      </Grid>
      <Grid item>
        {renderRoutes(routes)}
      </Grid>
    </Grid>
  );
};

MovieRoute.fetchData = [ MovieActions.getByFreq, ];

export default connect()(MovieRoute);
