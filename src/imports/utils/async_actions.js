const PENDING = 'PENDING';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const STATUS_ACTIONS = [PENDING, SUCCESS, FAILURE,];
const actionString = prefix => action => `${prefix}_${action}`;

export default prefix =>
  new Set(STATUS_ACTIONS.map(actionString(prefix)));

// new Set(STATUS_ACTIONS.map(str => `${prefix}_${str}`));
  //
  // const pending = movieID => state =>
  //  ({ ...state, status: 'pending', updatedAt: Date.now(), movieID, });
  //
  // const success = message => state =>
  //  ({ ...state, status: 'suceeded', updatedAt: Date.now(), message, });
  //
  // const failure = message => state =>
  //  ({ ...state, status: 'failed', updatedAt: Date.now(), message, });
  //
  // const movieRequestPending = id =>
  //    ({ type: 'MOVIE_REQUEST_PENDING', curry: pending(id), });
  //
  // const movieRequestSucess = () =>
  //     ({ type: 'MOVIE_REQUEST_SUCCESS', curry: success, });
  //
  // const movieRequestFailure = err =>
  //   ({ type: 'MOVIE_REQUEST_FAILURE', curry: failure, });
  //
  //   const requestCreators = prefix=>({
  //     pending:(params)=>
  //   })
