import React from "react";
import classnames from "classnames";

// import Rating from "components/Rating/Rating";
import styles from "styles/Listing.css";

export class ListingItem extends React.Component {
    static propTypes = {
        place: React.PropTypes.object.isRequired
    }

    render() {
        return (
            <div className={styles.item}>
                <h1 className={classnames(styles.title)}>{this.props.place.name}</h1>
                <span>
                    {this.props.place.rating / 5}
                </span>
            </div>
        );
    }
}

export default ListingItem;
