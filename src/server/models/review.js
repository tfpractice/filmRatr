import mongoose, { Schema, } from 'mongoose';

const rand = () => Math.floor((Math.random() * 4) + 1);
const ReviewSchema = new Schema({
  text:      { type: String, default: 'default review text', required: true, },
  movie_id:  { type: String, default: '9620', required: true, },
  rating:  {
    type: Number, default: rand, min: 1, max: 5, required: true,
  },
  dateAdded: { type: 'Date', default: Date.now, required: true, },
  // author: { type: Schema.Types.ObjectId, ref: 'User', default: null, },
}, { toObject: { virtuals: true, }, toJSON: { virtuals: true, }, });

ReviewSchema.statics.distinctMovies = function () {
  return this.distinct('movie_id');
};

ReviewSchema.statics.countByMovieID = function (movie_id) {
  return this.count({ movie_id, });
};

ReviewSchema.statics.findByMovieID = function (movie_id) {
  return this.find({ movie_id, });
};

ReviewSchema.statics.topFiveMovies = function () {
  return this.aggregate({
    $group: {
      _id: '$movie_id',
      count: { $sum: 1, },
    },
  },
     { $sort: { count: -1, }, },
     { $limit: 10, },
  );
};

ReviewSchema.statics.MoviesByFrequency = function () {
  return this.aggregate({
    $group: {
      _id: '$movie_id',
      count: { $sum: 1, },
    },
  },
     { $sort: { count: -1, }, },
     { $limit: 10, },
  );
};
ReviewSchema.statics.HighestRated = function () {
  return this.aggregate({
    $group: {
      _id: '$movie_id',
      count: { $sum: 1, },
    },
  },
     { $sort: { count: -1, }, },
     { $limit: 10, },
  );
};

const Review = mongoose.model('Review', ReviewSchema);

export default Review;
