import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';

import { connect, } from 'react-redux';
import { Route, Switch, } from 'react-router-dom';
import { renderRoutes, } from 'react-router-config';

import { MovieActions, } from 'imports/actions';
import MovieList from './list';

const stateToProps = ({ movies: { data, }, }) => ({ movies: data, });

const MovieRoute = ({ dispatch, getByAvg, getByFreq, movies, match, route: { routes, path, ...rores }, ...rest }) => {
  const a = 0;

  console.log('movies', movies);
  return (
    <Grid container direction="column" align="center" className="MovieRouteDiv" id="MovieRoute">
      <Grid item>
        <Text type="display1">I am the movie route</Text>
        <Toolbar >
          <Button onClick={getByAvg}>
            By Avg
          </Button>
          <Button onClick={getByFreq}>
            By Freq
          </Button>
        </Toolbar>
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

export default connect(stateToProps, MovieActions)(MovieRoute);
