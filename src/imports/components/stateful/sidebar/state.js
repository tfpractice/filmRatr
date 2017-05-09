import { combineReducers, createStore, } from 'redux';

const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
const OPEN_ACTIONS = new Set([ TOGGLE_DRAWER, ]);
const SIDEBAR_ACTIONS = new Set([ ...OPEN_ACTIONS, ]);
const SIDEBAR_KEY = 'sidebar';

const invert = () => state => (!state);
const toggle = () => ({ type: TOGGLE_DRAWER, curry: invert(), });

export const actions = { toggle, };

const open = (state = false, { type, curry, }) =>
  OPEN_ACTIONS.has(type) ? curry(state) : state;

export const uiProps = {
  key: SIDEBAR_KEY,
  mapDispatchToProps: actions,
  createStore: props => createStore(combineReducers({ open, })),
  filterGlobalActions: ({ type, }) => SIDEBAR_ACTIONS.has(type),
};
