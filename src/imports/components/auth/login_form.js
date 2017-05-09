import React, { PropTypes, } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect, } from 'react-redux';
import { Field, reduxForm, reset, } from 'redux-form';
import { resetForm, } from 'imports/utils';
import { AuthActions, } from 'imports/actions';
import { AlertBar, } from '../stateful';
import { TextField, } from 'redux-form-material-ui';

const baseLogin = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit} >
    <Field name="username" component={TextField} placeholder="username" type="text" />
    <Field name="password" component={TextField} placeholder="password" type="password" />
    <FlatButton label="Login" primary type="submit" />
    <AlertBar message={'you logged in'} />
  </form>
);
const ReduxLogin = reduxForm()(baseLogin);

const LoginForm = ({ loginUser, formID, }) => (
  <div className="row">
    <p>Login</p>
    <ReduxLogin
      form={formID} onSubmit={loginUser} onSubmitSuccess={resetForm(formID)}
    />
  </div>
);

export default connect(null, AuthActions)(LoginForm);
