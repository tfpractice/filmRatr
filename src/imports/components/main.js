import React, { Component, } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Nav from './nav';

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
    return (
      <Grid container justify="center" style={styles} >
        <Nav />
        <Grid item sm={12}>
          {this.props.children}
          {/* <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/movies/:movie_id" component={MovieView} />
            <Route path="/search(*:query)" component={SearchResults} />
          </Switch> */}
        </Grid>
      </Grid>
                
    );
  }
}
