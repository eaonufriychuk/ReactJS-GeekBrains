import React, { PureComponent, Fragment } from 'react';

import UserList from 'components/UserList';

export default class UserListContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: []
    };
  }

  load() {
    const { users } = this.state;

    this.setState({ loading: true });

    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((results) => {
        this.setState({
          loading: false,
          users: users.concat(results)
        })
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  componentDidMount() {
    this.load();
  }

  render() {
    const { users, loading } = this.state;
    return (
      <Fragment>
        {loading ? <div>Loading...</div> : <UserList users={users} />}
      </Fragment>
    );
  }
}