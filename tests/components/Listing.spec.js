import React from "react";
import {expect} from "chai";
import {shallow} from "enzyme";

import Listing from "components/Listing";
import styles from "styles/Listing.css";

describe("<Listing />", () => {
    let wrapper;
    const places = [{name: "Chicago"}, {name: "San Francisco"}];

    beforeEach(() => {
        wrapper = shallow(<Listing places={places} />);
    });

    it("has an item for each place in the places prop", () => {
        expect(wrapper.find("Item").length).to.equal(places.length);
    });

    it("wraps the component in a listing css class", () => {
        expect(wrapper.find(`.${styles.container}`)).to.be.defined;
    });
});