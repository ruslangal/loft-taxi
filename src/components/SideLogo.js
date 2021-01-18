import React, { Component } from 'react'
import './SideLogo.css';
import { Link } from 'react-router-dom'

class SideLogo extends Component {
    render() {
        return (
            <div data-testid="side-logo" className="side-logo">
                <Link data-testid="side-logo__link" className="side-logo__link" to="/login"/>
            </div>
        )
    }
}

export default SideLogo;