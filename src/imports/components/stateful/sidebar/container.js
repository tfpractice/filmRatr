import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { local, } from 'redux-fractal';
import { uiProps, } from './state';

const SideBar = ({ open, toggle, children, }) => (
  <Drawer docked={false} width={200} open={open} onRequestChange={toggle}>
    {children}
    <MenuItem primaryText="close sidebar" onTouchTap={toggle} />
  </Drawer>
  );

export default local(uiProps)(SideBar);
