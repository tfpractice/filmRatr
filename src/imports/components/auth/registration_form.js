import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { TextField, } from 'redux-form-material-ui';
import { Field, reduxForm, reset, } from 'redux-form';
import { resetForm, } from 'imports/utils';
import { AuthActions, } from 'imports/actions';

const mapDispatchToProps = dispatch =>
  ({ registerUser: bindActionCreators(AuthActions.registerUser, dispatch), });

const baseReg = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit}>
    <Field name="username" component={TextField} placeholder="username" id="username" type="text" />
    <Field name="password" component={TextField} placeholder="password" id="password" type="password" />
    <Field name="email" component={TextField} placeholder="email" id="email" type="text" />
    <FlatButton label="Submit" primary type="submit" />
  </form>
);

const ReduxRegister = reduxForm()(baseReg);

const RegisterForm = ({ registerUser, formID, }) => (
  <ReduxRegister
    form={formID}
    onSubmit={registerUser}
    onSubmitSuccess={resetForm(formID)}
  />);

export default connect(null, mapDispatchToProps)(RegisterForm);
