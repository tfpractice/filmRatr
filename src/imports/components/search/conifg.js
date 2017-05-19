import React from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { withRouter, } from 'react-router';
import { SearchActions, } from 'imports/actions';
import { MovieCard, MovieList, } from '../movie';
import FreeForm from './free_form';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { renderRoutes, } from 'react-router-config';
const mapStateToProps = ({ search: { results, request: { query, }, }, }) => ({ results, query, });

const mapDispatchToProps = dispatch =>
  ({ actions: bindActionCreators(SearchActions, dispatch), });

const SearchResults = ({ results, query, location, route: { routes, }, ...rest }) => {
  const a = 0;

  console.log('location', location);
  console.log('SEARCH_REQUESTrest', query, rest);
  return (
    <Grid container direction="column" align="center" className="search-list">
      <Grid item>
        <Text type="display1">{query ? `Showing Results for ${query}` : 'Enter Movie Title' }</Text>
        <FreeForm formID={'searchRouteForm'} />
      </Grid>
      {/* <Grid item>
        {renderRoutes(routes)}
        </Grid>
      {renderRoutes(routes)} */}

      <Grid item className=" SearchResults">
        <MovieList movies={results} />
      </Grid>
    </Grid>
  );
};

SearchResults.fetchData = [ ({ params, }) => SearchActions.search(params), ];

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchResults));
