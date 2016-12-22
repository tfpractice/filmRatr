import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect, } from 'react-redux';
import { Field, reduxForm, } from 'redux-form';
import { TextField, } from 'redux-form-material-ui';
import { resetForm, } from 'imports/utils';
import { AuthActions, } from 'imports/actions';

const baseReg = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit}>
    <Field name="username" component={TextField} placeholder="username" id="username" type="text" />
    <Field name="password" component={TextField} placeholder="password" id="password" type="password" />
    <Field name="email" component={TextField} placeholder="email" id="email" type="text" />
    <FlatButton label="Register" primary type="submit" />
  </form>
);

const ReduxRegister = reduxForm()(baseReg);

const RegisterForm = ({ registerUser, formID, }) => (
  <div className="row">
    <p>Register</p>
    <ReduxRegister
      form={formID} onSubmit={registerUser} onSubmitSuccess={resetForm(formID)}
    />
  </div>
);

export default connect(null, AuthActions)(RegisterForm);
