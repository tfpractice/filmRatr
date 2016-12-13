import React, { Component, } from 'react';
import { AppContainer as HotContainer, } from 'react-hot-loader';
import { Provider, } from 'react-redux';
import { browserHistory, Router, } from 'react-router';

import getRoutes from './routes';

export default class AppContainer extends Component {
  render() {
    const { store, history, } = this.props;
    return (
      <Provider store={store}>
        <Router children={getRoutes(store)} history={history} />
      </Provider>
    );
  }
}
