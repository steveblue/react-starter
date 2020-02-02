/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";

import Home from "./Home";

describe("Home tests", () => {
  it("renders", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toBeDefined();
  });
});
