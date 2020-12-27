import React, { Component } from 'react'
import './LoginPage.css';
import SideLogo from './SideLogo'
import FormPage from './FormPage'
import LoginForm from './LoginForm'
import PropTypes from 'prop-types'

class LoginPage extends Component {
    static propTypes = {
        navigateTo: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="login-page">
                <SideLogo {...this.props}/>
                <FormPage>
                    <LoginForm {...this.props}/>
                </FormPage>
            </div>
        )
    }
}

export default LoginPage;