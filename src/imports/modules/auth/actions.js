import axios from 'axios';
import * as CONSTANTS from './constants';
import { MovieUtils, StateUtils, } from 'imports/utils';

const { arrayUtils: { merge, }, } = StateUtils;
const { dedupe: { getFirst, unaryMap, diff, keySet, }, } = StateUtils;
const { requestUtils: { requestCreators, getData, }, } = StateUtils;

const { SET_USER, LOGIN, LOGOUT, REGISTRATION, } = CONSTANTS;

export const userSelector = ({ user, }) => user;
export const set = user => () => user;
export const setUser = ({ username, id, }) =>
  ({ type: SET_USER, curry: set({ username, id, }), });

const loginPending = requestCreators(LOGIN).pending;
const loginFailure = requestCreators(LOGIN).failure;
const loginSuccess = requestCreators(LOGIN).success;

const logoutPending = requestCreators(LOGOUT).pending;
const logoutFailure = requestCreators(LOGOUT).failure;
const logoutSuccess = requestCreators(LOGOUT).success;

const registrationPending = requestCreators(REGISTRATION).pending;
const registrationFailure = requestCreators(REGISTRATION).failure;
const registrationSuccess = requestCreators(REGISTRATION).success;

export const registerUser = userProps => dispatch =>
  Promise.resolve(dispatch(registrationPending()))
    .then(() => axios.post('/register', userProps)
      .then(getData)
      .then(({ user, }) => dispatch(registrationSuccess(user)))
      .catch(({ message, }) => dispatch(registrationFailure(message))));

export const loginUser = userProps => dispatch =>
  Promise.resolve(dispatch(loginPending()))
    .then(() => axios.post('/login', userProps)
      .then(getData)
      .then(({ user, }) =>
        Promise.all([ loginSuccess(user), setUser(user), ].map(dispatch))))
    .catch(err => dispatch(loginFailure(err)));

export const logoutUser = () => dispatch =>
  Promise.resolve(dispatch(logoutPending()))
    .then(() => axios.get('/logout')
      .then(getData)
      .then(({ status, }) =>
            Promise.all([ logoutSuccess(status), setUser({}), ].map(dispatch))))
    .catch(err => dispatch(logoutFailure(err)));
