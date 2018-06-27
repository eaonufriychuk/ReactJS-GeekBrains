import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import UserList from 'components/UserList';
import { loadUsers } from '../actions/users';

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
// Какие части стора (данные) мы хотим передать в компонент
// state - все данные, которые доступны в нашем сторе
// props - те данные, которые напрямую были переданы в компонент
function mapStateToProps(state, props) {
  return {
    ...props,
    loading: state.users.loading,
    users: state.users.entries
  }
}
// позволяет передать actions
function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    load: () => loadUsers(dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);