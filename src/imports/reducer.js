import { combineReducers, } from 'redux';
import { reducer as form, } from 'redux-form';
import { reducer as movies, } from './modules/movies';
import { reducer as search, } from './modules/search';

export default combineReducers({ form, movies, search, });
