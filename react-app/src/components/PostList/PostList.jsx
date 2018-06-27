import '../Post/Post.css';

import React from 'react';
import Post from '../Post';

export default ({ onLoadPosts, posts }) => {
    return (
        <div className="col-9">
            {posts.map(post => <Post key={post.id} {...post} />)}
            <button className="btn btn-success" onClick={onLoadPosts}>Load more</button>
        </div>);
}