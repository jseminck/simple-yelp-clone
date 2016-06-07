import React from "react";
import {expect} from "chai";
import {shallow} from "enzyme";

import ListingItem from "components/ListingItem";
import styles from "./ListingItem.css";

describe("<ListingItem />", () => {
    let wrapper;
    const place = {name: "San Francisco"};

    beforeEach(() => {
        wrapper = shallow(<ListingItem place={place} />);
    });

    it("contains a title component with yelp", () => {
        expect(wrapper.find("h1").first().text()).to.equal(place.name);
    });

    it("wraps the component with an .item css class", () => {
        expect(wrapper.find(`.${styles.item}`)).to.have.length(1);
    });

    it("contains a rating", () => {
        expect(wrapper.find("Rating")).to.be.defined;
    });
});
