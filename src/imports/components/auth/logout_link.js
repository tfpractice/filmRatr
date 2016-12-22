import React, { PropTypes, } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect, } from 'react-redux';

import { AuthActions, } from 'imports/actions';

const LogoutLink = ({ logoutUser, }) =>
  <FlatButton label="Logout" onClick={logoutUser} />;

export default connect(null, AuthActions)(LogoutLink);
