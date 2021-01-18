import React, { Component } from 'react'
import './Navigation.css';
import { connect } from 'react-redux'
import { logOut } from '../store/actions'
import { Link } from 'react-router-dom'

class NavigationPresenter extends Component {
    handleLogoutClick = (e) => {
        e.preventDefault();

        this.props.logOut();
    }

    
    render() {
        const linkClassName = "navigation__link"
        const mapClassName = linkClassName + (this.props.currentPage === "map" ? " navigation__link_active" : ""); 
        const profileClassName = linkClassName + (this.props.currentPage === "profile" ? " navigation__link_active" : "");

        return (
            <div className="navigation">
                <Link className="navigation__logo" to="/"/>
                <span className="navigation__buffer"></span>
                <Link className={mapClassName} to="/map">Карта</Link>
                <Link className={profileClassName} to="/profile">Профиль</Link>
                <a className={linkClassName} href="#" onClick={this.handleLogoutClick}>Выйти</a>
            </div>
        )
    }
}

export const Navigation = connect(
    null,
    { logOut }
)(NavigationPresenter);
