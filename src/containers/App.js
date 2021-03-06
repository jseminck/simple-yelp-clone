import React from "react";
import {Router} from "react-router";

import "styles/app.css";
import "font-awesome/css/font-awesome.css";

module.exports = class App extends React.Component {
    static propTypes = {
        routes: React.PropTypes.object.isRequired,
        history: React.PropTypes.object.isRequired
    }

    get content() {
        return (
            <Router
                routes={this.props.routes}
                history={this.props.history}
            />
        );
    }

    render() {
        return (
            <div>
                {this.content}
            </div>
        );
    }
};
