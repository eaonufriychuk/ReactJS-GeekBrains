import React, { PureComponent, Fragment } from 'react';

import { connect } from 'react-redux';
import { loadUsers } from 'actions/users';

import UserList from 'components/UserList';



class UserListContainer extends PureComponent {

  componentDidMount() {
    const { load } = this.props;

    load();
  }

  render() {
    const { users, loading } = this.props;

    return (
      <Fragment>
        {loading ? <div>Loading...</div> : <UserList users={users} />}
      </Fragment>
    );
  }
}

export default connect(
  (state, props) => {
    return {
      ...props,
      loading: state.users.loading,
      users: state.users.entries
    }
  },
  (dispatch, props) => {
    return {
      ...props,
      load: () => dispatch(loadUsers()),
    }
  })(UserListContainer);