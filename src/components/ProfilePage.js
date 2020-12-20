import React, { Component } from 'react'
import './ProfilePage.css';
import Navigation from './Navigation'
import ProfileFormPage from './ProfileFormPage'

class ProfilePage extends Component {
    render() {
        return (
            <div className="profile-page">
                <Navigation {...this.props} currentPage="profile"/>
                <ProfileFormPage {...this.props}/>
            </div>
        )
    }
}

export default ProfilePage;