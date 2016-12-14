import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardHeader, CardMedia, CardText, CardTitle, } from 'material-ui/Card';
import EditReviewForm from './edit_review';

const ReviewCard = ({ review, actions, }) => (
  <Card>
    <CardHeader
      title={review.text}
      subtitle={<p>{review.dateAdded} </p>}
      actAsExpander
      showExpandableButton
    />
    <CardText expandable>
      <EditReviewForm review={review} />
    </CardText>
    <CardActions>
      <FlatButton label="Delete this review" onClick={() => actions.deleteReview(review)} />
    </CardActions>
  </Card>
);

export default ReviewCard;
