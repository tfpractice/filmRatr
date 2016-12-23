import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { MovieActions, } from 'imports/actions';
import { SearchResults, } from './search';
import { TopTen, } from './movie';

const Home = ({ children, dispatch, ...rest }, context) => (
  <div id="home">
    <h1>HOMEPAGE </h1>
    <SearchResults />
    <TopTen />
  </div>
  );

Home.fetchData = [ MovieActions.getTopFive, ];

export default connect()(Home);
