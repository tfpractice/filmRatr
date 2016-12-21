import React from 'react';

const Trigger = ({ clickHandler, Component, }) =>
  <Component onClick={clickHandler} />;

export default Trigger;
