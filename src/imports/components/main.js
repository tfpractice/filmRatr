import React, { Component, } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Nav from './nav';
import Home from './home';
import MovieRoute, { MovieView, TopTen, } from './movie';

// import  from './movie';

// import  from './movie';
import { SearchResults, } from './search';
import { Route, Switch, } from 'react-router-dom';
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
    console.log('this.props.match', this.props);
    return (
      <Grid container justify="center" style={styles} >
        <Nav />
        <Grid item sm={12}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movies" component={MovieRoute} />
            <Route path="/movies/:movie_id" component={MovieView} />
            <Route path="/search/:query" component={SearchResults} />
          </Switch>
        </Grid>
        {/* <SearchResults /> */}

      </Grid>
                
    );
  }
}
