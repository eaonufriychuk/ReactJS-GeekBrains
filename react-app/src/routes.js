import Index from 'components/Index';
import Blog from 'containers/BlogContainer';
import Comments from 'components/Comments';
import UserList from 'containers/UserListContainer';
import User from 'containers/UserContainer';
import {
  v4
} from 'uuid';

export default [{
    id: v4(),
    path: '/',
    exact: true,
    component: Index
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
    component: Comments
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