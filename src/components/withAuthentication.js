import React from 'react';
import { connect } from 'react-redux';

import { firebase } from '../firebase';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const onSetAuthUser = (authUser) => this.props.dispatch({
        type: 'AUTH_USER_SET',
        authUser,
      });

      firebase.auth.onAuthStateChanged(authUser => {
        authUser ? onSetAuthUser(authUser) : onSetAuthUser(null);
      });
    }

    render() {
      return <Component />;
    }
  }

  return connect(
    null,
    null,
  )(WithAuthentication);
};

export default withAuthentication;