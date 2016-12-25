import React from 'react';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import { connect, } from 'react-redux';
import { Card, CardHeader, CardText, CardTitle, } from 'material-ui/Card';
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
  </Card>
  );

export default connect(mapStateToProps, ReviewActions)(ReviewCard);
