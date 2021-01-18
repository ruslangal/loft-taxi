import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export const RedirectRoute = connect(state => ({
    isLoggedIn: state.auth.isLoggedIn 
}))(
    ({component: Component, isLoggedIn, ...rest}) => (
        <Route
            {...rest}
            render={props => isLoggedIn ?
                (<Redirect to="/profile" />) :
                (<Component {...props} />) }
        />
    )
)