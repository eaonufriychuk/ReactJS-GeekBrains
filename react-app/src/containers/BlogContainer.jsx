import React, { PureComponent, Fragment } from 'react';

import { connect } from 'react-redux';
import { loadPosts } from 'actions/posts';

import PostList from 'components/PostList';

class BlogContainer extends PureComponent {

    componentDidMount() {
        const { load } = this.props;

        load();
    }

    handleLoadMore = () => {
        const { load } = this.props;

        load();
    };

    render() {
        const { loading, posts } = this.props;

        return (
            <Fragment>
                {loading && !posts.length ? <div>Loading...</div> : < PostList
                    onLoadPosts={this.handleLoadMore}
                    posts={posts} />}
            </Fragment>
        )
    }
}

export default connect(
    (state, props) => {
        console.log(state);
        return {
            ...props,
            page: state.posts.page,
            loading: state.posts.loading,
            posts: state.posts.entries,
        }
    },
    (dispatch, props) => {
        return {
            ...props,
            load: loadPosts.bind(null, dispatch),
        }
    },
    (stateProps, dispatchProps, ownProps) => {
        return {
            ...stateProps,
            ...ownProps,
            load: () => dispatchProps.load(stateProps.page),
        }
    }
)(BlogContainer);