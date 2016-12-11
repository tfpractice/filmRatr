import getRoutes from './routes';
import reducer from './reducer';
import AppContainer from './container';
import getStore from './store';
import * as components from './components';
import * as utils from './utils';
const { fetchComponentData, } = utils;

export { AppContainer, getStore, reducer, getRoutes, utils, fetchComponentData, };
