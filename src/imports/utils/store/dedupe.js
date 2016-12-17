export const update = nextState => prevState => nextState;

export const replace = nextState => prevState => nextState;

export const insert = elem => prevState => prevState.concat(elem);

export const removeByID = ({ id, }) => prevState =>
  prevState.filter(t => t.id !== id);

export const editByID = elem => prevState =>
  prevState.map(t => t.id === elem.id ? { ...t, ...elem, } : t);

const spread = set => [ ...set, ];
const castSet = arr => new Set(arr);
const setAppend = arr => elem => spread(castSet(arr).add(elem));
const getID = ({ id = null, }) => id;
const keySet = arr => new Set(arr.map(getID));
const isPresent = arr => elem => keySet(arr).has(getID(elem));

export const addElement = (arr, elem) =>
  isPresent(arr)(elem) ? arr : setAppend(arr)(elem);

export const merge = arr => (...elems) => elems.reduce(addElement, arr);
