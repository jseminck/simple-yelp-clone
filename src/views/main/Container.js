import React from "react";
import Header from "components/Header";
import Map, {GoogleApiWrapper} from "google-maps-react";
import {searchNearby} from "utils/google/apiHelpers";

import styles from "styles/Main.css";

export class Container extends React.Component {
    static propTypes = {
        google: React.PropTypes.object
    };

    constructor(props) {
        super(props);

        this.state = {
            places: [],
            pagination: null
        };
    }

    render() {
        return (
            <div>
                Hello from the container
                <Map
                    google={this.props.google}
                    onReady={::this.onReady}
                    className={styles.wrapper}
                    visible={false}
                >
                    <Header />
                    <div className={styles.content}>
                        {this.state.places.map(place => {
                            return (<div key={place.id}>{place.name}</div>);
                        })}
                    </div>
                </Map>
            </div>
        );
    }

    onReady(mapProps, map) {
        const opts = {
            location: map.center,
            radius: "500",
            types: ["cafe"]
        };

        searchNearby(this.props.google, map, opts)
            .then((results, pagination) => {
                this.setState({
                    places: results,
                    pagination
                });
            })
            .catch((status, result) => {
                console.log("status and result", status, result); // eslint-disable-line no-console
            });
    }
}

export default GoogleApiWrapper({apiKey: __GAPI_KEY__})(Container); // eslint-disable-line no-undef
