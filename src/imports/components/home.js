import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { SearchResults, } from './search';
import FlatButton from 'material-ui/FlatButton';

const Home = ({ children, ...rest }, context) => (
  <div id="home">
    <FlatButton label="HOMEPAGE NO BABEL" />
    <div> HOMEPAGE HOT BABEL </div>
    <SearchResults />
  </div>
  );

// Home.needs = [ TaskActions.getTasks, ];
// Home.contextTypes = { muiTheme: React.PropTypes.object, };

export default connect()(Home);
