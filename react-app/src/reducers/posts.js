import {
  handleActions
} from 'redux-actions';

import {
  loadPostsStarted,
  loadPostsCompleted,
  loadPostsFailed
} from 'actions/posts';

const initialState = {
  loading: false,
  error: null,
  entries: [],
  page: 1
}

export default handleActions({
    [loadPostsStarted]: (state) => {
      return {
        ...state,
        error: null,
        loading: true
      };
    },
    [loadPostsCompleted]: (state, action) => {
      return {
        ...state,
        page: state.page + 1,
        entries: [...state.entries, ...action.payload],
        loading: false,
      };
    },
    [loadPostsFailed]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    }
  },
  initialState)