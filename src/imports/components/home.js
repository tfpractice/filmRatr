import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { MovieActions, } from 'imports/actions';
import { SearchResults, } from './search';
import { TopTen, } from './movie';

const Home = ({ children, dispatch, ...rest }, context) => (
  <div id="home">
    <h1>FilmRatr </h1>
    <SearchResults />
    <TopTen />
  </div>
  );

Home.fetchData = [ MovieActions.getByFreq, ];

export default connect()(Home);
