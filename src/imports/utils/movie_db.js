export const MOVIE_DB_API_KEY = process.env.MOVIE_DB_API_KEY;
export const MOVIE_API_URL = 'https://api.themoviedb.org/3';
export const MOVIE_URL = `${MOVIE_API_URL}/movie`;

export const MOVIE_DB_SEARCH_URL =
 `${MOVIE_API_URL}/search/movie?api_key=${MOVIE_DB_API_KEY}`;

export const getMovieUrl = id =>
  `${MOVIE_URL}/${id}?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
