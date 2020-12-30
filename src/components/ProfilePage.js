import React, { Component } from 'react'
import './ProfilePage.css';
import Navigation from './Navigation'
import ProfileFormPage from './ProfileFormPage'
import PropTypes from 'prop-types'

class ProfilePage extends Component {
    static propTypes = {
        navigateTo: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="profile-page">
                <Navigation {...this.props} currentPage="profile"/>
                <ProfileFormPage />
            </div>
        )
    }
}

export default ProfilePage;