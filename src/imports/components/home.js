import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { SearchResults, } from './search';

const Home = ({ children, ...rest }, context) => {
  console.log('rest of props', rest);
  console.log('\n=============================\n');
  console.log('context props', context);
  return (
  <div id="home">
    <div> HOMEPAGE</div>
    <SearchResults />
  </div>
  );
};

// Home.needs = [ TaskActions.getTasks, ];
// Home.contextTypes = { muiTheme: React.PropTypes.object, };

export default connect()(Home);
