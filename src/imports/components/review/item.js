import React from 'react';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import FlatButton from 'material-ui/FlatButton';
import { connect, } from 'react-redux';
import { Card, CardActions, CardHeader, CardText, CardTitle, } from 'material-ui/Card';
import { ReviewActions, } from 'imports/actions';
import EditReviewForm from './edit_review';

const mapStateToProps = ({ auth: { user, }, }, { review, }) =>
 ({ canEdit: !!user && user.id === review.user, });

const ReviewCard = ({ review, deleteReview, canEdit, }) => (
  <Card>
    <CardHeader
      title={review.text}
      subtitle={<p>{review.dateAdded} </p>}
      actAsExpander={canEdit}
      showExpandableButton={canEdit}
      closeIcon={<EditIcon />}
    />
    {canEdit && <CardText expandable >
      <EditReviewForm review={review} />
    </CardText> }
    {canEdit && <CardActions>
      <FlatButton label="delete" onTouchTap={() => deleteReview(review)} />
    </CardActions>}

  </Card>
  );

export default connect(mapStateToProps, ReviewActions)(ReviewCard);
