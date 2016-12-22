import React from 'react';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import { connect, } from 'react-redux';
import { Card, CardHeader, CardText, CardTitle, } from 'material-ui/Card';
import { ReviewActions, } from 'imports/actions';
import EditReviewForm from './edit_review';

const ReviewCard = ({ review, deleteReview, }) => (
  <Card>
    <CardHeader
      title={review.text}
      subtitle={<p>{review.dateAdded} </p>}
      actAsExpander
      closeIcon={<EditIcon />}
      showExpandableButton
    />
    <CardText expandable >
      <EditReviewForm review={review} />
    </CardText>
  </Card>
);

export default connect(null, ReviewActions)(ReviewCard);
