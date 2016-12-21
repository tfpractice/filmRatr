import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { MovieActions, } from 'imports/actions';
import { LoginForm, RegisterForm, } from './auth';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';

const toggle = () => ({ type: 'TOGGLE_DRAWER', });

const mapDispatchToProps = dispatch => ({ toggle: bindActionCreators(toggle, dispatch), });

const Trigger = ({ toggle, Component, }) => {
  console.log('trigger mounted', Component, toggle);
  return <Component onClick={toggle} />;
};

export default connect(null, mapDispatchToProps)(Trigger);
