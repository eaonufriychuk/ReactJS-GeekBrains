import React, { PureComponent, Fragment } from 'react';

import { connect } from 'react-redux';
import CommentList from 'components/CommentList';

import { addComment, removeComment } from 'actions/comments';

class CommentListContainer extends PureComponent {

  render() {
    const { commentList, handleAddComment, onRemove } = this.props;

    return (
      <Fragment>
        <CommentList commentList={commentList} handleAddComment={handleAddComment} onRemove={onRemove} />
      </Fragment>
    );
  }
}

export default connect(
  (state, props) => {
    console.log(state);
    return {
      ...props,
      commentList: state.comments,
    }
  },
  (dispatch, props) => {
    return {
      ...props,
      handleAddComment: comment => dispatch(addComment(comment)),
      onRemove: commentId => () => dispatch(removeComment(commentId)),
    }
  }
)(CommentListContainer);