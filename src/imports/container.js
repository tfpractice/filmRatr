import React, { Component, } from 'react';
import { Provider, } from 'react-redux';
import { Router, } from 'react-router';
import createPalette, { dark, } from 'material-ui/styles/palette';
import { createMuiTheme, MuiThemeProvider, } from 'material-ui/styles';
import { pink, teal, } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getRoutes from './routes';

injectTapEventPlugin();

const palette = createPalette({
  primary: teal,
  accent: pink,
  type: 'dark',
  ...dark,
});

const { styleManager, theme, } = MuiThemeProvider.createDefaultContext(
  { theme: createMuiTheme({ palette, }), });

export default class AppContainer extends Component {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  render() {
    const { store, history, } = this.props;

    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme} styleManager={styleManager}>
          <Router routes={getRoutes(store)} history={history} />
        </MuiThemeProvider>
      </Provider>
    );
  }
}
