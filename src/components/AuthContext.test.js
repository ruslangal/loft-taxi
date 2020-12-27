import React from 'react'
import { AuthProvider, withAuth, Consumer } from './AuthContext';
import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils'

describe('AuthContext', () => {
    it('login sets isLoggedIn to 1', () => {
        let isLoggedIn;
        let login;
        render(
            <AuthProvider>
                <Consumer>
                    {
                        (value) => {
                            isLoggedIn = value.isLoggedIn;
                            login = value.login;

                            return null;
                        }
                    }
                </Consumer>
            </AuthProvider>
        )

        expect(isLoggedIn).toBe(0);
        act(() => {
            login('test@test.com', '123123');
        });
        expect(isLoggedIn).toBe(1);
    });

    it('logout sets isLoggedIn to 0', () => {
        let isLoggedIn;
        let login;
        let logout;
        render(
            <AuthProvider>
                <Consumer>
                    {
                        (value) => {
                            isLoggedIn = value.isLoggedIn;
                            login = value.login;
                            logout = value.logout;

                            return null;
                        }
                    }
                </Consumer>
            </AuthProvider>
        )

        act(() => {
            login('test@test.com', '123123');
        });
        expect(isLoggedIn).toBe(1);
        act(() => {
            logout();
        });
        expect(isLoggedIn).toBe(0);
    });
});
