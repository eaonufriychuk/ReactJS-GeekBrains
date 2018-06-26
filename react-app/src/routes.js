import Home from 'components/Home';
import Blog from 'containers/BlogContainer';
import CommentList from 'components/CommentList';
import UserList from 'containers/UserListContainer';
import User from 'containers/UserContainer';
import {
  v4
} from 'uuid';

export default [{
    id: v4(),
    path: '/',
    exact: true,
    component: Home
  },
  {
    id: v4(),
    path: '/blog',
    exact: true,
    component: Blog
  },
  {
    id: v4(),
    path: '/comments',
    exact: true,
    component: CommentList
  },
  {
    id: v4(),
    path: '/users',
    exact: true,
    component: UserList
  },
  {
    id: v4(),
    path: '/users/:id',
    exact: true,
    component: User
  },
]