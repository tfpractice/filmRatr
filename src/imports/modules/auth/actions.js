import axios from 'axios';
import * as CONSTANTS from './constants';
import { MovieUtils, StateUtils, } from 'imports/utils';

const { arrayUtils: { merge, }, } = StateUtils;
const { dedupe: { getFirst, unaryMap, diff, keySet, }, } = StateUtils;
const { requestUtils: { requestCreators, getData, }, } = StateUtils;

const { SET_USER, LOGIN, LOGOUT, REGISTATION, } = CONSTANTS;

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

//
// const pending = () => () =>
//  ({ status: 'pending', updatedAt: Date.now(), message: null, });
//
// const success = message => () =>
//  ({ status: 'suceeded', updatedAt: Date.now(), message, });
//
// const failure = message => () =>
//  ({ status: 'failed', updatedAt: Date.now(), message, });
//
// export const registerPending = () =>
//   ({ type: 'REGISTRATION_PENDING', curry: pending(), });
//
// export const registerSuccess = user =>
//  ({ type: 'REGISTRATION_SUCCESS', curry: success('you are now registered'), });
//
// export const registerFailure = error =>
//   ({ type: 'REGISTRATION_FAILURE', curry: failure(error), });

export const registerUser = userProps => dispatch =>
  Promise.resolve(dispatch(registrationPending()))
    .then(() => axios.post('/register', userProps)
      .then(getData)
      .then(({ user, }) => dispatch(registrationSuccess(user)))
      .catch(({ message, }) => dispatch(registrationFailure(message))));

    // .then(({ data: { user, }, }) => dispatch(registerSuccess(user)))
    // .catch(({ message, }) => dispatch(registerFailure(message)));
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

//   return axios.post('/register', userProps)
//     .then(({ data: { user, }, }) => dispatch(registerSuccess(user)))
//     .catch(({ message, }) => dispatch(registerFailure(message)));
// };
//
// export const loginPending = () =>
//   ({ type: 'LOGIN_PENDING', curry: pending(), });
//
// export const loginSuccess = user =>
//  ({ type: 'LOGIN_SUCCESS', curry: success('you are now logged in'), });
//
// export const loginFailure = error =>
//   ({ type: 'LOGIN_FAILURE', curry: failure(error), });

    // .then(({ data: { user, }, }) =>
    //   dispatch(loginSuccess(user)) && dispatch(setUser(user)))
    // .catch(err => dispatch(loginFailure(err)))

  // return axios.post('/login', userProps)
  //   .then(({ data: { user, }, }) =>
  //     dispatch(loginSuccess(user)) && dispatch(setUser(user)))
  //   .catch(err => dispatch(loginFailure(err)));

//
// export const logoutPending = () =>
// ({ type: 'LOGOUT_PENDING', curry: pending(), });
//
// export const logoutSuccess = status =>
//  ({ type: 'LOGOUT_SUCCESS', curry: success('you are now logged in'), });
//
// export const logoutFailure = error =>
//   ({ type: 'LOGOUT_FAILURE', curry: failure(error), });

  // return axios.get('/logout')
  //   .then(({ data: { status, }, }) =>
  //     dispatch(logoutSuccess(status)) && dispatch(setUser({})))
  //   .catch(err => dispatch(logoutFailure(err)));
