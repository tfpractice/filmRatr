import React from 'react';
import Button from 'material-ui/Button';
import { connect, } from 'react-redux';
import { Field, } from 'redux-form';
import { AuthActions, } from 'imports/actions';
import { ClearForm, renderText, } from 'imports/utils';
import Grid from 'material-ui/Grid';

// import { AlertBar, } from '../stateful';

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
  <Grid container>
    <p>Login</p>
    <ReduxLogin form={formID} onSubmit={loginUser} />
  </Grid>
);

export default connect(null, AuthActions)(LoginForm);
