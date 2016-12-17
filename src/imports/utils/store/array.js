import { addElement, merge as dedupe,
editCollByID,
excludeByID,
updateByID, } from './dedupe';

export const merge = (...elems) => prevState =>
  elems.reduce(addElement, prevState);

// export const insert = elem => prevState => prevState.concat(elem);

export const removeByID = excludeByID;
export const editByID = editCollByID;
