import asyncActions from './async_actions';
import fetchComponentData from './fetch_component_data';
import resetForm from './form_utils';
import * as MovieUtils from './movie_db';
import * as StateUtils from './store';

export * from './form_utils';
export * from './themer';

const API_URL =
 (typeof window === 'undefined' || process.env.NODE_ENV === 'test')
    ? process.env.BASE_URL || (`http://localhost:${process.env.PORT || 3000}/api`)
    : '/api';

export { API_URL, fetchComponentData, asyncActions, MovieUtils, resetForm, StateUtils, };
