import React, { PureComponent, Fragment } from 'react';

import User from 'components/User';

export default class UserListContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      user: {}
    };
  }

  load() {
    const { match } = this.props;

    this.setState({ loading: true });
    fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then((response) => response.json())
      .then((user) => {
        this.setState({
          loading: false,
          user
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
    const { user, loading } = this.state;
    return (
      <Fragment>
        {loading ? <div>Loading...</div> : <User user={user} />}
      </Fragment>
    );
  }
}