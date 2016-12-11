import fetchComponentData from './fetch_component_data';
import asyncActions from './async_actions';
import * as MovieUtils from './movie_db';

const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test')
    ? process.env.BASE_URL || (`http://localhost:${process.env.PORT || 3000}/api`)
    : '/api';

export { fetchComponentData, asyncActions, MovieUtils, API_URL, };
