import { editCollByID, excludeByID, insertByID, } from './dedupe';

export const replace = next => prev => next;
export const merge = (...elems) => state => elems.reduce(insertByID, state);
export const removeByID = excludeByID;
export const editByID = editCollByID;
