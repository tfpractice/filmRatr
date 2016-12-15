import { Router, } from 'express';
import { ReviewController, } from '../controllers';

const router = new Router();

router.param('movie_id', (req, res, next, id, key) => {
  req.movie_id = id;
  next();
});

// Get all Reviews
router.route('/reviews/').get(ReviewController.getReviews);

router.route('/reviews/:movie_id').get(ReviewController.getMovieReviews);

// Add a new Review
router.route('/reviews/:movie_id').post(ReviewController.addReview);

// Get one review by cuid
router.route('/reviews/:movie_id/:id').get(ReviewController.getReview);

// Update one review by cuid
router.route('/reviews/:movie_id/:id').patch(ReviewController.updateReview);

// Delete a review by cuid
router.route('/reviews/:movie_id/:id').delete(ReviewController.deleteReview);

export default router;
