import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

// import ui from 'redux-ui';
import { LoginForm, RegisterForm, } from './auth';

const uiProps = { key: 'sidebar', state: { open: false, }, };

class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false, };
  }

  handleToggle = () => this.setState({ open: !this.state.open, });

  handleClose = () => this.setState({ open: false, });

  render() {
    const { triggers, ui, updateUI, } = this.props;

    return (
      <div>
        <RaisedButton
          label="Open Drawer"
          onTouchTap={() => updateUI({ open: !ui.open, })}
        />
        <Drawer
          docked={false}
          width={200}
          open={ui.open}
          onRequestChange={() => updateUI({ open: !ui.open, })}
        >
          <LoginForm formID={'navBarLogin'} />
          <RegisterForm formID={'navBarRegister'} />
          <MenuItem onTouchTap={() => updateUI({ open: !ui.open, })} />
          <MenuItem onTouchTap={() => updateUI({ open: !ui.open, })} />
        </Drawer>
      </div>
    );
  }
}

export default ui(uiProps)(SideBar);
