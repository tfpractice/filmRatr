import mongoose, { Schema, } from 'mongoose';

const ReviewSchema = new Schema({
  text:      { type: String, default: 'default review text', required: true, },
  movie_id:  { type: String, default: '9620', required: true, },
  dateAdded: { type: 'Date', default: Date.now, required: true, },
  // author: { type: Schema.Types.ObjectId, ref: 'User', default: null, },
}, { toObject: { virtuals: true, }, toJSON: { virtuals: true, }, });

ReviewSchema.statics.distinctMovies = function () {
  return this.distinct('movie_id');
};

ReviewSchema.statics.countByMovieID = function (movie_id) {
  this.count({ movie_id, });
};

ReviewSchema.statics.topFiveMovies = function () {
  this.aggregate({
    $group: {
      _id: '$movie_id',
      count: { $sum: 1, },
    },
  },
     { $sort: { count: -1, }, },
     { $limit: 5, },
  )
    .then((r) => {
      console.log('movie_id groups', r);

    // return r.sort
    });
};

const Review = mongoose.model('Review', ReviewSchema);

Review.distinctMovies();
Review.countByMovieID('550');
Review.topFiveMovies();
export default Review;
