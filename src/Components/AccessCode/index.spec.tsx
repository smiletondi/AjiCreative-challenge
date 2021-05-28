// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { AccessCode } from "@Components";
// #endregion Local Imports

describe("AccessCode", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<AccessCode />);
        expect(wrapper).toMatchSnapshot();
    });
});
