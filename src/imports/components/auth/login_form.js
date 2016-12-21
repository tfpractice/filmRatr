import React, { PropTypes, } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { Field, reduxForm, reset, } from 'redux-form';
import { resetForm, } from 'imports/utils';
import { AuthActions, } from 'imports/actions';
import { TextField, } from 'redux-form-material-ui';

const mapDispatchToProps = dispatch =>
  ({ loginUser: bindActionCreators(AuthActions.loginUser, dispatch), });

const baseLogin = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit} >
    <Field name="username" component={TextField} placeholder="Placeholder" id="username" type="text" />
    <Field name="password" component={TextField} placeholder="password" id="password" type="password" />
    <FlatButton label="Submit" primary type="submit" />
  </form>
);
const ReduxLogin = reduxForm()(baseLogin);

const LoginForm = ({ loginUser, formID, }) => (
  <ReduxLogin
    form={formID}
    onSubmit={loginUser}
    onSubmitSuccess={resetForm(formID)}
  />);

export default connect(null, mapDispatchToProps)(LoginForm);
