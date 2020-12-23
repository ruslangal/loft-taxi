import React, { Component } from 'react'
import './LoginForm.css';

class LoginForm extends Component {
    handleSubmit = (e) => {
        /*
        const userEmail = e.target.userEmail.value;
        const userPassword = e.target.userPassword.value;
        */
        this.props.navigateTo('map');
    }

    handleRegistrationClick = (e) => {
        e.preventDefault();

        this.props.navigateTo('registration');
    }

    render() {
        return (
            <div className="login-form">
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
                    <input type="submit" value="Войти" className="login-form__submit"/>
                </form>
                <div className="login-form__helper">
                    <span className="login-form__helper-text">Новый пользователь?</span>
                    <a className="login-form__helper-link" href="#" onClick={this.handleRegistrationClick}>Регистрация</a>
                </div>
            </div>
        )
    }
}

export default LoginForm;