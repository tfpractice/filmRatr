import React from 'react';
import { render, } from 'react-dom';
import { browserHistory, Router, } from 'react-router';
import { root, } from '../imports';

// render(<Main />, document.getElementById('root'));
render(<Router children={getRoutes(store)} history={history} />, document.getElementById('root'));
