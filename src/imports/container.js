import React, { Component, } from 'react';
import { Provider, } from 'react-redux';
import { BrowserRouter, } from 'react-router-dom';
import { MuiThemeProvider, } from 'material-ui/styles';
import { styleManager, theme, } from 'imports/utils';
import getRoutes from './routes';

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
          <BrowserRouter>
            {getRoutes(store)}
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
  
}
