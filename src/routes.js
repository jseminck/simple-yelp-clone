import React from 'react'
import {browserHistory, Router, Route, Redirect} from 'react-router'

import makeMainRoutes from 'views/main/routes';

const main = makeMainRoutes();

export default function makeRoutes() {
    return (
        <Router>
            {main}
        </Router>
    );
};