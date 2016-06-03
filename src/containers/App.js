import React from 'react';

import styles from './styles.module.css';
import 'font-awesome/css/font-awesome.css';

module.exports = class App extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <i className="fa fa-star fa-3x"></i>
                <h1>Environment: {__GAPI_KEY__}</h1>
            </div>
        );
    }
};