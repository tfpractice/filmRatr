export const update = nextState => prevState =>

  // console.log('\n===================UPDATING===================\n');
  // console.log('\n===================UPDATING prevState===================\n', prevState);
  //
  // console.log('\n===================UPDATING nextState===================\n', nextState);
  //
  // // console.log('\n===================nextState===================\n', prevState.concat(elem));
   nextState;

export const replace = nextState => prevState => nextState;

export const insert = elem => prevState => prevState.concat(elem);

export const removeByID = ({ id, }) => prevState =>
  prevState.filter(t => t.id !== id);

export const editByID = elem => prevState =>
  prevState.map(t => t.id === elem.id ? { ...t, ...elem, } : t);
