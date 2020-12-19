import React, { Component } from 'react'
import './SideLogo.css';

class SideLogo extends Component {
    handleClick = (e) => {
        e.preventDefault();

        this.props.navigateTo('login');
    }

    render() {
        return (
            <div className="side-logo">
                <a className="side-logo__link" href="#" onClick={this.handleClick}/>
            </div>
        )
    }
}

export default SideLogo;