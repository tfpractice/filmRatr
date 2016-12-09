import React, { Component, } from 'react';

import { AppContainer as HotContainer, } from 'react-hot-loader';
import { Provider, } from 'react-redux';
import { browserHistory, Router, } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import getRoutes from './routes';

injectTapEventPlugin();

export default class AppContainer extends Component {
  render() {
    const { store, } = this.props;
    return (
      <Provider store={store}>
        <Router children={getRoutes(store)} history={browserHistory} />
      </Provider>
    );
  }
}
