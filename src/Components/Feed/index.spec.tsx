// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { Feed } from "@Components";
// #endregion Local Imports

describe("Feed", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<Feed />);
        expect(wrapper).toMatchSnapshot();
    });
});
