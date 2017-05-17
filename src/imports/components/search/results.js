import React from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { withRouter, } from 'react-router';
import { SearchActions, } from 'imports/actions';
import { MovieCard, MovieList, } from '../movie';
import FreeForm from './free_form';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';

const mapStateToProps = ({ search: { results, request: { query, }, }, }) => ({ results, query, });

const mapDispatchToProps = dispatch =>
 ({ actions: bindActionCreators(SearchActions, dispatch), });

const SearchResults = ({ results, query, actions, router, history, location, }) => {
  console.log('SearchResultsresults, history, location, query, actions', results, history, location, query, actions);
  const a = 0;

  console.log('SearchResults component');

// CL

  return (
    <Grid container direction="column" align="center" className="search-list">
      <Grid item>
        <Text type="display1">{query ? `Showing Results for ${query}` : 'Enter Movie Title' }</Text>
        <FreeForm formID={'searchRouteForm'} />
      </Grid>
      <Grid item className=" SearchResults">
        <MovieList movies={results} />
      </Grid>
    </Grid>
  );
};

SearchResults.fetchData = [ SearchActions.search, ];

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchResults));
