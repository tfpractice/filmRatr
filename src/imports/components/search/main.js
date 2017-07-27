import React from 'react';
import qs from 'qs';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { SearchActions } from 'imports/actions';

import { MovieList } from '../movie';
import FreeForm from './free_form';

const mapStateToProps = ({ search: { results, request: { query }}}) => ({
  results,
  query,
});

const SearchResults = ({ results, route, ...rest }) => {
  const a = 0;

  return (
    <Grid container justify="center" align="center" className="search-list">
      <Grid item xs={12}>
        <Text align="center" type="display1">
          Enter Movie Title
        </Text>
        <FreeForm formID={'searchRouteForm'} />
      </Grid>

      <Grid item xs={11} className=" SearchResults">
        <Text align="center" type="display1">
          SEARCH RESULTS
        </Text>
        <MovieList movies={results} />
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps, SearchActions)(
  withRouter(SearchResults)
);
