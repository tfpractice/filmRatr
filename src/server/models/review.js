import mongoose, { Schema, } from 'mongoose';

const ReviewSchema = new Schema({
  text:      { type: String, default: 'default review text', required: true, },
  movie_id:  { type: String, default: '9620', required: true, },
  dateAdded: { type: 'Date', default: Date.now, required: true, },
  // author: { type: Schema.Types.ObjectId, ref: 'User', default: null, },
}, { toObject: { virtuals: true, }, toJSON: { virtuals: true, }, });

const Review = mongoose.model('Review', ReviewSchema);

export default Review;
