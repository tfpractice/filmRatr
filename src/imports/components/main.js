import React, { Component, } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { Route, Switch, } from 'react-router-dom';

import { renderRoutes, } from 'react-router-config';
import Nav from './nav';
import Home from './home';

import MovieRoute, { MovieView, TopTen, } from './movie';

import { SearchResults, } from './search';
const styles = { paddingTop: '5rem', };

export default class Main extends Component {
  // componentWillMount() {
  //   const jssStyles = document.getElementById('jss-server-side');
  //
  //   if (jssStyles && jssStyles.parentNode) {
  //     jssStyles.parentNode.removeChild(jssStyles);
  //   }
  // }
  render() {
    const { route: { routes: subRoutes, }, } = this.props;
    
    // console.log('Mainthis.props.match', this.props);
    // console.log('subRoutes', subRoutes);
    
    return (
      <Grid container justify="center" style={styles} >
        <Nav />
        <Grid item sm={12}>
          <Switch>
            {renderRoutes(subRoutes)}
          </Switch>
        </Grid>
      </Grid>
                
    );
  }
}
