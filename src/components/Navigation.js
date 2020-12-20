import React, { Component } from 'react'
import './Navigation.css';

class Navigation extends Component {
    handleLogoClick = (e) => {
        e.preventDefault();

        this.props.navigateTo('login');
    }

    handleMapClick = (e) => {
        e.preventDefault();

        if (this.props.currentPage === "map") return;

        this.props.navigateTo('map');
    }

    handleProfileClick = (e) => {
        e.preventDefault();

        if (this.props.currentPage === "profile") return;

        this.props.navigateTo('profile');
    }

    handleLoginClick = (e) => {
        e.preventDefault();

        this.props.navigateTo('login');
    }

    
    render() {
        const linkClassName = "navigation__link"
        const mapClassName = linkClassName + (this.props.currentPage === "map" ? " navigation__link_active" : ""); 
        const profileClassName = linkClassName + (this.props.currentPage === "profile" ? " navigation__link_active" : "");

        return (
            <div className="navigation">
                <a className="navigation__logo" href="#" onClick={this.handleClick}/>
                <span className="navigation__buffer"></span>
                <a className={mapClassName} href="#" onClick={this.handleMapClick}>Карта</a>
                <a className={profileClassName} href="#" onClick={this.handleProfileClick}>Профиль</a>
                <a className={linkClassName} href="#" onClick={this.handleLoginClick}>Выйти</a>
            </div>
        )
    }
}

export default Navigation;