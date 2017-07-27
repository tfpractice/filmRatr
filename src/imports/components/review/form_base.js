import React from 'react';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import Grid from 'material-ui/Grid';
import { ReviewActions } from 'imports/actions';
import { ClearForm, renderText } from 'imports/utils';
import { FormGroup } from 'material-ui/Form';

const stateToProps = ({ auth: { user }}, { review }) => ({ canEdit: !!user && !!review && user.id === review.user });
const renderDelete = handler => rev =>
  rev &&
  <Button color="secondary" onClick={() => handler(rev)}>
    Delete
  </Button>;

const ReviewForm = ({ review, handleSubmit, deleteReview, canEdit }) =>
  (<form onSubmit={handleSubmit}>
    <Grid container justify="center" align="center">
      <Grid item xs={6}>
        <Field
          name="rating"
          label="rating"
          type="range"
          component="input"
          min={1}
          max={5}
          step={1}
        />
      </Grid>
      <Grid item xs>
        <Field name="text" label="content" component={renderText} />
      </Grid>
      <Grid item xs>
        <Button primary type="submit">
          Submit Review
        </Button>
      </Grid>

      {canEdit && renderDelete(deleteReview)(review)}
    </Grid>
  </form>);

export default connect(stateToProps, ReviewActions)(ClearForm(ReviewForm));
