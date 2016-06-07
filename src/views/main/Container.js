import React from "react";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Map, {GoogleApiWrapper} from "google-maps-react";
import {searchNearby} from "utils/google/apiHelpers";

import styles from "styles/Main.css";

export class Container extends React.Component {
    static propTypes = {
        google: React.PropTypes.object,
        loaded: React.PropTypes.bool,
        children: React.PropTypes.any
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
                <Map
                    google={this.props.google}
                    onReady={::this.onReady}
                    className={styles.wrapper}
                    visible={false}
                >
                    <Header />
                    <Sidebar
                        title="Restaurants"
                        places={this.state.places}
                    />
                    <div className={styles.content}>
                        {/* Setting children routes to be rendered*/}
                        {this.getChildren()}
                    </div>
                </Map>
            </div>
        );
    }

    getChildren() {
        if (!this.props.children) {
            return null;
        }
        // We have children in the Container component
        return React.cloneElement(
            this.props.children, {
                google: this.props.google,
                places: this.state.places,
                loaded: this.props.loaded,
                onMarkerClick: ::this.onMarkerClick
            }
        );
    }

    onMarkerClick(item) {
        this.context.router.push(`/map/detail/${item.place.place_id}`);
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

Container.contextTypes = {
    router: React.PropTypes.object
};

export default GoogleApiWrapper({apiKey: __GAPI_KEY__})(Container); // eslint-disable-line no-undef
