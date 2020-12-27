import React, { Component } from 'react'
import './RoutePage.css';
import mapboxgl from 'mapbox-gl'

const mapboxToken = "pk.eyJ1IjoicmVnZW50bSIsImEiOiJja2o2emIzZGY2Y3lqMnFsYnBlYmx3MGJmIn0.NGD8dttjQ6G1OBU4rEVpVA";

class RoutePage extends Component {
    map = null;
    mapContainer = React.createRef();

    componentDidMount() {
        mapboxgl.accessToken = mapboxToken;

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