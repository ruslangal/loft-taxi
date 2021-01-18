import React, { Component } from 'react'

import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import MapPage from './MapPage';
import ProfilePage from './ProfilePage';
import { RedirectRoute } from './RedirectRoute'
import { PrivateRoute } from './PrivateRoute'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

class AppPresenter extends Component {
  render() {
    return (
      <Switch>
        <RedirectRoute exact path="/" component={LoginPage} />
        <RedirectRoute path="/login" component={LoginPage} />
        <RedirectRoute path="/registration" component={RegistrationPage} />
        <PrivateRoute path="/map" component={MapPage} />
        <PrivateRoute path="/profile" component={ProfilePage} />
      </Switch>
    );
  }
}

export const App = connect(
  state => ({ isLoggedIn: state.auth.isLoggedIn })
)(AppPresenter);
