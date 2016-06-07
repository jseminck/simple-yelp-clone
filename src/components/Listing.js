import React from "react";
import classnames from "classnames";

import ListingItem from "components/ListingItem";
import styles from "styles/Listing.css";

export class Listing extends React.Component {
    static propTypes = {
        places: React.PropTypes.array.isRequired,
        onClick: React.PropTypes.func.isRequired
    }

    render() {
        return (
            <div className={classnames(styles.container)}>
                {this.props.places.map(place => {
                    return (
                        <ListingItem
                            place={place}
                            onClick={this.props.onClick}
                            key={place.id}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Listing