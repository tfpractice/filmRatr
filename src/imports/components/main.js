import React, { Component, } from 'react';

// // import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import createPalette, { dark, } from 'material-ui/styles/palette';
// import { createMuiTheme, MuiThemeProvider, } from 'material-ui/styles';
// import { pink, teal, } from 'material-ui/styles/colors';
import Grid from 'material-ui/Grid';

// import injectTapEventPlugin from 'react-tap-event-plugin';
import Nav from './nav';

// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

// injectTapEventPlugin();
//
// const palette = createPalette({
//   primary: teal,
//   accent: pink,
//   type: 'dark',
//   ...dark,
// });
//
// const { styleManager, theme, } = MuiThemeProvider.createDefaultContext(
//   { theme: createMuiTheme({ palette, }), });
//
const styles = { paddingTop: '3rem', };

export default class Main extends Component {
  // componentDidMount() {
  //   const jssStyles = document.getElementById('jss-server-side');
  //
  //   if (jssStyles && jssStyles.parentNode) {
  //     jssStyles.parentNode.removeChild(jssStyles);
  //   }
  // }
  render() {
    console.log('MAINprops', this.props, this.context);

    // <MuiThemeProvider theme={theme} styleManager={styleManager}>
//       </MuiThemeProvider>

    return (
      <Grid container direction={'column'}>
        <Grid item xs={12}>
          <Nav />
        </Grid>
        <Grid item xs={12} style={styles}>
          {this.props.children}
        </Grid>
      </Grid>
    );
  }
}

// class Main extends Component {
//   render() {
//     return (
//       <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme, { userAgent: false, })}>
//         <div id="main-view" >
//           <Nav />
//           <div className="container">
//             {this.props.children}
//           </div>
//         </div>
//       </MuiThemeProvider>
//     );
//   }
// }

// export default Main;
