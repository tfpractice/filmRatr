import React from 'react';
import { connect, } from 'react-redux';
import { MovieActions, } from 'imports/actions';
import { SearchResults, } from './search';
import { TopTen, } from './movie';
import Grid from 'material-ui/Grid';

const Home = ({ children, dispatch, ...rest }) => (
  <Grid container direction="column" id="home">
    <h1>FilmRatr </h1>
    <SearchResults />
    <TopTen />
  </Grid>
  );

Home.fetchData = [ MovieActions.getByFreq, ];

export default connect()(Home);
