import React, { Component } from 'react'
import './SideLogo.css';
import PropTypes from 'prop-types'

class SideLogo extends Component {
    static propTypes = {
        navigateTo: PropTypes.func.isRequired
    }
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