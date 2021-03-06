// @flow

import { authUserAC } from '../reducks/session';
import AuthService from '../api/AuthService';
import { Store } from 'redux';

export default function authSessionMiddleware(store: Store) {
  AuthService.onAuthStateChanged(authUser => {
    store.dispatch(authUserAC(authUser));
  });
}
