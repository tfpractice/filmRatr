import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { LoginForm, RegisterForm, } from './auth';

export default class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false, };
  }

  handleToggle = () => this.setState({ open: !this.state.open, });

  handleClose = () => this.setState({ open: false, });

  render() {
    const { triggers, } = this.props;

    //
    // triggers.forEach(t => console.log(t.props));
    //
    // triggers.map(t => Object.assign(t, t.props, { props: { onClick: this.handleToggle, }, }));
    //
    //   // t.props.onClick(this.handleToggle) && t);
    //
    // triggers.forEach(t => console.log(t.props));

    console.log(triggers);

    return (
      <div>
        <RaisedButton
          label="Open Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open, })}
        >
          <LoginForm formID={'navBarLogin'} />
          <RegisterForm formID={'navBarRegister'} />
          <MenuItem onTouchTap={this.handleClose} />
          <MenuItem onTouchTap={this.handleClose} />
        </Drawer>
      </div>
    );
  }
}
