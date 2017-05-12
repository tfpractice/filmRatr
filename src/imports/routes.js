import React from 'react';

// import { IndexRoute, Route, } from 'react-router';
import { BrowserRouter, Link, Route, Switch, } from 'react-router-dom';

import { Home, Main, MovieView, SearchResults, } from './components';

//
// const getRoutes = store => (
//   <Route name="app" path="/" component={Main}>
//     <Route path="/movies/:movie_id" component={MovieView} />
//     <Route path="/search(*:query)" component={SearchResults} />
//     <IndexRoute component={Home} />
//   </Route>);
const getRoutes = store => (
  <Switch>
    <Route path="/" component={Main} />
    <Route path="/movies/:movie_id" component={MovieView} />
    <Route path="/search(*:query)" component={SearchResults} />
  </Switch>
  );

export default getRoutes;

// import { Game, Main, NavBar, NoMatch, } from './components';
//
// const mapStateToProps = ({ users, }) => ({ users, });
//
// export class Routes extends Component {
//
//   render () {
//     return (
//       <MuiThemeProvider theme={theme} styleManager={styleManager}>
//         <BrowserRouter>
//           <Layout container direction={'column'}>
//             <Layout item xs={12}>
//               <NavBar/>
//             </Layout>
//             <Layout item xs={12} style={styles}>
//
//             </Layout>
//           </Layout>
//         </BrowserRouter>
//       </MuiThemeProvider>
//     );
//   }
// }
//
// export default connect(mapStateToProps)(Routes);
