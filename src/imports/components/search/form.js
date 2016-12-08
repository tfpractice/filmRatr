import React, { PropTypes, } from 'react';
import { reduxForm, Field, } from 'redux-form';
import { connect, } from 'react-redux';

const renderField = ({ input, type, id, }) => (
  <input {...input} type={type} id={id} />
  );

// onSubmit={(v)=>{console.log('submitted vals', v); return actions.search(v)}}
const SearchForm = ({ handleSubmit, }) => (
  <form onSubmit={(v) => { console.log('submitted vals', v); return handleSubmit(v); }} >
    <div className="row input-field col s12">
      <Field name="title" component={renderField} placeholder="Placeholder" id="title" type="text" />
      <label htmlFor="title">title</label>
    </div>
    <button type="submit" className="waves-effect waves-light btn">
      Submit
    </button>
  </form>
);

export default connect()(reduxForm()(SearchForm));
