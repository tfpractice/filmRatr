
const pending = movieID => state =>
 ({ ...state, status: 'pending', updatedAt: Date.now(), movieID, });

const success = message => state =>
 ({ ...state, status: 'suceeded', updatedAt: Date.now(), message, });

const failure = message => state =>
 ({ ...state, status: 'failed', updatedAt: Date.now(), message, });

const movieRequestPending = id =>
   ({ type: 'MOVIE_REQUEST_PENDING', curry: pending(id), });

const movieRequestSucess = () =>
    ({ type: 'MOVIE_REQUEST_SUCCESS', curry: success, });

const movieRequestFailure = err =>
  ({ type: 'MOVIE_REQUEST_FAILURE', curry: failure, });
