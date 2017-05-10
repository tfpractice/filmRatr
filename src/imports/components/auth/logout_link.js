import React from 'react';
import Button from 'material-ui/Button';
import { connect, } from 'react-redux';

import { AuthActions, } from 'imports/actions';

const LogoutLink = ({ logoutUser, }) =>
  <Button label="Logout" onClick={logoutUser} />;

export default connect(null, AuthActions)(LogoutLink);
