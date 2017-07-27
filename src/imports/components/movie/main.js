import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';

import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { MovieActions } from 'imports/actions';
import MovieList from './list';
import { Link } from 'react-router';

const stateToProps = ({ movies: { data }}) => ({ movies: data });

const MovieRoute = ({
  getByAvg,
  getByFreq,
  movies,
  history,
  route,
  ...rest
}) => {
  const a = 0;

  console.log('rest', rest);
  console.log('route', route);

  return (
    <Grid container justify="center" align="center" className="MovieRoute">
      <Grid item xs={11}>
        <Grid container justify="center" align="center" justify="center">
          <Grid item xs={3}>
            <Button onClick={() => getByAvg().then(x => history.replace('/'))}>
              By Avg
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => getByFreq().then(x => history.replace('/'))}>
              By Freq
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={11}>
        <Switch>
          {renderRoutes(route.routes)}
        </Switch>
      </Grid>
    </Grid>
  );
};

export default connect(stateToProps, MovieActions)(MovieRoute);
