import React, { PureComponent, Fragment } from 'react';

import PostList from '../components/PostList';

export default class BlogContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            posts: [],
            loading: false,
        }
    }

    loadPosts() {
        const { page, posts } = this.state;

        if (page === 1) {
            this.setState({ loading: true });
        }
        fetch(`https://jsonplaceholder.typicode.com/posts/?limit=10&_page=${page}`)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                this.setState({
                    page: page + 1,
                    posts: [...posts, ...result],
                    loading: false
                })
                console.log(page)
            })
            .catch(() => {
                this.setState({ loading: false });
            });

        console.log(posts);
    }

    componentDidMount() {
        this.loadPosts();
    }
    handleLoadMore = () => {
        this.loadPosts();
    };

    render() {
        return (
            <Fragment>
                {this.state.loading ? <div>Loading...</div> : < PostList onLoadPosts={this.handleLoadMore} posts={this.state.posts} />}
            </Fragment>
        )
    }
}
