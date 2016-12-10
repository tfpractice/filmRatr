import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';

import { reduxForm, Field, } from 'redux-form';
import { connect, } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { TextField, } from 'redux-form-material-ui';

import { SearchActions, } from '../../actions';

const renderField = ({ input, type, id, }) => (
  <input {...input} type={type} id={id} />
  );

const SearchForm = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit} >
    <Field name="query" component={TextField} hintText="Movie Title" id="query" type="text" />
    <FlatButton label="Submit" primary type="submit" />
  </form>
);

export default connect()(reduxForm()(SearchForm));
