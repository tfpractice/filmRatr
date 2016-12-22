import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect, } from 'react-redux';
import { Card, CardActions, CardHeader, CardMedia, CardText, CardTitle, } from 'material-ui/Card';
import { ReviewActions, } from 'imports/actions';
import EditReviewForm from './edit_review';

const ReviewCard = ({ review, deleteReview, }) => (
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

export default connect(null, ReviewActions)(ReviewCard);
