import React from 'react';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import { connect, } from 'react-redux';
import { Card, CardActions, CardHeader, CardText, } from 'material-ui/Card';
import { ReviewActions, } from 'imports/actions';
import EditReviewForm from './edit_review';

const mapStateToProps = ({ auth: { user, }, }, { review, }) =>
 ({ canEdit: !!user && user.id === review.user, });

const ReviewCard = ({ review, deleteReview, canEdit, }) => (
  <Card>
    <CardHeader
      title={<p>{review.text} || {review.rating}</p>}
      subtitle={<p>{review.dateAdded} </p>}
      closeIcon={<EditIcon />}
      actAsExpander={canEdit}
      showExpandableButton={canEdit}
      avatar={canEdit ?
        <IconButton onTouchTap={() => deleteReview(review)} >
          <DeleteIcon />
        </IconButton> : null
      }
    />
    {canEdit && <CardText expandable >
      <EditReviewForm review={review} />
    </CardText> }
  </Card>
  );

export default connect(mapStateToProps, ReviewActions)(ReviewCard);
