import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { combineReducers, createStore, } from 'redux';
import { local, } from 'redux-fractal';

const toggle = () => ({ type: 'TOGGLE_DRAWER', });
const open = (state = false, { type, }) =>
  type === 'TOGGLE_DRAWER' ? !state : state;

import { LoginForm, RegisterForm, } from './auth';

const uiProps = {
  key: 'sidebar',
  createStore: props => createStore(combineReducers({ open, })),
  mapDispatchToProps: { toggle, },
  filterGlobalActions: ({ type, }) => type === 'TOGGLE_DRAWER',
};

const SideBar = ({ open, toggle, children, }) => (
  <Drawer
    docked={false}
    width={200}
    open={open}
    onRequestChange={toggle}
  >
    {children}
    <LoginForm formID={'navBarLogin'} />
    <RegisterForm formID={'navBarRegister'} />
    <MenuItem onTouchTap={toggle} />
    <MenuItem onTouchTap={toggle} />
  </Drawer>
  );

export default local(uiProps)(SideBar);