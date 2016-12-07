const PENDING = 'PENDING';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const STATUS_ACTIONS = [ PENDING, SUCCESS, FAILURE, ];

export default (prefix) =>
  new Set(STATUS_ACTIONS.map(str => `${prefix}_${str}`));
