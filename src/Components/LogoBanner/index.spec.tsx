// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { LogoBanner } from "@Components";
// #endregion Local Imports

describe("LogoBanner", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<LogoBanner />);
        expect(wrapper).toMatchSnapshot();
    });
});
