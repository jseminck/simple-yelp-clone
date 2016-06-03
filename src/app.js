import React from 'react'
import ReactDOM from 'react-dom'

import styles from './styles.module.css';
import 'font-awesome/css/font-awesome.css';

const App = React.createClass({
    render: function() {
        return (
            <div className={styles.wrapper}>
                <i className="fa fa-star fa-3x"></i>
                <h1>Environment: {__GAPI_KEY__}</h1>
            </div>
        );
    }
});

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);