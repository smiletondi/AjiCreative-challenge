// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { Login } from "@Components";
// #endregion Local Imports

describe("Login", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<Login />);
        expect(wrapper).toMatchSnapshot();
    });
});
