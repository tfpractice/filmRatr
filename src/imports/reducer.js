import { combineReducers, } from 'redux';
import { reducer as form, } from 'redux-form';
import { currentMovie, reducer as movies, } from './modules/movies';
import { reducer as reviews, } from './modules/reviews';
import { reducer as search, } from './modules/search';

export default combineReducers({
 form, movies, reviews, search, currentMovie,
});
