import React from 'react';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { FormGroup, FormLabel } from 'material-ui/Form';

import { AuthActions } from 'imports/actions';
import { ClearForm, renderText } from 'imports/utils';

const baseLogin = ({ handleSubmit }) =>
  (<form onSubmit={handleSubmit}>
    <FormLabel>Login</FormLabel>
    <FormGroup row>
      <Field
        name="username"
        label="username"
        type="text"
        component={renderText}
      />
      <Field
        name="password"
        label="password"
        type="password"
        component={renderText}
      />
      <Button primary type="submit">
        Login
      </Button>
    </FormGroup>
  </form>);
const ReduxLogin = ClearForm(baseLogin);

const LoginForm = ({ loginUser, formID }) =>
  <ReduxLogin form={formID} onSubmit={loginUser} />;

export default connect(null, AuthActions)(LoginForm);
