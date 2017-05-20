import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { connect, } from 'react-redux';
import { Route, Switch, } from 'react-router-dom';
import { renderRoutes, } from 'react-router-config';
import { MovieActions, } from 'imports/actions';
import MovieList from './list';

const stateToProps = ({ movies: { data, }, }) => ({ movies: data, });

const MovieRoute = ({ dispatch, movies, match, route: { routes, path, ...rores }, ...rest }) => {
  const a = 0;

  return (
    <Grid container direction="column" align="center" className="MovieRouteDiv" id="MovieRoute">
      <Grid item>
        <Text type="display1">I am the movie route</Text>
      </Grid>
      <Grid item>
        <Switch>
          <Route exact path={match.url} render={() => <MovieList movies={movies}/>}/>
          {renderRoutes(routes)}
        </Switch>
      </Grid>
    </Grid>
  );
};

export default connect(stateToProps)(MovieRoute);
