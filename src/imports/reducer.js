import { combineReducers, } from 'redux';
import { reducer as form, } from 'redux-form';
import { reducer as movies, } from './modules/movies';

export default combineReducers({ form, movies, });
