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
  dispatch,
  getByAvg,
  getByFreq,
  movies,
  match,
  route: { routes, path, ...rores },
  ...rest
}) => {
  const a = 0;

  return (
    <Grid
      container
      justify="center"
      align="center"
      className="MovieRouteDiv"
      id="MovieRoute"
    >
      <Grid item xs={11}>
        <Text type="display1">I am the movie route</Text>
        <Grid container align="center" justify="center">
          <Grid item xs>
            <Button onClick={getByAvg}>By Avg</Button>
          </Grid>
          <Grid item xs>
            <Button onClick={getByFreq}>By Freq</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={11}>
        <Route
          exact
          path={match.url}
          render={() => <MovieList movies={movies} />}
        />
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </Grid>
    </Grid>
  );
};

export default connect(stateToProps, MovieActions)(MovieRoute);
