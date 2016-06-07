import React from "react";
import classnames from "classnames";
import Map, { Marker } from "google-maps-react";

import styles from "styles/Map.css";

export class MapComponent extends React.Component {
    static propTypes = {
        google: React.PropTypes.object.isRequired,
        places: React.PropTypes.array.isRequired
    }

    render() {
        return (
            <Map
                google={this.props.google}
                className={styles.map}
            >
                {this.renderMarkers()}
            </Map>
        );
    }

    renderMarkers() {
        if (!this.props.places) {
            return null;
        }

        return this.props.places.map(place => {
            return (
                <Marker
                    key={place.id}
                    name={place.id}
                    place={place}
                    position={place.geometry.location}
                />
            );
        });
    }
}

export default MapComponent;
