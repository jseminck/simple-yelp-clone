import React from "react";
import {Route} from "react-router";
import Container from "./Container";
import Map from "views/MapComponent";
import Detail from "views/Detail";

export const makeMainRoutes = () => {
    return (
        <Route path="" component={Container}>
            <Route path="map" component={Map} />
            <Route path="detail/:placeId" component={Detail} />
        </Route>
    );
};

export default makeMainRoutes;
