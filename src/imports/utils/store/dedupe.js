export const removeByID = ({ id, }) => prevState =>
  prevState.filter(t => t.id !== id);

export const editByID = elem => prevState =>
  prevState.map(t => t.id === elem.id ? { ...t, ...elem, } : t);

export const spread = c0 => [ ...c0, ];
export const castSet = arr => new Set(arr);
export const has = c0 => elem => c0.has(elem);
export const hasX = c0 => elem => !c0.has(elem);
export const diff = c0 => c1 => c1.filter(hasX(c0));
export const inter = c0 => c1 => c0.filter(has(c1));
export const union = c0 => c1 => spread(castSet([ ...c0, ...c1, ]));

export const identity = a => a;
export const setAppend = arr => elem => spread(castSet(arr).add(elem));
export const getID = ({ id = null, }) => id;
export const keySet = arr => new Set(arr.map(getID));
export const isPresent = arr => elem => keySet(arr).has(getID(elem));

export const addElement = (arr, elem) =>
  isPresent(arr)(elem) ? arr : setAppend(arr)(elem);

export const merge = arr => (...elems) => elems.reduce(addElement, arr);
