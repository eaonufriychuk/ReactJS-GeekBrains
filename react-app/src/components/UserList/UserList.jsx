import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class UserList extends PureComponent {
  render() {
    const { users } = this.props;

    return (
      <div className="col-4">
        <div className="card">
          <div className="card-header">
            <h4>Users</h4>
          </div>
          <div className="card-body">
            <ul>
              {users.map(user => <li key={user._id}><Link to={`/users/${user._id}`}>{user.name}</Link></li>)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}