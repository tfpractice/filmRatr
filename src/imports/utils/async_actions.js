import { requestUtils, } from './store';
const { pending, success, failure, } = requestUtils;

const PENDING = 'PENDING';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const STATUS_ACTIONS = [ PENDING, SUCCESS, FAILURE, ];

const actionString = prefix => action => `${prefix}_${action}`;

export default prefix =>
  new Set(STATUS_ACTIONS.map(actionString(prefix)));
