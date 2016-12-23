import React, { PropTypes, } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Field, reduxForm, } from 'redux-form';
import { connect, } from 'react-redux';
import { TextField, } from 'redux-form-material-ui';

const mapStateToProps = (s, own) => {
  console.log('reviewown', own);
  return ({ myProp: 'myProp', });
};

const ReviewForm = ({ handleSubmit, reset, ...props }) => {
  console.log('reviewProps', props);
  return (
    <form onSubmit={handleSubmit} >
      <Field name="text" component={TextField} hintText="review text" id="text" type="text" />
      <FlatButton label="Submit" primary type="submit" />
    </form>
  );
};

export default connect(mapStateToProps)(reduxForm()(ReviewForm));
