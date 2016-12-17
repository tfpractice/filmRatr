import { addElement, merge as dedupe, } from './dedupe';

export const merge = (...elems) => prevState =>
  elems.reduce(addElement, prevState);

export const insert = elem => prevState => prevState.concat(elem);

export const removeByID = ({ id, }) => prevState =>
  prevState.filter(t => t.id !== id);

export const editByID = elem => prevState =>
  prevState.map(t => t.id === elem.id ? { ...t, ...elem, } : t);
