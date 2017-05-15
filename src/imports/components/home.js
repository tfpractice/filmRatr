import React from 'react';
import { connect, } from 'react-redux';
import { MovieActions, } from 'imports/actions';
import { SearchResults, } from './search';
import { TopTen, } from './movie';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';

const Home = ({ children, dispatch, ...rest }) => {
  console.log('children', children, rest);
  return (
    <Grid container direction="column" align="center" className="homeDiv" id="home">
      <Grid item>
        <Text type="display1">I am the Home route</Text>
      </Grid>
      <Grid item>
        <SearchResults />
      </Grid>
      <Grid item>
        <TopTen />
      </Grid>
    </Grid>
  );
};

Home.fetchData = [ MovieActions.getByFreq, ];

export default connect()(Home);
