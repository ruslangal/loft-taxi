import React, { Component } from 'react'
import './RegistrationPage.css';
import SideLogo from './SideLogo'
import FormPage from './FormPage'
import RegistrationForm from './RegistrationForm'
import PropTypes from 'prop-types'

class RegistrationPage extends Component {
    static propTypes = {
        navigateTo: PropTypes.func.isRequired
    }

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