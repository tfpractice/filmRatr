import React from 'react';
import Button from 'material-ui/Button';
import { connect, } from 'react-redux';
import { Field, } from 'redux-form';

// import { resetForm, } from 'imports/utils';
import { AuthActions, } from 'imports/actions';
import { ClearForm, renderText, } from 'imports/utils';

// import { AlertBar, } from '../stateful';
import { TextField, } from 'redux-form-material-ui';

const baseLogin = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit} >
    <Field name="username" component={renderText} placeholder="username" type="text" />
    <Field name="password" component={renderText} placeholder="password" type="password" />
    <Button label="Login" primary type="submit" />
    {/* <AlertBar message={'you logged in'} /> */}
  </form>
);
const ReduxLogin = ClearForm(baseLogin);

const LoginForm = ({ loginUser, formID, }) => (
  <div className="row">
    <p>Login</p>
    <ReduxLogin
      form={formID} onSubmit={loginUser}
    />
  </div>
);

export default connect(null, AuthActions)(LoginForm);
