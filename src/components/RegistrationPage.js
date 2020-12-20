import React, { Component } from 'react'
import './RegistrationPage.css';
import SideLogo from './SideLogo'
import FormPage from './FormPage'
import RegistrationForm from './RegistrationForm'

class RegistrationPage extends Component {
    render() {
        return (
            <div className="registration-page">
                <SideLogo {...this.props}/>
                <FormPage>
                    <RegistrationForm {...this.props}/>
                </FormPage>
            </div>
        )
    }
}

export default RegistrationPage;