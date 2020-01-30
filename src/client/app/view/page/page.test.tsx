/* eslint-disable no-undef */
import React from "react";
import { shallow } from "../../../../enzyme";

import Page from "./Page";

describe("Page tests", () => {
  it("renders", () => {
    const wrapper = shallow(<Page />);
    expect(wrapper).toBeDefined();
  });
});
