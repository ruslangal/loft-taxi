import React, { Component, useState } from 'react'

export const { Consumer, Provider } = React.createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(0);

    const login = (email, password) => {
        if (email === 'test@test.com' && password === '123123') {
            setIsLoggedIn(1);
        }
    }

    const logout = () => {
        setIsLoggedIn(0);
    }

    return (
        <Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </Provider>
    )
};

export const withAuth = (TargetComponent) => {
    return class extends Component {
        render() {
            return (
                <Consumer>
                    {
                        (value) => {
                            return (
                                <TargetComponent {...value} {...this.props} />
                            )
                        }
                    }
                </Consumer>
            )
        }
    }
}