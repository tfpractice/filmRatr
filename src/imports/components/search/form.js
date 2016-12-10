import React, { PropTypes, } from 'react';
import { reduxForm, Field, } from 'redux-form';
import { connect, } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { TextField, } from 'redux-form-material-ui';

const renderField = ({ input, type, id, }) => (
  <input {...input} type={type} id={id} />
  );

const SearchForm = ({ handleSubmit, ...props }) => {
  console.log(props);
  return (
    <form onSubmit={handleSubmit} >
      <Field name="query" component={TextField} hintText="Movie Title" id="query" type="text" />
      <FlatButton label="Submit" primary type="submit" />
    </form>
  );
};

export default connect()(reduxForm()(SearchForm));
