import { combineReducers, } from 'redux';
import { LOGIN_ACTIONS, LOGOUT_ACTIONS, REGISTRATION_ACTIONS,
USER_ACTIONS, } from './constants';

const reqDefault = { status: null, updatedAt: null, message: null, };

const registration = (state = reqDefault, { type, curry, }) =>
  REGISTRATION_ACTIONS.has(type) ? curry(state) : state;

const login = (state = reqDefault, { type, curry, }) =>
  LOGIN_ACTIONS.has(type) ? curry(state) : state;

const logout = (state = reqDefault, { type, curry, }) =>
  LOGOUT_ACTIONS.has(type) ? curry(state) : state;

const user = (state = null, { type, curry, }) =>
  USER_ACTIONS.has(type) ? curry(state) : state;

export default combineReducers({ registration, login, logout, user, });
