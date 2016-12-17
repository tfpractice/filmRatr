export const identity = a => a;
export const getID = ({ id = '', }) => id;
export const sameID = e0 => e1 => getID(e0) === getID(e1);
export const diffID = e0 => e1 => !sameID(e0)(e1);

export const updateByID = e0 => e1 => sameID(e0)(e1) ? { ...e0, ...e1, } : e1;
export const excludeByID = e0 => coll => coll.filter(diffID(e0));
export const editByID = elem => coll => coll.map(updateByID(elem));

export const spread = c0 => [ ...c0, ];
export const castSet = c0 => new Set(c0);
export const has = c0 => elem => c0.has(elem);
export const hasX = c0 => elem => !c0.has(elem);
export const diff = c0 => c1 => c1.filter(hasX(c0));
export const inter = c0 => c1 => c0.filter(has(c1));
export const union = c0 => c1 => spread(castSet([ ...c0, ...c1, ]));

export const setAppend = arr => elem => spread(castSet(arr).add(elem));
export const keySet = arr => new Set(arr.map(getID));
export const isPresent = arr => elem => keySet(arr).has(getID(elem));

export const addElement = (arr, elem) =>
  isPresent(arr)(elem) ? arr : setAppend(arr)(elem);

export const merge = arr => (...elems) => elems.reduce(addElement, arr);
