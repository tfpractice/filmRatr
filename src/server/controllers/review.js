import { Review, } from '../models';

/**
 * Get all reviews
 * @param req
 * @param res
 * @returns void
 */
export const getReviews = (req, res) => Review.find()
  .sort({ movie_id: 1, dateAdded: -1, }).exec()
  .then(reviews => res.json({ reviews, }))
  .catch(err => res.status(500).send(err));

/**
 * Save a review
 * @param req
 * @param res
 * @returns void
 */
export const addReview = (req, res) => Review.create({ ...req.body, })
  .then(review => res.json({ review, }))
  .catch((err) => {
    console.error('Review model insert error', err);
    return res.status(500).send(err);
  });

export const updateReview = (req, res) =>
  Review.findByIdAndUpdate(req.params.id, req.body, { new: true, }).exec()
    .then(review => res.json({ review, }))
    .catch((err) => {
      console.error('error in Review Model Update', err);
      res.status(500).send(err);
    });

/**
 * Get a single review
 * @param req
 * @param res
 * @returns void
 */
export const getReview = (req, res) =>
 Review.findOne({ id: req.params.id, }).exec()
   .then(review => res.json({ review, }))
   .catch(err => res.status(500).send(err));

/**
 * Delete a review
 * @param req
 * @param res
 * @returns void
 */
export const deleteReview = (req, res) => {
  Review.findByIdAndRemove(req.params.id, { select: 'id', }).exec()
    .then((review) => {
      console.log('suceessfully removed', review);
      return res.json({ review, });
    })
    .catch((err) => {
      console.error('DB ERROR,', err);
      return res.status(500).send(err);
    });
};