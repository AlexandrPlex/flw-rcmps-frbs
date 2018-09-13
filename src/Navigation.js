import {Link} from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

export const HOME = 'home';
export const LOGIN = 'login';
export const NEW = 'new';

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <nav>
    <Link to={'/' + HOME}>Home</Link>
    <br />
    <Link to={'/' + LOGIN}>Authorized</Link>
    <br />
  </nav>
);

const NavigationNonAuth = () => (
  <nav>
    <Link to={'/' + LOGIN}>login</Link>
    <br />
  </nav>
);

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);
