import React from 'react';
import Button from 'material-ui/Button';
import { connect, } from 'react-redux';
import { Field, reduxForm, } from 'redux-form';

// import { TextField, } from 'redux-form-material-ui';
import { resetForm, } from 'imports/utils';
import { AuthActions, } from 'imports/actions';
import { ClearForm, renderText, } from 'imports/utils';
import Grid from 'material-ui/Grid';

const baseReg = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit}>
    <Field name="username" component={renderText} type="text" />
    <Field name="password" component={renderText} type="password" />
    <Field name="email" component={renderText} type="text" />
    <Button primary type="submit">Register</Button>
  </form>
);

const ReduxRegister = ClearForm(baseReg);

const RegisterForm = ({ registerUser, formID, }) => (
  <Grid container>
    <p>Register</p>
    <ReduxRegister form={formID} onSubmit={registerUser} />
  </Grid>
);

export default connect(null, AuthActions)(RegisterForm);
