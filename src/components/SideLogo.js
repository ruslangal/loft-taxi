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
            <div data-testid="side-logo" className="side-logo">
                <a data-testid="side-logo__link" className="side-logo__link" href="#" onClick={this.handleClick}/>
            </div>
        )
    }
}

export default SideLogo;