import { Review, } from '../models';

export const getTopFive = (req, res) =>
  Review.topFiveMovies()
    .then(arr => arr.map(({ _id: movie_id, }) => movie_id))
    .then(topFive => res.json({ topFive, }))
    .catch(err => res.status(500).send(err));

export const moviesByFreq = (req, res) =>
  Review.moviesByFreq()
    .then(arr => arr.map(({ _id: movie_id, }) => movie_id))
    .then(movies => res.json(movies))
    .catch(err => res.status(500).send(err));
