import React, { Component } from 'react'
import './MapPage.css';
import Navigation from './Navigation'
import RoutePage from './RoutePage'

class MapPage extends Component {
    render() {
        return (
            <div className="map-page">
                <Navigation {...this.props} currentPage="map"/>
                <RoutePage />
            </div>
        )
    }
}

export default MapPage;