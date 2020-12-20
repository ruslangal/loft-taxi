import React, { Component } from 'react'
import './FormPage.css';

class FormPage extends Component {
    render() {
        return (
            <div className="form-page">
                {this.props.children}
            </div>
        )
    }
}

export default FormPage;