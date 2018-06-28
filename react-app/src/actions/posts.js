import {
  createAction
} from 'redux-actions';


export const loadPostsStarted = createAction('[Posts] Load posts started');
export const loadPostsCompleted = createAction('[Posts] Load posts completed');
export const loadPostsFailed = createAction('[Posts] Load posts failed');

export const loadPosts = (dispatch, pageNumber) => {
  dispatch(loadPostsStarted());
  fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=10&_page=${pageNumber}`)
    .then(res => res.json())
    .then(posts => {
      dispatch(loadPostsCompleted(posts));
    })
    .catch(error => {
      dispatch(loadPostsFailed(error));
    })
}