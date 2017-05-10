import React from 'react';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';

// import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
// import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import { connect, } from 'react-redux';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { ReviewActions, } from 'imports/actions';
import EditReviewForm from './edit_review';

const mapStateToProps = ({ auth: { user, }, }, { review, }) =>
 ({ canEdit: !!user && user.id === review.user, });

const ReviewCard = ({ review, deleteReview, canEdit, }) => (
  <Card>
    <CardHeader
      title={<p>{review.text} || {review.rating}</p>}
      subeader={<p>{review.dateAdded} </p>}
      avatar={canEdit ? (<Button onTouchTap={() => deleteReview(review)} >
        edit</Button>) : null
      }
    />
    {canEdit && <CardContent expandable >
      <EditReviewForm review={review} />
    </CardContent> }
  </Card>
  );

export default connect(mapStateToProps, ReviewActions)(ReviewCard);
