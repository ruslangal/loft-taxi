import React, { Component } from 'react'
import './LoginForm.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { auth } from '../store/actions'
import { Link } from 'react-router-dom'

export class LoginFormPresenter extends Component {
    static propTypes = {
        auth: PropTypes.func.isRequired
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const userEmail = e.target.userEmail ? e.target.userEmail.value : null;
        const userPassword = e.target.userPassword ? e.target.userPassword.value : null;

        this.props.auth(userEmail, userPassword);
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
                        <Link className="login-form__forgotten" to="/registration">
                            Забыли пароль?
                        </Link>
                    </div>
                    <input data-testid="login-form__submit" type="submit" value="Войти" className="login-form__submit"/>
                </form>
                <div className="login-form__helper">
                    <span className="login-form__helper-text">Новый пользователь?</span>
                    <Link data-testid="login-form__helper-link" className="login-form__helper-link" to="/registration">Регистрация</Link>
                </div>
            </div>
        )
    }
}

export const LoginForm = connect(
    null,
    { auth }
)(LoginFormPresenter);