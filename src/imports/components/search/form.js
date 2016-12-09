import React, { PropTypes, } from 'react';
import { reduxForm, Field, } from 'redux-form';
import { connect, } from 'react-redux';

const renderField = ({ input, type, id, }) => (
  <input {...input} type={type} id={id} />
  );

const SearchForm = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit} >
    <div className="row input-field col s12">
      <Field name="query" component={renderField} placeholder="query" id="query" type="text" />
      <label htmlFor="query">query</label>
    </div>
    <button type="submit" className="waves-effect waves-light btn">
    Submit WILLL THIS HOT HOT HOT  WORK???
    </button>
  </form>
);

export default connect()(reduxForm()(SearchForm));
