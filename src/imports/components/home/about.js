import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { TopTen } from '../movie';

const About = () =>
  (<Grid container>
    <Grid item xs>
      <Text type="display1">
        Welcome to Filmratr. Login and you can search a film and give it a
        raiting
      </Text>
      <Text type="display1">
        Here are some of our most frequenctly rated movies
      </Text>
      <TopTen />
    </Grid>
  </Grid>);

export default About;
