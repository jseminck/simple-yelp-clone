import React from "react";
import {expect} from "chai";
import {shallow} from "enzyme";

import App from "containers/App";
import styles from "containers/styles.module.css";

describe("<App />", function() {
    let wrapper;

    beforeEach(() => wrapper = shallow(<App />));

    it("has a single wrapper element", () => {
        expect(wrapper.find(`.${styles.wrapper}`)).to.have.length(1);
    });

    it("has a Router component", () => {
        expect(wrapper.find("Router")).to.have.length(1);
    });
});
