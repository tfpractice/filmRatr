import React, { Component, } from 'react';

import { AppContainer as HotContainer, } from 'react-hot-loader';
import { Provider, } from 'react-redux';
import { browserHistory, Router, } from 'react-router';
import getRoutes from './routes';

export default class AppContainer extends Component {
  render() {
    const { store, } = this.props;
    console.log('appContian chnagek', store);
    return (
      <Provider store={store}>
        <Router children={getRoutes(store)} history={browserHistory} />
      </Provider>

    );
  }
}
