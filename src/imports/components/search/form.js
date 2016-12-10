import React, { PropTypes, } from 'react';
import { reduxForm, Field, } from 'redux-form';
import { connect, } from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

//     <FlatButton label="Submit" primary type="submit" />

const renderField = ({ input, type, id, }) => (
  <input {...input} type={type} id={id} />
  );

const SearchForm = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit} >
    <div className="row input-field col s12">
      <Field
        name="query" component={TextField} hintText="Movie Title" id="query" type="text"
      />
    </div>
    <button type="submit" className="waves-effect waves-light btn">
      Submit HOT  willl please WORK???
    </button>
  </form>
);

export default connect()(reduxForm()(SearchForm));
