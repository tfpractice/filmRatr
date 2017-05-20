import React from 'react';
import qs from 'qs';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { connect, } from 'react-redux';
import { withRouter, } from 'react-router';
import { SearchActions, } from 'imports/actions';
import { MovieList, } from '../movie';
import FreeForm from './free_form';

const mapStateToProps = ({ search: { results, request: { query, }, }, }) => ({ results, query, });

const SearchResults = ({ results, route, ...rest }) => {
  const a = 0;

  console.log('SearchResults rest', route, rest);

  return (
    <Grid container direction="column" align="center" className="search-list">
      <Grid item>
        <Text type="display1">{ 'Enter Movie Title' }</Text>
        <FreeForm formID={'searchRouteForm'} />
      </Grid>

      <Grid item className=" SearchResults">
        <Text type="display1">{ 'I AM THE RESULTS' }</Text>
        <MovieList movies={results} />
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps, SearchActions)(withRouter(SearchResults));
