// import React from 'react';
// import { bindActionCreators, } from 'redux';
// import qs from 'qs';
// import { connect, } from 'react-redux';
// import { withRouter, } from 'react-router';
// import { SearchActions, } from 'imports/actions';
// import { MovieCard, MovieList, } from '../movie';
// import FreeForm from './free_form';
// import Grid from 'material-ui/Grid';
// import Text from 'material-ui/Typography';
// import { renderRoutes, } from 'react-router-config';
//
// const mapStateToProps = ({ search: { results, request: { query, }, }, }) => ({ results, query, });
//
// const mapDispatchToProps = dispatch =>
//   ({ actions: bindActionCreators(SearchActions, dispatch), });
//
// const SearchResults = ({ results, route, ...rest }) => {
//   const a = 0;
//
//   //
//   // console.log('SearchResults ======ROUTE=======', route, '\n');
//   // console.log('SearchResults ======REST=======', rest, '\n');
//
//   // console.log('SearchResultslocation', route,'\n');
//
//   // console.log('SEARCH_REQUESTrest', query, rest);
//   return (
//     <Grid container direction="column" align="center" className="search-list">
//       <Grid item>
//         {/* <Text type="display1">{query ? `Showing Results for ${query}` : 'Enter Movie Title' }</Text> */}
//         <Text type="display1">{ 'Enter Movie Title' }</Text>
//         <FreeForm formID={'searchRouteForm'} />
//       </Grid>
//
//       <Grid item className=" SearchResults">
//         <Text type="display1">{ 'I AM THE RESULTS' }</Text>
//
//         <MovieList movies={results} />
//       </Grid>
//     </Grid>
//   );
// };
//
// SearchResults.fetchData = [ (match, ...args) => {
//   console.log('match.params.query\n', match.params.query);
//   console.log('qs.parse(match.params.query)', qs.parse(match.params.query));
//   console.log('SearchResults.args\n', args);
//
//   return SearchActions.search(qs.parse(match.params.query));
// }, ];
//
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchResults));
