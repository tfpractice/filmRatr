import React from 'react';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import Text from 'material-ui/Typography';
import StarIcon from 'material-ui-icons/Star';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import { connect } from 'react-redux';
import { ReviewActions } from 'imports/actions';
import EditReviewForm from './edit_review';
import Avatar from 'material-ui/Avatar';

const stars = rating =>
  [ ...Array(rating).keys() ].map(x => <StarIcon key={x} />);

const mapStateToProps = ({ auth: { user }}, { review }) => ({ canEdit: !!user && user.id === review.user });

const ReviewCard = ({ review, deleteReview, canEdit }) =>
  (<Card raised>
    <CardHeader
      avatar={
        <Avatar>
          {stars(review.rating)}
        </Avatar>
      }
      title={review.user ? review.user.username : 'anonymous'}
      subheader={review.dateAdded}
    />
    <CardContent>
      <Text type="body1">
        {review.text}
      </Text>
      {canEdit && <EditReviewForm review={review} />}
    </CardContent>
  </Card>);

export default connect(mapStateToProps, ReviewActions)(ReviewCard);
