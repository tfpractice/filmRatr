import React from 'react';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import { connect, } from 'react-redux';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { ReviewActions, } from 'imports/actions';
import EditReviewForm from './edit_review';

// import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
// import DeleteIcon from 'material-ui/svg-icons/action/delete';

const mapStateToProps = ({ auth: { user, }, }, { review, }) => {
  console.log(user, review);
  return ({ canEdit: !!user && user.id === review.user, });
};

const ReviewCard = ({ review, deleteReview, canEdit, }) => {
  console.log(canEdit);
  return (
    <Card>
      <CardHeader
        title={<p>{review.text} || {review.rating}</p>}
        subheader={<p>{review.dateAdded} </p>}
        avatar={
          canEdit ? (<Button onTouchTap={() => deleteReview(review)} >
          ele</Button>) : null
        }
      />
      {canEdit && <CardContent >
        <EditReviewForm review={review} />
      </CardContent> }

      {canEdit && <CardActions>
        <Button onTouchTap={() => deleteReview(review)} >
        ele</Button>
      </CardActions>}
    </Card>
  );
};

export default connect(mapStateToProps, ReviewActions)(ReviewCard);
