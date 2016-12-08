export const MOVIE_API_URL = 'https://api.themoviedb.org/3';
export const MOVIE_DB_API_KEY = process.env.MOVIE_DB_API_KEY;
export const MOVIE_DB_SEARCH_URL =
 `${MOVIE_API_URL}/search/movie?api_key=${MOVIE_DB_API_KEY}`;

console.log('\n MOVIE_API_URL', MOVIE_API_URL, '\n');
console.log('\n MOVIE_DB_API_KEY', MOVIE_DB_API_KEY, '\n');
console.log('\n MOVIE_DB_SEARCH_URL', MOVIE_DB_SEARCH_URL, '\n');
