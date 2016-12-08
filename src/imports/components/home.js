import React, { PropTypes, } from 'react';
import { SearchResults, } from './search';
const Home = ({ children, }) => (
  <div id="home">
    <div> HOMEPAGE</div>
    <SearchResults/>
  </div>
    );

// Home.needs = [ TaskActions.getTasks, ];
// Home.contextTypes = { muiTheme: React.PropTypes.object, };

export default Home;
