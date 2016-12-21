import React from 'react';
import Drawer from './drawer';
import Trigger from './trigger';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false, };
  }

  handleToggle = () => this.setState({ open: !this.state.open, });
  handleClose = () => this.setState({ open: false, });

  render() {
    const { triggers, } = this.props;

    return (
      <div>
        <RaisedButton
          label="Open Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer
          open={this.state.open}
          onRequestChange={open => this.setState({ open, })}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export { Drawer, Trigger, };
