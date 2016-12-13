import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { MovieActions, } from 'imports/actions';
import { SearchResults, } from './search';

const Home = ({ children, dispatch, ...rest }, context) => {
  // console.log(children);
  console.log('================home children===================');

  // console.log(Object.keys(children));
  return (
    <div id="home">
      <h1>HOMEPAGE  WORK! ?</h1>
      <FlatButton label="GET 550" onClick={() => dispatch(MovieActions.getMovie(550))} />
      <SearchResults />
    </div>

  );
};

// Home.fetchData = [ (paramsF) => {
//   console.log('================paramsF===================');
//
//   console.log(paramsF);

  // return MovieActions.getMovie(550);
// }, ];

// Home.contextTypes = { muiTheme: React.PropTypes.object, };

export default connect()(Home);
