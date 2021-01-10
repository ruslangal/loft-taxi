import React, { Component } from 'react'
import './ProfilePage.css';
import { Navigation } from './Navigation'
import ProfileFormPage from './ProfileFormPage'
import PropTypes from 'prop-types'

class ProfilePage extends Component {
    render() {
        return (
            <div className="profile-page">
                <Navigation currentPage="profile"/>
                <ProfileFormPage />
            </div>
        )
    }
}

export default ProfilePage;