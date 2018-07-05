import {
  createAction
} from 'redux-actions';

export const loadStarted = createAction('[Users] Load started');
export const loadCompleted = createAction('[Users] Load completed');
export const loadFailed = createAction('[Users] Load failed');

export const loadUsers = () => (dispatch) => {
  dispatch(loadStarted());
  fetch('http://localhost:3008/users')
    .then(res => res.json())
    .then(users => {
      dispatch(loadCompleted(users));
    })
    .catch(error => {
      dispatch(loadFailed(error));
    })
}