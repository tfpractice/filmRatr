import Review from './review';

const dbConfig = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/filmRatr',
  port:     process.env.PORT || 3000,
};

export { Review, dbConfig, };
