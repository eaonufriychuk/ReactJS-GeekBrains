import './CommentList.css';

import React, { PureComponent, Fragment } from 'react';
import Comment from '../Comment';
import { connect } from 'react-redux';

import { addComment, removeComment } from '../../actions/comments';
import { v4 } from 'uuid';
import { formatDate } from '../../consts/consts';

class CommentList extends PureComponent {

    handleSubmit = (event) => {
        if (event.target.userName.value && event.target.userComment.value) {
            const comment = {
                id: v4(),
                userName: event.target.userName.value.trim(),
                userComment: event.target.userComment.value.trim(),
                date: formatDate(new Date())
            }

            this.props.handleAddComment(comment);

            event.preventDefault();
        }
    }

    render() {
        const { commentList, onRemove } = this.props;

        return (
            <div className="col-9" >
                <div className="comments">
                    <form
                        className="input-group form form-comment"
                        onSubmit={this.handleSubmit}
                    >
                        <label htmlFor="userName" style={{ display: 'block' }}>
                            <input
                                className="form-control"
                                name="userName"
                                type="text"
                                placeholder="add username"
                                required
                            />
                        </label>
                        <label htmlFor="userComment" style={{ display: 'block' }}>
                            <input
                                className="form-control"
                                name="userComment"
                                type="text"
                                placeholder="add your comment"
                                required
                            />
                        </label>
                        <input className="btn btn-primary" type="submit" value="Add comment" />
                    </form>
                </div>
                <div className="content-wrap">
                    <Fragment>
                        {commentList.map((comment) => <Comment {...comment} onRemove={onRemove} />)}
                    </Fragment>
                </div>
            </div>
        );
    }
}

export default connect(
    (state, props) => {
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
)(CommentList);