import React, { Component } from 'react'

import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import MapPage from './MapPage';
import ProfilePage from './ProfilePage';
import { withAuth } from './AuthContext'

class App extends Component {
  state = { currentPage: 'login' }

  navigateTo = (page) => {
    if (this.props.isLoggedIn === 1) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: 'login' });
    }
  };

  selectForm = (page) => {
    switch(page) {
      case 'registration':
        return <RegistrationPage navigateTo={this.navigateTo} />
      case 'map':
        return <MapPage navigateTo={this.navigateTo} />
      case 'profile':
        return <ProfilePage navigateTo={this.navigateTo} />
      case 'login':
      default:
        return <LoginPage navigateTo={this.navigateTo} />
    }
  }

  render() {
    return (
      <>
        {this.selectForm(this.state.currentPage)}
      </>
    );
  }
}

export default withAuth(App);
