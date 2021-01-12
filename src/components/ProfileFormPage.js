import React, { Component } from 'react'
import './ProfileFormPage.css';
import { ProfileForm } from './ProfileForm'

class ProfileFormPage extends Component {
    render() {
        return (
            <div className="profile-form-page">
                <ProfileForm />
            </div>
        )
    }
}

export default ProfileFormPage;
