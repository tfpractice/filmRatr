import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardHeader, CardMedia, CardText, CardTitle, } from 'material-ui/Card';
import EditReviewForm from './edit_review';

const ReviewCard = ({ review, }) => (
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
  </Card>
);

export default ReviewCard;
