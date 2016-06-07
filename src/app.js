import React from "react";
import ReactDOM from "react-dom";
import {browserHistory} from "react-router";

import App from "containers/App";
import makeRoutes from "./routes";

import "font-awesome/css/font-awesome.css";

const routes = makeRoutes();

const mountNode = document.querySelector("#root");
ReactDOM.render(
    <App
        routes={routes}
        history={browserHistory}
    />, mountNode
);
