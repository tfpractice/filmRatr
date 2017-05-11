import React from 'react';
import Button from 'material-ui/Button';
import { connect, } from 'react-redux';
import { Field, } from 'redux-form';
import { AuthActions, } from 'imports/actions';
import { ClearForm, renderText, } from 'imports/utils';
import Grid from 'material-ui/Grid';
import { FormGroup, } from 'material-ui/Form';

// import { AlertBar, } from '../stateful';

const baseLogin = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit} >
    <FormGroup row>
      <Field name="username" label="username" component={renderText} type="text" />
      <Field name="password" label="password" component={renderText} type="password" />
      <Button primary type="submit">Login</Button>
    </FormGroup>
    {/* <AlertBar message={'you logged in'} /> */}
  </form>
);
const ReduxLogin = ClearForm(baseLogin);

const LoginForm = ({ loginUser, formID, }) => (
  <ReduxLogin form={formID} onSubmit={loginUser} />
);

export default connect(null, AuthActions)(LoginForm);
