import React, { Component } from 'react'
import './RoutePage.css';
import mapboxgl from 'mapbox-gl'

class RoutePage extends Component {
    map = null;
    mapContainer = React.createRef();

    componentDidMount() {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            zoom: 14,
            center: [10.39170933059438, 63.4309997568285],
            controls: false,
        });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        return (
            <div className="route-page">
                <div
                    data-testid="map"
                    className="route-page__map"
                    ref={this.mapContainer}
                />
            </div>
        )
    }
}

export default RoutePage;