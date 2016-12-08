import React, { PropTypes, } from 'react';
import { reduxForm, reset, Field, } from 'redux-form';

const renderField = ({ input, type, id, }) => (
  <input {...input} type={type} id={id} />
  );

const SearchForm = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit} >
    <div className="row input-field col s12">
      <Field name="query" component={renderField} placeholder="Placeholder" id="query" type="text" />
      <label htmlFor="query">query</label>
    </div>
    <button type="submit" className="waves-effect waves-light btn">
      Submit
    </button>
  </form>
);

export default reduxForm()(SearchForm);
