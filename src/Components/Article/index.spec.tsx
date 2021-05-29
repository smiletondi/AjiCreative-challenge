// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { Article } from "@Components";
// #endregion Local Imports

describe("Article", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<Article />);
        expect(wrapper).toMatchSnapshot();
    });
});
