import React, { Component } from 'react'
import './LoginForm.css';
import PropTypes from 'prop-types';
import { withAuth } from './AuthContext'

export class LoginFormPresenter extends Component {
    static propTypes = {
        navigateTo: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const userEmail = e.target.userEmail ? e.target.userEmail.value : null;
        const userPassword = e.target.userPassword ? e.target.userPassword.value : null;

        this.props.login(userEmail, userPassword);

        this.props.navigateTo('map');
    }

    handleRegistrationClick = (e) => {
        e.preventDefault();

        this.props.navigateTo('registration');
    }

    render() {
        return (
            <div data-testid="login-form" className="login-form">
                <form className="login-form__form" onSubmit={this.handleSubmit}>
                    <h2 className="login-form__title">Войти</h2>
                    <div className="login-form__field">
                        <span className="login-form__field-name">
                            Email
                        </span>
                        <input name="userEmail" type="text" className="login-form__field-input" placeholder="mail@mail.ru"/>
                    </div>
                    <div className="login-form__field">
                        <span className="login-form__field-name">
                            Пароль
                        </span>
                        <input name="userPassword" type="text" className="login-form__field-input" placeholder="************"/>
                        <a className="login-form__forgotten" href="#" onClick={this.handleRegistrationClick}>
                            Забыли пароль?
                        </a>
                    </div>
                    <input data-testid="login-form__submit" type="submit" value="Войти" className="login-form__submit"/>
                </form>
                <div className="login-form__helper">
                    <span className="login-form__helper-text">Новый пользователь?</span>
                    <a data-testid="login-form__helper-link" className="login-form__helper-link" href="#" onClick={this.handleRegistrationClick}>Регистрация</a>
                </div>
            </div>
        )
    }
}

export const LoginForm = withAuth(LoginFormPresenter);