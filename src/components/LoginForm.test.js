import React from 'react'
import { LoginFormPresenter } from './LoginForm';
import { render, fireEvent, screen } from '@testing-library/react';

describe('LoginFormPresenter', function() {
    it('shows component with correct structure', function() {
        const MockLoginFormPresenter = () => {
            return (
                <LoginFormPresenter
                    navigateTo={(page) => {}}
                    login={(p1, p2) => {}}
                />
            );
        };

        render(<MockLoginFormPresenter />);
        
        expect(screen.getByTestId('login-form')).toMatchSnapshot();
    });

    it('calls login and navigatoTo functions on submit', function() {
        const navigateTo = jest.fn();
        const login = jest.fn();
        const MockLoginFormPresenter = () => <LoginFormPresenter
            navigateTo={navigateTo}
            login={login}
        />;

        render(<MockLoginFormPresenter />);

        fireEvent.click(screen.getByTestId('login-form__submit'));

        expect(login).toHaveBeenCalledTimes(1);
        expect(navigateTo).toHaveBeenCalledTimes(1);
    });

    it('calls navigatoTo function on registration link', function() {
        const navigateTo = jest.fn();
        const MockLoginFormPresenter = () => <LoginFormPresenter
            navigateTo={navigateTo}
            login={() => {}}
        />;
        
        render(<MockLoginFormPresenter />);

        fireEvent.click(screen.getByTestId('login-form__helper-link'));

        expect(navigateTo).toHaveBeenCalledTimes(1);
    });
});
