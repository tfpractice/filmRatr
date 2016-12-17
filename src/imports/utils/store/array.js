import { editCollByID, excludeByID, insertByID, } from './dedupe';

export const removeByID = excludeByID;
export const editByID = editCollByID;
export const merge = (...elems) => state => elems.reduce(insertByID, state);
