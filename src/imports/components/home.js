import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { MovieActions, } from 'imports/actions';
import { SearchResults, } from './search';

const Home = ({ children, dispatch, ...rest }, context) => (
  <div id="home">
    <h1>HOMEPAGE WORK! ?</h1>
    <FlatButton label="GET 550" onClick={() => dispatch(MovieActions.getMovie(550))} />
    <SearchResults />
  </div>

  );

// Home.needs = [ TaskActions.getTasks, ];
// Home.contextTypes = { muiTheme: React.PropTypes.object, };

export default connect()(Home);
