import {
  handleActions
} from 'redux-actions';

import {
  addComment,
  removeComment
} from '../actions/comments';

const initialState = [{
    id: 'id-1',
    userName: 'Dart Vader',
    userComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
      ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
      ' nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ' +
      'in reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
      'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt' +
      ' in culpa qui officia deserunt mollit anim id est laborum.',
    date: '2018-06-25'
  },
  {
    id: 'id-2',
    userName: 'Developer',
    userComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
      ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
      ' nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ' +
      'in reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
      'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt' +
      ' in culpa qui officia deserunt mollit anim id est laborum.',
    date: '2018-06-22'
  },
  {
    id: 'id-3',
    userName: 'Lead',
    userComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
      ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
      ' nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ' +
      'in reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
      'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt' +
      ' in culpa qui officia deserunt mollit anim id est laborum.',
    date: '2018-04-15'
  },
]

export default handleActions({
    [addComment]: (state, action) => {
      return [...state, action.payload];
    },
    [removeComment]: (state, action) => {
      return state.filter(comment => comment.id !== action.payload);
    }
  },
  initialState)