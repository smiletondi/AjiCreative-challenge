// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { Password } from "@Components";
// #endregion Local Imports

describe("Password", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<Password />);
        expect(wrapper).toMatchSnapshot();
    });
});
