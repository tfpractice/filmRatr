import React from 'react';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import { connect, } from 'react-redux';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { ReviewActions, } from 'imports/actions';
import EditReviewForm from './edit_review';
import Text from 'material-ui/Typography';
import StarIcon from 'material-ui-icons/Star';

const stars = rating => [ ...Array(rating).keys(), ].map(x => <StarIcon />);

const mapStateToProps = ({ auth: { user, }, }, { review, }) => ({ canEdit: !!user && user.id === review.user, })

const ReviewCard = ({ review, deleteReview, canEdit, }) => (
  <Card raised>
    <CardHeader
  title={<p>{review.user ? review.user.username : 'default'} || {stars(review.rating)}</p>}
  subheader={<p>{review.dateAdded} </p>}
  />
    <CardContent >
      <Text type="headline">{review.text}</Text>
      {canEdit && <EditReviewForm review={review} /> }
    </CardContent>
      
  </Card>
);

export default connect(mapStateToProps, ReviewActions)(ReviewCard);
