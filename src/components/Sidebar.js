import React from "react";
import Listing from "components/Listing";
import styles from "styles/Sidebar.css";

export class Sidebar extends React.Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        places: React.PropTypes.array.isRequired
    }

    render() {
        return (
            <div className={styles.sidebar}>
                <div className={styles.heading}>
                    <h1>{this.props.title}</h1>
                </div>
                <Listing places={this.props.places} />
            </div>
        );
    }
}

export default Sidebar;
