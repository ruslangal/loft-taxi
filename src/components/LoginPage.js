import React, { Component } from 'react'
import './LoginPage.css';
import SideLogo from './SideLogo'
import FormPage from './FormPage'
import LoginForm from './LoginForm'

class LoginPage extends Component {
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