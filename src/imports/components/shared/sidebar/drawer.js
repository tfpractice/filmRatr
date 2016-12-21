import React from 'react';
import Drawer as MuiDrawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

 const Drawer = ({open, trigger, children}) => (
  <MuiDrawer docked={false}  width={200}  open={open} >
    {children}
  </MuiDrawer>
);
export default Drawer;
