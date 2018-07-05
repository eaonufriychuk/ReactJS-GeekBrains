import {
  createAction
} from 'redux-actions';

export const loadPostsStarted = createAction('[Posts] Load posts started');
export const loadPostsCompleted = createAction('[Posts] Load posts completed');
export const loadPostsFailed = createAction('[Posts] Load posts failed');

export const loadPosts = () => (dispatch, getState) => {
  dispatch(loadPostsStarted());
  const state = getState();

  fetch(`http://localhost:3008/posts/?_limit=10&_page=${state.posts.page}`)
    .then(res => res.json())
    .then(posts => {
      dispatch(loadPostsCompleted(posts));
    })
    .catch(error => {
      dispatch(loadPostsFailed(error));
    })
}