import React, { PropTypes, } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';

import { AuthActions, } from 'imports/actions';

const mapDispatchToProps = dispatch =>
  ({ logout: bindActionCreators(AuthActions.logoutUser, dispatch), });

const LogoutLink = ({ logout, }) => <FlatButton label="Logout" onClick={logout} />;

export default connect(null, mapDispatchToProps)(LogoutLink);
