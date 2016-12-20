import Review from './review';
import User from './user';

const dbConfig = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/filmRatr',
  port:     process.env.PORT || 3000,
};

export { dbConfig, Review, User, };
