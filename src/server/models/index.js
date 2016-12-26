export { default as Review, } from './review';
export { default as User, } from './user';

export const dbConfig = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/filmRatr',
  port:     process.env.PORT || 3000,
};
