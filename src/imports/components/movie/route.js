import React from 'react';
import { connect, } from 'react-redux';
import { Route, Switch, } from 'react-router-dom';
import { MovieActions, } from 'imports/actions';
import TopTen from './top_ten';
import MovieView from './view';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';

const MovieRoute = ({ children, dispatch, match, ...rest }) => {
  const a = 0;

  // console.log('children, rest,match', children, rest, match);
  // console.log('children', children);
  // console.log('match', match);
  // console.log('rest', rest);

  return (
    <Grid container direction="column" align="center" className="MovieRouteDiv" id="MovieRoute">
      <Grid item>
        <Text type="display1">I am the movie route</Text>
      </Grid>
      <Grid item>
        <Route
          exact path={'/movies'} component={TopTen} loadData={(...args) => {
            console.log('loadData args', args);
          }}
        />
        <Route
          path={'/movies/:movie_id'} component={MovieView} loadData={(...args) => {
            console.log('loadData args', args);
          }}
        />
      </Grid>
    </Grid>
  );
};

MovieRoute.fetchData = [ MovieActions.getByFreq, ];

export default connect()(MovieRoute);
