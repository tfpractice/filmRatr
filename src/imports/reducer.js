import { combineReducers } from 'redux';
import { localReducer as local } from 'redux-fractal';
import { reducer as form } from 'redux-form';
import { reducer as auth } from './modules/auth';
import { currentMovie, reducer as movies } from './modules/movies';
import { reducer as reviews } from './modules/reviews';
import { reducer as search } from './modules/search';

export default combineReducers({
  auth,
  form,
  movies,
  reviews,
  search,
  currentMovie,
  local,
});
