import React from "react";
import styles from "styles/Rating.css";

const RatingIcon = () => (<span>★</span>);

export class Rating extends React.Component {
    static propTypes = {
        percentage: React.PropTypes.number.isRequired
    }

    render() {
        const style = {width: `${(this.props.percentage || 0) * 100}%`};

        return (
            <div className={styles.sprite}>
                <div className={styles.top} style={style}>
                    <RatingIcon />
                    <RatingIcon />
                    <RatingIcon />
                    <RatingIcon />
                    <RatingIcon />
                </div>
                <div className={styles.bottom}>
                    <RatingIcon />
                    <RatingIcon />
                    <RatingIcon />
                    <RatingIcon />
                    <RatingIcon />
                </div>
            </div>
        );
    }
}

export default Rating;
