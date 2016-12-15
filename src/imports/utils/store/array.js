export const update = nextState => prevState => nextState;

export const replace = nextState => prevState => nextState;

export const insert = elem => (prevState) => {
  console.log('=================elem======================', elem);
  console.log('=================prevState======================', prevState);
  console.log('=================prevState.concat(elem)======================', prevState.concat(elem));

  return prevState.concat(elem);
};

export const removeByID = ({ id, }) => prevState =>
  prevState.filter(t => t.id !== id);

export const editByID = elem => prevState =>
  prevState.map(t => t.id === elem.id ? { ...t, ...elem, } : t);
