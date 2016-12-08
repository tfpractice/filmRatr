import React, { PropTypes, } from 'react';
import { reduxForm, reset, Field, } from 'redux-form';

const renderField = ({ input, type, id, }) => (
  <input {...input} type={type} id={id} />
  );

// onSubmit={(v)=>{console.log('submitted vals', v); return actions.search(v)}}
const SearchForm = ({ handleSubmit, }) => (
  <form onSubmit={(v)=>{console.log('submitted vals', v); return handleSubmit(v)}} >
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
