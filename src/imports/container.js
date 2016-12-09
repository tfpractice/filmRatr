import React, { Component, } from 'react';
import { Provider, } from 'react-redux';
import { browserHistory, Router, } from 'react-router';
import getRoutes from './routes';

export default class AppContainer extends Component {
  render() {
    const { store, } = this.props;
    return (
      <Provider store={store}>
        <Router children={getRoutes(store)} history={browserHistory} />
      </Provider>);
  }
}
