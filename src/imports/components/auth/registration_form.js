import React from 'react';
import Button from 'material-ui/Button';
import { connect, } from 'react-redux';
import { Field, } from 'redux-form';
import { FormGroup, FormLabel, } from 'material-ui/Form';

import { AuthActions, } from 'imports/actions';
import { ClearForm, renderText, } from 'imports/utils';

const baseReg = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit}>
    <FormLabel >Register</FormLabel>
    
    <FormGroup row>

      <Field name="username" label="username" component={renderText} type="text" />
      <Field name="password" label="password" component={renderText} type="password" />
    </FormGroup>
    <FormGroup row>
      <Field name="email" label="email" component={renderText} type="text" />
      <Button primary type="submit">Register</Button>
    </FormGroup>
  </form>
);

const ReduxRegister = ClearForm(baseReg);

const RegisterForm = ({ registerUser, formID, }) => (
  <ReduxRegister form={formID} onSubmit={registerUser} />
);

export default connect(null, AuthActions)(RegisterForm);
