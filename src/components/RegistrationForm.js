import React, { Component } from 'react'
import './RegistrationForm.css';
import { Link } from 'react-router-dom'

class RegistrationForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        /*
        const userEmail = e.target.userEmail.value;
        const userName = e.target.userName.value;
        const userPassword = e.target.userPassword.value;
        */
        //this.props.navigateTo('map');
    }

    render() {
        return (
            <div className="login-form">
                <form className="login-form__form" onSubmit={this.handleSubmit}>
                    <h2 className="login-form__title">Регистрация</h2>
                    <div className="login-form__field">
                        <span className="login-form__field-name">
                            Email*
                        </span>
                        <input name="userEmail" type="text" className="login-form__field-input" placeholder="mail@mail.ru"/>
                    </div>
                    <div className="login-form__field">
                        <span className="login-form__field-name">
                            Как вас зовут*
                        </span>
                        <input name="userName" type="text" className="login-form__field-input" placeholder="Петр Александрович"/>
                    </div>
                    <div className="login-form__field">
                        <span className="login-form__field-name">
                            Придумайте пароль*
                        </span>
                        <input name="userPassword" type="text" className="login-form__field-input" placeholder="************"/>
                    </div>
                    <input type="submit" value="Зарегистрироваться" className="login-form__submit"/>
                </form>
                <div className="login-form__helper">
                    <span className="login-form__helper-text">Уже зарегистрированы?</span>
                    <Link className="login-form__helper-link" to="/login">Войти</Link>
                </div>
            </div>
        )
    }
}

export default RegistrationForm;