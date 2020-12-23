import React, { Component } from 'react'

import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import MapPage from './MapPage';
import ProfilePage from './ProfilePage';

class App extends Component {
  state = { currentPage: 'login' }

  navigateTo = (page) => {
    // alert(page);
    this.setState({ currentPage: page });
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

export default App;
