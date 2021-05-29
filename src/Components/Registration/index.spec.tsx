// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { Registration } from "@Components";
// #endregion Local Imports

describe("Registration", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<Registration />);
        expect(wrapper).toMatchSnapshot();
    });
});
